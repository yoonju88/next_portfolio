import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function ToggleProperty({ title, description, children }) {

    return (
        <Accordion type="single" collapsible className="w-full hover-effect-card add-transition px-2 py-1 rounded-lg">
            <AccordionItem value="item-1">
                <AccordionTrigger className="uppercase text-sm pl-2"> {title}</AccordionTrigger>
                <AccordionContent>
                    {description && <p className='ml-2 pb-4 pl-2'>{description}</p>}
                    {children && <div className='ml-2 pb-4'>{children}</div>}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
