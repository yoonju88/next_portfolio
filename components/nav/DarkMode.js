'use client'
import * as React from "react"
import { useTheme } from 'next-themes'
import { FaMoon } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { MdSunny } from "react-icons/md";
import { BiLoader } from 'react-icons/bi'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTranslations } from "next-intl";

export default function DarkMode() {
    const { theme, resolvedTheme, setTheme } = useTheme()
    const t = useTranslations("theme")

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon' className="hover:shadow-inner hover:shadow-chart-2/50 px-3.5">
                    {typeof window !== 'undefined' && !resolvedTheme ? (
                        <BiLoader className="h-5 w-5 animate-spin text-gray-400" />
                    ) : (
                        <>
                            <MdSunny className={`text-orange-500 add-transition ${theme === 'dark' ? '-rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
                            <FaMoon className={`text-amber-300 absolute  add-transition ${theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
                        </>
                    )}
                    <span className='sr-only'>{t("toggle")}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className="bg-background/50">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    {t("light")}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    {t("dark")}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
