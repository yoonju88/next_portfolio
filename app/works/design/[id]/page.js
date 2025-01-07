'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import { graphicData } from '@/utils/worksData'
import NotFoundPage from '@/app/not-found'
import SlideImages from '@/components/works/design/SlideImages'
import { IconButton } from '@/components/form/Buttons'
import ToggleProperty from '@/components/works/design/ToggleProperty'
import Description from '@/components/works/Description'
import Tags from '@/components/works/Tags'

export default function designDetailsPage({ params }) {
    const { id } = useParams(params)
    if (!id) { <NotFoundPage /> }

    const property = graphicData.find((item) => item.id === parseInt(id))
    if (!property) { <NotFoundPage /> }

    const tags = property.tags
    return (
        <section className="container w-[96%]">
            <div className="mx-auto flex flex-col lg:flex-row items-center justify-center py-20">
                <SlideImages images={property.images} />
                <div className="w-full lg:pl-14 lg:py-0 mt-10 lg:mt-0 ">
                    <h2 className='text-chart-2 text-md uppercase font-semibold'>{property.type}</h2>
                    <h1 className="title-font font-medium mb-4 mt-1.5 text-3xl uppercase">{property.title}</h1>
                    <Description description={property.description} />
                    <div className='mt-8'>
                        <ToggleProperty
                            title="Program i used"
                        >
                            <Tags
                                tags={property.tags}
                            />
                        </ToggleProperty>
                        <ToggleProperty
                            title="Creation year"
                            description={property.creationYear}
                        />
                        {property.companyName ? (
                            <ToggleProperty
                                title="The company i worked at"
                                description={property.companyName}
                            />
                        ) : ('')}
                    </div>
                </div>
            </div>
            <span className="fixed top-10 left-20">
                <IconButton
                    href={'/works/design'}
                />
            </span>
        </section>
    )
}
