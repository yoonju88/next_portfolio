'use client'
import react, { useState } from 'react'


export default function Toggle({ tags }) {
    const [isVisibleTags, setIsVisibleTags] = useState(false)

    const toggleTags = () => {
        setIsVisibleTags(!isVisibleTags)
    }
    return (
        <>
            <button
                type="button"
                onClick={toggleTags}
                className='transform transition duration-300 hover:rotate-180'
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none" viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                </svg>
            </button>
            {isVisibleTags && (
                <ul className="flex gap-1 flex-wrap">
                    {tags.map((tag) => (
                        <li key={tag} className="p-1 pl-3 pr-3 border-0 bg-indigo-500 text-white rounded">
                            {tag}
                        </li>

                    ))}
                </ul>
            )}
        </>
    )
}
