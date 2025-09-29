import React from 'react'

export default function layout({ children }) {
    return (
        <div className='flex flex-col justify-center items-center'>
            {children}
        </div>
    )
}
