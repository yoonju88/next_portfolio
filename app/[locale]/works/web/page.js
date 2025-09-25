import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import WorksCardLoading from '@/components/loading/WorksCardLoading'
import { getTranslations } from 'next-intl/server'
//import { getWorks } from '@/lib/getWorks'
import { getWebProjects } from '@/lib/notion'
import ImageOverlay from '@/components/works/design/ImageOverlay'


export const revalidate = 300;

export default async function webPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "web" })
    //const items = await getWorks(params.locale)
    const webDB = await getWebProjects(locale)

    return (
        <div className='flex flex-col justify-center gap-20 mt-20 mb-40'>
            <ProjectTitle
                title={t("title")}
                description={t("description")}
            />
            <Suspense fallback={<WorksCardLoading />}>
                {/* <CarouselOrientation data={webDB} /> */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center mt-16 w-full px-6 lg:px-10 ">
                    {webDB.map((item) => {
                        return (
                            <ImageOverlay
                                key={item.id}
                                id={item.id}
                                name={item.title}
                                cover={item.coverImage}
                                link={`/${locale}/works/web/${item.id}`}
                            />
                        )
                    })}
                </section >
            </Suspense>
        </div>
    )
}