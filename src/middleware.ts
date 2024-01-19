import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const protectedRoutes = ['/', '/[profileId]'];

export function middleware(req: NextRequest) {
  const hasToken = req.cookies.get('token');
  if (protectedRoutes.includes(req.nextUrl.pathname)) {
    if (!hasToken) {
      return NextResponse.redirect(new URL('/signIn', req.url));
    } else {
      return NextResponse.next();
    }
  }
  if (['/signIn', '/signUp'].includes(req.nextUrl.pathname)) {
    if (hasToken) {
      return NextResponse.redirect(new URL('/', req.url));
    } else {
      return NextResponse.next();
    }
  }
}
