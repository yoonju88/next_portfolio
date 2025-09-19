'use client'
import React from 'react'
import Link from 'next/link'
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ToolTip from '../ToolTip';
import { useTranslations } from 'next-intl';

import Reveal from '../ScrollReveal/Reveal';

export default function Footer() {
    const t = useTranslations("footer")

    const tooltipStyle = "w-5 h-5 add-transition hover:scale-125 text-white"
    return (
        <footer className="bg-[linear-gradient(0deg,hsl(var(--btn-1))0%,hsl(var(--btn-2))100%)] px-10 py-6 mx-auto">
            <div className="flex items-center gap-5 sm:flex-row flex-col">
                <Link href="/">
                    <span className="text-2xl text-white font-extrabold">Yoonju.T </span>
                </Link>
                <p className='text-md text-white flex items-center capitalize sm:text-center'>
                    {t("des")}
                </p>
                <span className='inline-flex gap-4 sm:ml-auto mt-4 sm:mt-2 justify-center sm:justify-start'>
                    <ToolTip
                        text={t("linkedin")}
                    >
                        <Link href="https://www.linkedin.com/in/yoonju-t" target="_blank">
                            <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className={tooltipStyle} viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </Link>
                    </ToolTip>
                    <ToolTip
                        text={t("github")}
                    >
                        <Link href="https://github.com/yoonju88" target="_blank">
                            <IoLogoGithub className={tooltipStyle} />
                        </Link>
                    </ToolTip>
                    <ToolTip
                        text={t("email")}
                    >
                        <Link href="mailto:hoyoonju2@gmail.com" target="_blank">
                            <MdAlternateEmail className={tooltipStyle} />
                        </Link>
                    </ToolTip>
                </span>
            </div>
        </footer>
    )
}
