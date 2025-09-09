import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import WorksCardLoading from '@/components/loading/WorksCardLoading'
import WorkList from '@/components/works/design/WorkList'
import { getTranslations } from 'next-intl/server'
import { getWorks } from '@/lib/getWorks'

export default async function webPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations("web")
    const items = await getWorks(params.locale)

    return (
        <div className='flex flex-col justify-center mt-20 mb-40'>
            <ProjectTitle
                title={t("title")}
                description={t("description")}
            />
            <Suspense fallback={<WorksCardLoading />}>
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center mt-16 w-full px-6 lg:px-10 ">
                    {items.map((item) => {
                        return (
                            <WorkList
                                key={item.id}
                                id={item.id}
                                name={item.title}
                                cover={item.image}
                                type={item.type}
                                link={`/${locale}/works/web/${item.id}`}
                            />
                        )
                    })}
                </section >
            </Suspense>
        </div>
    )
}