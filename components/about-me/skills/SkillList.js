import React from 'react'
import Image from 'next/image'

export default function SkillList({ id, title, icon }) {
    return (
        <div
            key={id}
            className="group h-28 w-32 rounded-lg border-2  border-gray-300 flex flex-col justify-center items-center relative overflow-hidden transform transition-all duration-300 
                hover:border-primary/70 hover:border-4 hover:bg-primary/30 hover:scale-110 set-shadow"
        >
            <Image src={icon} alt='icon' width="100" height="100" className="w-11 rounded-sm object-cover grayscale group-hover:grayscale-0
            " />
            < h4 className="mt-3 text-sm text-foreground/80 font-sm group-hover:font-semibold">{title}</h4>
        </div >
    )
}
