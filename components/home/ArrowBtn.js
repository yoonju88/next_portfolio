"use client"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl";
import { Button } from "../ui/button";


export default function ArrowBtn() {
    const locale = useLocale();
    const t = useTranslations("home")
    return (
        <>
            <svg style={{ display: "none" }}>
                <defs>
                    <symbol id="arrow" viewBox="0 0 35 15">
                        <title>Arrow</title>
                        <path d="M27.172 5L25 2.828 27.828 0 34.9 7.071l-7.07 7.071L25 11.314 27.314 9H0V5h27.172z" />
                    </symbol>
                </defs>
            </svg>
            <Link href={`/${locale}/works`} >
                <Button
                    variant="navigate"
                    size="lg"
                    className="group relative inline-flex items-center overflow-hidden
                        pl-20 py-6 pr-8 text-white
                        sm:font-meduim sm:text-lg text-base leading-6 tracking-wider uppercase
                        transition-[transform,color,shadow] duration-500 shadow-[0_0_30px_hsl(var(--btn-2))]
                        animate-glow [animation-duration:2s]  
                        hover:[animation:none] hover:shadow-none"
                >
                    <svg
                        className="pointer-events-none absolute left-10 top-[17px] w-[35px] h-[15px]
                                    fill-current origin-left
                                    transition-transform duration-500
                                    [transition-timing-function:cubic-bezier(0.86,0,0.07,1)]
                                    group-hover:opacity-0 group-hover:-translate-x-[75%] group-hover:scale-x-[0.1]"
                        aria-hidden="true"
                    >
                        <use xlinkHref="#arrow" />
                    </svg>

                    {/* 라벨 (hover에 왼쪽으로 이동) */}
                    <span
                        className=" inline-block
                        transition-transform duration-500
                        [transition-timing-function:cubic-bezier(0.86,0,0.07,1)]
                        group-hover:-translate-x-[52px]
                        [backface-visibility:hidden] [perspective:1000px] will-change-transform "
                    >
                        {t("button3")}
                    </span>

                    {/* 오른쪽 화살표 (기본 숨김/축소 → hover에 나타남) */}
                    <svg
                        className="
                        pointer-events-none absolute right-10 top-[17px] w-[35px] h-[15px]
                        fill-current origin-right
                        opacity-0 translate-x-[70%] scale-x-[0.1]
                        transition-[transform,opacity] duration-500
                        [transition-timing-function:cubic-bezier(0.86,0,0.07,1)]
                        group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-x-100"
                        aria-hidden="true"
                    >
                        <use xlinkHref="#arrow" />
                    </svg>
                </Button>
            </Link>
        </>
    )
}