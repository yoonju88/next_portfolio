import { notFound } from "next/navigation";
import { getDesignItemById } from '@/lib/getWorks'
import DesignDetailsClient from '@/components/works/design/DesignDetailsClient';
import { getTranslations } from "next-intl/server";

export default async function designDetailsPage({ params }) {
    const { locale, id } = await params
    const project = await getDesignItemById(locale, id)
    if (!project) return notFound()
    const t = await getTranslations({ locale, namespace: "designlabels" })
    const labels = {
        program: t("program"),
        cy: t("cy"),
        company: t('company')
    }

    return <DesignDetailsClient project={project} labels={labels} />;
}
