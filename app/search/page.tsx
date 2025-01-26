import Image from "next/image"
import { notFound } from "next/navigation"
import type { Props } from "@/typings"


const dummyURL = "https://www.booking.com/searchresults.html?ss=Salvador&group_adults=3&group_children=0&no_rooms=1&checkin=2025-2-11&checkout=2025-2-13"

async function fetchTitles(url: string) {
    const response = await fetch(`http://localhost:3000/api/getTitles?url=${url}`)
    const data = await response.json()
    return data
}

async function fetchImages(url: string) {
    const response = await fetch(`http://localhost:3000/api/getImages?url=${url}`)
    const data = await response.json()
    return data
}

export default async function SearchPage({ searchParams }: Props) {
    if (!searchParams.url) return notFound()
    const titles: string[] = await fetchTitles(dummyURL)
    const images: string[] = await fetchImages(dummyURL)
    const url = searchParams.url
    const group_adults = searchParams.group_adults
    const group_children = searchParams.group_children
    const no_rooms = searchParams.no_rooms
    const checkin = searchParams.checkin
    const checkout = searchParams.checkout
    console.log(url, group_adults, group_children, no_rooms, checkin, checkout)

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