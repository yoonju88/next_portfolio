'use client'
import React from 'react'
import ContactForm from '@/components/form/Contact'
import emailAnimation from '@/public/email_1.json'
//import { AnimationLottie } from '@/components/animation/DynamicMap'
import PersonalInfo from '@/components/contact/PersonalInfo'
import { useTranslations } from 'next-intl'

export default function contactPage() {
    const t = useTranslations("contact")

    return (
        <section className="mt-20 mb-24 px-10">
            <div className="py-10 flex flex-wrap justify-center gap-20">
                {/* <span className="pl-14 lg:w-[40%] w-[70%] bg-background rounded-lg overflow-hidden flex flex-col justify-center items-center">
                    <AnimationLottie animation={emailAnimation} />
                </span> */}
                <div className="lg:w-[50%] w-full  border-4 border-chart-2/50 rounded-lg p-8 flex flex-col mt-10 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-medium title-font">{t("title")}</h1>
                        <PersonalInfo
                            style="group cursor-pointer flex gap-2 p-2 bg-chart-2 rounded-full hover:border-white hover:border hover:bg-chart-2/50 add-transition hover:shadow-chart-2 hover:shadow-inner"
                            imageTitle={t("address")}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white animate-pulse group-hover:animate-none group-hover:scale-105 add-transition">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                        </PersonalInfo>
                    </div>
                    <p className="leading-relaxed mb-5">{t("des1")}</p>
                    <ContactForm
                        name={t("name")}
                        namePh={t("np")}
                        email={t("email")}
                        message={t("message")}
                        messagePh={t("mp")}
                        bt={t("bt2")}
                        loading={t("loading")}
                    />
                </div>
            </div>
        </section >
    )
}

