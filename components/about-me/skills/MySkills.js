'use client'
import React, { useState } from 'react'
import { mySkillsData } from '@/utils/Profile'
import SkillList from '@/components/about-me/skills/SkillList'
import ButtonTypes from './CategoryButton'

const buttonTypes = [
    {
        type: "all",
        name: "all",
    },
    {
        type: "web",
        name: "web development",
    },
    {
        type: "design",
        name: "graphic design",
    },

]

export default function MySkills() {
    const [isFilteredType, setisFilteredType] = useState('all')
    const filteredItems = isFilteredType === 'all' ? mySkillsData : mySkillsData.filter(item => item.type === isFilteredType)

    return (
        <section>
            <div className="container px-5 py-14 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2">My Skills</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here you can explore the skills I bring to web development and design.</p>
                    <div className='flex flex-wrap mt-2 justify-center gap-2 '>
                        {buttonTypes.map((item) => {
                            return (
                                <button
                                    key={item.type}
                                    onClick={() => setisFilteredType(item.type)}
                                    className={`capitalize py-1 px-4 border-2 border-foreground/50 rounded-lg transform transition-all duration-300 ${isFilteredType === item.type ? "bg-primary text-white border-primary/80" : "bg-background text-foreground"}`}
                                >
                                    {item.name}
                                </button>

                            )
                        })}

                    </div>
                </div>
                <div className="flex flex-wrap -m-4 gap-10 justify-center">
                    <SkillList data={filteredItems} />
                </div>
            </div>
        </section >
    )
}
