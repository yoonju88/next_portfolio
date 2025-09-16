"use client"
import { useState, useEffect } from "react"
import Loading from "./Loading";
import { useTranslations, useLocale } from 'next-intl';
import { ButtonNavigate } from '@/components/form/Buttons'
import ArrowBtn from "@/components/home/ArrowBtn";

export default function Home() {
  const [loading, setLoading] = useState(true)
  const t = useTranslations('home');
  const locale = useLocale();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 3초
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="sm:px-20 px-4 flex flex-col justify-center items-center text-center">
      <h1 className="relatitle-font lg:text-7xl md:text-5xl text-3xl mb-10 font-extrabold uppercase
        overflow-hidden whitespace-nowrap tracking-wide
        text-transparent stroke-title-intro
        animate-typing"
      >
        {t('title')}
      </h1>
      <p
        className="sm:mb-32 mb-16 lg:text-2xl md:text-lg leading-relaxed text-foreground/80 sm:w-[80%] w-[90%] animate-slide-down-soft  [animation-delay:2200ms]"
      >
        {t('description')}</p>
      <span className="leading-relaxed animate-slide-down-soft  [animation-delay:3000ms] ">
        <ArrowBtn />
      </span>
    </div>
  );
}
{/* <MouseInvertSpot size={80} softEdge={80} strength={1} /> */ }