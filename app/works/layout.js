import React from 'react'
import MenuNavigate from '@/components/MenuNavigate'

export default function layout({ children }) {
    return (
        <div >
            {/* <div className='absolute left-60 -top-6 '>
                <MenuNavigate />
            </div> */}

            <div className='flex flex-col justify-center items-center mt-32'>
                {children}
            </div>

        </div >
    )
}
