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
                <Button variant='outline' size='sm' className="h-[2.2rem] w-[2.5rem] flex items-center justify-center">
                    {theme === 'dark' ? (
                        <FaMoon className='absolute h-[1.2rem] w-[1.2rem] text-yellow-400' />
                    ) : (
                        <MdSunny className='h-[1.2rem] w-[1.2rem] text-orange-500' />
                    )}
                    <span className='sr-only'>Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
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
