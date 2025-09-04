import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import { worksData } from '@/utils/worksData'
import WorksCardLoading from '@/components/loading/WorksCardLoading'
import DesignList from '@/components/works/design/DesignList'

export default async function webPage() {
    return (
        <div className='container flex flex-col justify-center items-center mt-20 mb-40'>
            <ProjectTitle
                title="development web"
                description="I built creative and functional web applications using modern web technologies such as React, Nextjs to design user-friendly interfaces. I focused on integrating various APIs and databases to enhance the performance and user experience of the web applications."
            />
            <Suspense fallback={<WorksCardLoading />}>
                <section className="flex flex-wrap pt-10 w-full ">
                    {worksData.map((item) => {
                        return (
                            <DesignList
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