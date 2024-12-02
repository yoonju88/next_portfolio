import React from 'react'
import Profile from '@/components/about-me/Profile'
import ContentContainer from '@/components/about-me/ContentContainer'
import { profileData, icon } from '@/utils/Profile'
import ExperienceLists from '@/components/about-me/ExperienceLists'
import EducationList from '@/components/about-me/EducationList'
import Services from '@/components/about-me/Services'
import ContactMe from '@/components/about-me/ContactMe'
import MySkills from '@/components/about-me/skills/MySkills'

export default function AboutMePage() {
    const experiences = profileData.filter(item => item.type === "experience")
    const educations = profileData.filter(item => item.type === "education")

    const renderIcon = (type) => {
        return icons[type] || null; // type이 없으면 null 반환
    };
    const styleContainer = "lg:w-[48%] md:w-[48%] sm:w-full p-6 bg-background rounded-xl box-border"
    return (
        <>
            <section>
                <div className="container px-5 mx-auto flex flex-col">
                    <div className="lg:w-[90%] mx-auto mt-8">
                        <Profile />
                        <Services />
                        <MySkills />
                        <div className="py-8 w-[100%] mt-12 mx-auto flex flex-wrap justify-between">
                            <ContentContainer
                                title="Experience"
                                data={experiences}
                                icon={renderIcon("experience")}
                                className={styleContainer}
                            >
                                <ExperienceLists data={experiences} />
                            </ContentContainer>
                            <ContentContainer
                                title="Education"
                                data={educations}
                                icon={renderIcon("education")}
                                className={`${styleContainer} lg:mt-0 md:mt-0 sm:mt-10`}
                            >
                                <EducationList data={educations} />
                            </ContentContainer>
                        </div>
                    </div>
                </div>
            </section >
            <ContactMe />
        </>
    )
}

const icons = {
    experience: (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-7 text-foreground/80  "
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
            className="size-7 text-foreground/80"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
            />
        </svg>
    )
}
