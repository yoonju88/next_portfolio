import React from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import ListContainer from '@/components/works/design/ListContainer'
import { typeDesigns, graphicData } from '@/utils/worksData'

export default function DesignPage() {
    return (
        <section className="w-[90%]">
            <ProjectTitle
                title="graphic design"
                description="With over 3 years of experience, I have gained extensive expertise in various fields beyond graphic design, including brand identity development, illustration, and marketing content creation. For each project, I provide creative and effective visual solutions that reflect the client’s vision and goals, focusing on delivering designs that maximize the value of their brand."
            />
            <ListContainer />
        </section>
    )
}
