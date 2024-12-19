import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function ServiceList({ title, icon, description }) {
    return (
        <Accordion key={title} type="single" collapsible className="w-full p-4 rounded-2xl add-transition group hover-effect-card hover:scale-105">
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <h2 className="group text-xl text-foreground/80 font-semibold inline-flex item-center">
                        <span className="p-1.5 bg-chart-2 shadow-md shadow-chart-2 rounded-full add-transition group-hover:scale-110 group-hover:shadow-chart-2 group-hover:shadow-inner group-hover:bg-white">
                            {icon}
                        </span>
                        <span className="pl-3 text-xl text-center self-center group-hover:font-bold">
                            {title}
                        </span>
                    </h2>
                </AccordionTrigger>
                <AccordionContent>
                    <p className="leading-relaxed text-foreground/80 text-base mt-2 text-left pl-2 ">{description}</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}
