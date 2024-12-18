import React from 'react'
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function pageNumber({ data, currentPage, setCurrentPage, totalPages }) {
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    const handleNext = () => {
        if (currentPage < totalPages + 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        href="#"
                        onClick={handlePrevious}
                        disabled={currentPage === 1}
                    />
                </PaginationItem>
                {data.map((page, n) => {
                    return (
                        <PaginationItem key={n}>
                            <PaginationLink
                                href="#"
                                onClick={() => setCurrentPage(n + 1)}
                                isActive={currentPage === n + 1}
                            >
                                {n + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )
                })}
                <PaginationItem>
                    <PaginationNext
                        href="#"
                        onClick={handleNext}
                        disabled={currentPage === totalPages + 1}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
