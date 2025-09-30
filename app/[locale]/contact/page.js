'use client'
import React from 'react'
import ContactForm from '@/components/form/Contact'
import PersonalInfo from '@/components/contact/PersonalInfo'
import { useTranslations } from 'next-intl'

export default function contactPage() {
    const t = useTranslations("contact")

    return (
        <section className="mb-24 px-10">
            <div className="py-10 flex flex-wrap justify-center gap-20">
                <div className="lg:w-[50%] w-full animate-slide-down-soft contact_card bg-background/20 border rounded-lg p-8 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="animate-slide-down-soft [animation-delay:300ms] ">{t("title")}</h1>
                        <PersonalInfo
                            style="group  leading-relaxed animate-slide-down-soft [animation-delay:300ms] btn-gradient p-2 rounded-full outline-none border-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-btn-3/50 focus-visible:ring-offset-2"
                            imageTitle={t("address")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white group-hover:scale-105 add-transition">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </PersonalInfo>
                    </div>
                    <p className="mb-5 animate-slide-down-soft [animation-delay:500ms]">{t("des1")}</p>
                    <ContactForm
                        name={t("name")}
                        namePh={t("np")}
                        email={t("email")}
                        message={t("message")}
                        messagePh={t("mp")}
                        bt={t("bt2")}
                        loading={t("loading")}
                        success={t("toast")}
                        failed={t("toastError")}
                    />
                </div>
            </div>
        </section >
    )
}

