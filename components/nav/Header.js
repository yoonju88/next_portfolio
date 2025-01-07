'use client'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import DarkMode from './DarkMode'
import DropDownMenu from './DropDownMenu'
import { navLinks } from '@/utils/navLinks'

export default function header() {
    const path = usePathname() // Current page path
    const [underline, setUnderline] = useState({ width: 0, left: 0 })
    useEffect(() => {
        const activeLink = document.querySelector(`[data-active="true"]`);
        if (activeLink) {
            setUnderline({
                width: activeLink.offsetWidth,
                left: activeLink.offsetLeft,
            });
        } else {
            setUnderline({ width: 0, left: 0 });
        }
    }, [path]);

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
        const activeLink = document.querySelector(`[data-active="true"]`);
        if (activeLink) {
            setUnderline({
                width: activeLink.offsetWidth,
                left: activeLink.offsetLeft,
            });
        } else {
            setUnderline({ width: 0, left: 0 });
        }
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
    const linkStyle = "capitalize text-foreground/80 hover:font-bold duration-300 relative mr-2 px-1 py-1 cursor-pointer"


    return (
        <header>
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center mt-2">
                <Link href='/' className="flex title-font font-medium items-center mb-6 md:mb-0" >
                    <span className="ml-3 text-2xl text-chart-2 font-semibold" >Yoonju.T</span>
                </Link>
                <nav className="relative md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <div
                        className='absolute bottom-0 h-[2px] bg-foreground/80 transtion-all duration-500'
                        style={{
                            width: underline.width,
                            left: underline.left,
                        }}
                    />
                    {navLinks.map((nav) => {
                        if (nav.worksLinks) {
                            const worksLinks = nav.worksLinks
                            return (
                                <DropDownMenu
                                    key={nav.name}
                                    name={nav.name}
                                    className={`${linkStyle} ${isDropDownActive(worksLinks) ? "font-bold" : "font-medium"}`}
                                    links={worksLinks}
                                    onMouseEnter={(e) => {
                                        handleMouseEnter(e);
                                        const trigger = e.currentTarget;
                                        if (isDropDownActive(worksLinks)) {
                                            setUnderline({
                                                width: underline.width,
                                                left: underline.left,
                                            });
                                        }
                                    }}
                                    onMouseLeave={handleMouseLeave}
                                    isActive={isActive}
                                />
                            )
                        } else {
                            return (
                                <Link
                                    key={nav.name}
                                    href={nav.link}
                                    className={`${linkStyle} ${isActive(nav.link) ? "font-bold" : "font-medium"}`}
                                    onMouseEnter={handleMouseEnter}
                                    onMouseLeave={handleMouseLeave}
                                    data-active={isActive(nav.link)}
                                >
                                    {nav.name}
                                </Link>
                            )
                        }
                    })}
                </nav>
                <div className="md:mt-0 mt-6 md:ml-3 ml-0">
                    <DarkMode />
                </div>
            </div>
        </header>
    )
}
