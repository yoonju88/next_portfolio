import React from 'react'
import Link from 'next/link'
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";
import ToolTip from './ToolTip';

export default function Footer() {
    const tooltipStyle = "w-5 h-5 add-transition hover:scale-125 text-foreground/80"
    return (
        <footer className="bg-secondary/80 px-5 py-6 mx-auto">
            <div className="container flex items-center gap-5 sm:flex-row flex-col">
                <Link href="/">
                    <span className="text-2xl text-foreground font-semibold">Yoonju.T </span>
                </Link>
                <p className='text-sm text-foreground flex items-center capitalize'>
                    © 2024 all rights reserved by TERRENOIRE Yoonju
                </p>
                <span className='inline-flex gap-4 sm:ml-auto mt-4 sm:mt-0 justify-center sm:justify-start'>
                    <ToolTip
                        text="Go to LinkedIn"
                        link="www.linkedin.com/in/yoonju-t"
                    >
                        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className={tooltipStyle} viewBox="0 0 24 24">
                            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </ToolTip>
                    <ToolTip
                        text="Go to my GitHub"
                        link="https://github.com/yoonju88"
                    >
                        <IoLogoGithub className={tooltipStyle} />
                    </ToolTip>
                    <ToolTip
                        text="Send me an email"
                        link="mailto:hoyoonju2@gmail.com"
                    >
                        <MdAlternateEmail className={tooltipStyle} />
                    </ToolTip>
                </span>
            </div>
        </footer>
    )
}
