
'use client'

import { IoLogoGithub } from "react-icons/io";
import { IoLogoVercel } from "react-icons/io5";
import { ButtonLink } from '@/components/form/Buttons'
import CalculateDays from '@/components/works/CalculateDays'
import Tags from '@/components/works/Tags'
import SlideImages from "./design/SlideImages";
import ToggleProperty from '@/components/works/design/ToggleProperty'
import FeatureDetail from './FeatureDetail';

function toList(str) {
    return (str || "")
        .split("\n")
        .map(s => s.trim())
        .filter(Boolean);
}
export default function WebDetailsClient({ project, labels }) {
    const adminMode = toList(project.admin);
    const clientMode = toList(project.client);
    const goal = toList(project.goal);

    const sections = [
        { title: project.adminT, data: adminMode },
        { title: project.clientT, data: clientMode },
        { title: project.goalT, data: goal },
    ];

    return (
        <section className="px-10" >
            <article className="mx-auto flex flex-col lg:flex-row overflow-hidden items-center justify-center mt-10">
                <SlideImages images={project.allImages} />
                <div className="w-full lg:pl-14 lg:py-0 mt-10 lg:mt-0 ">
                    <h1 className="title-font font-medium mb-1 text-4xl capitalize">{project.title}</h1>
                    <p className="leading-relaxed mt-6 text-md mb-4">{project.description}</p>
                    <div className="flex flex-col">
                        <ToggleProperty
                            title={labels.duration}
                            stlye=''
                            value='item-1'
                        >
                            <CalculateDays
                                startDate={project.startDate}
                                endDate={project.endDate}
                                days={labels.days}
                            />
                        </ToggleProperty>
                        <ToggleProperty
                            title={labels.techs}
                            stlye=''
                            value='item-1'
                        >
                            <Tags
                                tags={project.tags}
                            />
                        </ToggleProperty>
                        {project.admin &&
                            <ToggleProperty
                                title={labels.features}
                                stlye="scrollbar-custom"
                                value='item-2'
                            >
                                <div className="grid gap-4 px-2">
                                    {sections.map(({ title, data }) => (
                                        <FeatureDetail key={title} title={title} data={data} />
                                    ))}
                                </div>
                            </ToggleProperty>
                        }
                    </div>
                    <div className="flex lg:justify-start justify-center mt-8">
                        <ButtonLink
                            href={project.link1}
                            name={labels.link}
                            variant="navigate"
                            size="default"
                        >
                            <IoLogoGithub size="30" />
                        </ButtonLink>
                        {project.link2 &&
                            <div className="ml-4">
                                <ButtonLink
                                    href={project.link2}
                                    name={labels.link2}
                                    variant="navigate"
                                    size="default"
                                >
                                    <IoLogoVercel size="30" />
                                </ButtonLink>
                            </div>
                        }
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