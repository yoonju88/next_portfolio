export default function BlockContainer({ children }) {
    return (
        <div className="flex border-t border-gray-200  justify-between py-2 items-center">
            {children}
        </div>
    )
}