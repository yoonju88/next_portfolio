import { Skeleton } from "../ui/skeleton";
import React from 'react'

export default function LoadingCard() {
    return (
        <div className=" w-full px-10 flex items-center justify-center gap-20">
            <div className="w-[50%] flex flex-wrap gap-4">
                <Skeleton className="h-10 w-full mb-4" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-6 w-full" />
            </div>
            <div className="w-[50%]">
                <Skeleton className="h-[300px] w-full rounded-xl" />
            </div>
        </div>
    )
}







