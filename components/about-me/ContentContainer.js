import React from 'react'
import Title from './Title'

export default function ContentContainer({ title, icon, className, children }) {

    return (
        <div className={className}>
            <Title
                title={title}
            >
                {icon}
            </Title>
            <div className="flex flex-col gap-7">
                {children}
            </div>
        </div>
    )
}
