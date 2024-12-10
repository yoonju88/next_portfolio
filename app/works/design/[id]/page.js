'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { graphicData } from '@/utils/worksData'
import NotFoundPage from '@/app/not-found'
import SlideImages from '@/components/works/design/SlideImages'
import { ReturnButton } from '@/components/Buttons'
import { Separator } from '@/components/ui/separator'



export default function designDetailsPage({ params }) {
    const { id } = useParams(params)
    if (!id) { <NotFoundPage /> }

    const property = graphicData.find((item) => item.id === parseInt(id))
    if (!property) { <NotFoundPage /> }

    const tags = property.tags

    return (
        <section className="text-gray-600 body-font">
            <ReturnButton href={'/works/design'} />
            <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center w-full">
                <SlideImages images={property.images} />
                <div className="lg:w-1/2 w-full md:w-[90%] lg:pl-10 lg:py-0 mt-10 lg:mt-0 ">
                    <h2 className='text-primary text-sm uppercase font-medium'>{property.type}</h2>
                    <h1 className="title-font font-medium mb-1 text-3xl uppercase">{property.title}</h1>
                    <p className="leading-relaxed mt-3 text-sm mb-4">{property.description}</p>

                </div>
            </div>
        </section>
    )
}
