import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function ToggleProperty({ title, description, children }) {

    return (
        <Accordion type="single" collapsible className="w-full hover-effect-card add-transition py-1 px-3 rounded-lg">
            <AccordionItem value="item-1">
                <AccordionTrigger className="uppercase text-sm"> {title}</AccordionTrigger>
                <AccordionContent>
                    {description && <p className='pb-4'>{description}</p>}
                    {children && <div className='pb-4'>{children}</div>}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
