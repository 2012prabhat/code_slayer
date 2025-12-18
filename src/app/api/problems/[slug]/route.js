import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Problem from "@/models/Problem";

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  try {
    // --- THE FIX IS HERE ---
    // In Next.js 15, params is a Promise, so we must await it first.
    const { slug } = await params;

    await connectDB();

    const problem = await Problem.findOne({ slug }).select("-__v");

    if (!problem) {
      return NextResponse.json(
        { error: "Problem not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: "Problem fetched successfully",
      problem
    }, { status: 200 });

  } catch (error) {
    console.error("Get Single Problem Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}