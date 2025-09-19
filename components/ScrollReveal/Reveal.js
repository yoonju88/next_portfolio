'use client'
import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsapClient'

export default function Reveal({
    children,
    itemSelector = '.reveal-item',
    start = 'top 80%',
    y = 24,
    duration = 0.8,
    stagger = 0.08,
    once = false,
    ease = 'power3.out',
    className = '',
}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const isMobile = window.matchMedia('(max-width: 640px)').matches
        const startPoint = isMobile ? 'top 95%' : start
        const yValue = isMobile ? 50 : y

        const ctx = gsap.context(() => {
            const scrollOpts = {
                trigger: el,
                start: startPoint,
                toggleActions: once ? 'play none none none' : 'play none none reverse',
                once,
            }

            if (itemSelector) {
                const items = el.querySelectorAll(itemSelector)
                if (!items.length) return
                gsap.set(items, { opacity: 0, y: yValue })
                gsap.to(items, { opacity: 1, y: 0, duration, ease, stagger, scrollTrigger: scrollOpts })
            } else {
                gsap.from(el, { opacity: 0, y: yValue, duration, ease, scrollTrigger: scrollOpts })
            }
        }, el)

        return () => ctx.revert()
    }, [itemSelector, start, y, duration, stagger, ease, once])

    return <section ref={ref} className={className}>{children}</section>
}
