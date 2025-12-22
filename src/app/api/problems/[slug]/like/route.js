import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import Problem from "@/models/Problem";
import User from "@/models/User";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

export async function POST(request, { params }) {
  try {
    const { slug } = await params;
    
    // 1. Auth Check
    const headersList = await headers();
    const token = headersList.get("authorization")?.split(" ")[1];
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await connectDB();

    // 2. Find Problem
    const problem = await Problem.findOne({ slug });
    if (!problem) return NextResponse.json({ error: "Problem not found" }, { status: 404 });

    // 3. Find User
    const user = await User.findById(decoded.id);


    // --- FIX START: Handle Old Users ---
    // If the array doesn't exist, create an empty one.
    if (!user.likedProblems) {
      user.likedProblems = [];
    }
    // 4. Toggle Logic
    const isLiked = user.likedProblems.includes(problem._id);

    if (isLiked) {
      // UNLIKE: Remove from array
      user.likedProblems.pull(problem._id);
    } else {
      // LIKE: Add to array
      user.likedProblems.push(problem._id);
    }

    await user.save();

    return NextResponse.json({
      success: true,
      liked: !isLiked, // Return new status
      message: isLiked ? "Problem unliked" : "Problem liked"
    });

  } catch (error) {
    console.error("Like Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}