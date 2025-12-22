import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Problem from "@/models/Problem";
import Submission from "@/models/Submission";
import User from "@/models/User";
import axios from "axios";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request) {
  try {
    const { code, language, slug } = await request.json();

    // 1. GET USER ID (for saving history)
    const headersList = await headers();
    const token = headersList.get("authorization")?.split(" ")[1];
    let userId = null;

    if (token) {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        userId = decoded.id;
      } catch (e) {
        // Token invalid? We continue as "Guest" (userId = null)
      }
    }

    await connectDB();
    const problem = await Problem.findOne({ slug });

    if (!problem) {
      return NextResponse.json({ error: "Problem not found" }, { status: 404 });
    }

    // 2. CONSTRUCT DRIVER CODE
    const driverCode = `
      ${code}
      const testCases = ${JSON.stringify(problem.testCases)};
      try {
        testCases.forEach((test) => {
          const result = ${problem.handlerFunction}.apply(null, test.input);
          console.log(JSON.stringify(result));
        });
      } catch (error) {
        console.error(error.message);
      }
    `;

    // 3. EXECUTE ON PISTON
    const response = await axios.post("https://emkc.org/api/v2/piston/execute", {
      language: "javascript",
      version: "18.15.0",
      files: [{ content: driverCode }],
    });

    const { run } = response.data;

    // 4. DETERMINE VERDICT (Create the "verdict" object)
    let verdict = {
      status: "Accepted",
      message: "All test cases passed!",
      success: true,
      runTime: "N/A" // Piston doesn't give function-only time easily
    };

    // A) Check Runtime/Compile Errors
    if (run.stderr) {
      verdict = {
        status: "Runtime Error",
        message: run.stderr,
        success: false
      };
    } else {
      // B) Check Logic (Compare Outputs)
      const outputs = run.stdout.split("\n").filter(line => line.trim() !== "");

      for (let i = 0; i < problem.testCases.length; i++) {
        const expected = JSON.stringify(problem.testCases[i].output);
        const actual = outputs[i];

        if (actual !== expected) {
          verdict = {
            status: "Wrong Answer",
            message: `Test Case ${i + 1} Failed`,
            input: problem.testCases[i].input,
            expected: problem.testCases[i].output,
            actual: actual ? JSON.parse(actual) : undefined,
            success: false
          };
          break; // Stop checking after first failure
        }
      }
    }

    // 5. SAVE SUBMISSION TO DB
    if (userId) {
      await Submission.create({
        userId,
        problemId: problem._id,
        code,
        language,
        status: verdict.status
      });

      // If Accepted, mark problem as solved for User
      if (verdict.status === "Accepted") {
        await User.findByIdAndUpdate(userId, {
          $addToSet: { solvedProblems: problem._id }
        });
      }
    }

    // 6. RETURN RESULT
    return NextResponse.json(verdict);

  } catch (error) {
    console.error("Run Error:", error);
    return NextResponse.json(
      { error: "Internal Execution Error" },
      { status: 500 }
    );
  }
}