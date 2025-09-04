import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/routing';

export function middleware(req) {
    const { pathname } = req.nextUrl;
    if (pathname.startsWith('/en') || pathname.startsWith('/fr') ||
        pathname.startsWith('/_next') || pathname.includes('.')) {
        return;
    }
    return NextResponse.redirect(new URL(`/en${pathname}`, req.url));
}

export const config = {
    matcher: ['/((?!api).*)']
};