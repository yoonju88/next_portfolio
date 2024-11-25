import React from 'react'
import DarkMode from './DarkMode'
import Link from 'next/link'

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
                <Link href='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
                    <span className="ml-3 text-xl text-indigo-500" >Yoonju.T</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {links.map((link) => {
                        return (
                            <Link href={link.href} className="mr-5 hover:text-gray-900 capitalize" key={link.href} >
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
