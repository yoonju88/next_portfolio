
import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'

export default function DropDownMenu({ links, name, className, onMouseEnter, onMouseLeave, ref, isActive }) {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                className="flex items-center gap-1"
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Link
                    href='#'
                    className={className}
                    ref={ref}
                    data-active={links.some(link => isActive(link.href))}
                >
                    {name}
                </Link>
                <span className="sr-only">Works</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-background/50">
                {links.map((link) => {
                    return (
                        <DropdownMenuItem key={link.linkName}>
                            <Link
                                href={link.href}
                                className={`capitalize hover:font-semibold ${isActive(link.href) ? 'font-semibold ' : ''}`}
                                data-active={isActive(link.href)}
                            >
                                {link.linkName}
                            </Link>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
