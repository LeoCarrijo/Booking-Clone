import Image from "next/image"
import { notFound } from "next/navigation"
import type { Props, BookingURL, AdComponent } from "@/typings"

async function fetchTitles(url: URL) {
    const response = await fetch(`http://localhost:3000/api/getTitles?url=${url}`)
    const data = await response.json()
    return data
}

async function fetchImages(url: URL) {
    const response = await fetch(`http://localhost:3000/api/getImages?url=${url}`)
    const data = await response.json()
    return data
}

async function fetchTiers(url: URL) {
    const response = await fetch(`http://localhost:3000/api/getTiers?url=${url}`)
    const data = await response.json()
    return data
}

async function fetchReviews(url: URL) {
    const response = await fetch(`http://localhost:3000/api/getReviews?url=${url}`)
    const data = await response.json()
    return data
}

async function fetchRatings(url: URL) {
    const response = await fetch(`http://localhost:3000/api/getRatings?url=${url}`)
    const data = await response.json()
    return data
}

export default async function SearchPage({ searchParams }: Props) {
    if (!searchParams.url) return notFound()

    const URLParams: BookingURL = {
        url: searchParams.url,
        group_adults: searchParams.group_adults,
        group_children: searchParams.group_children,
        no_rooms: searchParams.no_rooms,
        checkin: searchParams.checkin,
        checkout: searchParams.checkout
    }
    const finalURL = new URL(URLParams.url)
    finalURL.searchParams.set("group_adults", URLParams.group_adults)
    finalURL.searchParams.set("group_children", URLParams.group_children)
    finalURL.searchParams.set("no_rooms", URLParams.no_rooms)
    finalURL.searchParams.set("checkin", URLParams.checkin)
    finalURL.searchParams.set("checkout", URLParams.checkout)

    const titles: string[] = await fetchTitles(finalURL)
    const images: string[] = await fetchImages(finalURL)
    const tiers: string[] = await fetchTiers(finalURL)
    const reviews: string[] = await fetchReviews(finalURL)
    const rating: string[] = await fetchRatings(finalURL)
    const allAdComponents: AdComponent[] = titles.map((title, index) => ({
        title,
        image: images[index],
        tier: tiers[index],
        reviews: reviews[index],
        rating: rating[index]
    }))

    return (
        <div>
            <h1>Resultados Encontrados:</h1>
            <section>
                <div className="bg-cyan-50 grid grid-cols-adComponent grid-rows-1">
                    <div className="w-full bg-cyan-300">

                    </div>
                    <div>
                        <h2>Titulo</h2>
                        <h2>Tier</h2>
                        <h2>Reviews</h2>
                        <h2>Rating</h2>
                    </div>
                </div>
            </section>
            {/* <ul className="flex flex-col">
                {allAdComponents.map((adComponent) => (
                    <li key={adComponent.title}>
                        <h2>{adComponent.title}</h2>
                        <h2>{adComponent.tier}</h2>
                        <h2>{adComponent.reviews}</h2>
                        <h2>{adComponent.rating}</h2>
                        <Image
                            src={adComponent.image}
                            width={100}
                            height={100}
                            alt="Image"
                        />
                    </li>
                ))}
            </ul> */}
        </div>
    )
}