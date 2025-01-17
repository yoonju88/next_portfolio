'use client'
import React, { useState } from 'react'
import DesignList from './DesignList'
import SelectSrollable from './SelectSrollable'
import { typeDesigns } from '@/utils/worksData'
import Link from 'next/link'
import PageNumber from './PageNumber'

const PER_PAGE = 9;

export default function ListContainer({ data }) {
    const [isFilteredType, setIsFilteredType] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const filteredItems = ((!isFilteredType ? data : data.filter(item => item.type === isFilteredType)) || [])
        .filter((event, index) => {
            if ((currentPage - 1) * PER_PAGE <= index &&
                PER_PAGE * currentPage > index
            ) {
                return true
            }
            return false
        })

    const handleClick = (type) => {
        setIsFilteredType(type)
        setCurrentPage(1);
        console.log('selectType', type)
    }

    const pageNumber = Math.floor((filteredItems?.length || 0) / PER_PAGE) + 1
    const arrayPageNumber = [...Array(pageNumber || 0)]
    const totalPages = Math.ceil(arrayPageNumber.length / PER_PAGE);

    return (
        <div>
            <span className='flex items-center justify-center mt-10'>
                <SelectSrollable
                    lists={typeDesigns}
                    onClick={handleClick}
                />
            </span>
            <section className="flex flex-wrap pt-10 justify-center">
                {filteredItems.map((item) => {
                    return (
                        <DesignList
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