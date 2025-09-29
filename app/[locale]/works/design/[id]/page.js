import { notFound } from "next/navigation";
import { getDesignProjectById } from "@/lib/notion";
import DesignDetailsClient from '@/components/works/design/DesignDetailsClient';
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/nav/NavBreadcrumbs";


export default async function designDetailsPage({ params }) {
    const { locale, id } = await params
    const project = await getDesignProjectById(id, locale)
    if (!project) return notFound()
    const t = await getTranslations({ locale, namespace: "designlabels" })
    const labels = {
        program: t("program"),
        cy: t("cy"),
        company: t('company')
    }
    const n = await getTranslations({ locale, namespace: "menu" })


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
                currentCategory={n('works.design')}
                currentLink={`/${locale}/works/design`}
                currentPage={`${id}`}
            />
            {/* <Breadcrumbs
                className="px-10 lg:px-10 mx-auto w-full"
                items={[
                    {
                        href: `/${locale}`,
                        label: n("home")
                    },
                    {
                        href: `/${locale}/works`,
                        label: n("label")
                    },
                    {
                        label: `${id}`
                    },
                ]} /> */}
            <DesignDetailsClient project={project} labels={labels} />
        </div>
    )
}
