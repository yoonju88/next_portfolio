"use client"
import { useState, useEffect } from "react"
import Loading from "./Loading";
import { useTranslations, useLocale } from 'next-intl';
import ArrowBtn from "@/components/home/ArrowBtn";
import parse from "html-react-parser";
// npm install html-react-parser

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

      <h1 className="relatitle-font lg:text-7xl  flex flex-wrap md:text-5xl text-[28px] mb-6 font-extrabold sm:uppercase 
        overflow-hidden whitespace-nowrap tracking-wide
        text-transparent stroke-title-intro
        animate-typing"
      >
        {parse(t('title'))}
      </h1>
      <h2 className="text-color_subtitle mb-2 lg:text-3xl md:text-xl text-lg animate-slide-down-soft [animation-delay:2200ms]">{t('subtitle')}</h2>
      <p
        className="sm:mb-32 mb-16 lg:text-2xl md:text-lg leading-relaxed text-foreground/80 sm:w-[80%] w-[90%] animate-slide-down-soft  [animation-delay:2600ms]"
      >
        {t('description')}</p>
      <ArrowBtn name={t("button3")} link={`${locale}/works/web`} animation="animate-slide-down-soft  [animation-delay:3000ms]" />
    </div>
  );
}
{/* <MouseInvertSpot size={80} softEdge={80} strength={1} /> */ }