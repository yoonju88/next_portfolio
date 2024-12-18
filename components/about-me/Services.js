import React from 'react'
import ServiceList from './ServiceList';
import { VscCode } from "react-icons/vsc";
import { VscEditorLayout } from "react-icons/vsc"
import { VscSmiley } from "react-icons/vsc";
import { VscDebugRestart } from "react-icons/vsc";

export const serviceData = [
    {
        title: 'Web Development',
        description: "specialize in developing web using React and Next.js, ensuring SEO optimization, fast loading speeds, efficient data management, and seamless user experiences.",
        icon: (<VscCode className="size-6 text-white group-hover:text-primary add-transition" />),
    },
    {
        title: 'Optimization',
        description: "Enhance load speed with code-splitting, lazy loading, image optimization, and improve Lighthouse scores and accessibility through WAI-ARIA compliance.",
        icon: (<VscSmiley className="size-6 text-white group-hover:text-primary add-transition" />),
    },
    {
        title: 'UI/UX Design',
        description: "Build reusable component libraries, ensure consistent design systems, and implement responsive Figma/Sketch designs for seamless user experiences across devices.",
        icon: (<VscEditorLayout className="size-6 text-white group-hover:text-primary add-transition" />),
    },
    {
        title: 'Maintenance',
        description: "Refactor existing code, fix bugs, introduce new features, optimize SEO strategies, and add relevant meta tags to enhance search engine visibility and overall performance.",
        icon: (<VscDebugRestart className="size-6 text-white group-hover:text-primary add-transition" />),
    },
]

export default function Services() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container lg:w-[90%] px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-foreground/80"> My Services</h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center items-center justify-center gap-2">
                    {serviceData.map((item) => {
                        return (
                            <ServiceList
                                key={item.title}
                                title={item.title}
                                icon={item.icon}
                                description={item.description}
                            />
                        )
                    })}
                </div>
            </div>
        </section >
    )
}
