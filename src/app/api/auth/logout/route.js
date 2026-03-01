import { NextResponse } from "next/server";

export async function POST(request) {
    const response = NextResponse.json({ success: true, message: "Logged out" }, { status: 200 });

    // Clear the token cookie
    response.cookies.set("token", "", {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        expires: new Date(0) // Expire immediately
    });

    return response;
}
