'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'

export default function Description({ description }) {
    const [isFullDescriptionShown, setIsDescriptionShown] = useState(false)
    const words = description.split('')
    const isLongDescription = words.length > 150

    const toggleDescription = () => {
        setIsDescriptionShown(!isFullDescriptionShown)
    }
    const displayedDescription = isLongDescription && !isFullDescriptionShown ? words.splice(0, 120).join('') + '...' : description

    return (
        <p className={`transition-all duration-300 ${isFullDescriptionShown ? 'max-h-max' : 'max-h-24'}`}>
            {displayedDescription}
            {isLongDescription && (
                <Button
                    variant='ghost'
                    onClick={toggleDescription}
                    size="xs"
                    className='text-btn-1 p-1 py-0.5 font-normal'

                >
                    {isFullDescriptionShown ? 'Show less' : 'Show more'}
                </Button >
            )}
        </p>
    )
}
