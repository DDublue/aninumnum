import {NextRequest, NextResponse} from 'next/server';
import { headers } from 'next/headers';
import { auth } from './lib/auth';
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes
} from './lib/routes';
 
export async function middleware(request: NextRequest) {
  const {nextUrl} = request;
  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Routes used for authentication, so don't disturb its process
  if (isApiAuthRoute) {
    return NextResponse.next();
  };

  // To the login page, but if already signed in, go back home
  if (isAuthRoute) {
    if (session) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    };
    return NextResponse.next();
  };

  // Signed-out users cannot access non-public routes
  if (!session && !isPublicRoute) {
    return NextResponse.redirect(new URL('/login', nextUrl));
  };
  
  console.log('signed in');
  console.log(session);
  return NextResponse.next();
};

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
