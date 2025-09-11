'use client'
import React from 'react'
import ProfileYJ from "@/public/yoonju-profil.jpg"
import Image from 'next/image'
import ToolTip from '../ToolTip'
import { IoLogoGithub } from "react-icons/io";
import Link from 'next/link'
import { useTranslations } from 'next-intl';


export default function Profile() {
    const t = useTranslations('aboutme')

    const tooltipStyle = "p-2.5 add-transition rounded-full border border-chart-2 hover:border-none hover:text-white hover:shadow-[inset_0_0_20px_20px] hover:shadow-chart-2/50"
    const iconStyle = "size-5 text-foreground"
    return (
        <section className="group flex flex-wrap items-center justify-center mt-14 py-10">
            <div className="lg:w-[20%] md:w-1/3 lg:mb-0 sm:mb-4 sm:w-[90%] flex items-center justify-center">
                <span className="w-[80%] h-[250px] rounded-xl overflow-hidden shadow-none transform transition-all rotate-0 duration-300
                group-hover:border-2 group-hover:border-white group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-chart-1 group-hover:shadow-lg">
                    <Image
                        src={ProfileYJ}
                        alt="profil-yoonju"
                        className="w-full scale-100 "
                        priority

                    />
                </span>
            </div>
            <div className='lg:w-[70%] w-full md:pl-6 pt-10 sm:px-6 lg:pt-1 md:pt-1'>
                <div className="text-left pr-8 flex items-center justify-between">
                    <h1 className="font-semibold title-font text-3xl uppercase">
                        {t('title')}
                    </h1>
                    <div className="flex items-center gap-2">
                        <ToolTip
                            text={t('link1')}
                            className={tooltipStyle}
                        >
                            <Link href="https://github.com/yoonju88" target="_blank">
                                <IoLogoGithub className={iconStyle} />
                            </Link>
                        </ToolTip>
                        <ToolTip
                            text={t('cv')}
                            className={tooltipStyle}
                        >
                            <a href='/cv/cv_yj_en_web.pdf' download>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className={iconStyle}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                            </a>
                        </ToolTip>
                    </div>
                </div>
                <h3 className="text-base font-semibold text-chart-2">{t('job')}</h3>
                <div className=" relative mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-base">{t('description')}</p>
                    {/* <p className="absolute opacity-0 text-9xl -z-10 md:-left-10 md:-top-20 -top-40 text-transparent text-stroke group-hover:opacity-30 group-hover:animate-bounce">HI</p> */}
                </div>
            </div>
        </section>
    )
}
