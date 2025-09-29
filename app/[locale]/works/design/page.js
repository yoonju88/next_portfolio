import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import ListContainer from '@/components/works/design/ListContainer'
import WorksCardLoading from '@/components/loading/WorksCardLoading'
import { getTranslations } from 'next-intl/server'
import { getDesignProjects } from '@/lib/notion'
import Breadcrumbs from '@/components/nav/NavBreadcrumbs'

export default async function DesignPage({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "design" })
    const designProjects = await getDesignProjects(locale)
    const n = await getTranslations({ locale, namespace: "menu" })

    return (
        <section className="flex flex-col justify-center mt-20 mb-20 w-full">
            <Breadcrumbs
                home={n('home')}
                homeLink={`/${locale}`}
                works={n('works.label')}
                web={n('works.web')}
                webLink={`/${locale}/works/web`}
                design={n('works.design')}
                designLink={`/${locale}/works/design`}
                currentPage={n('works.design')}
            />
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
