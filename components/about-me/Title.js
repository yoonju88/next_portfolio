import React from 'react'

export default function Title({ title, children }) {
    return (
        <div className='flex items-center text-center gap-3 mb-20'>
            {children}
            <h2>{title}</h2>
        </div>
    )
}
