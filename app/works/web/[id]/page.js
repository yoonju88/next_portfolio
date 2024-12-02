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
import ProjectDetailContainer from '@/components/works/ProjectDetailContainer'

export default function WebDetailsPage({ params }) {
    const { id } = useParams()
    if (!id) { < NotFoundPage /> }

    const project = worksData.find((work) => work.id === id)
    if (!project) { < NotFoundPage /> }

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
                        <h1 className="title-font font-medium mb-1 text-3xl capitalize">{project.title}</h1>
                        <p className="leading-relaxed mt-3 text-sm mb-4">{project.description}</p>
                        <ProjectDetailContainer >
                            <CalculateDays
                                startDate={project.duration.startDate}
                                endDate={project.duration.endDate}
                            />
                        </ProjectDetailContainer>
                        <ProjectDetailContainer>
                            <Tags
                                name="technics"
                                tags={project.tags}
                            />
                        </ProjectDetailContainer>
                        <div className="border-t border-gray-200 flex justify-center py-4 ">
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
    )
}
