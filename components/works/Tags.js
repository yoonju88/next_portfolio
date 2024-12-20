export default function Tags({ tags }) {
    return (
        <ul className="flex gap-2 items-center ml-2 mt-0">
            {tags.map((tag) => {
                return (
                    <li key={tag} className={`text-foreground/75 px-1.5 font-normal rounded add-transition hover:text-white hover:bg-chart-2`} >{tag}</li>
                )
            })}
        </ul>
    )
}
