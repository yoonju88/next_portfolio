import { Skeleton } from "../ui/skeleton";
import React from 'react'

export default function LoadingCard() {
    return (
        <div className=" w-[90%] flex items-center justify-center">
            <div className="w-[50%]">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
            </div>
            <div className="w-[30%]">
                <Skeleton className="h-[300px] w-full rounded-xl" />
            </div>
        </div>
    )
}







