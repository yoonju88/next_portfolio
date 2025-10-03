import createNextIntlPlugin from 'next-intl/plugin';

// next-intl 설정
const withNextIntl = createNextIntlPlugin('./i18n/request.js');

// 최종 config
export default withNextIntl({
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "prod-files-secure.s3.us-west-2.amazonaws.com",
            },
            {
                protocol: "https",
                hostname: "prod-files-secure.notion-static.com", // old notion host (fallback)
            },
            {
                protocol: "https",
                hostname: "prod-files-secure.cdn.notion-static.com", // common notion CDN host in production
            },
            // Optional legacy hosts (uncomment if needed)
            // { protocol: "https", hostname: "image.notion.so" },
        ],
    },
});