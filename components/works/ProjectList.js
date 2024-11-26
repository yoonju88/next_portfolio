import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function ProjectList({ works }) {
    return (
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">

            {
                works.map((item) => {
                    return (
                        <div key={item.id} className="p-4 md:w-1/3 sm:mb-0 mb-6 mt-3">
                            <div className="rounded-lg h-60 overflow-hidden">
                                <Link href={`/works/${item.id}`} >
                                    <Image alt={item.title} className="object-cover object-center h-full w-full transform transition duration-300 hover:scale-105" src={item.image} />
                                </Link>
                            </div>
                            <h2 className="text-xl font-medium title-font text-foreground mt-6 transform transition duration-200 hover:font-semibold">{item.title}</h2>
                            <p className="text-base leading-relaxed mt-2 text-foreground">
                                {item.description}
                            </p>
                            <Link className="inline-flex items-center mt-3 text-primary transform transition-all duration-200 hover:font-semibold" href={`/works/${item.id}`} >
                                Learn More
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </Link>
                        </div >
                    )
                })}

        </div >
    )
}
