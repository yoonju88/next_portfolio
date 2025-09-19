import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

export default function loading() {
    return (
        <div className='animate-pulse gap-10 flex flex-wrap justify-center items-center px-10'>
            <div className="w-[30%]">
                <Skeleton className="h-[300px] w-full bg-background/20" />
            </div>
            <div className="w-[65%] flex flex-col gap-4 pl-6">
                <Skeleton className="h-[50px] w-full mb-4 bg-background/20" />
                <Skeleton className="h-[30px] w-full bg-background/20" />
                <Skeleton className="h-[30px] w-full bg-background/20" />
                <Skeleton className="h-[30px] w-full bg-background/20" />
                <Skeleton className="h-[30px] w-full bg-background/20" />
                <Skeleton className="h-[30px] w-full bg-background/20" />
            </div>
        </div>
    )
}
