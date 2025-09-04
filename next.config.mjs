import createNextIntlPlugin from 'next-intl/plugin';
// 메시지 로더 파일 경로를 넘겨줍니다(아래 3번 파일).
const withNextIntl = createNextIntlPlugin('./i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = { reactStrictMode: true };

export default withNextIntl(nextConfig);
