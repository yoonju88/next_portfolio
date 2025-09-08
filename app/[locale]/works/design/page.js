import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import ListContainer from '@/components/works/design/ListContainer'
import { graphicData } from '@/utils/worksData'
import WorksCardLoading from '@/components/loading/WorksCardLoading'


export default function DesignPage() {
    return (
        <section className="flex flex-col justify-center mt-20 mb-20 w-full">
            <ProjectTitle
                title="graphic design"
                description="With over 3 years of experience, I have gained extensive expertise in various fields beyond graphic design, including brand identity development, illustration, and marketing content creation. For each project, I provide creative and effective visual solutions that reflect the client’s vision and goals, focusing on delivering designs that maximize the value of their brand."
            />
            <Suspense fallback={<WorksCardLoading />}>
                <ListContainer data={graphicData} />
            </ Suspense>
        </section >
    )
}
