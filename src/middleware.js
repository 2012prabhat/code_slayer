import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Define the public paths that don't require authentication
const publicPaths = [
    "/",
    "/login",
    "/register",
    "/forgot-password",
    "/reset-password",
    "/api/auth/login",
    "/api/auth/register",
    "/api/auth/verify",
    "/api/auth/forgot-password",
    "/api/auth/reset-password",
];

export async function middleware(request) {
    const { pathname } = request.nextUrl;

    // Exclude static files, images, next system files
    if (
        pathname.includes("_next") ||
        pathname.includes("favicon.ico") ||
        pathname.startsWith("/images/")
    ) {
        return NextResponse.next();
    }

    // Get token from cookies (which you'll need to set on login)
    const token = request.cookies.get("token")?.value;

    // 1. If hitting a protected admin route
    if (pathname.startsWith("/admin")) {
        if (!token) {
            // Redirect to login if no token
            return NextResponse.redirect(new URL("/login", request.url));
        }

        try {
            // we will decode the token using jose. Note we use TextEncoder because Jose is running in the edge runtime
            const secret = new TextEncoder().encode(process.env.JWT_SECRET);
            const { payload } = await jwtVerify(token, secret);

            // If the user is NOT an admin from the token payload, they cannot be here. 
            // Note: we need to inject the `isAdmin` value in the token payload when we log the user in
            // For older tokens, this will be undefined and evaluate to false which is safe
            if (!payload.isAdmin) {
                return NextResponse.redirect(new URL("/problems", request.url));
            }

        } catch (err) {
            console.log("Middleware error", err)
            // JWT might be expired or invalid
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // 2. Prevent logged in users from visiting login/register pages
    if (token && (pathname === "/login" || pathname === "/register")) {
        return NextResponse.redirect(new URL("/problems", request.url));
    }

    return NextResponse.next();
}

// Ensure middleware only runs on routes we want
export const config = {
    matcher: [
        "/admin/:path*",
        "/login",
        "/register",
    ],
};
