'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { formatImageUrlForProxy } from '@/lib/image'

export default function SlideImages({ images = [] }) {
    const [api, setApi] = useState(null)
    const [current, setCurrent] = useState(0)
    //슬라이더/캐러셀 같은 UI에서 현재 선택된 스냅(슬라이드) 인덱스를 state로 관리하는 패턴
    //초기 로딩 시 한 번 상태를 세팅하고, 슬라이드 이동 시 이벤트로 상태를 업데이트하며, 컴포넌트 언마운트 시 이벤트를 깨끗하게 제거함.
    useEffect(() => {
        if (!api) return
        const onSelect = () => setCurrent(api.selectedScrollSnap())
        api.on('select', onSelect)
        onSelect()
        return () => api.off('select', onSelect)
    }, [api])

    if (!images.length) return null
    const hasMultiple = images.length > 1

    return (
        <Carousel
            setApi={setApi}
            opts={{ align: 'start', loop: false }}
            className="w-full relative animate-scale-up-soft [--anim-delay:600ms]"
        >
            <CarouselContent>
                {images.map((raw, index) => {
                    const image = formatImageUrlForProxy(raw)
                    return (
                        <CarouselItem
                            key={index}
                            className="relative w-full overflow-hidden rounded-lg"
                        >
                            <Image
                                src={image}
                                alt={`project image ${index + 1}`}
                                width={1000}         // ← 숫자!
                                height={600}
                                sizes="(min-width: 1024px) 900px, 100vw"
                                blurDataURL={image}
                                placeholder="blur"
                                className={[
                                    'object-center object-cover bg-slate-100 transition-opacity duration-500 ease-out rounded-lg',
                                    current === index ? 'opacity-100' : 'opacity-60',
                                ].join(' ')}
                                priority={index === 0}

                            />
                        </CarouselItem>
                    )
                })}
            </CarouselContent>

            {hasMultiple && (
                <>
                    <CarouselPrevious />
                    <CarouselNext />
                    <div className="absolute pointer-events-auto bottom-4 flex gap-2 left-1/2 -translate-x-1/2">
                        {images.map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                onClick={() => api?.scrollTo(index)}
                                aria-label={`Go to image ${index + 1}`}
                                className={`w-3 h-3 rounded-full transition ${current === index ? 'bg-btn-1 shadow-md' : 'bg-btn-2/80'}`}
                            />
                        ))}
                    </div>

                </>
            )
            }
        </Carousel>
    )
}