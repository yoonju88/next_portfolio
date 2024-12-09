'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { graphicData } from '@/utils/worksData'
import NotFoundPage from '@/app/not-found'
import SlideImages from '@/components/works/design/SlideImages'
import { ReturnButton } from '@/components/Buttons'


export default function designDetailsPage({ params }) {
    const { id } = useParams(params)
    if (!id) { <NotFoundPage /> }

    const property = graphicData.find((item) => item.id === parseInt(id))
    if (!property) { <NotFoundPage /> }

    const tags = property.tags

    return (
        <section className="text-gray-600 body-font">
            <ReturnButton href={'/works/design'} />
            <div className="container mx-auto flex flex-wrap items-center justify-center w-full">
                <SlideImages images={property.images} />
                <div className="lg-w-1/3 w-full p-4 text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">{property.title}</h1>
                    <p className="mb-8 leading-relaxed">{property.description}</p>
                    <ul> technics :
                        {tags.map((item) => {
                            return (
                                <li key={item}>{item}</li>
                            )
                        })}
                    </ul>
                    <p>Creation Years : {property.creationYear}</p>
                    <p>Company name : {property.companyName}</p>
                </div>
            </div>
        </section>
    )
}
