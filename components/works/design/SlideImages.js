import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    Dots,
} from "@/components/ui/carousel"


export default function SlideImages({ images }) {
    const imageLengthMoreThanOne = images.length > 1

    return (
        <Carousel className="w-full max-w-2xl" onChange={(index) => setCurrentIndex(index)}>
            <CarouselContent>
                {images.map((item, index) => {
                    return (
                        <CarouselItem key={index}>
                            <div className="p-4 w-full object-cover object-center relative">
                                <Image src={item} alt={`project image-${index + 1}`} className='relative rounded-lg' />
                            </div>
                        </CarouselItem>
                    )
                }
                )}
            </CarouselContent>
            {imageLengthMoreThanOne && (
                <>
                    <CarouselPrevious />
                    <CarouselNext />
                </>
            )}
        </Carousel>
    )
}
