"use client"
import { useParams } from 'next/navigation'
import React from 'react'

export default function DownloadCV({ children }) {
    const params = useParams()
    const locale = params?.locale || 'en'

    const fileFor = {
        en: "/cv/cv_en.pdf",
        fr: "/cv/cv_fr.pdf",
        ko: "/cv/cv_ko.pdf",
    }
    const href = fileFor[locale] ?? fileFor.en;

    //console.log('Selected file:', href) 어떤 이력서 다운받아지는지 콘솔로 확인 가능

    return (
        <a href={href} download >
            {children}
        </a>
    )
}
