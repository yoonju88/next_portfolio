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
        const upstream = await fetch(target, { headers: { 'User-Agent': 'next-portfolio-image-proxy' } })
        if (!upstream.ok) {
            return new Response('Upstream error', { status: upstream.status })
        }

        const headers = new Headers(upstream.headers)
        headers.set('Cache-Control', 'public, s-maxage=86400, max-age=3600, stale-while-revalidate=604800')
        headers.delete('set-cookie')
        return new Response(upstream.body, {
            status: 200,
            headers
        })
    } catch (e) {
        return new Response('Fetch failed', { status: 502 })
    }
}


