import React, { Suspense } from 'react'
import ProjectTitle from '@/components/works/ProjectTitle'
import ListContainer from '@/components/works/design/ListContainer'
import WorksCardLoading from '@/components/loading/WorksCardLoading'
import { getTranslations } from 'next-intl/server'
import { getDesignProjects } from '@/lib/notion'
import Breadcrumbs from '@/components/nav/NavBreadcrumbs'

export const revalidate = 0;// 페이지 방문 시 항상 데이터를 새로 가져옵니다
/*
 * Next.js의 기본 동작인 정적 페이지 생성을 비활성화
 * 사용자가 요청할 때마다 서버에서 페이지를 새로 렌더링하도록 강제
 * 모든 요청에 대해 페이지를 서버에서 새로 렌더링하여 항상 최신 Notion URL을 가져오도록 보장
 */
export const dynamic = 'force-dynamic'; //

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
