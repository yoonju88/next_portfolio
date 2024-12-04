'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'

export default function Description({ description, className }) {
    const [isFullDescriptionShown, setIsDescriptionShown] = useState(false)
    const words = description.split('')
    const isLongDescription = words.length > 150

    const toggleDescription = () => {
        setIsDescriptionShown(!isFullDescriptionShown)
    }
    const displayedDescription = isLongDescription && !isFullDescriptionShown ? words.splice(0, 120).join('') + '...' : description

    return (
        <p className={className}>
            {displayedDescription}
            {isLongDescription && (
                <Button
                    variant='ghost'
                    onClick={toggleDescription}
                    size="xs"
                    className='text-primary p-1 py-0.5 font-normal'

                >
                    {isFullDescriptionShown ? 'Show less' : 'Show more'}
                </Button >
            )}
        </p>
    )
}