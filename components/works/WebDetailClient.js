
'use client'
import Image from 'next/image'
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link"
import { ButtonLink } from '@/components/form/Buttons'
import CalculateDays from '@/components/works/CalculateDays'
import Tags from '@/components/works/Tags'
//import { IconButton } from '@/components/form/Buttons'
import ToggleProperty from '@/components/works/design/ToggleProperty'


export default function WebDetailsClient({ project, labels }) {
    return (
        <section className="px-10" >
            <article className="mx-auto flex flex-col lg:flex-row overflow-hidden items-center justify-center py-20">
                <Link href={project.link} target="_blank" className="overflow-hidden w-full rounded-lg">
                    <Image alt={project.title} className="w-full lg:h-auto object-cover object-center rounded-lg transform transition-scale duration-300 hover:scale-105" src={project.image} />
                </Link>
                <div className="w-full lg:pl-14 lg:py-0 mt-10 lg:mt-0 ">
                    <h1 className="title-font font-medium mb-1 text-4xl capitalize">{project.title}</h1>
                    <p className="leading-relaxed mt-6 text-md mb-4">{project.description}</p>
                    <div className="flex flex-col gap-2">
                        <ToggleProperty
                            title={labels.duration}
                        >
                            <CalculateDays
                                startDate={project.duration.startDate}
                                endDate={project.duration.endDate}
                                days={labels.days}
                            />
                        </ToggleProperty>
                        <ToggleProperty
                            title={labels.techs}
                        >
                            <Tags
                                tags={project.tags}
                            />
                        </ToggleProperty>
                    </div>
                    <div className=" flex lg:justify-start justify-center mt-8">
                        <ButtonLink
                            href={project.link}
                            name={labels.link}
                            variant="navigate"
                            size="default"
                        >
                            <IoLogoGithub size="30" />
                        </ButtonLink>
                    </div>
                </div>
            </article>
            {/* <span className="fixed top-20 left-20">
                <IconButton
                    href={'/works/web'}
                />
            </span> */}
        </section >
    )
}