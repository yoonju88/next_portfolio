
import React from 'react'
import Image from 'next/image'

export default function SkillList({ title, icon, filtered }) {

    return (
        <div
            className={`group h-28 w-32 rounded-lg border-2 border-gray-300 flex flex-col justify-center items-center
                bg-hover hover:border-white add-transition hover:scale-110 ${filtered ? 'list-visible' : 'list-hidden'}`}
        >
            <Image
                src={icon}
                alt='icon'
                width="100"
                height="100"
                className="w-11 object-cover grayscale group-hover:grayscale-0 rounded-md group-hover:scale-110"
                loading="lazy"
            />
            < h4 className="mt-3 text-sm text-foreground/80 group-hover:text-white group-hover:font-medium group-hover:text-xs">{title}</h4>
        </div >
    )
}
