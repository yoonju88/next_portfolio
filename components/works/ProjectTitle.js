import React from 'react'

export default function ProjectTypeTitle({ title, description }) {
    return (
        <div className="flex flex-col items-center gap-10  w-full">
            <div className="mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 uppercase">{title}</h1>
            </div>
            <p className="lg:w-2/3 leading-relaxed text-center w-[85%]">{description}</p>
        </div>
    )
}
