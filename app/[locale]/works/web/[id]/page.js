import React from 'react'
import { notFound } from "next/navigation";
import { getWorkById } from '@/lib/getWorks'
import { getTranslations } from 'next-intl/server'
import WebDetailsClient from '@/components/works/WebDetailClient';

export default async function WebDetailsPage({ params }) {
    const project = await getWorkById(params.locale, params.id)
    if (!project) return notFound()
    const t = await getTranslations({ locale: params.locale, namespace: "weblabels" })

    const labels = {
        duration: t("duration"),
        techs: t("techs"),
        link: t("link"),
        days: t("days")

    }

    return <WebDetailsClient project={project} labels={labels} />;
}
