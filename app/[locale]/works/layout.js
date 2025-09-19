import React from 'react'
import MenuNavigate from '@/components/nav/MenuNavigate'

export default function layout({ children }) {
    return (
        <div >
            {/* <div className='absolute left-12 -top-14 '>
                <MenuNavigate />
            </div> */}
            <div className='flex flex-col justify-center items-center'>
                {children}
            </div>

        </div >
    )
}
