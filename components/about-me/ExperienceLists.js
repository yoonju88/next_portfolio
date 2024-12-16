import React from 'react'

export default function ExperienceLists({ startDate, endDate, jobTitle, companyName, address, description }) {
    return (

        <div className=" group h-full flex items-start lg:flex-row md:flex-col sm:flex-col card-set-shadow">
            <div className="w-30 flex-shrink-0 pt-1 flex flex-col text-center leading-none mb-1">
                <span className="text-xs font-semibold text-foreground/75 group-hover:text-white">{startDate} - {endDate}</span>
            </div>
            <div className="flex-grow lg:pl-7 md:pl-0 sm:pl-0">
                <h1 className="title-font text-base font-semibold mb-1 uppercase group-hover:text-white">
                    {jobTitle}
                </h1>
                <h2 className="tracking-widest text-xs title-font font-medium mb-1 group-hover:text-white">
                    <span className='pr-2'>
                        {companyName}
                    </span>
                    <span className="border-l pl-2 border-foreground/60 group-hover:border-white">
                        {address}
                    </span>
                </h2>
                <p className="leading-relaxed mb-2 text-sm group-hover:text-white">
                    {description}
                </p>
            </div>
        </div>
    )
}
