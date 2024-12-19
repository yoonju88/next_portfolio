import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EducationList({ startDate, endDate, link, image, name, schoolName, address, degree }) {
    return (
        <div className=" w-[98%] flex items-center justify-center hover-effect-card py-6 px-4 rounded-lg group hover:scale-105 add-transition ">
            <div className="w-12 h-12 inline-flex items-center bg-white rounded-full flex-shrink-0 overflow-hidden shadow-md shadow-chart-1 add-transition group-hover:scale-110 ">
                <Link href={link} target="_blank">
                    <Image src={image} alt="school logo" className="w-full object-cover " />
                </Link>
            </div>
            <div className="flex-grow pl-7">
                <p className='text-xs font-semibold mb-0.5 text-chart-2'>
                    {startDate} - {endDate}
                </p>
                <h2 className=" text-base title-font font-semibold mb-0.5 flex flex-wrap items-center uppercase ">
                    {name}  &nbsp;
                    <span className="tracking-widest text-xs font-medium " > ({degree})</span>
                </h2>
                <h3 className="tracking-widest text-xs title-font font-semibold text-chart-2">
                    <Link href={link} target="_blank" className='pr-2'>
                        {schoolName}
                    </Link>
                    <span className="border-l pl-2 border-chart-2 text-wrap">
                        {address}
                    </span>
                </h3>
            </div>
        </div>
    )
}
