'use client'
import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

export default function loading() {
    return (
        <div className='flex flex-wrap justify-center items-center w-[90%]'>
            <div className="w-[30%]">
                <Skeleton className="h-[200px] w-full" />
            </div>
            <div className="w-[70%]">
                <Skeleton className="h-[20px] w-full" />
                <Skeleton className="h-[10px] w-full" />
                <Skeleton className="h-[10px] w-full" />
                <Skeleton className="h-[10px] w-full" />
            </div>
        </div>
    )
}
