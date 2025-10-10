export function formatImageUrlForProxy(url) {
    try {
        const u = new URL(url)
        if (
            u.hostname === 'prod-files-secure.s3.us-west-2.amazonaws.com' ||
            u.hostname === 'prod-files-secure.notion-static.com' ||
            u.hostname === 'prod-files-secure.cdn.notion-static.com'
        ) {
            return `/api/image?url=${encodeURIComponent(url)}`
        }
        return url
    } catch {
        return url
    }
}
