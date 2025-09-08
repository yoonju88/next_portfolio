'use client'
import React, { useState } from 'react'
import DesignList from './DesignList'
import SelectSrollable from './SelectSrollable'
import { typeDesigns } from '@/utils/worksData'
import Link from 'next/link'
import PageNumber from './PageNumber'
import WorkList from './DesignList'

const PER_PAGE = 6;

export default function ListContainer({ data }) {
    const [isFilteredType, setIsFilteredType] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const filteredItems = ((!isFilteredType ? data : data.filter(item => item.type === isFilteredType)) || [])
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * PER_PAGE,
        currentPage * PER_PAGE
    )


    const handleClick = (type) => {
        setIsFilteredType(type)
        setCurrentPage(1);
        console.log('selectType', type)
    }

    const pageNumber = Math.floor((filteredItems?.length || 0) / PER_PAGE) + 1
    const totalPages = Math.ceil(filteredItems.length / PER_PAGE);
    const arrayPageNumber = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div>
            <span className='flex justify-center mt-10'>
                <SelectSrollable
                    lists={typeDesigns}
                    onClick={handleClick}
                />
            </span>
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 px-10">
                {paginatedItems.map((item) => {
                    return (
                        <WorkList
                            key={item.id}
                            id={item.id}
                            name={item.title}
                            cover={item.cover}
                            type={item.type}
                            link={`/works/design/${item.id}`}
                        />
                    )
                })}
            </section>
            <span className='flex justify-center py-8'>
                <PageNumber
                    data={arrayPageNumber}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    totalPages={totalPages}
                />
            </span>
        </div>
    )
}