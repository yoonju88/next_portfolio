import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import { worksData } from '@/utils/worksData'
import WorksCardLoading from '@/components/loading/WorksCardLoading'
import DesignList from '@/components/works/design/DesignList'
import WorkList from '@/components/works/design/DesignList'

export default async function webPage() {
    return (
        <div className='flex flex-col justify-center mt-20 mb-40'>
            <ProjectTitle
                title="development web"
                description="I built creative and functional web applications using modern web technologies such as React, Nextjs to design user-friendly interfaces. I focused on integrating various APIs and databases to enhance the performance and user experience of the web applications."
            />
            <Suspense fallback={<WorksCardLoading />}>
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center pt-10 w-full px-10 ">
                    {worksData.map((item) => {
                        return (
                            <WorkList
                                key={item.id}
                                id={item.id}
                                name={item.title}
                                cover={item.image}
                                type={item.type}
                                link={`/works/web/${item.id}`}
                            />
                        )
                    })}
                </section >
            </Suspense>
        </div>
    )
}