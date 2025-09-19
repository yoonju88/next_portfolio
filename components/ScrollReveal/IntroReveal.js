'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

export default function IntroReveal({ children, className = '' }) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const isMobile = window.matchMedia('(max-width: 768px)').matches
        const yVal = isMobile ? 40 : 24
        const dur = isMobile ? 0.9 : 0.7

        const ctx = gsap.context(() => {
            // 초기 상태
            gsap.set(
                [
                    '.step-photo',
                    '.step-heading',
                    '.step-icons .icon',
                    '.step-job',
                    '.step-desc',
                ],
                { autoAlpha: 0, y: yVal }
            )

            const tl = gsap.timeline({
                defaults: { ease: 'power3.out', duration: dur },
                scrollTrigger: {
                    trigger: el,
                    start: 'top 80%',      // 보이면 시작
                    toggleActions: 'play none none none',
                    once: true,            // 한 번만
                },
            })

            tl.fromTo('.step-photo',
                { autoAlpha: 0, scale: 0.5, y: yVal },
                { autoAlpha: 1, scale: 1, y: 0, duration: dur, ease: 'back.out(1.2)' }
            )
                .fromTo('.step-icons .icon',
                    { autoAlpha: 0, scale: 0, y: yVal },
                    {
                        autoAlpha: 1,
                        scale: 1,
                        y: 0,
                        duration: dur,
                        ease: 'back.out(1.8)',   // 살짝 튀어나오는 느낌
                        stagger: 0.12
                    },
                    '-=0.05'
                )
                .fromTo('.step-heading',
                    { autoAlpha: 0, y: yVal },
                    { autoAlpha: 1, y: 0, duration: dur },
                    '-=0.2'
                )
                .to('.step-job', { autoAlpha: 1, y: 0 }, '-=0.1')
                .to('.step-desc', { autoAlpha: 1, y: 0 }, '-=0.1')

        }, el)

        return () => ctx.revert()
    }, [])

    return (
        <section ref={ref} className={className}>
            {children}
        </section>
    )
}