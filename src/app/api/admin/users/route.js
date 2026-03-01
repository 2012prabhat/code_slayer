import { NextResponse } from "next/server";
import connectDB from "@/lib/db";
import User from "@/models/User";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

// Middleware utility function to guard admin access
async function verifyAdmin() {
    const headersList = await headers();
    const authHeader = headersList.get("authorization");

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return { error: "Unauthorized", status: 401 };
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id);

        if (!user || (!user.isAdmin && user.email !== "prabhat2203@gmail.com")) {
            return { error: "Forbidden: Admins only", status: 403 };
        }

        return { user };
    } catch (err) {
        return { error: "Invalid Token", status: 401 };
    }
}

// Fetch all users
export async function GET() {
    try {
        await connectDB();
        const authResult = await verifyAdmin();
        if (authResult.error) {
            return NextResponse.json({ error: authResult.error }, { status: authResult.status });
        }

        const users = await User.find({}).select("-password").sort({ createdAt: -1 });

        return NextResponse.json({
            success: true,
            users
        }, { status: 200 });

    } catch (error) {
        console.error("Fetch Users Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// Modify user role (e.g. mark as admin)
export async function PATCH(request) {
    try {
        await connectDB();
        const authResult = await verifyAdmin();
        if (authResult.error) {
            return NextResponse.json({ error: authResult.error }, { status: authResult.status });
        }

        const body = await request.json();
        const { userId, isAdmin } = body;

        if (!userId || isAdmin === undefined) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Do not allow the user to modify themselves so easily if they are the only admin
        if (userId.toString() === authResult.user._id.toString()) {
            return NextResponse.json({ error: "Cannot modify your own user role." }, { status: 400 });
        }

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { isAdmin },
            { new: true }
        ).select("-password");

        if (!updatedUser) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({
            success: true,
            user: updatedUser,
            message: `User format successfully switched to ${isAdmin ? 'Admin' : 'Regular'}`
        }, { status: 200 });

    } catch (error) {
        console.error("Modify Role Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
