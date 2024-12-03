import { Button } from "@/components/ui/button"
import Link from "next/link"


export const ButtonLink = ({ href, name, size, variant, children }) => {

    return (
        <Button variant={variant} size={size} className="mt-1" >
            <Link href={href} target='_blank' className="flex flex-inline items-center gap-2 text-background">
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

export const FilterButton = ({ id, active, name, onClick }) => {
    return (
        <button
            key={id}
            onClick={onClick}
            className={`capitalize py-1 px-4 border-2 border-foreground/50 rounded-lg transform transition-all duration-300 ${active ? "bg-primary text-white border-primary/80" : "bg-background text-foreground"}`}
        >
            {name}
        </button>
    )

}

