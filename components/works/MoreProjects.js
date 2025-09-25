import React from 'react'
import ImageOverlay from './design/ImageOverlay'

export default function MoreProjects({ data = [], projectId, locale }) {
    return (
        <div className="flex flex-col mt-32 text-center justify-center items-center">
            <h2>More Projects</h2>
            <div className="flex py-10 gap-4">
                {data.filter(p => p.id !== projectId) // 현재 프로젝트 제외
                    .slice(0, 4) // 4개만 보여주기
                    .map(p => (
                        <ImageOverlay
                            key={p.id}
                            link={`/${locale}/works/web/${p.id}`}
                            cover={p.coverImage}
                            name={p.title}
                            className="h-[180px] w-[250px]"
                        />
                    ))}
            </div>
        </div>
    )
}
