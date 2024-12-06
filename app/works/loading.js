import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'


export default function loading() {
    return (
        <div className="animate-pulse flex flex-wrap justify-center items-center w-[90%]">
            <Skeleton className="h-[200] min-w-1/3" />
            <Skeleton className="h-[200] min-w-1/3" />
            <Skeleton className="h-[200] min-w-1/3" />
        </div>
    )
}
