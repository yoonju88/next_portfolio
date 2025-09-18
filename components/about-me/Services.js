'use client'
import React from 'react'
import ServiceList from './ServiceList';
import { useTranslations } from 'next-intl';
import { serviceData } from '@/utils/Profile';

export default function Services() {
    const t = useTranslations('services')

    return (
        <section>
            <div className="flex flex-col text-center mb-20">
                <h1>{t('title')}</h1>
            </div>
            <div className="flex flex-wrap -m-4 text-center items-center justify-center gap-6 ">
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
