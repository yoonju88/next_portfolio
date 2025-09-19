import React from 'react'
import Title from './Title'
import Reveal from '../ScrollReveal/Reveal'

export default function ContentContainer({ title, icon, children }) {

    return (
        <section>
            <Reveal y={20} duration={0.6} start="top 85%" itemSelector={null}>
                <Title
                    title={title}
                >
                    {icon}
                </Title>
            </Reveal>
            <div className="flex flex-col gap-7">
                {children}
            </div>
        </section>
    )
}
