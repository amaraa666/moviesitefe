
export const Sortsection = (): JSX.Element => {
    const filterMenu = ["Sort", "Genre", "Rating", "Tomatometer"]
    return (
        <>
            <div className="flex gap-5 p-2 justify-center">
                {filterMenu.map((elem, index) => {
                    return (
                        <div key={index} className="text-xl border px-3 py-1 rounded-xl">{elem}</div>
                    )
                })}
            </div>
        </>
    )
}
