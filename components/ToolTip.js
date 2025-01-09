import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import React from 'react'

export default function ToolTip({ text, children, className }) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className={className}>
                    {children}
                </TooltipTrigger>
                <TooltipContent>
                    {text}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
