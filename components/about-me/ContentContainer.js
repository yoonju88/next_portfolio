import React from 'react'
import Title from './Title'

export default function ContentContainer({ title, icon, children }) {

    return (
        <section>
            <Title
                title={title}
            >
                {icon}
            </Title>
            <div className="flex flex-col gap-7">
                {children}
            </div>
        </section>
    )
}
