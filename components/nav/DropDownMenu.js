
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
            <DropdownMenuTrigger className="flex items-center gap-1">
                <Link
                    href='/works/web'
                    className={className}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    ref={ref}
                >
                    {name}
                </Link>
                <span className="sr-only">Works</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="bg-background/50">
                {links.map((link) => {
                    return (
                        <DropdownMenuItem key={link.linkName}>
                            <Link href={link.href} className={`capitalize hover:font-semibold ${isActive(link.href) ? 'font-semibold ' : ''}`} >
                                {link.linkName}
                            </Link>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
