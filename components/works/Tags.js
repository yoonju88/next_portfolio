'use client'

export default function Tags({ tags }) {
    const animationSet = 'transform transition-all duration-300'

    return (
        <ul className="flex gap-0 items-center ml-2">
            {tags.map((tag) => {
                return (
                    <li key={tag} className={`text-foreground/75 py-1 px-1.5 font-normal rounded add-transition ${animationSet} hover:text-white hover:bg-chart-2`} >{tag}</li>
                )
            })}
        </ul>
    )
}
