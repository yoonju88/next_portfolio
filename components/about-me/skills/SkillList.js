
import React from 'react'
import Image from 'next/image'

export default function SkillList({ title, icon, filtered }) {

    return (
        <div
            className="group h-28 w-32 rounded-lg border-2 border-chart-2/50 flex flex-col justify-center items-center
                hover:scale-110 hover-effect-card add-transition"
        >
            <Image
                src={icon}
                alt='icon'
                width="100"
                height="100"
                className="w-11 object-cover grayscale group-hover:grayscale-0 rounded-md group-hover:scale-125 add-transition"
                loading="lazy"
            />
            < h4 className="mt-3 text-sm text-foreground/80 group-hover:font-medium">{title}</h4>
        </div >
    )
}
