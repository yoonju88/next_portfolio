import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import React from 'react'

export default function CardHover({ text, children }) {
    return (
        <HoverCard>
            <HoverCardTrigger>
                {children}
            </HoverCardTrigger>
            <HoverCardContent>
                {text}
            </HoverCardContent>
        </HoverCard>
    )
}
