import React from 'react'

export default function ExperienceLists({ data }) {
    return (
        <div className="flex flex-col lg:gap-4 mb:gap-2 sm:gap-2"  >
            {data.map((item) => {
                const startDate = item.duration.start
                const endDate = item.duration.end
                return (

                    <div className="h-full flex items-start lg:flex-row md:flex-col sm:flex-col" key={item.jobTitle}>
                        <div className="w-30 flex-shrink-0 pt-1 flex flex-col text-center leading-none mb-1">
                            <span className="text-gray-500 border-gray-200 text-xs font-semibold">{startDate} - {endDate}</span>
                        </div>
                        <div className="flex-grow lg:pl-7 md:pl-0 sm:pl-0">
                            <h1 className="title-font text-base font-semibold text-gray-700 mb-1">
                                {item.jobTitle}
                            </h1>
                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                <span className='pr-2'>
                                    {item.companyName}
                                </span>
                                <span className="border-l-2 pl-2 border-gray-400">
                                    {item.address}
                                </span>
                            </h2>
                            <p className="leading-relaxed mb-2 text-sm text-gray-700">
                                {item.description}
                            </p>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}