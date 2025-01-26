import Image from "next/image"

async function fetchTitles() {
    const response = await fetch("http://localhost:3000/api/getTitles")
    const data = await response.json()
    return data
}

async function fetchImages() {
    const response = await fetch("http://localhost:3000/api/getImages")
    const data = await response.json()
    return data
}

export default async function SearchPage() {
    const titles: string[] = await fetchTitles()
    const images: string[] = await fetchImages()

    return (
        <div>
            <ul>
                {titles.map((title) => {
                    return <li key={title}>{title}</li>
                })}
            </ul>
            <ul className="flex">
                {images.map((image) => {
                    return <li key={image}>
                        <Image
                            src={image}
                            width={100}
                            height={100}
                            alt="Image"
                        />
                    </li>
                })}
            </ul>
        </div>
    )
}