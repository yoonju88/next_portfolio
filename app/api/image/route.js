export const runtime = 'edge'

const ALLOWED_HOSTNAMES = new Set([
    'prod-files-secure.s3.us-west-2.amazonaws.com',
    'prod-files-secure.notion-static.com',
    'prod-files-secure.cdn.notion-static.com',
])

function isAllowed(url) {
    try {
        const u = new URL(url)
        return ALLOWED_HOSTNAMES.has(u.hostname)
    } catch {
        return false
    }
}

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const target = searchParams.get('url')

    if (!target || !isAllowed(target)) {
        return new Response('Bad Request', { status: 400 })
    }

    try {
        const upstream = await fetch(target)

        if (!upstream.ok) {
            return new Response('Upstream error', { status: upstream.status })
        }

        // 필요한 헤더만 전달
        const headers = new Headers();
        headers.set('Content-Type', upstream.headers.get('Content-Type') || 'image/jpeg');
        // **캐싱 전략 수정:** 1년 동안 캐시, Vercel/CDN 에서도 캐시
        headers.set('Cache-Control', 'public, max-age=31536000, immutable');

        return new Response(upstream.body, {
            status: 200,
            headers
        })
    } catch (e) {
        // 에러만 로깅 (개발 환경에서만)
        if (process.env.NODE_ENV === 'development') {
            console.error('Image proxy error:', e.message)
        }
        return new Response('Fetch failed', { status: 502 })
    }
}