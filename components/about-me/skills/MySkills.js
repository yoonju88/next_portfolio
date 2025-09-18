'use client'
import React, { useState } from 'react'
import { mySkillsData, buttonTypes } from '@/utils/Profile'
import SkillList from '@/components/about-me/skills/SkillList'
import { FilterButton } from '@/components/form/Buttons';
import { useTranslations } from 'next-intl';

export default function MySkills() {
    const [isFilteredType, setisFilteredType] = useState('all')
    const t = useTranslations("skills")
    const filteredItems = isFilteredType === 'all' ? mySkillsData : mySkillsData.filter(item => item.type === isFilteredType)

    return (
        <section>
            <div className="mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="mb-2">{t("title")}</h1>
                    <p className=" text-center mt-2">{t("description")}</p>
                    <div className='flex flex-wrap mt-10 justify-center gap-3'>
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
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 lg:gap-10 gap-6 justify-center ">
                    {filteredItems.map((item) => {
                        return (
                            <div key={item.id}>
                                <SkillList
                                    key={item.id}
                                    title={item.title}
                                    icon={item.icon}
                                    filtered={isFilteredType}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}
