import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

// Public routes (no authentication required)
const publicPaths = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify",
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/verify",
  "/api/auth/forgot-password",
  "/api/auth/reset-password",
];

export async function middleware(request) {
  const { pathname } = request.nextUrl;

  // Allow static files (images, css, js, fonts etc.)
  if (pathname.match(/\.(.*)$/)) {
    return NextResponse.next();
  }

  const token = request.cookies.get("token")?.value;

  const isPublic = publicPaths.includes(pathname);
  const isApiRoute = pathname.startsWith("/api");

  // If user is not logged in and trying to access protected page
  if (!token && !isPublic && !isApiRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Admin route protection
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET);
      const { payload } = await jwtVerify(token, secret);

      console.log("Middleware payload:", payload);

      if (!payload.isAdmin) {
        return NextResponse.redirect(new URL("/problems", request.url));
      }

    } catch (error) {
      console.log("JWT error:", error);
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Prevent logged in users from visiting login/register
  if (token && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/problems", request.url));
  }

  return NextResponse.next();
}

// Middleware config
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api).*)",
  ],
};