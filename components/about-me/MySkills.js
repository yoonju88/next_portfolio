'use client'
import React, { useState } from 'react'
import { mySkillsData } from '@/utils/Profile'
import SkillList from './SkillList'

export default function MySkills() {
    const [isActiveButton, setIsActiveButton] = useState("Web")
    const webLists = mySkillsData.filter(item => item.category === "web")
    const designLists = mySkillsData.filter(item => item.category === "design")

    const webSkillLists = (<SkillList data={webLists} />)
    const designSkillLists = (<SkillList data={designLists} />)

    return (
        <section>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2">My Skills</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Here you can explore the skills I bring to web development and design.</p>
                    <div className="flex mx-auto border-2 border-primary rounded overflow-hidden mt-6">
                        <button
                            onClick={() => setIsActiveButton("web")}
                            className={`py-1 px-4 ${isActiveButton === "web" ? "bg-primary text-white" : "bg-background text-foreground"} focus:outline-none`}
                        >
                            Web development
                        </button>
                        <button onClick={() => setIsActiveButton("design")}
                            className={`py-1 px-4 ${isActiveButton === "design" ? "bg-primary text-white" : "bg-background text-foreground"} focus:outline-none`}
                        >
                            Graphic Design
                        </button>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4 gap-10 justify-center">
                    {isActiveButton === "web" ? webSkillLists : designSkillLists}
                </div>
            </div>
        </section >
    )
}
