
import React from 'react'
import Image from 'next/image'

export default function SkillCard({ title, icon, filtered }) {

    return (
        <div
            className="group skill-card lg:h-28 lg:w-32 h-[95px] w-[100px] rounded-lg flex flex-col justify-center items-center
                hover:scale-110 hover-effect-card add-transition"
        >
            <Image
                src={icon}
                alt='icon'
                width="100"
                height="100"
                className="w-11 object-cover grayscale group-hover:grayscale-0 rounded-md group-hover:scale-110 add-transition"
                loading="lazy"
            />
            <h4 className="sm:text-md text-[14.5px] mt-3 text-color group-hover:font-medium">{title}</h4>
        </div >
    )
}
