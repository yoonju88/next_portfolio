import React from 'react'

export default function ExperienceLists({ startDate, endDate, jobTitle, companyName, address, description }) {
    return (
        <section className="group h-full flex items-start lg:flex-row flex-col p-5 rounded-lg hover-effect-card">
            <div className="flex-shrink-0 pt-1 flex flex-col text-center leading-none mb-1 ">
                <span className="date">{startDate} - {endDate}</span>
            </div>
            <div className="flex-grow lg:pl-7 md:pl-0 sm:pl-0 lg:ml-3 ml-0 ">
                <h3 className="mb-1">
                    {jobTitle}
                </h3>
                <h4 className="mb-1">
                    <span className='pr-2'>
                        {companyName}
                    </span>
                    <span className="border-l pl-2 border-btn-1  ">
                        {address}
                    </span>
                </h4>
                <p className="mb-2">
                    {description}
                </p>
            </div>
        </section>
    )
}
