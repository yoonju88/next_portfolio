'use client'
import React, { useState } from 'react'
import { mySkillsData, buttonTypes } from '@/utils/Profile'
import SkillCard from '@/components/about-me/skills/SkillList'
import { FilterButton } from '@/components/form/Buttons';
import { useTranslations } from 'next-intl';
import Reveal from '@/components/ScrollReveal/Reveal';
import RevealGrid from '@/components/ScrollReveal/RevealGrid';

export default function MySkills() {
    const [isFilteredType, setisFilteredType] = useState('all')
    const t = useTranslations("skills")
    const filteredItems = isFilteredType === 'all' ? mySkillsData : mySkillsData.filter(item => item.type === isFilteredType)

    return (
        <section className="mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
                <Reveal y={20} duration={0.6} start="top 85%" itemSelector={null}>
                    <h1 className="mb-2">{t("title")}</h1>
                    <p className=" text-center mt-2">{t("description")}</p>
                </Reveal>
                <RevealGrid
                    className="flex flex-wrap mt-10 justify-center gap-3"
                    itemSelector=".skill-card"
                    from="start"
                    y={14}
                    scale={0.92}
                    duration={0.5}
                    amount={0.45}
                >
                    {buttonTypes.map((item) => {
                        return (
                            <FilterButton
                                key={item.id}
                                name={t(item.name)}
                                active={isFilteredType === item.type}
                                onClick={() => setisFilteredType(item.type)}
                            />
                        )
                    })}
                </RevealGrid>
            </div>
            <RevealGrid
                className="flex flex-wrap -m-4 lg:gap-10 gap-6 justify-center "
                itemSelector=".skill-card"
                from="ramdom"
                y={22}
                scale={0.92}
                duration={0.65}
                amount={0.5}
            >
                {filteredItems.map((item) => {
                    return (
                        <SkillCard
                            key={item.id}
                            title={item.title}
                            icon={item.icon}
                            filtered={isFilteredType}
                        />
                    )
                })}
            </RevealGrid>
        </section >
    )
}
