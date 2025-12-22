import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Submission from "@/models/Submission";
import Problem from "@/models/Problem"; // Needed for populating titles
import jwt from "jsonwebtoken";
import { headers } from "next/headers";

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    // 1. AUTH CHECK
    const headersList = await headers();
    const token = headersList.get("authorization")?.split(" ")[1];
    
    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let userId;
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      userId = decoded.id;
    } catch (e) {
      return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
    }

    await connectDB();

    // 2. PARSE QUERY PARAMS
    // URL Example: /api/submissions?slug=two-sum
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get("slug");
    const limit = parseInt(searchParams.get("limit")) || 20;

    // 3. BUILD QUERY
    // Start by finding submissions for THIS user
    const query = { userId };

    // If a slug is provided, filter by that specific problem
    if (slug) {
      const problem = await Problem.findOne({ slug });
      if (problem) {
        query.problemId = problem._id;
      } else {
        // If problem doesn't exist, return empty list immediately
        return NextResponse.json({ submissions: [] });
      }
    }

    // 4. FETCH DATA
    const submissions = await Submission.find(query)
      .sort({ createdAt: -1 }) // Newest first
      .limit(limit)
      // "populate" replaces the problemId ID with the actual Title/Slug
      // so the frontend can display "Two Sum" instead of "64a9f..."
      .populate("problemId", "title slug difficulty");

    return NextResponse.json({
      success: true,
      count: submissions.length,
      submissions
    });

  } catch (error) {
    console.error("Submission History Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}