'use client'
import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

export default function loading() {
    return (
        <div className='animate-pulse flex flex-wrap justify-center items-center w-[90%]'>
            <div className="w-[30%]">
                <Skeleton className="h-[200px] w-full" />
            </div>
            <div className="w-[70%] flex flex-col gap-4 pl-6">
                <Skeleton className="h-[40px] w-full" />
                <Skeleton className="h-[30px] w-full" />
                <Skeleton className="h-[30px] w-full" />
                <Skeleton className="h-[30px] w-full" />
            </div>
        </div>
    )
}
