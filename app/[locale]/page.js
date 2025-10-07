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

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      document.documentElement.style.setProperty('--mx', `${x}px`);
      document.documentElement.style.setProperty('--my', `${y}px`);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="sm:px-20 px-4 flex flex-col justify-center items-center text-center">
      <h1
        className="relatitle-font lg:text-7xl md:text-5xl text-[28px] mb-6 font-extrabold sm:uppercase 
        whitespace-normal tracking-wide text-transparent stroke-title-intro
        animate-typing transform translate-x-[var(--mx,0)] translate-y-[var(--my,0)]"
      >
        {parse(t('title'))}
      </h1>
      <h2
        className="text-color_subtitle mb-2 lg:text-3xl md:text-xl text-lg animate-slide-down-soft
        transform translate-x-[var(--mx,0)] translate-y-[var(--my,0)] [animation-delay:2200ms]"
      >
        {t('subtitle')}
      </h2>
      <p
        className="sm:mb-32 mb-16 lg:text-2xl md:text-lg leading-relaxed text-foreground/80 sm:w-[80%] w-[90%] 
        animate-slide-down-soft transform translate-x-[var(--mx,0)] translate-y-[var(--my,0)] [animation-delay:2600ms] "
      >
        {t('description')}</p>
      <ArrowBtn
        name={t("button3")}
        link={`${locale}/works/web`}
        className="animate-slide-down-soft hover:translate-y-3 hover:translate-x-3 [animation-delay:3000ms]" />
    </section>
  );
}
{/* <MouseInvertSpot size={80} softEdge={80} strength={1} /> */ }