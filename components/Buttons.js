import { Button } from "@/components/ui/button"
import Link from "next/link"


export const ButtonLink = ({ href, name, children }) => {

    return (
        <div className="border-t border-gray-200 flex justify-center py-4">
            <Button variant="link" size="sm" className="mt-1">
                <Link href={href} target='_blank' className="flex flex-inline items-center gap-2">
                    {name}
                    {children}
                </Link>
            </Button>
        </div >
    )
}
