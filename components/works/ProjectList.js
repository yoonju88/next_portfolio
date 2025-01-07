import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Description from './Description'
import DesignList from './design/DesignList'

export default function ProjectList({ works }) {
    return (
        <div className="flex flex-wrap pt-10 w-full ">
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
