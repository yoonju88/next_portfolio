import React from 'react'

export default function Title({ title, children }) {
    return (
        <span className='flex items-center justify-center gap-3 mb-20'>
            {children}
            <h2>{title}</h2>
        </span>
    )
}
