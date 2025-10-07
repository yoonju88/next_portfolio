
import React from 'react'
import { BreadcrumbItem, Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDownIcon } from "lucide-react";
import Link from "next/link";

export default function Breadcrumbs({
    home,
    homeLink,
    works,
    web,
    design,
    webLink,
    designLink,
    currentCategory,
    currentLink,
    currentPage
}) {
    return (
        <Breadcrumb className="lg:px-12 px-4 mx-auto w-full animate-slide-down-soft [animation-delay:250ms]">
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={homeLink}>{home}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <DropdownMenu>
                        <DropdownMenuTrigger
                            className="flex items-center gap-1 [&_svg]:transition-transform [&_svg]:duration-300 focus:outline-none focus:ring-0"
                        >
                            {works} ...
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start">
                            <DropdownMenuItem>
                                <Link href={webLink}>
                                    {web}
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={designLink}>
                                    {design}
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {currentCategory && (
                    <>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link href={currentLink}>
                                    {currentCategory}
                                </Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                    </>
                )}
                <BreadcrumbItem>
                    <BreadcrumbPage>{currentPage}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
