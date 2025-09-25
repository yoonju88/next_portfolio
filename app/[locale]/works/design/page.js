import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import ListContainer from '@/components/works/design/ListContainer'
import WorksCardLoading from '@/components/loading/WorksCardLoading'
import { getTranslations } from 'next-intl/server'
import { getDesignProjects } from '@/lib/notion'

export default async function DesignPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "design" })
    const designProjects = await getDesignProjects(locale)

    return (
        <section className="flex flex-col justify-center mt-20 mb-20 w-full">
            <ProjectTitle
                title={t("title")}
                description={t("description")}
            />
            <Suspense fallback={<WorksCardLoading />}>
                <ListContainer data={designProjects} />
            </Suspense>
        </section >
    )
}
