import { getWebProjects, getWebsProjectById } from '@/lib/notion';
import { notFound } from "next/navigation";
import { getTranslations } from 'next-intl/server'
import WebDetailsClient from '@/components/works/web/WebDetailClient';
import Breadcrumbs from '@/components/nav/NavBreadcrumbs'
import MoreProjects from '@/components/works/MoreProjects';

export const revalidate = 300;

export default async function WebDetailsPage({ params }) {
    const { locale, id } = await params;
    const project = await getWebsProjectById(id, locale)
    if (!project) return notFound()
    const allWebProjects = await getWebProjects(locale)
    const t = await getTranslations({ locale, namespace: "weblabels" })
    const n = await getTranslations({ locale, namespace: "menu" })
    const labels = {
        duration: t("duration"),
        techs: t("techs"),
        link: t("link"),
        days: t("days"),
        learning: t('learning'),
        features: t("features"),
        link2: t("link2")
    }

    return (
        <div className="py-32">
            <Breadcrumbs
                home={n('home')}
                homeLink={`/${locale}`}
                works={n('works.label')}
                web={n('works.web')}
                webLink={`/${locale}/works/web`}
                design={n('works.design')}
                designLink={`/${locale}/works/design`}
                currentCategory={n('works.web')}
                currentLink={`/${locale}/works/web`}
                currentPage={`${id}`}
            />
            <WebDetailsClient project={project} labels={labels} />
            {/* <MoreProjects data={allWebProjects} projectId={project.id} locale={locale} /> */}
        </div>
    )
}
