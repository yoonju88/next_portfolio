'use client'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import DarkMode from './DarkMode'
import DropDownMenu from './DropDownMenu'
import { navLinks } from '@/utils/navLinks'

export default function header() {
    const path = usePathname() // Current page path
    const [underline, setUnderline] = useState({ width: 0, left: 0 })

    //handle mouse enter to set underline position
    const handleMouseEnter = (e) => {
        const target = e.currentTarget;
        setUnderline({
            width: target.offsetWidth,
            left: target.offsetLeft,
        })
    }
    //reset underline on mouse leave
    const handleMouseLeave = () => {
        setUnderline({})
    }
    //check if the given link is the active page
    const isActive = (href) => {
        if (href === '/') { return path === '/' }
        return path.startsWith(href);
    };
    // check if any of the links in a dropdown are active
    const isDropDownActive = (links) => {
        return links.some(link => path.startsWith(link.href));
    };
    const linkStyle = "capitalize text-foreground hover:font-bold duration-300 relative mr-2 px-1 py-1 cursor-pointer"

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href='/' className="flex title-font font-medium items-center mb-4 md:mb-0" >
                    <span className="ml-3 text-xl text-primary/80  font-semibold" >Yoonju.T</span>
                </Link>
                <nav className=" relative md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <div
                        className='absolute bottom-0 h-[2px] bg-foreground transtion-all duration-500'
                        style={{
                            width: underline.width || (isActive(path) ? 'auto' : 0),
                            left: underline.left || (isActive(path) ? 0 : 0),
                        }}
                    />
                    {navLinks.map((nav) => {
                        if (nav.worksLinks) {
                            const worksLinks = nav.worksLinks
                            return (
                                <DropDownMenu
                                    key={nav.name}
                                    name={nav.name}
                                    className={`${linkStyle} ${isDropDownActive(worksLinks) ? "font-bold" : ""}`}
                                    links={worksLinks}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    isActive={isActive}
                                />
                            )
                        } else {
                            return (
                                <Link
                                    key={nav.name}
                                    href={nav.link}
                                    className={`${linkStyle} ${isActive(nav.link) ? "font-bold" : ""}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {nav.name}
                                </Link>
                            )
                        }
                    })}
                </nav>
                <DarkMode />
            </div>
        </header>
    )
}
