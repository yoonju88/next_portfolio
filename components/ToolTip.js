import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link'

import React from 'react'

export default function ToolTip({ text, children, link, className }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={className}>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    <Link href={link} target="_blank">
                        {text}
                    </Link>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
