import React from 'react'
import ContactForm from '@/components/form/Contact'
import emailAnimation from '@/public/email_1.json'
import { AnimationLottie } from '@/components/animation/DynamicMap'
import PersonalInfo from '@/components/contact/PersonalInfo'

export default function contactPage() {
    return (
        <section className="w-5/6 flex justify-center items-center">
            <div className="py-8 flex flex-wrap justify-around items-center">
                <div className="lg:w-[35%] w-[50%] bg-background rounded-lg overflow-hidden flex flex-col justify-center items-center">
                    <AnimationLottie animation={emailAnimation} />
                </div>
                <div className=" relative lg:w-[40%] w-full bg-background border-4 border-chart-2/50 rounded-lg p-8 flex flex-col mt-10 shadow-md">
                    <PersonalInfo
                        name="Email"
                        style="cursor-pointer flex gap-2 px-3 py-1.5 bg-chart-2/80 rounded-t-xl absolute -top-14 right-8"
                        description="yoonju.t@gmail.com"
                        imageTitle="Address"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-10 text-background animate-pulse">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                        </svg>
                    </PersonalInfo>
                    <h1 className="text-3xl mb-4 font-medium title-font">Contact Me</h1>
                    <p className="leading-relaxed mb-5">Would you like to start an web project with me?</p>
                    <ContactForm />
                </div>
            </div>
        </section >
    )
}

{/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26899.95031897056!2d6.0343307144611575!3d45.92321629727834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478b84ebfb378e1b%3A0x408ab2ae4ba9a40!2s74330%20Poisy!5e0!3m2!1sfr!2sfr!4v1734085156119!5m2!1sfr!2sfr"
                        width="100%"
                        height="100%"
                        className="absolute inset-0 rounded-lg"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="map"
                    /> */}

{/* <div className="bg-background relative flex flex-wrap py-8 rounded-lg shadow-md">
                        <div className="lg:w-1/2 px-6 ">
                            <h2 className="title-font font-semibold tracking-widest text-xs">ADDRESS</h2>
                            <p className="mt-1">74330 Poisy, France</p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-semibold tracking-widest text-xs">EMAIL</h2>
                            <a className="text-chart-2 leading-relaxed">yoonju.t@email.com</a>
                        </div>
                    </div> */}