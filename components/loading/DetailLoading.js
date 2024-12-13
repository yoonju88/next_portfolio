import { Skeleton } from "../ui/skeleton";
import React from 'react'

export default function DetailLoadingCard() {
    return (
        <div className=" w-[90%] flex items-center justify-center">
            <div className="w-[50%]">
                <Skeleton className="h-[500px] w-full rounded-xl" />
            </div>
            <div className="w-[40%]">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>
        </div>
    )
}
