'use client'
import React, { useState, useEffect } from 'react'
import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function SlideImages({ images }) {
    const [api, setApi] = React.useState(null)
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) { return }
        setCurrent(api.selectedScrollSnap())

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
        return () => {
            api.off("select", () => {
                setCurrent(api.selectedScrollSnap())
            })
        }
    }, [api])

    const imageLengthMoreThanOne = images.length > 1
    return (
        <Carousel className="w-full" setApi={setApi}>
            <CarouselContent>
                {images.map((image, index) => {
                    return (
                        <CarouselItem key={index}>
                            <div className="relative overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`project image-${index + 1}`}
                                    className='relative rounded-lg bg-slate-100 object-cover object-center'
                                    priority
                                />
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
                    <div className="absolute bottom-8 flex gap-2.5 justify-center items-center right-1/2 transform translate-x-1/2">
                        {images.map((_, index) => {
                            return (
                                <div
                                    key={`dots-${index}`}
                                    className={`w-3 h-3 rounded-full border border-primary ${current === index ? "bg-primary shadow-primary/50 shadow-md" : "bg-white"}`}
                                />
                            )
                        })}
                    </div>
                </>
            )}
        </Carousel>
    )
}
