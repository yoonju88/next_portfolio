import React from 'react'

export default function SkillList({ data }) {
    return (
        <>
            {data.map((item) => {
                return (
                    <div key={item.title} className="flex flex-col items-center">
                        <div
                            className={`py-4 px-8 rounded-lg border-2 border-gray-300 flex flex-col justify-center items-center text-foreground/60 relative overflow-hidden hover:border-primary/70  hover:border-4 ${item.color}`}
                        >
                            {item.icon}
                            <p className="text-sm text-foreground/50 font-semibold mt-3">{item.percentage}</p>
                        </div>
                        <h4 className="mt-2 text-sm text-foreground font-medium">{item.title}</h4>
                    </div>
                )
            })}
        </>
    )
}
