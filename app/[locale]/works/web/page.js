import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import WorksCardLoading from '@/components/loading/WorksCardLoading'
import { getTranslations } from 'next-intl/server'
import { getWebProjects } from '@/lib/notion'
import ImageOverlay from '@/components/works/ImageOverlay'
import Breadcrumbs from '@/components/nav/NavBreadcrumbs'

export const revalidate = 0;// 페이지 방문 시 항상 데이터를 새로 가져옵니다

export default async function webPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "web" })
    //const items = await getWorks(params.locale)
    const webDB = await getWebProjects(locale)
    const n = await getTranslations({ locale, namespace: "menu" })

    return (
        <div className='flex flex-col justify-center mt-20 mb-40'>
            <Breadcrumbs
                home={n('home')}
                homeLink={`/${locale}`}
                works={n('works.label')}
                web={n('works.web')}
                webLink={`/${locale}/works/web`}
                design={n('works.design')}
                designLink={`/${locale}/works/design`}
                currentPage={n('works.web')}
            />
            <ProjectTitle
                title={t("title")}
                description={t("description")}
            />
            <Suspense fallback={<WorksCardLoading />}>
                {/* <CarouselOrientation data={webDB} /> */}
                <section className="animate-slide-down-soft [animation-delay:1000ms] grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center mt-16 w-full px-0 lg:px-10">
                    {webDB.map((item, index) => {
                        const isImportant = index < 2;
                        return (
                            <ImageOverlay
                                key={item.id}
                                id={item.id}
                                name={item.title}
                                cover={item.coverImage}
                                link={`/${locale}/works/web/${item.id}`}
                                important={isImportant}
                            />
                        )
                    })}
                </section >
            </Suspense>
        </div>
    )
}