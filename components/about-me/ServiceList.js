import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function ServiceList({ data }) {
    return (
        <div className="flex flex-wrap -m-4 text-center items-center justify-center">
            {data.map((item) => {
                return (
                    <Accordion key={item.title} type="single" collapsible className="lg:w-1/2 md:w-1/2 sm:w-[90%] lg:pl-20 md:pl-10 sm:pl-0">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <h2 className="group text-xl text-foreground/80 font-semibold inline-flex item-center">
                                    <span className="p-2 bg-foreground rounded-full animation-set-image group-hover:shadow-primary/30 hover:shadow-lg">
                                        {item.icon}
                                    </span>
                                    <span className="pl-3 text-xl text-center self-center group-hover:font-bold group-hover:text-2xl">
                                        {item.title}
                                    </span>
                                </h2>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="leading-relaxed text-foreground/80 text-base mt-2 text-left">{item.description}</p>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )
            })}
        </div>
    )
}


/*
<div key={item.title} className="p-3 md:w-1/4 sm:w-1/2 w-full">
<div className="flex relative">
    <div className="absolute inset-0 bg-background flex flex-col gap-4 justify-center items-center rounded-lg border-2 border-foreground/50 ">
        {item.icon}
        <h2 className="text-xl text-foreground/80 font-semibold">{item.title}</h2>
    </div>
    <div className="flex relative ">
        <div className="px-4 py-6 relative z-10 w-full rounded-lg border-4 border-primary/80 bg-background opacity-0 hover:opacity-100 max-h-[225px] overflow-y-auto">
            <h2 className="text-base text-foreground/80 font-semibold">{item.title}</h2>
            <p className="leading-relaxed text-foreground/80 text-sm mt-2">{item.description}</p>
        </div>
    </div>
</div>
</div>*/