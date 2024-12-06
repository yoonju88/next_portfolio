'use client'
import React from 'react'
import { useParams } from 'next/navigation'

export default function designDetailspage({ params }) {
    const { id } = useParams()
    if (!id) { < NotFoundPage /> }

    return (
        <h1 className="text-4xl font-semibold">
            Design details page for id value : {id}
        </h1>
    )
}
