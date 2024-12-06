'use client'
import React, { useState } from 'react'
import DesignList from './DesignList'
import SelectSrollable from './SelectSrollable'
import { typeDesigns, graphicData } from '@/utils/worksData'
import Link from 'next/link'

const PER_PAGE = 9;

export default function ListContainer() {
    const [isFilteredType, setIsFilteredType] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const filteredItems = ((!isFilteredType ? graphicData : graphicData.filter(item => item.type === isFilteredType)) || []
    ).filter((event, index) => {
        if ((currentPage - 1) * PER_PAGE <= index &&
            PER_PAGE * currentPage > index
        ) {
            return true
        }
        return false
    })

    const handleClick = (type) => {
        setIsFilteredType(type)
        console.log('selectType', type)
    }
    const pageNumber = Math.floor((filteredItems?.length || 0) / PER_PAGE) + 1

    return (
        <div >
            <div className='flex items-center justify-center mt-10'>
                <SelectSrollable
                    lists={typeDesigns}
                    onClick={handleClick}
                />
            </div>
            <div className="flex flex-wrap pt-10">
                {filteredItems.map((item) => {
                    return (
                        <DesignList
                            key={item.id}
                            id={item.id}
                            name={item.title}
                            cover={item.cover}
                            type={item.type}
                        />
                    )
                })}
            </div>
            <div className='flex justify-center pb-10'>
                {[...Array(pageNumber || 0)].map((_, n) => (
                    <Link key={n} href="#" onClick={() => setCurrentPage(n + 1)} className={`p-1 ${currentPage ? "font-semibold text-base" : "text-sm"} `}>
                        {n + 1}
                    </Link>
                ))}
            </div>
        </div >
    )
}