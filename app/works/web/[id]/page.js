'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import NotFoundPage from '@/app/not-found'
import { worksData } from '@/utils/worksData'
import Image from 'next/image'
import { IoLogoGithub } from "react-icons/io";
import Link from "next/link"
import { ButtonLink } from '@/components/Buttons'
import CalculateDays from '@/components/works/CalculateDays'
import Tags from '@/components/works/Tags'
import { ReturnButton } from '@/components/Buttons'
import ToggleProperty from '@/components/works/design/ToggleProperty'

export default function WebDetailsPage({ params }) {
    const { id } = useParams()
    if (!id) { < NotFoundPage /> }

    const project = worksData.find((work) => work.id === id)
    if (!project) { < NotFoundPage /> }

    return (
        <>
            <section>
                <div className="container px-5 py-10 mx-auto ">
                    <div className="lg:w-full mx-auto flex flex-wrap overflow-hidden items-center justify-center">
                        <div className="overflow-hidden lg:w-1/2 rounded-lg">
                            <Link href={project.link} target="_blank">
                                <Image alt={project.title} className="w-full lg:h-auto object-cover object-center rounded-lg transform transition-scale duration-300 hover:scale-105" src={project.image} />
                            </Link>
                        </div>
                        <div className="lg:w-1/2 w-full md:w-[90%] lg:pl-10 lg:py-0 mt-10 lg:mt-0 ">
                            <h1 className="title-font font-medium mb-1 text-3xl capitalize">{project.title}</h1>
                            <p className="leading-relaxed mt-3 text-sm mb-4">{project.description}</p>
                            <ToggleProperty
                                title="Project duration ?"
                            >
                                <CalculateDays
                                    startDate={project.duration.startDate}
                                    endDate={project.duration.endDate}
                                />
                            </ToggleProperty>
                            <ToggleProperty
                                title="Technics i used?"
                            >
                                <Tags
                                    tags={project.tags}
                                />
                            </ToggleProperty>
                            <div className=" flex lg:justify-start justify-center mt-8">
                                <ButtonLink
                                    href={project.link}
                                    name="Go to GitHub"
                                    variant="link"
                                    size="sm"
                                >
                                    <IoLogoGithub size="22" />
                                </ButtonLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            <div className='fixed right-10 bottom-10'>
                <ReturnButton href={'/works/web'} />
            </div>
        </>
    )
}
