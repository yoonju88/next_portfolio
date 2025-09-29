'use client'
import SlideImages from '@/components/works/SlideImages'
import { IconButton } from '@/components/form/Buttons'
import ToggleProperty from '@/components/works/ToggleProperty'
import Description from '@/components/works/Description'
import Tags from '@/components/works/Tags'
export default function DesignDetailsClient({ project, labels }) {

    return (
        <section className=" px-10 mx-auto flex flex-col lg:flex-row items-center justify-center py-20">
            <SlideImages images={project.allImages} />
            <div className="w-full lg:pl-14 lg:py-0 mt-10 lg:mt-0 ">
                <h3 className='text-btn-2 uppercase font-bold animate-slide-down-soft [--anim-delay:300ms]'>{project.category}</h3>
                <h1 className="animate-slide-down-soft [--anim-delay:600ms]">{project.title}</h1>
                <Description description={project.description} aniamtion="animate-slide-down-soft [--anim-delay:900ms]" />
                <div className='mt-8  flex flex-col'>
                    <ToggleProperty
                        title={labels.program}
                        animation='animate-slide-down-soft [--anim-delay:1200ms]'
                        value="item-1"
                    >
                        <Tags
                            tags={project.tags}
                        />
                    </ToggleProperty>
                    <ToggleProperty
                        title={labels.cy}
                        description={project.duration}
                        animation='animate-slide-down-soft [--anim-delay:1500ms]'
                        value="item-2"
                    />
                    {project.companyName ? (
                        <ToggleProperty
                            title={labels.company}
                            description={project.companyName}
                            animation='animate-slide-down-soft [--anim-delay:1800ms]'
                            value="item-3"
                        />
                    ) : ('')}
                </div>
            </div>
        </section>
    )
}