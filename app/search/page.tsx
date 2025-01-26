async function fetchTitles() {
    const response = await fetch("http://localhost:3000/api/getTitles")
    const data = await response.json()
    return data
}

export default async function SearchPage() {
    const titles: string[] = await fetchTitles()

    return (
        <div>
            <h1>Search Page</h1>
            <ul>
                {titles.map((title) => {
                    return <li key={title}>{title}</li>
                })}
            </ul>
        </div>
    )
}