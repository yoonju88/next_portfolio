'use client'
import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsapClient' // 앞서 만든 gsap 클라이언트 모듈

export default function RevealGrid({
    children,
    itemSelector = '.grid-item', // 자식 아이템 클래스
    start = 'top 80%',
    y = 24,
    scale = 0.9,
    duration = 0.7,
    ease = 'power3.out',
    from = 'center',            // 'center' | 'edges' | 'random' | 숫자 인덱스
    amount = 0.6,               // 전체 퍼지는 시간(초)
    once = false,
    className = '',
}) {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

        const ctx = gsap.context(() => {
            const items = el.querySelectorAll(itemSelector)
            if (!items.length) return

            // 등장 애니메이션
            gsap.from(items, {
                opacity: 0,
                y,
                scale,
                rotate: i => gsap.utils.random(-4, 4),  // 살짝 랜덤 회전
                duration,
                ease,
                stagger: {
                    // 그리드 기반 퍼짐
                    each: 0.06,
                    grid: 'auto',   // 컨테이너에서 자동 행/열 계산
                    from,           // 'center' / 'edges' / 'random'
                    amount,         // 전체 퍼짐 시간
                },
                clearProps: 'transform,opacity',
                scrollTrigger: {
                    trigger: el,
                    start,
                    toggleActions: once ? 'play none none none' : 'play none none reverse',
                    once,
                },
            })

            // (선택) 섹션 보이는 동안 미세한 떠다니기 효과
            // gsap.to(items, {
            //   y: '+=6',
            //   repeat: -1,
            //   yoyo: true,
            //   duration: () => gsap.utils.random(1.6, 2.2),
            //   ease: 'sine.inOut',
            //   stagger: { each: 0.08, from: 'random' },
            //   scrollTrigger: { trigger: el, start, end: 'bottom top' }
            // })
        }, el)

        return () => ctx.revert()
    }, [itemSelector, start, y, scale, duration, ease, from, amount, once])

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    )
}