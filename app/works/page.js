import React from 'react'
import TypeCard from '@/components/works/TypeCard'
import WebImage from '@/public/web-ref.jpg'
import GraphicImage from '@/public/graphic-ref.jpg'

const projectTypes = [
    {
        id: "ds5",
        name: "Web development",
        description: "I built creative and functional web applications using modern web technologies such as React, Node.js, HTML, and CSS to design user-friendly interfaces. I focused on integrating various APIs and databases to enhance the performance and user experience of the web applications.",
        image: WebImage
    },
    {
        id: "ds6",
        name: "Graphic Design",
        description: "I focused on brand identity and visual design, creating innovative logos, marketing materials, and web UI designs. Using tools such as Adobe Photoshop and Illustrator, I crafted unique and memorable designs while ensuring that the work reflected the client’s needs and goals.",
        image: GraphicImage
    }
]

export default async function worksPage() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <TypeCard projectTypes={projectTypes} />
            </div>
        </section>
    )
}



