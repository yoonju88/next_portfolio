import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EducationList({ startDate, endDate, link, image, name, schoolName, address, degree }) {
    return (
        <div className=" w-[98%] flex items-center justify-center hover-effect-card add-transition py-6 px-4 rounded-lg hover:scale-105">
            <div className="w-12 h-12 inline-flex items-center bg-white rounded-full flex-shrink-0 overflow-hidden drop-shadow-md shadow-gray-500">
                <Link href={link} target="_blank">
                    <Image src={image} alt="school logo" className="w-full object-cover animation-set-image" />
                </Link>
            </div>
            <div className="flex-grow pl-7">
                <p className='text-xs font-semibold mb-0.5'>
                    {startDate} - {endDate}
                </p>
                <h2 className=" text-base title-font font-semibold mb-0.5 flex flex-wrap items-center uppercase ">
                    {name}  &nbsp;
                    <span className="tracking-widest text-xs font-medium" > ({degree})</span>
                </h2>
                <h3 className="tracking-widest text-xs title-font font-medium ">
                    <Link href={link} target="_blank" className='pr-2 hover:font-semibold'>
                        {schoolName}
                    </Link>
                    <span className="border-l pl-2 border-foreground/60 text-wrap">
                        {address}
                    </span>
                </h3>
            </div>
        </div>
    )
}
