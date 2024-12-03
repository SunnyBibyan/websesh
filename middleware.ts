import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const isAuthenticated = !!token;

  // Paths that require authentication
  const protectedPaths = ["/dashboard"];
  const isProtectedPath = protectedPaths.some((path) => 
    request.nextUrl.pathname.startsWith(path)
  );

  // Paths that should not be accessible when authenticated
  const authPaths = ["/auth/signin"];
  const isAuthPath = authPaths.some((path) => 
    request.nextUrl.pathname.startsWith(path)
  );

  // Check if we're on the home page
  const isHomePage = request.nextUrl.pathname === "/";

  // Redirect authenticated users away from auth pages and home page
  if (isAuthenticated && (isAuthPath || isHomePage)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Redirect unauthenticated users to signin page
  if (!isAuthenticated && isProtectedPath) {
    const signInUrl = new URL("/auth/signin", request.url);
    signInUrl.searchParams.set("callbackUrl", request.url);
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

// Configure paths that should be protected by middleware
export const config = {
  matcher: ["/", "/dashboard/:path*", "/auth/signin"]
};
