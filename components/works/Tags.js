export default function Tags({ tags }) {
    return (
        <ul className="flex gap-2  flex-wrap items-center mt-0">
            {tags.map((tag) => {
                return (
                    <li key={tag} className={`text-white font-medium add-transition bg-btn-1/90 py-1 px-1.5 rounded-sm hover:bg-btn-2 hover:shadow-inner hover:shadow-btn-1 `} >{tag}</li>
                )
            })}
        </ul>
    )
}
