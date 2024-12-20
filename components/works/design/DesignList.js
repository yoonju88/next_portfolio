import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DesignList({ id, cover, name, type, link }) {
    return (
        <article className="lg:w-1/3 md:w-1/2 w-full p-4">
            <Link
                href={link}
                className="group flex relative rounded-lg overflow-hidden "
            >
                <Image alt={name} className="absolute inset-0 w-full h-full object-cover object-center bg-gray-100 transform transtion-all duration-300 group-hover:scale-105" src={cover} />
                <div className="px-8 py-24 relative rounded-lg text-center z-10 w-full bg-foreground/70 opacity-0 group-hover:opacity-100 group-hover:shadow-md group-hover:shadow-chart-1 group-hover:border-4 group-hover:border-chart-2">
                    <h2 className="tracking-widest text-sm title-font font-semibold text-background/80 mb-0.5 uppercase">{type}</h2>
                    <h1 className="title-font text-3xl font-medium text-background mb-3 uppercase">{name}</h1>
                </div>
            </Link>
        </article>
    )
}
