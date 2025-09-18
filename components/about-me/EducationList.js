import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EducationList({ startDate, endDate, link, image, name, schoolName, address, degree }) {
    return (
        <div className="flex items-center justify-center hover-effect-card py-6 px-4 rounded-lg group">
            <div className="w-12 h-12 inline-flex items-center bg-white rounded-full flex-shrink-0 overflow-hidden shadow-sm shadow-btn-1 add-transition group-hover:scale-105 ">
                <Link href={link} target="_blank">
                    <Image src={image} alt="school logo" className="w-full object-cover " />
                </Link>
            </div>
            <div className="flex-grow pl-7">
                <span className='date mb-0.5'>
                    {startDate} - {endDate}
                </span>
                <h3 className="mb-0.5 flex flex-wrap items-center ">
                    {name}  &nbsp;
                    <span className="tracking-widest sm:text-[14px] text-[12px]"> ({degree})</span>
                </h3>
                <h4>
                    <Link href={link} target="_blank" className='pr-2'>
                        {schoolName}
                    </Link>
                    <span className="border-l pl-2 border-chart-2 text-wrap">
                        {address}
                    </span>
                </h4>
            </div>
        </div>
    )
}
