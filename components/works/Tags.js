export default function Tags({ tags }) {
    return (
        <ul className="flex gap-2 items-center mt-0">
            {tags.map((tag) => {
                return (
                    <li key={tag} className={`text-foreground/75 font-normal add-transition hover:text-chart-2 hover:font-bold hover:tracking-wide`} >{tag}</li>
                )
            })}
        </ul>
    )
}
