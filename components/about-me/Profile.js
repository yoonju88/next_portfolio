import React from 'react'
import ProfileYJ from "@/public/yoonju-profil.jpg"
import Image from 'next/image'
import { ButtonLink } from '@/components/Buttons'


const profilInfo = [
    {
        src: ProfileYJ,
        name: "TERRENOIRE Yoonjiu",
        description: "Starting with graphic design, I discovered a deep passion for coding, which led me to transition into the field of web development. After successfully completing a specialized web development training program, I am now seeking new opportunities to showcase my skills and contribute to creative and innovative projects as a frontend web developer.",
        jobTitle: "Frontend Developer",
        secondJob: "Graphic Designer"
    }
]

export default function Profile() {
    const data = profilInfo[0]
    return (
        <div className="flex flex-wrap items-center justify-center mt-10 p-5 bg-backgroundpy-10">
            <div className="lg:w-[30%] md:w-1/3 lg:mb-0 sm:mb-4 sm:w-[90%] flex items-center justify-center">
                <div className="w-[210px] h-[210px] rounded-3xl overflow-hidden hover:border-4 hover:border-primary transform transitio-all rotate-6 duration-300 hover:rotate-0 drop-shadow-xl">
                    <Image
                        src={data.src}
                        alt="profil-yoonju"
                        className="w-full scale-105"
                    />
                </div>
            </div>
            <div className=' lg:w-[70%] md:w-2/3 md:pl-6 pt-10 sm:px-6 lg:pt-1 md:pt-1'>
                <div className="text-left pl-4 pr-8 flex items-center justify-between">
                    <h1 className="font-semibold title-font text-2xl">
                        I'm {data.name}
                    </h1>
                    <div className="flex items-center">
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
                                className="size-4 text-foreground"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                />
                            </svg>
                        </ButtonLink>
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
                                className="size-4 text-foreground">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                            </svg>
                        </ButtonLink>
                    </div>
                </div>
                <h3 className="text-base font-medium text-primary/80 pl-4">{data.jobTitle} | {data.secondJob}</h3>
                <div className="sm:pl-4 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-base">
                        {data.description}
                    </p>
                </div>
            </div>
        </div>
    )
}
