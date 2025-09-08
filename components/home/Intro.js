'use client'
import { useTranslations, useLocale } from 'next-intl';
import { AnimationLottie } from '../animation/DynamicMap'
import { ButtonNavigate } from '../form/Buttons'
import IntroAinimation from '@/public/animation_2.json'


export default function Intro() {
    const t = useTranslations();
    const locale = useLocale();

    return (
        <div className="flex flex-col md:flex-row items-center">
            <section className=" order-2 md:order-1 w-full lg:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font lg:text-4xl md:text-3xl text-3xl mb-6 font-medium text-chart-2">
                    {t('home.title')}
                    <br className="hidden lg:inline-block" /> {t('home.subt')}
                </h1>
                <p className="mb-7 leading-relaxed text-foreground">{t('home.description')}</p>
                <div className='flex gap-6'>
                    <ButtonNavigate
                        name={t('home.button1')}
                        href={`/${locale}/works/web`}
                        variant="navigate"
                        size="default"
                    >
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1 " viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </ButtonNavigate>
                    <ButtonNavigate
                        name={t('home.button2')}
                        href={`/${locale}/works/design`}
                        variant="navigate"
                        size="default"
                    >
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </ButtonNavigate>
                </div>
            </section>
            <div className="order-1 md:order-2 w-full lg:w-1/2 mb-10 md:mb-0 flex justify-center">
                <AnimationLottie animation={IntroAinimation} />
            </div>
        </ div>
    )
}
