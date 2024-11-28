import React from 'react'
import ProfileYJ from "@/public/yoonju-profil.jpg"
import Image from 'next/image'
import { ButtonLink } from '@/components/Buttons'
import ToolTip from '../ToolTip'


const profilInfo = [
    {
        src: ProfileYJ,
        name: "TERRENOIRE Yoonjiu",
        description: "Ayant développé un intérêt pour le codage, je suis passée du design graphique au développement web. Après avoir terminé ma formation en développement web, je suis actuellement à la recherche de nouvelles opportunités pour valoriser mes compétences en tant que développeur web frontend. ",
        jobTitle: "Frontend Developer",
        secondJob: "Graphic Designer"
    }
]

export default function Profile() {
    const data = profilInfo[0]
    return (
        <div className="flex flex-wrap items-center justify-center mt-10 p-5 bg-gray-100 rounded-2xl py-10">
            <div className="lg:w-[30%] md:w-1/3 lg:mb-0 sm:mb-4 sm:w-[90%] flex items-center justify-center">
                <div className="w-[200px] h-[200px] rounded-full overflow-hidden">
                    <Image
                        src={data.src}
                        alt="profil-yoonju"
                        className="w-full animation-set-image "
                    />
                </div>
            </div>
            <div className=' lg:w-[70%] md:w-2/3 md:pl-6 pt-10 sm:px-6 lg:pt-1 md:pt-1'>
                <div className="text-left pl-4 pr-8 flex items-center justify-between">
                    <h2 className="font-semibold title-font  text-gray-700 text-2xl">
                        {data.name}
                    </h2>
                    <div className="flex items-center">
                        <ToolTip
                            text="Go to my GitHub"
                        >
                            <ButtonLink
                                name=""
                                href="#"
                                size="icon"
                                variant="ghost"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="size-4 text-gray-700"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                    />
                                </svg>
                            </ButtonLink>
                        </ToolTip>
                        <ToolTip
                            text="Download my CV"
                        >
                            <ButtonLink
                                name=""
                                href="#"
                                size="icon"
                                variant="ghost"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor"
                                    className="size-4 text-gray-700">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                    />
                                </svg>
                            </ButtonLink>
                        </ToolTip>

                    </div>
                </div>
                <h3 className="text-base font-medium text-primary/80 pl-4">{data.jobTitle} | {data.secondJob}</h3>
                <div className="sm:pl-4 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-base text-gray-700">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
