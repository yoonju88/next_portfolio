'use client'
import React, { useState } from 'react'
import { mySkillsData, buttonTypes } from '@/utils/Profile'
import SkillList from '@/components/about-me/skills/SkillList'
import { FilterButton } from '@/components/Buttons';

export default function MySkills() {
    const [isFilteredType, setisFilteredType] = useState('all')
    const filteredItems = isFilteredType === 'all' ? mySkillsData : mySkillsData.filter(item => item.type === isFilteredType)

    return (
        <section>
            <div className="container px-5 py-14 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">My Skills</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base mt-2">Here you can explore the skills I bring to web development and design.</p>
                    <div className='flex flex-wrap mt-10 justify-center gap-2'>
                        {buttonTypes.map((item) => {
                            return (
                                <FilterButton
                                    key={item.id}
                                    name={item.name}
                                    active={isFilteredType === item.type}
                                    onClick={() => setisFilteredType(item.type)}
                                />

                            )
                        })}
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 gap-10 justify-center">
                    {filteredItems.map((item) => {
                        return (
                            <div key={item.id}>
                                <SkillList
                                    key={item.id}
                                    title={item.title}
                                    icon={item.icon}
                                    color={item.color}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section >
    )
}
