import React from 'react'

export default function FeatureDetail({ title, data }) {
    return (
        <div className=" p-6">
            <h4 className="text-btn-1 font-bold mb-3">{title}</h4>
            <ul className="list-disc list-inside space-y-2 text-foreground/90">
                {data.map((sentence, idx) => (
                    <li key={idx}>{sentence}</li>
                ))}
            </ul>
        </div>
    )
}
