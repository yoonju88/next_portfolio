'use client'

export default function Tags({ name, tags }) {
    const animationSet = 'transform transition-all duration-300'

    return (
        <>
            <span class="text-secondary-foreground text-sm capitalize">{name}</span>
            <ul className="flex gap-1 items-center ">
                {tags.map((tag) => {
                    return (
                        <li key={tag} className={`text-xs text-foreground py-1 px-1.5 font-normal rounded ${animationSet} hover:font-medium hover:bg-accent`} >{tag}</li>
                    )
                })}
            </ul>
        </>
    )
}
