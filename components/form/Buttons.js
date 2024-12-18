import { Button } from "@/components/ui/button"
import Link from "next/link"


export const ButtonLink = ({ href, name, size, variant, children }) => {

    return (
        <Button variant={variant} size={size} className="mt-1" >
            <Link href={href} target='_blank' className="flex flex-inline items-center gap-2">
                {name}
                {children}
            </Link>
        </Button >
    )
}

export const ButtonNavigate = ({ href, name, size, variant, children }) => {
    return (
        <div className="flex justify-center">
            <Button variant={variant} size={size}>
                <Link href={href} className="capitalize flex items-center">
                    {name}
                </Link>
                {children}
            </Button>
        </div>
    )
}

export const FilterButton = ({ active, name, onClick }) => {
    return (
        <Button
            onClick={onClick}
            className={`${active ? "bg-primary text-white border-none shadow-md shadow-primary/50" : "bg-background text-foreground"}`}
            variant="navigate"
            size='default'
        >
            {name}
        </Button>
    )
}

export const IconButton = ({ href }) => {
    return (
        <Button variant="default" size="icon" className="mt-1" >
            <Link href={href}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
            </Link>
        </Button >
    )
}

