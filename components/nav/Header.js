import React from 'react'
import DarkMode from './DarkMode'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

const links = [
    { href: '/', linkName: 'home' },
    { href: '/works', linkName: 'works' },
    { href: '/about-me', linkName: 'about me' },
    { href: '/contact', linkName: 'contact' },
]
export default function header() {
    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/' className="flex title-font font-medium items-center mb-4 md:mb-0 bg-primary p-1 py-2 rounded-full hover:bg-primary/90" >
                    <span className="ml-3 text-xl text-white font-semibold" >YT</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {links.map((link) => {
                        return (
                            <Link
                                href={link.href}
                                className="mr-5 capitalize text-foreground  hover:font-medium transition-colors duration-200"
                                key={link.href}
                            >
                                {link.linkName}
                            </Link>
                        )
                    })}
                </nav>
                <DarkMode />
            </div>
        </header>
    )
}
