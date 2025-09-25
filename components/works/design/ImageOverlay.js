import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ImageOverlay({ cover, name, type, link, important = false, className }) {
    return (
        <article className="w-full h-[450px]">
            <Link
                href={link}
                className="group relative block rounded-lg overflow-hidden h-full w-full"
            >
                <Image
                    alt={name}
                    fill
                    className={`absolute inset-0 object-cover object-top bg-gray-100 transform transition-all duration-300 group-hover:scale-105 ${className}`}
                    src={cover}
                    priority={important}                         // LCP 후보면 true
                    loading={important ? "eager" : "lazy"}
                    fetchPriority={important ? "high" : "auto"}
                />
                <div className="flex flex-col items-center justify-center text-center relative rounded-lg w-full h-full z-10 bg-btn-2/60 opacity-0 group-hover:opacity-100 group-hover:shadow-md group-hover:shadow-btn-1 group-hover:border-2 group-hover:border-btn-2">
                    <h2 className="text-white text-shadow-lg uppercase break-words overflow-wrap">{name}</h2>
                </div>
            </Link>
        </article>
    )
}
