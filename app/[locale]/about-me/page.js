'use client'
import React, { useEffect, useRef } from 'react'
import Profile from '@/components/about-me/Profile'
import ContentContainer from '@/components/about-me/ContentContainer'
import { profileData } from '@/utils/Profile'
import ExperienceLists from '@/components/about-me/ExperienceLists'
import EducationList from '@/components/about-me/EducationList'
import Services from '@/components/about-me/Services'
import ContactMe from '@/components/about-me/ContactMe'
import MySkills from '@/components/about-me/skills/MySkills'
import { useTranslations } from 'next-intl'
import Reveal from '@/components/ScrollReveal/Reveal'

const icons = {
    experience: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 text-btn-1 hover:scale-105 add-transition"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
            />
        </svg>
    ),
    education: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-8 text-btn-1 hover:scale-105 add-transition "
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
        </svg>
    )
}

export default function AboutMePage() {
    if (!profileData) { return null }
    const experiences = profileData.filter(item => item.type === "experience")
    const educations = profileData.filter(item => item.type === "education")
    const t = useTranslations("experience")
    const et = useTranslations("education")

    const renderIcon = (type) => {
        return icons[type] || null; // type이 없으면 null 반환
    };
    return (
        <div className="px-10 w-full mx-auto flex flex-col">
            <div className="mx-auto mt-8 sm:space-y-32 space-y-28">
                <Profile />
                <Services />
                <MySkills />
                <div className='sm:mt-32 mt-26 flex flex-col sm:gap-32 gap-24'>
                    <ContentContainer
                        title="Experience"
                        data={experiences}
                        icon={renderIcon("experience")}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {experiences.map((item) => {
                                return (
                                    <Reveal key={item.jobTitle} y={20} duration={0.6} start="top 85%" itemSelector={null}>
                                        <ExperienceLists
                                            startDate={item.duration.start}
                                            endDate={item.duration.end}
                                            jobTitle={t(item.jobTitle)}
                                            companyName={item.companyName}
                                            address={t(item.address)}
                                            description={t(item.description)}
                                        />
                                    </Reveal>)
                            })}
                        </div>
                    </ContentContainer>
                    <ContentContainer
                        title="Education"
                        data={educations}
                        icon={renderIcon("education")}
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 ">
                            {educations.map((item) => {
                                return (
                                    <Reveal key={item.name} y={20} duration={0.6} start="top 85%" itemSelector={null}>
                                        <EducationList
                                            startDate={item.duration.start}
                                            endDate={item.duration.end}
                                            name={et(item.name)}
                                            schoolName={et(item.schoolName)}
                                            link={item.link}
                                            image={item.image}
                                            address={et(item.address)}
                                            degree={et(item.degree)}
                                        />
                                    </Reveal>
                                )
                            })}
                        </div>
                    </ContentContainer>
                </div>
                <ContactMe />
            </div>
        </div >
    )
}
