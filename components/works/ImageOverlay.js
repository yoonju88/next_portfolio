import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { formatImageUrlForProxy } from '@/lib/image'

export default function ImageOverlay({ cover, name, link, important = false, className }) {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        if (cover) {
            setImageUrl(formatImageUrlForProxy(cover))
        }
    }, [cover])

    return (
        <article className="w-full lg:h-[450px] md:h-[450px] h-[300px]">
            <Link
                href={link}
                className="group relative block rounded-lg overflow-hidden h-full w-full"
            >
                {imageUrl ? (
                    <Image
                        alt={name}
                        fill
                        sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className={`absolute inset-0 object-cover object-top bg-gray-100 transform transition-all duration-300 group-hover:scale-105 ${className}`}
                        src={imageUrl}
                        unoptimized={true}
                        priority={important}                         // LCP 후보면 true
                        loading={important ? "eager" : "lazy"}
                        fetchPriority={important ? "high" : "auto"}
                    />
                ) : (
                    <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
                )}
                <div className="flex flex-col items-center justify-center text-center relative rounded-lg w-full h-full z-10 bg-btn-2/70 opacity-0 group-hover:opacity-100 group-hover:shadow-md group-hover:shadow-btn-1 group-hover:border-2 group-hover:border-btn-2">
                    <h2 className="text-white uppercase break-words overflow-wrap">{name}</h2>
                </div>
            </Link>
        </article>
    )
}
