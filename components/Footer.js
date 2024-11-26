import React from 'react'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-secondary">
            <div>
                <div className="container px-5 py-6 mx-auto flex items-center gap-10 sm:flex-row flex-col">
                    <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 text-xl text-foreground">Yoonju.T </span>
                    </Link>
                    <p className='text-xs sm: mt-2 text-foreground'> ©2024 - Create by TERRENOIRE Yoonju </p>
                </div>
            </div>
        </footer>
    )
}
