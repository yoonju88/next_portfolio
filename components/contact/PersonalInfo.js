'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { useMediaQuery } from '@custom-react-hooks/use-media-query'

export default function PersonalInfo({ children, position, name, description, imageTitle }) {
    const [open, setOpen] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button className={`cursor-pointer flex gap-2 px-3 py-1.5 bg-chart-2/80 rounded-t-xl absolute ${position}`}>
                        {children}
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] sm:max-h-[500px] p-8">
                    <DialogHeader >
                        <DialogTitle>{imageTitle}</DialogTitle>
                    </DialogHeader>
                    <div className="w-full h-[300px] relative mb-2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26899.95031897056!2d6.0343307144611575!3d45.92321629727834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b84ebfb378e1b%3A0x408ab2ae4ba9a40!2s74330%20Poisy!5e0!3m2!1sfr!2sfr!4v1734085156119!5m2!1sfr!2sfr"
                            width="100%"
                            height="100%"
                            className='absolute inset-0'
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="map"
                        />
                    </div>
                    <Separator />
                    <DialogHeader >
                        <DialogTitle>{name}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild>
                <button className='cursor-pointer flex gap-2 px-3 py-1.5 bg-chart-2/80 rounded-t-xl absolute -top-14 right-8 '>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 text-background animate-pulse">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>
                </button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <div>
                        <DrawerTitle>Adress</DrawerTitle>
                        <DrawerDescription>
                            74330 Poisy, France
                        </DrawerDescription>
                    </div>
                    <div>
                        <DrawerTitle>Email</DrawerTitle>
                        <DrawerDescription>
                            yoonju.t@gmail.com
                        </DrawerDescription>
                    </div>
                </DrawerHeader>
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
