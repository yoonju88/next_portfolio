import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function ToggleProperty({ title, description, children, style, value, animation }) {
    return (
        <Accordion
            type="single"
            collapsible
            className={`w-full py-1 px-2 rounded-lg ${animation}`}
            defaultValue='item-1'
        >
            <AccordionItem value={value}>
                <AccordionTrigger className="uppercase text-sm text-toggle_title hover:font-semibold">{title}</AccordionTrigger>
                <AccordionContent>
                    <div className={`max-h-60 overflow-y-auto ${style}`}>
                        {description && <p className='pb-4'>{description}</p>}
                        {children && <div className='pb-4'>{children}</div>}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion >
    )
}
