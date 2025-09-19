
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Reveal from "../ScrollReveal/Reveal"
import CardReveal from "../ScrollReveal/cardReveal"


export default function ServiceList({ title, icon, description }) {

    return (
        <Reveal y={20} duration={0.6} start="top 85%" itemSelector={null}>
            <Accordion
                key={title}
                type="single"
                collapsible
                className="w-[97%] p-4 rounded-2xl group hover-effect-card"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <CardReveal>
                            <h3 className="group text-xl text-foreground/80 font-semibold inline-flex item-center">
                                <span className="p-1.5 ih-icon bg-btn-1 shadow-sm shadow-btn-1 rounded-full add-transition group-hover:shadow-btn-1 group-hover:shadow-inner group-hover:bg-btn-2">
                                    {icon}
                                </span>
                                <span className="pl-3 sm:text-xl ih-title text-lg text-center self-center group-hover:font-bold">
                                    {title}
                                </span>
                            </h3>
                        </CardReveal>
                    </AccordionTrigger>
                    <AccordionContent>
                        <p className="mt-2 text-left pl-2">{description}</p>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </Reveal>
    )
}
