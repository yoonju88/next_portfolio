import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function TypeCard({ projectTypes }) {
    return (
        <div className="flex flex-wrap m-4">
            {projectTypes.map((project) => {
                return (
                    <div class="lg:w-1/2 p-7 ">
                        <div class="flex relative">
                            <Image alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center rounded-lg" src={project.image} />
                            <div class="px-8 py-14 relative z-10 w-full border-4 border-indigo-500 bg-white opacity-0 hover:opacity-100 rounded-lg">
                                <h1 class="tracking-widest text-center text-lg title-font font-medium text-indigo-500 mb-1 capitalize">{project.name}</h1>
                                <p class="leading-relaxed mt-2 text-xs">{project.description}</p>
                                <Link href="#" class="mt-4 text-indigo-500 inline-flex items-center">Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
