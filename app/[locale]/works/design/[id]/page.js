import { notFound } from "next/navigation";
import { getDesignProjectById } from "@/lib/notion";
import DesignDetailsClient from '@/components/works/design/DesignDetailsClient';
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "@/components/ui/breadcrumb"

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

    return (
        <div className="py-32">

            <Breadcrumbs className="px-10 lg:px-10 mx-auto w-full" items={[
                {
                    href: `/${locale}`,
                    label: "Home"
                },
                {
                    href: `/${locale}/works/design`,
                    label: "Design"
                },
                {
                    label: `${id}`
                },
            ]} />
            <DesignDetailsClient project={project} labels={labels} />
        </div>
    )
}
