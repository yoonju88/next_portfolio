// components/IntroHeadingReveal.js
'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function CardReveal({
    children,
    start = 'top 90%',
    duration = 0.6,
    ease = 'power3.out',
    delay = 0.2,
    reverseOnScroll = true,  // 스크롤 되돌리면 역재생
    once = false,            // true면 1회만
    sequence,                // 커스텀 순서/스타일 지정 가능
    className = '',
}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const ctx = gsap.context((self) => {
            const q = self.selector

            // 기본 시퀀스(있으면 사용, 없으면 건너뜀)
            const steps = sequence || [
                { sel: '.ih-icon', from: { autoAlpha: 0, scale: 0, filter: 'blur(6px)' }, to: { autoAlpha: 1, scale: 1, filter: 'blur(0px)', ease: 'back.out(1.5)' } },
                { sel: '.ih-date', from: { autoAlpha: 0, y: 12, filter: 'blur(4px)' }, to: { autoAlpha: 1, y: 0, filter: 'blur(0px)', stagger: 0.06 }, at: '-=0.1' },
                { sel: '.ih-title', from: { autoAlpha: 0, y: 16, filter: 'blur(6px)' }, to: { autoAlpha: 1, y: 0, filter: 'blur(0px)' }, at: '-=0.2' },
                { sel: '.ih-sub', from: { autoAlpha: 0, y: 12, filter: 'blur(4px)' }, to: { autoAlpha: 1, y: 0, filter: 'blur(0px)' }, at: '-=0.15' },
                { sel: '.ih-desc', from: { autoAlpha: 0, y: 12, filter: 'blur(4px)' }, to: { autoAlpha: 1, y: 0, filter: 'blur(0px)' } },
                { sel: '.ih-cta', from: { autoAlpha: 0, scale: 0.95, filter: 'blur(4px)' }, to: { autoAlpha: 1, scale: 1, filter: 'blur(0px)' } },
            ]

            // 초기 상태 세팅 (존재할 때만)
            steps.forEach(s => {
                const nodes = q(s.sel)
                if (nodes && nodes.length) gsap.set(nodes, s.from)
            })

            const tl = gsap.timeline({
                defaults: { duration, ease },
                delay,
                scrollTrigger: {
                    trigger: el,
                    start,
                    end: 'bottom top',
                    toggleActions:
                        reverseOnScroll
                            ? 'play reverse play reverse'
                            : (once ? 'play none none none' : 'play none none reverse'),
                    invalidateOnRefresh: true,
                },
            })

            // 타임라인 구성 (존재할 때만)
            steps.forEach(s => {
                const nodes = q(s.sel)
                if (nodes && nodes.length) {
                    s.at ? tl.to(nodes, s.to, s.at) : tl.to(nodes, s.to)
                }
            })
        }, ref)

        return () => ctx.revert()
    }, [start, duration, ease, delay, reverseOnScroll, once, sequence])

    return <div ref={ref} className={className}>{children}</div>
}