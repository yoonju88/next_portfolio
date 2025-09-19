'use client'
import { useEffect } from 'react'
import gsap from '@/lib/gsapClient'

export default function useScrollReveal(ref, {
    itemSelector = null, start = 'top 80%', y = 24,
    duration = 0.8, stagger = 0.08, once = false, ease = 'power3.out'
} = {}) {
    useEffect(() => {
        const el = ref?.current
        if (!el) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const ctx = gsap.context(() => {
            if (itemSelector) {
                const items = el.querySelectorAll(itemSelector)
                if (!items.length) return
                gsap.set(items, { opacity: 0, y })
                gsap.to(items, {
                    opacity: 1, y: 0, duration, ease, stagger,
                    scrollTrigger: { trigger: el, start, toggleActions: once ? 'play none none none' : 'play none none reverse', once }
                })
            } else {
                gsap.from(el, {
                    opacity: 0, y, duration, ease,
                    scrollTrigger: { trigger: el, start, toggleActions: once ? 'play none none none' : 'play none none reverse', once }
                })
            }
        }, el)

        return () => ctx.revert()
    }, [ref, itemSelector, start, y, duration, stagger, once, ease])
}