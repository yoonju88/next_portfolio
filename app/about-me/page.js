import React from 'react'
import ProfileYJ from "@/public/yoonju-profil.jpg"
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ButtonLink } from '@/components/Buttons'

export default function AboutMePage() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pb-10 mx-auto flex flex-col">
                <div className="lg:w-[90%] mx-auto">
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
                    <div className="container lg:w-[90%] px-5 py-24 mx-auto">
                        <div className="lg:w-1/2">
                            <div className="-my-8 divide-y-2 divide-gray-100">
                                <div className="py-8 flex flex-wrap md:flex-nowrap">
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                                        <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                    </div>
                                    <div className="md:flex-grow">
                                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Bitters hashtag waistcoat fashion axe chia unicorn</h2>
                                        <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section >
    )
}
