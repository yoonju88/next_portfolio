import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Description from './Description'

export default function ProjectList({ works }) {
    return (
        <div className="flex flex-wrap pt-16 sm:-m-4 -mx-4 -mb-10 -mt-4">
            {works.map((item) => {
                return (
                    <div key={item.id} className="p-4 md:w-1/3 sm:mb-0 mb-6 mt-3">
                        <div className="h-[50%] rounded-lg overflow-hidden">
                            <Link href={`/works/web/${item.id}`} >
                                <Image alt={item.title} className="object-cover object-center h-full w-full transform transition duration-300 hover:scale-105" src={item.image} />
                            </Link>
                        </div>
                        <div className="p-4">
                            <h1 className="title-font text-lg font-medium text-foreground mb-3 transform transition duration-300 hover:font-semibol">{item.title}</h1>
                            <Description description={item.description} />
                            <div className="flex items-center flex-wrap ">
                                <Link
                                    className="inline-flex items-center mt-3 text-primary transform transition-all duration-200 hover:font-semibold"
                                    href={`/works/web/${item.id}`}
                                >
                                    Learn More
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}
