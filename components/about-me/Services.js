'use client'
import React from 'react'
import ServiceList from './ServiceList';
import { useTranslations } from 'next-intl';
import { serviceData } from '@/utils/Profile';

export default function Services() {
    const t = useTranslations('services')

    return (
        <section>
            <div className="container w-full py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font uppercase">{t('title')}</h1>
                </div>
                <div className="flex flex-wrap -m-4 text-center items-center justify-center gap-2">
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
            </div>
        </section >
    )
}
