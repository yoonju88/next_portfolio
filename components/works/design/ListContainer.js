'use client'
import React, { useMemo, useState } from 'react'
import SelectSrollable from './SelectSrollable'
import { typeDesigns } from '@/utils/worksData'
import PageNumber from './PageNumber'
import WorkList from './DesignList'
import { useLocale, useTranslations } from "next-intl";

const PER_PAGE = 6;

export default function ListContainer({ data }) {
    const locale = useLocale()
    const t = useTranslations()
    const [isFilteredType, setIsFilteredType] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const filteredItems = ((!isFilteredType ? data : data.filter(item => item.type === isFilteredType)) || [])
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * PER_PAGE,
        currentPage * PER_PAGE
    )
    const handleClick = (value) => {
        setIsFilteredType(value)
        setCurrentPage(1);
        console.log('selectType', value)
    }

    const pageNumber = Math.floor((filteredItems?.length || 0) / PER_PAGE) + 1
    const totalPages = Math.ceil(filteredItems.length / PER_PAGE);
    const arrayPageNumber = Array.from({ length: totalPages }, (_, i) => i + 1);
    // 번역 라벨 매핑 (로케일 바뀌면 자동 갱신)
    const translatedTypes = typeDesigns.map(item => ({ ...item, label: t(item.key) }))

    return (
        <div>
            <span className='flex justify-center mt-10'>
                <SelectSrollable
                    title={t("selection.title")}
                    lists={translatedTypes}
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
                            link={`/${locale}/works/design/${item.id}`}
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