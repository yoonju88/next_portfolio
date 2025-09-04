'use client'
import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import DarkMode from './DarkMode'
import DropDownMenu from './DropDownMenu'
import { navLinks } from '@/utils/navLinks'
import { useLocale } from 'next-intl'


export default function header() {
    const path = usePathname() // Current page path
    const locale = useLocale()
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
        const localizedHref = `/${locale}${href === '/' ? '' : href}`
        if (localizedHref === `/${locale}`) { return path === `/${locale}` }
        return path.startsWith(localizedHref);
    };
    // check if any of the links in a dropdown are active
    const isDropDownActive = (links) => {
        return links.some(link => isActive(link.href));
    };
    const linkStyle = "capitalize text-foreground/80 hover:font-bold duration-300 relative mr-2 px-1 py-1 cursor-pointer"


    return (
        <header className="px-10 flex flex-wrap flex-col md:flex-row items-center mt-4">
            <Link href={`/${locale}`} className="flex title-font font-medium items-center mb-6 md:mb-0" >
                <span className="ml-3 text-4xl text-chart-2 font-extrabold" >Yoonju.T</span>
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
                        const worksLinks = nav.worksLinks.map(w => ({ ...w, href: `/${locale}${w.href}` }))
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
                                isActive={(href) => path.startsWith(href)}
                            />
                        )
                    } else {
                        const href = `/${locale}${nav.link === '/' ? '' : nav.link}`
                        return (
                            <Link
                                key={nav.name}
                                href={href}
                                className={`${linkStyle} ${path.startsWith(href) ? "font-bold" : "font-medium"}`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                data-active={path.startsWith(href)}
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
        </header>
    )
}
