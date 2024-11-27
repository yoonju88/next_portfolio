import React from 'react'
import ProfileYJ from "@/public/yoonju-profil.jpg"
import Image from 'next/image'
import { ButtonLink } from '@/components/Buttons'
import { experiences, educations } from '@/utils/Profile'

export default function AboutMePage() {

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pb-10 mx-auto flex flex-col">
                <div className="lg:w-[95%] mx-auto">
                    <div className="flex flex-col sm:flex-row mt-10">
                        <div className="lg:w-2/5 flex items-center justify-center">
                            <div className="w-1/2 height-1/2 rounded-full items-center justify-center overflow-hidden">
                                <Image
                                    src={ProfileYJ}
                                    alt="profil-yoonju"
                                    className="w-full animation-set-image "
                                    layout="intrinsic"
                                />
                            </div>
                        </div>
                        <div className="sm:border-l border-gray-300 pr-10" />
                        <div className='lg:w-3/5'>
                            <div className="text-left pl-8 pr-8 flex items-center justify-between">
                                <h2 className="font-medium title-font mt-4 text-foreground text-3xl">TERRENOIRE Yoonju</h2>
                                <div className="flex items-center">
                                    <ButtonLink
                                        name=""
                                        href="#"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-foreground">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                                        </svg>
                                    </ButtonLink>
                                    <ButtonLink
                                        name=""
                                        href="#"
                                        size="icon"
                                        variant="ghost"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4 text-foreground">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                        </svg>
                                    </ButtonLink>
                                </div>
                            </div>
                            <div className="sm:pl-8 sm:py-8  sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4 text-foreground ">Ayant développé un intérêt pour le codage, je
                                    suis passée du design graphique au
                                    développement web. Après avoir terminé ma
                                    formation en développement web, je suis
                                    actuellement à la recherche de nouvelles
                                    opportunités pour valoriser mes compétences
                                    en tant que développeur web frontend.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="px-5 py-24 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 pr-10">
                            <div className='flex items-center gap-3 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 text-foreground/90 ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                                </svg>
                                <h1 className="text-2xl font-semibold text-foreground">Experiences</h1>
                            </div>
                            {experiences.map((item) => {
                                const startDate = item.duration.start
                                const endDate = item.duration.end
                                return (
                                    <div class="py-4 px-4" key={item.jobTitle}>
                                        <div class="h-full flex items-start">
                                            <div class="w-30 flex-shrink-0 pt-1 flex flex-col text-center leading-none">
                                                <span class="text-foreground/80  border-gray-200 text-xs font-semibold">{startDate} - {endDate}</span>
                                            </div>
                                            <div class="flex-grow pl-8">
                                                <h1 class="title-font text-xl font-medium text-foreground/85 mb-1">{item.jobTitle}</h1>
                                                <h2 class="tracking-widest text-xs title-font font-medium text-foreground/60 mb-1">
                                                    <span className='pr-2'>{item.companyName}</span>
                                                    <span className="border-l-2 pl-2 border-foreground/40">
                                                        {item.address}
                                                    </span>
                                                </h2>
                                                <p class="leading-relaxed mb-2 text-sm text-foreground/90">{item.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className=" pl-20 border-l-2 border-foreground/50">
                            <div className='flex items-center gap-3 mb-8'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-7 text-foreground/90">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                </svg>
                                <h1 className="text-2xl font-semibold text-foreground">Educations</h1>
                            </div>
                            {educations.map((item) => {
                                const startDate = item.duration.start
                                const endDate = item.duration.end
                                return (
                                    <div className="p-4  pl-6 pr-6 flex items-center mt-6 bg-secondary/80 rounded-xl">
                                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500  flex-shrink-0">
                                            {/* Image à integrer */}
                                        </div>
                                        <div className="flex-grow pl-8">
                                            <p className='text-foreground/60 text-xs mb-0.5'>{startDate} - {endDate}</p>
                                            <h2 className="text-foreground/90 text-lg title-font font-medium mb-0.5">{item.name}</h2>
                                            <p className="text-xs font-semibold text-foreground/60 mb-0.5">{item.degree}</p>
                                            <h3 className="tracking-widest text-xs title-font font-medium text-foreground/60">
                                                <span className='pr-2'>{item.schoolName}</span>
                                                <span className="border-l-2 pl-2 border-foreground/40">
                                                    {item.address}
                                                </span>
                                            </h3>
                                        </div>
                                    </div>
                                )

                            })}
                        </div>

                    </div>

                </div>
            </div>
        </section >
    )
}
