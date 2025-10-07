'use client'
import React from 'react'
import ServiceList from './ServiceList';
import { useTranslations } from 'next-intl';
import { serviceData } from '@/utils/Profile';
import Reveal from '../ScrollReveal/Reveal';

export default function Services() {
    const t = useTranslations('services')

    return (
        <section>
            <Reveal y={20} duration={0.6} start="top 70%" itemSelector={null}>
                <div className="flex flex-col text-center mb-20">
                    <h1>{t('title')}</h1>
                </div>
            </Reveal>
            <div className="grid lg:grid-cols-2 grid-cols-1 text-center items-center justify-center gap-6">
                {serviceData.map((item) => {
                    return (
                        <ServiceList
                            key={item.title}
                            title={t(item.title)}
                            icon={item.icon}
                            description={t(item.description)}
                        />
                    )
                })}
            </div>
        </section >
    )
}
