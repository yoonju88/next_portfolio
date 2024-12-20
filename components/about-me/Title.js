import React from 'react'

export default function Title({ title, children }) {
    return (
        <div className='flex items-center gap-3 mb-6'>
            {children}
            <h1 className="text-2xl font-semibold uppercase">{title}</h1>
        </div>
    )
}
