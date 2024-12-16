import React, { Suspense } from 'react'
import ProjectList from '@/components/works/ProjectList'
import ProjectTitle from '@/components/works/ProjectTitle'
import { worksData } from '@/utils/worksData'
import WorksCardLoading from '@/components/loading/WorksCardLoading'

export default async function webPage() {
    return (
        <section className="w-[90%]">
            <ProjectTitle
                title="development web"
                description="I built creative and functional web applications using modern web technologies such as React, Nextjs to design user-friendly interfaces. I focused on integrating various APIs and databases to enhance the performance and user experience of the web applications."
            />
            <Suspense fallback={<WorksCardLoading />}>
                <ProjectList works={worksData} />
            </Suspense>
        </section>
    )
}