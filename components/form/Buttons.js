'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { useState, useEffect } from 'react'

export const ButtonLink = ({ href, name, size, variant, children }) => {

    return (
        <Button variant={variant} size={size} className="mt-1" >
            <Link href={href} target='_blank' className="flex flex-inline items-center gap-2">
                {name}
                {children}
            </Link>
        </Button >
    )
}

export const ButtonNavigate = ({ href, name, size, variant, children }) => {
    return (
        <div className="flex justify-center">
            <Button variant={variant} size={size}>
                <Link href={href} className="capitalize flex items-center">
                    {name}
                </Link>
                {children}
            </Button>
        </div>
    )
}

export const FilterButton = ({ active, name, onClick }) => {
    return (
        <Button
            onClick={onClick}
            className={`${active ? "bg-chart-2 text-white border-none shadow-md shadow-chart-1" : "bg-background text-foreground"}`}
            variant="navigate"
            size='default'
        >
            {name}
        </Button>
    )
}

export const IconButton = ({ href, style }) => {
    return (
        <button className={`flex flex-col py-2 px-2 rounded-lg bg-chart-2 shadow-lg add-transition hover:bg-chart-2/80 hover:shadow-inner hover:shadow-violet-950 ${style}`} >
            <Link href={href}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-white ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
            </Link>
        </button >
    )
}

export const ScrollTopButton = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            setIsVisible(window.scrollY > 300)
        }
        window.addEventListener("scroll", toggleVisibility)
        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        if (isVisible) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            })
        }
    }

    return (
        <button
            className={`flex flex-col fixed bottom-52 right-8 py-1.5 px-1.5 rounded-lg bg-chart-2 shadow-lg add-transition hover:bg-chart-2/80 hover:shadow-inner hover:shadow-violet-950 hover:animate-none ${isVisible ? "opacity-100 scale-100 animate-bounce" : "opacity-0 scale-0"}`}
            onClick={scrollToTop}
            disabled={!isVisible}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-8 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 18.75 7.5-7.5 7.5 7.5" />
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 7.5-7.5 7.5 7.5" />
            </svg>
        </button>
    )
}

export const ButtonSubmit = ({ type, disabled, children, loading }) => {
    return (
        <Button
            type={type}
            disabled={disabled}
            variant="navigate"
            className={`min-w-[120px] flex justify-center ${loading ? "bg-chart-2" : "bg-background"}`}
        >
            {children}
        </Button>
    )
}
