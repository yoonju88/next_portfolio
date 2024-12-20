'use client'
import React from 'react'
import { usePathname } from "next/navigation"
import {
    Breadcrumb,
    BreadcrumbEllipsis,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


export default function MenuNavigate() {
    const pathname = usePathname()

    const pageTitle = (() => {
        if (pathname.startsWith("/works/web")) {
            const parts = pathname.split("/").filter(Boolean);
            if (parts.length === 2) return "Development Web"; // "/works/web"
            if (parts.length === 3) {
                const id = parts[2]; // 아이디 값 추출
                return `Development Web Details`; // 타이틀 매칭 또는 기본값
            }
        }
        if (pathname.startsWith("/works/design")) {
            const parts = pathname.split("/").filter(Boolean);
            if (parts.length === 2) return "Graphic Design"; // "/works/design"
            if (parts.length === 3) {
                const id = parts[2]; // 아이디 값 추출
                return `Graphic Design Details`; // 타이틀 매칭 또는 기본값
            }
        }
        if (pathname.startsWith("/about-me")) { return 'About me' }
        if (pathname.startsWith("/contact")) { return 'Contact' }
        if (pathname.startsWith("/")) { return 'home' }
    })();

    return (
        <Breadcrumb className="py-16 top-10 right-52">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/" className="text-lg" >Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1">
                            <BreadcrumbEllipsis className="h-6 w-6" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>
                                <BreadcrumbLink href="/works" className="text-md">
                                    Works
                                </BreadcrumbLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BreadcrumbLink href="/about-me" className="text-md">
                                    About Me
                                </BreadcrumbLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BreadcrumbLink href="/contact" className="text-md">
                                    Contact
                                </BreadcrumbLink>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-1">
                            <BreadcrumbLink href="/woks/web" className="text-lg">Works</BreadcrumbLink>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>
                                <BreadcrumbLink href="/works/web" className="text-md">
                                    Development web
                                </BreadcrumbLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BreadcrumbLink href="/works/design" className="text-md">
                                    Graphic Design
                                </BreadcrumbLink>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage className="font-semibold capitalize text-chart-2 text-lg">{pageTitle}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
