import React from 'react'

export default function ServiceList({ data }) {
    return (
        <div className="flex flex-wrap md-flex-wrap-2 -m-4 text-center">
            {data.map((item) => {
                return (
                    <div key={item.title} className="p-3 md:w-1/4 sm:w-1/2 w-full">
                        <div className="flex relative">
                            <div className="absolute inset-0 bg-background flex flex-col gap-4 justify-center items-center rounded-lg border-2 border-foreground/50 ">
                                {item.icon}
                                <h2 className="text-xl text-foreground/80 font-semibold">{item.title}</h2>
                            </div>
                            <div className="flex relative ">
                                <div className="px-4 py-6 relative z-10 w-full rounded-lg border-4 border-primary/80 bg-background opacity-0 hover:opacity-100">
                                    <h2 className="text-base text-foreground/80 font-semibold">{item.title}</h2>
                                    <p className="leading-relaxed text-foreground/80 text-sm mt-2">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
