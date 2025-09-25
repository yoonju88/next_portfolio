"use client"
import { useEffect, useRef, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    useCarousel,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CarouselOrientation({ data }) {
    const { api } = useCarousel()
    const [current, setCurrent] = useState(0);
    const timerRef = useRef(null);

    // Embla 이벤트로 현재 인덱스 추적
    useEffect(() => {
        if (!api) return;
        const onSelect = () => setCurrent(api.selectedScrollSnap());
        api.on("select", onSelect);
        onSelect(); // 초기값 동기화
        return () => api.off("select", onSelect);
    }, [api]);

    // 3초마다 다음 슬라이드 (loop 없이 끝에서 정지)
    useEffect(() => {
        if (!api) return;
        // 기존 타이머 정리
        clearInterval(timerRef.current);
        // 끝이 아니면 자동 이동
        if (api.canScrollNext()) {
            timerRef.current = setInterval(() => {
                if (api && api.canScrollNext()) api.scrollNext();
                else clearInterval(timerRef.current); // 마지막에서 멈춤
            }, 3000);
        }
        return () => clearInterval(timerRef.current);
    }, [api, current]);

    // 호버 시 일시정지
    const pause = () => clearInterval(timerRef.current);
    const resume = () => {
        if (!api) return;
        clearInterval(timerRef.current);
        if (api.canScrollNext()) {
            timerRef.current = setInterval(() => {
                if (api && api.canScrollNext()) api.scrollNext();
                else clearInterval(timerRef.current);
            }, 3000);
        }
    };

    return (
        <Carousel
            opts={{ align: "start", loop: false }}    // 무한루프 OFF
            className="w-full"
            onMouseEnter={pause}
            onMouseLeave={resume}
        >
            <CarouselContent className="w-[650px] h-[400px]">
                {data.map((p, idx) => (
                    <CarouselItem key={p.id}>
                        <Card className="border-none shadow-none w-[650px] h-[400px] overflow-hidden rounded-lg">
                            <CardContent className="relative w-full h-full p-0">
                                {p.coverImage && (
                                    <Image
                                        src={p.coverImage}
                                        alt={p.title ?? ""}
                                        fill
                                        sizes="(min-width:768px) 650px, 90vw"
                                        // 활성(100%) / 비활성(fade) 전환
                                        className={[
                                            "object-cover transition-opacity duration-500",
                                            idx === current ? "opacity-100" : "opacity-40",
                                        ].join(" ")}
                                    />
                                )}
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-btn-1 hover:shadow-inner hover:shadow-btn-1 hover:bg-btn-3/80" />
            <CarouselNext className="bg-btn-1 hover:shadow-inner hover:shadow-btn-1 hover:bg-btn-3/80" />
        </Carousel>
    );
}
/*
export function CarouselOrientation({ data }) {

    return (
        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 2000,        // 3초
                    stopOnInteraction: true,
                    stopOnMouseEnter: true, // 마우스 올리면 일시정지
                }),
            ]}
            className="w-full"
        >
            <CarouselContent className="w-[650px] h-[400px]  ">
                {data.map((p) => (
                    <CarouselItem key={p.id} className="">
                        <Card className="border-none shadow-none w-[650px] h-[400px] overflow-hidden">
                            <CardContent className="relative w-full h-full p-0">
                                {p.coverImage && (
                                    <Image
                                        src={p.coverImage}
                                        alt={p.title}
                                        fill
                                        sizes="(min-width: 768px) 650px, 90vw"
                                        className="object-top"
                                    />
                                )}
                                <div className="absolute bottom-3 left-3 text-white">{p.title}</div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="bg-btn-1 hover:shadow-inner hover:shadow-btn-1 hover:bg-btn-3/80" />
            <CarouselNext className="bg-btn-1 hover:shadow-inner hover:shadow-btn-1 hover:bg-btn-3/80" />
        </Carousel>
    )
}
*/