"use client"
import React from 'react'
import { ButtonNavigate } from '@/components/form/Buttons'
import { useTranslations, useLocale } from 'next-intl';


export default function worksPage() {
    const t = useTranslations('home');
    const locale = useLocale()
    return (
        <div className='flex gap-6'>
            <ButtonNavigate
                name={t('button1')}
                href={`/${locale}/works/web`}
                variant="navigate"
                size="lg"
            >
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 " viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </ButtonNavigate>
            <ButtonNavigate
                name={t('button2')}
                href={`/${locale}/works/design`}
                variant="navigate"
                size="lg"
            >
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </ButtonNavigate>
        </div>
    )
}
