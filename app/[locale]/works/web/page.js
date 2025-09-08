import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import { worksData } from '@/utils/worksData'
import WorksCardLoading from '@/components/loading/WorksCardLoading'
import WorkList from '@/components/works/design/DesignList'
import { getTranslations } from 'next-intl/server'

export default async function webPage({ params }) {
    const { locale } = await params
    const t = await getTranslations({ locale })
    return (
        <div className='flex flex-col justify-center mt-20 mb-40'>
            <ProjectTitle
                title={t("web.title")}
                description={t("web.description")}
            />
            <Suspense fallback={<WorksCardLoading />}>
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center mt-16 w-full px-10 ">
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