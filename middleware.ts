import { NextResponse } from 'next/server';

export function middleware(req: Request) {
  const url = new URL(req.url);
  if (url.pathname.startsWith('/demos')) {
    const res = NextResponse.next();
    res.headers.set('X-Frame-Options', 'SAMEORIGIN');
    return res;
  }
  return NextResponse.next();
}
