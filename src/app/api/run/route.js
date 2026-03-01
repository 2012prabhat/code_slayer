import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Problem from "@/models/Problem";
import Submission from "@/models/Submission";
import User from "@/models/User";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import vm from "vm";

export async function POST(request) {
  try {
    const { code, language, slug, isSubmit } = await request.json();

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

    if (language !== "javascript") {
      return NextResponse.json({
        status: "Runtime Error",
        message: `Currently, only JavaScript code compilation is supported in this environment segment. You selected ${language}.`,
        success: false
      });
    }

    // 4. DETERMINE VERDICT USING IN-BUILT NODE VM SANDBOX TO BYPASS PISTON WHITELIST
    let verdict = {
      status: "Accepted",
      message: "All test cases passed!",
      success: true,
      runTime: "N/A"
    };

    const startTime = Date.now();
    try {
      // Intialize safe context object bounds
      const sandbox = { Math, Number, String, Array, Object, Boolean };
      vm.createContext(sandbox);

      // Attempt parsing and loading user's function declarations into memory
      vm.runInContext(code, sandbox, { timeout: 3000 });

      // Let code iterate and apply test logic to the active handler dynamically!
      for (let i = 0; i < problem.testCases.length; i++) {
        const testCase = problem.testCases[i];

        const runtimeTester = `${problem.handlerFunction}.apply(null, ${JSON.stringify(testCase.input)})`;

        // Execute the handler against specific test case mappings
        const actualRaw = vm.runInContext(runtimeTester, sandbox, { timeout: 3000 });

        if (JSON.stringify(actualRaw) !== JSON.stringify(testCase.output)) {
          verdict = {
            status: "Wrong Answer",
            message: `Test Case ${i + 1} Failed`,
            input: testCase.input,
            expected: testCase.output,
            actual: actualRaw === undefined ? "undefined" : actualRaw,
            success: false
          };
          break;
        }
      }
    } catch (err) {
      verdict = {
        status: "Runtime Error",
        message: err.message || "Unknown Syntax or Runtime error exception.",
        success: false
      };
    }
    const executionTime = Date.now() - startTime;
    if (verdict.success) verdict.runTime = `${executionTime}ms`;

    // 5. SAVE SUBMISSION TO DB ONLY IF isSubmit == true
    if (userId && isSubmit) {
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