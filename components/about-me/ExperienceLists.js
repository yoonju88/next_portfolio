import React from 'react'

export default function ExperienceLists({ startDate, endDate, jobTitle, companyName, address, description }) {
    return (
        <div className=" group h-full flex items-start lg:flex-row md:flex-col sm:flex-col p-4 rounded-lg add-transition
        hover:scale-105 hover-effect-card">
            <div className="w-30 flex-shrink-0 pt-1 flex flex-col text-center leading-none mb-1">
                <span className="text-xs font-semibold text-foreground/75">{startDate} - {endDate}</span>
            </div>
            <div className="flex-grow lg:pl-7 md:pl-0 sm:pl-0">
                <h3 className="title-font text-base font-semibold mb-1 uppercase ">
                    {jobTitle}
                </h3>
                <p className="tracking-widest text-xs title-font font-medium mb-1">
                    <span className='pr-2'>
                        {companyName}
                    </span>
                    <span className="border-l pl-2 border-foreground/60  ">
                        {address}
                    </span>
                </p>
                <p className="leading-relaxed mb-2 text-sm ">
                    {description}
                </p>
            </div>
        </div>
    )
}
