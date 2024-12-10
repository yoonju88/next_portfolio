import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Description from './Description'
import DesignList from './design/DesignList'

export default function ProjectList({ works }) {
    return (
        <div className="flex flex-wrap pt-16 sm:-m-4 -mx-4 -mb-10 -mt-4">
            {works.map((item) => {
                return (
                    <DesignList
                        key={item.id}
                        id={item.id}
                        name={item.title}
                        cover={item.image}
                        type={item.type}
                        link={`/works/web/${item.id}`}
                    />
                )
            })}
        </div >
    )
}
