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
                <SlideImages images={project.images} />
                <div className="w-full lg:pl-14 lg:py-0 mt-10 lg:mt-0 ">
                    <h2 className='text-chart-2 text-md uppercase font-semibold'>{project.type}</h2>
                    <h1 className="title-font font-medium mb-4 mt-1.5 text-3xl uppercase">{project.title}</h1>
                    <Description description={project.description} />
                    <div className='mt-8 '>
                        <ToggleProperty
                            title={labels.program}
                        >
                            <Tags
                                tags={project.tags}
                            />
                        </ToggleProperty>
                        <ToggleProperty
                            title={labels.cy}
                            description={project.cy}
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