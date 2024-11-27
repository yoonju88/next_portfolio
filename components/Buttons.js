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
                <Link href='/works/web' className="capitalize flex items-center">
                    {name}
                </Link>
                {children}
            </Button>
        </div>
    )

}

