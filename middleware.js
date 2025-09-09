import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n/routing';

export default createMiddleware({
    locales: ['en', 'fr', 'ko'],
    defaultLocale: 'en',
    // URL에 항상 /en, /fr를 붙여 쓰는 경우:
    localePrefix: 'always'
});

export const config = {
    matcher: [
        '/((?!_next|_vercel|.*\\..*).*)' // _next, 정적 파일 등 제외
    ]
};