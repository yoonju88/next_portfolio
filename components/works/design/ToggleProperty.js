import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function ToggleProperty({ title, description, children }) {
    const isObject = typeof description === "object" && description !== null && !Array.isArray(description)

    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
                <AccordionTrigger>&#45; {title}</AccordionTrigger>
                <AccordionContent>
                    {isObject ? (
                        <div className="flex gap-2">
                            {description.map((item, index) => {
                                return (
                                    <span key={`${item}-${index}`} className="inline-block" >{item}</span>
                                )
                            })}
                        </div>
                    ) : (
                        <>
                            {description && <p>{description}</p>}
                            {children && <span>{children}</span>}
                        </>
                    )}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
