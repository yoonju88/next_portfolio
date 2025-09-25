'use client'
import SlideImages from '@/components/works/design/SlideImages'
import { IconButton } from '@/components/form/Buttons'
import ToggleProperty from '@/components/works/design/ToggleProperty'
import Description from '@/components/works/Description'
import Tags from '@/components/works/Tags'
export default function DesignDetailsClient({ project, labels }) {

    return (
        <section className="px-10">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-center py-20">
                <SlideImages images={project.allImages} />
                <div className="w-full lg:pl-14 lg:py-0 mt-10 lg:mt-0 ">
                    <h3 className='text-btn-2 uppercase font-bold'>{project.category}</h3>
                    <h1>{project.title}</h1>
                    <Description description={project.description} />
                    <div className='mt-8  flex flex-col gap-4'>
                        <ToggleProperty
                            title={labels.program}
                        >
                            <Tags
                                tags={project.tags}
                            />
                        </ToggleProperty>
                        <ToggleProperty
                            title={labels.cy}
                            description={project.duration}
                        />
                        {project.companyName ? (
                            <ToggleProperty
                                title={labels.company}
                                description={project.companyName}
                            />
                        ) : ('')}
                    </div>
                </div>
            </div>
            {/* <span className="fixed top-40 left-20">
                <IconButton
                    href={'/works/design'}
                />
            </span> */}
        </section>
    )
}