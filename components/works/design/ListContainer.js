'use client'
import React, { useEffect, useMemo, useState } from 'react'
import SelectSrollable from './SelectSrollable'
import { typeDesigns } from '@/utils/worksData'
import PageNumber from '../PageNumber'
import ImageOverlay from '../ImageOverlay'
import { useLocale, useTranslations } from "next-intl";

export default function ListContainer({ data }) {
    const locale = useLocale()
    const t = useTranslations()
    const [isFilteredType, setIsFilteredType] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage, setPerPage] = useState(6)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setPerPage(4)
            } else {
                setPerPage(6)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const filteredItems = (
        !isFilteredType || isFilteredType === 'all'
            ? data
            : data.filter(item => item.category === isFilteredType)
    ) || [];
    const paginatedItems = filteredItems.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage
    )
    const handleClick = (value) => {
        setIsFilteredType(value)
        setCurrentPage(1);
    }

    //const pageNumber = Math.floor((filteredItems?.length || 0) / PER_PAGE) + 1
    const totalPages = Math.ceil(filteredItems.length / perPage);
    const arrayPageNumber = Array.from({ length: totalPages }, (_, i) => i + 1);
    // 번역 라벨 매핑 (로케일 바뀌면 자동 갱신)
    const translatedTypes = typeDesigns.map(item => ({ ...item, label: t(item.key) }))

    return (
        <>
            <span className='animate-slide-down-soft [animation-delay:1300ms] flex justify-center mt-10'>
                <SelectSrollable
                    title={t("selection.title")}
                    lists={translatedTypes}
                    onClick={handleClick}
                />
            </span>
            <section className="animate-slide-down-soft [animation-delay:2000ms] grid grid-cols-1 lg:grid-cols-2 gap-8 pt-10 px-6 lg:px-10">
                {paginatedItems.map((item) => {
                    return (
                        <ImageOverlay
                            key={item.id}
                            id={item.id}
                            name={item.title}
                            cover={item.coverImage}
                            type={item.category}
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
        </>
    )
}