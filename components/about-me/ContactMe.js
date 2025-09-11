'use client'
import React from 'react'
import { ButtonNavigate } from '../form/Buttons';
import ContactAnimation from '@/public/animation_3.json'
import { AnimationLottie } from '../animation/DynamicMap'
import { useTranslations } from 'next-intl';


export default function ContactMe() {
    const t = useTranslations('contact')
    return (
        <section>
            <div className="container px-5 pb-24 mx-auto">
                <div className="lg:w-2/3 w-full mx-auto text-center flex flex-col justify-center items-center">
                    <div className="w-32 mb-4">
                        <AnimationLottie animation={ContactAnimation} />
                    </div>
                    <p className="leading-relaxed text-lg text-foreground/80 mb-8">{t("des2")}</p>
                    <ButtonNavigate
                        name={t("bt1")}
                        href="/contact"
                        variant="navigate"
                        size='lg'
                    />
                </div>
            </div>
        </section>
    )
}
