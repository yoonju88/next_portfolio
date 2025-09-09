import { getTranslations } from "next-intl/server";
import { worksBase, graphicBase } from "@/utils/worksData";

export async function getWorks(locale) {
    const t = await getTranslations({ locale, namespace: "worksweb" })
    return worksBase.map((w) => ({
        ...w,
        title: t(`${w.id}.title`)
    }))
}

export async function getWorkById(locale, id) {
    const t = await getTranslations({ locale, namespace: "worksweb" })
    const base = worksBase.find((w) => w.id === id)
    if (!base) return null;

    return {
        ...base,
        title: t(`${id}.title`),
        description: t(`${id}.description`),
        tags: t.raw(`${id}.tags`)
    }
}


export async function getGraphicWorks(locale) {
    const t = await getTranslations({ locale, namespace: "worksgraphic" })
    return graphicBase.map((w) => ({
        ...w,
        title: t(`${w.id}.title`)
    }))
}

export async function getDesignItemById(locale, id) {
    const t = await getTranslations({ locale, namespace: "worksgraphic" })
    const base = graphicBase.find((w) => w.id === id)
    if (!base) return null;

    return {
        ...base,
        title: t(`${id}.title`),
        cy: t(`${id}.cy`),
        description: t(`${id}.description`),
        tags: t.raw(`${id}.tags`)
    }
}

