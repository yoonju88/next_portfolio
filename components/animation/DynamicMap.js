'use client'
import dynamic from "next/dynamic"
import { Skeleton } from "../ui/skeleton";

export const AnimationLottie = dynamic(() => import('./AnimationLottie'), {
    ssr: false,
    loading: () => <Skeleton className='h-[400px] w-full' />
});