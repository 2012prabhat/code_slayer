import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";

// 1. Zod Validation Schema
const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

export async function POST(request) {
  try {
    const body = await request.json();

    // 2. Validate Input
    const validation = loginSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { 
          error: "Validation failed", 
          details: validation.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }

    const { email, password } = validation.data;

    await connectDB();

    // 3. Find User
    const user = await User.findOne({ email });

    // GENERIC ERROR: Use the same error for "User not found" and "Wrong Password"
    // This prevents hackers from guessing which emails are registered.
    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 4. Check Verification Status (CRITICAL)
    // If they registered via Email but never entered the OTP, stop them here.
    if (!user.isVerified) {
      return NextResponse.json(
        { 
          error: "Email not verified. Please verify your email.",
          notVerified: true // Frontend can use this flag to redirect to OTP page
        }, 
        { status: 403 } // 403 Forbidden
      );
    }

    // 5. Verify Password
    // Note: If this is a Google user, they have a random password. 
    // bcrypt.compare will simply return false here, which is correct behavior.
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password" },
        { status: 401 }
      );
    }

    // 6. Generate JWT Token
    // This is the "Session Key" they will use to access protected routes.
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // 7. Return Response
    return NextResponse.json({
      message: "Login successful",
      success: true,
      token, // Frontend stores this (usually in localStorage)
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isVerified: user.isVerified,
        provider: user.provider
      }
    }, { status: 200 });

  } catch (error) {
    console.error("Login Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}