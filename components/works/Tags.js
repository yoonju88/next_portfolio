'use client'

export default function Tags({ tags }) {
    const animationSet = 'transform transition-all duration-300'

    return (
        <ul className="flex gap-0 items-center ">
            {tags.map((tag) => {
                return (
                    <li key={tag} className={`text-secondary-foreground py-1 px-1.5 font-normal rounded ${animationSet} hover:text-white hover:bg-primary/90`} >{tag}</li>
                )
            })}
        </ul>
    )
}
