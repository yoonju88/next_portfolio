import React from 'react'

export default function ProjectTypeTitle({ title, description }) {
    return (
        <div className="flex flex-wrap items-center w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">{title}</h1>
                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">{description}</p>
        </div>
    )
}
