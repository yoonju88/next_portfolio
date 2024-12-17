import React from 'react'
import DarkMode from './DarkMode'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import DropDownMenu from './DropDownMenu'

const worksLinks = [
    { href: '/works/web', linkName: 'developement web' },
    { href: '/works/design', linkName: 'graphic design' },
]
export default function header() {
    const linkClassName = 'mr-5 capitalize text-foreground  hover:font-medium transition-colors duration-200'

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/' className="flex title-font font-medium items-center mb-4 md:mb-0" >
                    <span className="ml-3 text-xl text-primary/80  font-semibold" >Yoonju.T</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                    <Link
                        href='/'
                        className={linkClassName}
                    >
                        home
                    </Link>
                    <DropDownMenu
                        className={linkClassName}
                        links={worksLinks}
                    />
                    <Link
                        href='/about-me'
                        className={linkClassName}
                    >
                        about me
                    </Link>
                    <Link
                        href='/contact'
                        className={linkClassName}
                    >
                        contact
                    </Link>
                </nav>
                <DarkMode />
            </div>
        </header>
    )
}
