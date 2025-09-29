import { Skeleton } from "../ui/skeleton";

export function SkeletonCard() {
    return (
        <div>
            <Skeleton className='h-[300px] rounded-md' />
            <Skeleton className='h-4 mt-2 w-3/4' />
            <Skeleton className='h-4 mt-2 w-1/2' />
        </div>
    )
}

export default function WorksCardLoading() {
    return (
        <div className='mt-4 px-10 gap-8 grid grid-cols-1 lg:grid-cols-2'>
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}