import React from 'react'
import ProfileYJ from "@/public/yoonju-profil.jpg"
import Image from 'next/image'
import ToolTip from '../ToolTip'
import { IoLogoGithub } from "react-icons/io";

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
    const tooltipStyle = "p-2.5 add-transition rounded-full border border-chart-2 hover:border-none hover:text-white hover:shadow-[inset_0_0_20px_20px] hover:shadow-chart-2/50"
    const iconStyle = "size-5 text-foreground"
    return (
        <section className="group flex flex-wrap items-center justify-center mt-10 p-5 py-10 rounded-xl">
            <div className="lg:w-[30%] md:w-1/3 lg:mb-0 sm:mb-4 sm:w-[90%] flex items-center justify-center">
                <span className="w-[220px] h-[230px] rounded-3xl overflow-hidden shadow-none transform transitio-all rotate-6 duration-300
                group-hover:border-2 group-hover:border-white group-hover:rotate-0 group-hover:scale-110 group-hover:shadow-chart-1 group-hover:shadow-lg">
                    <Image
                        src={data.src}
                        alt="profil-yoonju"
                        className="w-full scale-100 "
                        priority
                    />
                </span>
            </div>
            <div className=' lg:w-[70%] md:w-2/3 md:pl-6 pt-10 sm:px-6 lg:pt-1 md:pt-1'>
                <div className="text-left pl-4 pr-8 flex items-center justify-between">
                    <h1 className="font-semibold title-font text-3xl uppercase">
                        I'm {data.name}
                    </h1>
                    <div className="flex items-center gap-2">
                        <ToolTip
                            text="Go to my GitHub"
                            link="#"
                            className={tooltipStyle}
                        >
                            <IoLogoGithub className={iconStyle} />
                        </ToolTip>
                        <ToolTip
                            text="Download my CV"
                            link="#"
                            className={tooltipStyle}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className={iconStyle}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                                />
                            </svg>
                        </ToolTip>
                    </div>
                </div>
                <h3 className="text-base font-semibold text-chart-2 pl-4">{data.jobTitle} | {data.secondJob}</h3>
                <div className=" relative sm:pl-4 mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-base">{data.description}</p>
                    <p className="absolute opacity-0 text-9xl -z-10 -left-10 -top-20 text-transparent text-stroke group-hover:opacity-30 group-hover:animate-bounce">HI</p>
                </div>
            </div>
        </section>
    )
}
