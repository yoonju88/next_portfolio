'use client'
import React, { useState, useEffect, useMemo } from 'react'
import { usePathname } from 'next/navigation'
import { useLocale, useTranslations } from "next-intl";
import Link from 'next/link'
import DarkMode from './DarkMode'
import DropDownMenu from './DropDownMenu'
import { navLinks } from '@/utils/navLinks'

const SUPPORTED_LOCALES = ["en", "fr", "ko"];

export default function Header() {
    const path = usePathname() // Current page path
    const rawLocale = useLocale()
    const locale = SUPPORTED_LOCALES.includes(rawLocale) ? rawLocale : "en";
    const t = useTranslations()
    const [underline, setUnderline] = useState({ width: 0, left: 0 })

    const withLocale = (href) => `/${locale}${href === "/" ? "" : href}`

    const tf = (key) => {
        const fallback = key?.split(".").pop() || key || "";
        try {
            return t(key)
        } catch {
            return fallback
        }
    }

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
    // Determine active state from a LOCALIZED href
    const isPathActive = (localizedHref) => {
        if (localizedHref === `/${locale}`) { return path === `/${locale}` }
        return path.startsWith(localizedHref);
    };
    // check if any of the links in a dropdown are active
    const isDropDownActive = (links) => {
        return links.some(link => isPathActive(link.href));
    };
    const linkStyle = "inline-block capitalize text-foreground/80 hover:font-bold duration-300 relative mr-2 px-1 py-1 cursor-pointer sm:text-base text-sm"

    const localizedNav = useMemo(
        () =>
            navLinks.map((nav) => ({
                ...nav,
                label: tf(nav.key),
                href: nav.link ? withLocale(nav.link) : undefined,
                worksLinks: nav.worksLinks?.map((v) => ({
                    ...v,
                    label: tf(v.key),
                    href: withLocale(v.href),
                })),
            })),
        [t, locale]
    )
    // 텍스트 그림자 효과 [text-shadow:_0_0_6px_hsl(var(--btn-2)/0.5),_0_0_20px_hsl(var(--btn-2)/0.5),_0_0_20px_hsl(var(--btn-2)/0.5)]
    return (
        <header className="px-10 flex flex-wrap flex-col md:flex-row items-center mt-4">
            <Link href={`/${locale}`} className="flex title-font font-medium items-center mb-6 md:mb-0" >
                <span className="ml-3 sm:text-4xl text-3xl font-black uppercase tracking-wider
                    text-foreground/80" >
                    yoonju.t
                </span>
            </Link>
            <nav className="relative md:ml-auto flex flex-wrap items-center text-base justify-center">
                <div
                    className='absolute bottom-0 h-[2px] bg-foreground/75 transition-all duration-500'
                    style={{
                        width: underline.width,
                        left: underline.left,
                    }}
                />
                {localizedNav.map((nav) => {
                    if (nav.worksLinks) {
                        return (
                            <DropDownMenu
                                key={nav.key}
                                name={nav.label}
                                className={`${linkStyle} ${isDropDownActive(nav.worksLinks) ? "font-bold" : "font-medium"
                                    }`}
                                links={nav.worksLinks}
                                onMouseEnter={(e) => {
                                    handleMouseEnter(e);
                                    const trigger = e.currentTarget;
                                    if (isDropDownActive(nav.worksLinks)) {
                                        setUnderline((u) => ({ ...u }));
                                    }
                                }}
                                onMouseLeave={handleMouseLeave}
                                isActive={(href) => isPathActive(href)}
                            />
                        )
                    } else {
                        const href = nav.href;
                        const active = isPathActive(href)

                        return (
                            <Link
                                key={nav.key}
                                href={href}
                                className={`${linkStyle} ${active ? "font-bold" : "font-medium"}`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                data-active={active}
                            >
                                {nav.label}
                            </Link>
                        )
                    }
                })}
                <div className="ml-2">
                    <DarkMode />
                </div>
            </nav>

        </header>
    )
}
