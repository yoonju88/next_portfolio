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

    const tooltipStyle = "p-2.5 btn-gradient rounded-full"
    const iconStyle = "size-5 text-white"
    return (
        <section className="group flex flex-wrap items-center justify-center mt-14 py-10">
            <div className="max-w-[230px] lg:pr-10 pr-0 sm:mb-4 mb-0 flex items-center justify-center">
                <span className="w-full aspect-[5/6] rounded-xl overflow-hidden shadow-none transform transition-all rotate-0 duration-300
                group-hover:border-2 group-hover:border-white group-hover:rotate-3 group-hover:scale-110 group-hover:shadow-btn-2 group-hover:shadow-lg">
                    <Image
                        src={ProfileYJ}
                        alt="profil-yoonju"
                        className="w-full h-full object-cover scale-100 "
                        priority

                    />
                </span>
            </div>
            <div className='lg:w-[70%] w-full pt-10 lg:pt-1 md:pt-10 lg:text-left text-center'>
                <div className="flex flex-wrap-reverse lg:flex-nowrap items-center justify-center lg:justify-between">
                    <h1>
                        {t('title')}
                    </h1>
                    <div className="flex items-center gap-2 lg:mb-0 md:mb-0 mb-4 lg:pl-0 pl-6">
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
                <h3 className="sm:text-lg text-base font-semibold text-btn-1 mt-1">{t('job')}</h3>
                <div className=" relative mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p>{t('description')}</p>
                    {/* <p className="absolute opacity-0 text-9xl -z-10 md:-left-10 md:-top-20 -top-40 text-transparent text-stroke group-hover:opacity-30 group-hover:animate-bounce">HI</p> */}
                </div>
            </div>
        </section>
    )
}
