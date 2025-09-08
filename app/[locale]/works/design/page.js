import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import ListContainer from '@/components/works/design/ListContainer'
import { graphicData } from '@/utils/worksData'
import WorksCardLoading from '@/components/loading/WorksCardLoading'
import { getTranslations } from 'next-intl/server'

export default async function DesignPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale })
    return (
        <section className="flex flex-col justify-center mt-20 mb-20 w-full">
            <ProjectTitle
                title={t("design.title")}
                description={t("design.description")}
            />
            <Suspense fallback={<WorksCardLoading />}>
                <ListContainer data={graphicData} />
            </ Suspense>
        </section >
    )
}
