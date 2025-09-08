import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function WorkList({ cover, name, type, link }) {
    return (
        <article className="w-full h-[450px]">
            <Link
                href={link}
                className="group relative block rounded-lg overflow-hidden h-full w-full"
            >
                <Image alt={name} className="absolute inset-0 w-full h-full object-cover object-center bg-gray-100 transform transition-all duration-300 group-hover:scale-105" src={cover} />
                <div className="flex flex-col items-center justify-center text-center relative rounded-lg w-full h-full z-10 bg-foreground/70 opacity-0 group-hover:opacity-100 group-hover:shadow-md group-hover:shadow-chart-1 group-hover:border-4 group-hover:border-chart-2">
                    <h2 className="tracking-widest text-sm title-font font-semibold  w-full text-background/80 mb-0.5 uppercase">{type}</h2>
                    <h1 className="title-font text-3xl font-medium text-background mb-3 uppercase break-words overflow-wrap">{name}</h1>
                </div>
            </Link>
        </article>
    )
}
