'use client'
import { useTheme } from 'next-themes'
import { FaMoon } from "react-icons/fa";
import { Button } from "@/components/ui/button"
import { MdSunny } from "react-icons/md";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function DarkMode() {
    const { theme, setTheme } = useTheme()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant='outline' size='icon' className="flex items-center justify-center hover:shadow-inner hover:shadow-chart-2/50">
                    {theme === 'dark' ? (
                        <FaMoon className='text-yellow-400' />
                    ) : (
                        <MdSunny className='text-orange-500' />
                    )}
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className="bg-background/50">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    Dark
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
