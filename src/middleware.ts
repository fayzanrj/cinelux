import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export { default } from "next-auth/middleware";

export async function middleware(req : NextRequest) {
  const { pathname } = req.nextUrl;

  // Check if the path contains /tickets
  if (pathname.includes("/tickets")) {
    // checking if the user is authenticated
    const token = await getToken({ req });

    // If no token, redirect to login or return a 403 response
    if (!token) {
      return NextResponse.rewrite(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/showtimes/:path*"],
};
