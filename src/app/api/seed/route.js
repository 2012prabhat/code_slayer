import { NextResponse } from "next/server";
import { seedDatabase } from "@/utils/seedDb";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export async function GET(request) {
    // If accessed directly from a browser, redirect to the confirmation page
    const acceptHeader = request.headers.get("accept") || "";
    if (acceptHeader.includes("text/html")) {
        return NextResponse.redirect(new URL("/admin/seed", request.url));
    }

    // 1. Verify admin token from cookie
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
        return NextResponse.json({ error: "Unauthorized: No token provided" }, { status: 401 });
    }

    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const { payload } = await jwtVerify(token, secret);

        if (!payload.isAdmin) {
            return NextResponse.json({ error: "Forbidden: Admins only" }, { status: 403 });
        }
    } catch (err) {
        return NextResponse.json({ error: "Unauthorized: Invalid or expired token" }, { status: 401 });
    }

    // 2. Run seed
    const result = await seedDatabase();
    return NextResponse.json(result);
}
