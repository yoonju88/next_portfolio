import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function DesignList({ id, cover, name, type }) {
    return (
        <article className="lg:w-1/3 sm:w-1/2 p-4 ">
            <Link
                href={`/works/design/${id}`}
                className="flex relative set-bigCardShadow rounded-lg overflow-hidden"
            >
                <Image alt={name} className="absolute inset-0 w-full h-full object-cover object-center bg-gray-100" src={cover} />
                <div className="px-8 py-24 relative rounded-lg text-center z-10 w-full border-4 border-primary bg-foreground/70 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-background mb-1 capitalize">{type}</h2>
                    <h1 className="title-font text-3xl font-medium text-background mb-3">{name}</h1>
                </div>
            </Link>
        </article>
    )
}
