import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function EducationList({ data }) {
    return (
        <>
            {data.map((item) => {
                const startDate = item.duration.start
                const endDate = item.duration.end
                return (
                    <div className=" w-[98%] py-4 px-4 flex items-center justify-center bg-gray-50 rounded-xl drop-shadow-md" key={item.name}>
                        <div className="w-12 h-12 inline-flex items-center rounded-full bg-white flex-shrink-0 overflow-hidden drop-shadow-md">
                            <Link href={item.link} target="_blank">
                                <Image src={item.image} alt="school logo" className="w-full object-cover animation-set-image" />
                            </Link>
                        </div>
                        <div className="flex-grow pl-7">
                            <p className='text-gray-500 text-xs font-semibold mb-0.5'>
                                {startDate} - {endDate}
                            </p>
                            <h2 className="text-gray-700 text-base title-font font-semibold mb-0.5 flex flex-wrap items-center">
                                {item.name}  &nbsp;
                                <span className="tracking-widest text-xs font-medium" > ({item.degree})</span>
                            </h2>
                            <h3 className="tracking-widest text-xs title-font font-medium text-gray-500">
                                <Link href={item.link} target="_blank" className='pr-2 hover:font-semibold'>
                                    {item.schoolName}
                                </Link>
                                <span className="border-l-2 pl-2 border-gray-400 text-wrap">
                                    {item.address}
                                </span>
                            </h3>
                        </div>
                    </div>
                )

            })}
        </>
    )
}
