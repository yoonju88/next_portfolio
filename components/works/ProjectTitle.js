import React from 'react'

export default function ProjectTypeTitle({ title, description }) {
    return (
        <div className="flex flex-col items-center gap-10  w-full mb-20">
            <div className="mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 capitalize">{title}</h1>
            </div>
            <p className="lg:w-2/3 w-full leading-relaxed ">{description}</p>
        </div>
    )
}
