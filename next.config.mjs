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
                hostname: "prod-files-secure.notion-static.com", // 노션 이미지용 (있을 경우)
            },
        ],
    },
});