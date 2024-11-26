'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import NotFoundPage from '@/app/not-found'
import { worksData } from '@/utils/worksData'
import Image from 'next/image'
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link"
import { Button } from '@/components/ui/button'

export default function WebDetailsPage({ params }) {
    const { id } = useParams()
    if (!id) { < NotFoundPage /> }
    const project = worksData.find((work) => work.id === id)
    if (!project) { < NotFoundPage /> }
    const startDate = project.duration.startDate
    const endDate = project.duration.endDate

    const formatDate = (date) => {
        const d = new Date(date);
        return d.toLocaleDateString('en-EU', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };
    const formattedStartDate = formatDate(startDate)
    const formattedEndDate = formatDate(endDate)
    const tags = project.tags

    const calculatedPeriod = (start, end) => {
        const startDateStringArray = start.split('-');
        const endDateStringArray = end.split('-');

        var startDate = new Date(startDateStringArray[0], startDateStringArray[1], startDateStringArray[2]);
        var endDate = new Date(endDateStringArray[0], endDateStringArray[1], endDateStringArray[2]);

        const diffInMs = Math.abs(endDate - startDate);
        const result = diffInMs / (1000 * 60 * 60 * 24);

        console.log(`duration : ${result}`)
        return result;
    };

    const animationSet = 'transform transition-all duration-300'

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-10 mx-auto ">
                <div className="lg:w-4/5 mx-auto flex flex-wrap overflow-hidden items-center">
                    <div className="overflow-hidden lg:w-1/2 rounded-lg">
                        <Link href={project.link} target="_blank">
                            <Image alt={project.title} className="w-full lg:h-auto object-cover object-center rounded-lg transform transition-scale duration-300 hover:scale-105" src={project.image} />
                        </Link>
                    </div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-0 mt-4 lg:mt-0">
                        <h1 className="title-font font-medium mb-1 text-foreground text-2xl">{project.title}</h1>
                        <p className="leading-relaxed text-foreground mt-3 text-sm">{project.description}</p>
                        <div class="flex border-t border-gray-200 py-2 mt-4 items-center">
                            <span class="text-secondary-foreground text-sm">Project duration</span>
                            <span class="ml-auto text-xs text-secondary-foreground">{formattedStartDate} - {formattedEndDate} ({calculatedPeriod(startDate, endDate)} days) </span>
                        </div>
                        <div class="flex border-t justify-between border-gray-200 py-2">
                            <span class="text-secondary-foreground text-sm">technics</span>
                            <ul className="flex gap-1 items-center ">
                                {tags.map((tag) => {
                                    return (
                                        <li key={tag} className={`text-xs text-foreground py-1 px-1.5 font-normal rounded ${animationSet} hover:font-medium hover:bg-accent`} >{tag}</li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="border-t border-gray-200 flex justify-center py-4">
                            <Button variant="link" size="sm" className="mt-1" >
                                <Link href={project.link} target='_blank' className="flex flex-inline items-center gap-2" > Go to GitHub
                                    <IoLogoGithub className="text-black" size="22" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
