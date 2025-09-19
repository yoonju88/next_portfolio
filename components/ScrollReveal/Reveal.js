'use client'

import { useEffect, useRef } from "react"
import gsap from '@/lib/gsapClient'

export default function Reveal({
    children,
    itemSelector = '.reveal-item',   // 내부 아이템 셀렉터
    start = 'top 80%',
    y = 24,
    duration = 0.8,
    stagger = 0.08,
    once = false,                     // true면 1회만
    ease = 'power3.out',
    className = '',
}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const isMobile = window.matchMedia('(max-width: 640px)').matches
        const startPoint = isMobile ? 'top 95%' : start;
        const yValue = isMobile ? 50 : y
        const fallbackStart = 'bottom bottom'

        const ctx = gsap.context(() => {
            if (itemSelector) {
                const items = el.querySelectorAll(itemSelector)
                if (!items.length) return
                gsap.set(items, { opacity: 0, y: yValue })
                gsap.to(items, {
                    opacity: 1,
                    y: 0,
                    duration,
                    ease,
                    stagger,
                    scrollTrigger: {
                        trigger: el,
                        start: startPoint,
                        end: fallbackStart,
                        toggleActions: once ? 'play none none none' : 'play none none reverse',
                        once,
                    },
                })
            } else {
                gsap.from(el, {
                    opacity: 0,
                    y: yValue,
                    duration,
                    ease,
                    scrollTrigger: {
                        trigger: el,
                        start: startPoint,
                        end: fallbackStart,
                        toggleActions: once ? 'play none none none' : 'play none none reverse',
                        once,
                    },
                })
            }
        }, el)


        return () => ctx.revert()
    }, [itemSelector, start, end, y, duration, stagger, ease, once])

    return (
        <section ref={ref} className={className}>
            {children}
        </section>
    )
}
