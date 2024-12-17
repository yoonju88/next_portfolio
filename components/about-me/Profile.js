import React from 'react'
import ProfileYJ from "@/public/yoonju-profil.jpg"
import Image from 'next/image'
import { ButtonLink } from '@/components/form/Buttons'
import ToolTip from '../ToolTip'


const profilInfo = [
    {
        src: ProfileYJ,
        name: "TERRENOIRE Yoonju",
        description: "Starting with graphic design, I discovered a deep passion for coding, which led me to transition into the field of web development. After successfully completing a specialized web development training program, I am now seeking new opportunities to showcase my skills and contribute to creative and innovative projects as a frontend web developer.",
        jobTitle: "Frontend Developer",
        secondJob: "Graphic Designer"
    }
]

export default function Profile() {
    const data = profilInfo[0]
    return (
        <div className=" group flex flex-wrap items-center justify-center mt-10 p-5 py-10 rounded-xl card-shadow-xl">
            <div className="lg:w-[30%] md:w-1/3 lg:mb-0 sm:mb-4 sm:w-[90%] flex items-center justify-center">
                <div className="w-[220px] h-[230px] rounded-3xl overflow-hidden shadow-none transform transitio-all rotate-6 duration-300
                group-hover:border-2 group-hover:border-white group-hover:rotate-0 group-hover:scale-110 group-hover:shadow-primary/80 group-hover:shadow-xl">
                    <Image
                        src={data.src}
                        alt="profil-yoonju"
                        className="w-full scale-100 "
                        priority
                    />
                </div>
            </div>
            <div className=' lg:w-[70%] md:w-2/3 md:pl-6 pt-10 sm:px-6 lg:pt-1 md:pt-1'>
                <div className="text-left pl-4 pr-8 flex items-center justify-between">
                    <h1 className="font-semibold title-font text-2xl group-hover:text-white">
                        I'm {data.name}
                    </h1>
                    <div className="flex items-center">
                        <ToolTip
                            text="Go to my GitHub"
                            link="#"
                            className="p-2 hover:bg-white/20 rounded-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="size-4 text-foreground group-hover:text-white"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                                />
                            </svg>
                        </ToolTip>
                        <ToolTip
                            text="Download my CV"
                            link="#"
                            className="p-2 hover:bg-white/20 rounded-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="size-4 text-foreground group-hover:text-white">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                            </svg>
                        </ToolTip>
                    </div>
                </div>
                <h3 className="text-base font-medium text-primary/80 pl-4 group-hover:text-white">{data.jobTitle} | {data.secondJob}</h3>
                <div className=" relative sm:pl-4 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-base group-hover:text-white">
                        {data.description}
                    </p>
                    <p className="absolute group-hover:animate-bounce text-9xl -z-10 -left-10 -top-20 text-transparent text-stroke opacity-30">HI</p>
                </div>
            </div>
        </div>
    )
}
