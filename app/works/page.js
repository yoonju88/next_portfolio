import React from 'react'
import BreadCrumb from '@/components/BreadCrumb'
import ProjectList from '@/components/works/ProjectList'
import ProjectTitle from '@/components/works/ProjectTitle'
import { worksData } from '@/utils/worksData'

export default async function worksPage() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <ProjectTitle
                    title="development web"
                    description="I built creative and functional web applications using modern web technologies such as React, Node.js, HTML, and CSS to design user-friendly interfaces. I focused on integrating various APIs and databases to enhance the performance and user experience of the web applications."
                />
                <ProjectList works={worksData} />
            </div>
        </section>
    )
}