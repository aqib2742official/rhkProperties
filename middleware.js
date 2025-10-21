// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
    const response = NextResponse.next();

    // Add security headers to all responses
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
    response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate');

    return response;
}

// Optional: limit where middleware runs (recommended)
export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
    ],
};
