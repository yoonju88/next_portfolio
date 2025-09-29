import React from 'react'

export default function ProjectTypeTitle({ title, description }) {
    return (
        <div className="flex flex-col items-center gap-10 w-full">
            <h1 className="animate-slide-down-soft [animation-delay:300ms]">{title}</h1>
            <p className="lg:w-2/3 leading-relaxed text-center w-[90%] animate-slide-down-soft [animation-delay:700ms]">{description}</p>
        </div>
    )
}
