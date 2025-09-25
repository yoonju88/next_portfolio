import { getWebProjects, getWebsProjectById } from '@/lib/notion';
import { notFound } from "next/navigation";
import { getTranslations } from 'next-intl/server'
import WebDetailsClient from '@/components/works/WebDetailClient';
import Breadcrumbs from "@/components/ui/breadcrumb"
import MoreProjects from '@/components/works/MoreProjects';

export const revalidate = 300;

export default async function WebDetailsPage({ params }) {
    const { locale, id } = await params;
    const project = await getWebsProjectById(id, locale)
    if (!project) return notFound()
    const allWebProjects = await getWebProjects(locale)
    const t = await getTranslations({ locale, namespace: "weblabels" })
    const labels = {
        duration: t("duration"),
        techs: t("techs"),
        link: t("link"),
        days: t("days"),
        features: t("features"),
        link2: t("link2")
    }

    return (
        <div className="py-32">
            <Breadcrumbs className="px-10 lg:px-10 mx-auto w-full" items={[
                {
                    href: `/${locale}`,
                    label: "Home"
                },
                {
                    href: `/${locale}/works/web`,
                    label: "Web"
                },
                {
                    label: `${id}`
                },
            ]} />
            <WebDetailsClient project={project} labels={labels} />
            {/* <MoreProjects data={allWebProjects} projectId={project.id} locale={locale} /> */}
        </div>
    )
}
