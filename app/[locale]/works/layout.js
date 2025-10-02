import React from 'react'
import { getTranslations } from 'next-intl/server'


export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'metadata' });

    return {
        title: t('works.title'),  // "작품"
        description: t('works.description')
    };
}


export default function layout({ children }) {
    return (
        <div className='flex flex-col justify-center items-center'>
            {children}
        </div>
    )
}
