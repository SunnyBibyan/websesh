import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;

  // Public paths that don't require authentication
  const publicPaths = ["/auth/signin", "/auth/signup", "/auth/error"];
  const isPublicPath = publicPaths.some(path => pathname.startsWith(path));

  // Protected paths that require authentication
  const protectedPaths = ["/dashboard", "/meetings", "/analytics", "/recordings"];
  const isProtectedPath = protectedPaths.some(path => pathname.startsWith(path));

  // Handle authentication flow
  if (isPublicPath) {
    // If user is authenticated and tries to access public paths, redirect to dashboard
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  if (isProtectedPath) {
    // If user is not authenticated and tries to access protected paths, redirect to signin
    if (!token) {
      const signInUrl = new URL("/auth/signin", request.url);
      signInUrl.searchParams.set("callbackUrl", pathname);
      return NextResponse.redirect(signInUrl);
    }
    return NextResponse.next();
  }

  // Handle root path
  if (pathname === "/") {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

// Configure paths that should be protected by middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (auth API routes)
     * - _next (Next.js internals)
     * - static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api/auth|_next|static|favicon.ico).*)",
  ],
};
