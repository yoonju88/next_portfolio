'use client'
import { useTranslations, useLocale } from 'next-intl';
//import { AnimationLottie } from '../animation/DynamicMap'
import { ButtonNavigate } from '../form/Buttons'
import IntroAinimation from '@/public/animation_2.json'


export default function Intro() {
    const t = useTranslations('home');
    const locale = useLocale();

    return (
        <section className="px-20 flex flex-col justify-center items-center text-center">
            <h1 className=" relative title-font lg:text-7xl md:text-5xl text-4xl mb-6 font-bold uppercase overflow-hidden whitespace-nowrap  border-foreground
    animate-typing text-transparent stroke-title-intro">
                {t('title')}
                {/* <br className="hidden lg:inline-block" /> {t('subt')} */}
            </h1>
            <p
                className="mb-10 lg:text-2xl md:text-lg leading-relaxed text-foreground/80 w-[80%] animate-slide-down-soft  [animation-delay:2200ms]"

            >
                {t('description')}</p>
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
        </section>
    )
}
