import { NextResponse } from "next/server";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";
import connectDB from "@/lib/db";
import User from "@/models/User";

// Force dynamic because this depends on the specific request headers
export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    // 1. Get Token from Header
    const headersList = await headers();
    const authHeader = headersList.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];

    // 2. Verify Token
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      return NextResponse.json({ error: "Invalid Token" }, { status: 401 });
    }

    await connectDB();

    // 3. Fetch Latest User Data
    // We select specific fields. IMPORTANT: Do not return the password.
    const user = await User.findById(decoded.id).select("-password -__v");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // 4. Return User Info (Including Admin Status)
    return NextResponse.json({
      success: true,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin, // <--- Frontend checks this
        isVerified: user.isVerified,
        avatar: user.avatar || "" // If you have avatars later
      }
    }, { status: 200 });

  } catch (error) {
    console.error("Get Me Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}