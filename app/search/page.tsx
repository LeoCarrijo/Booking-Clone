import { notFound } from "next/navigation"
import type { Props, BookingURL, AdComponent } from "@/typings"
import Link from "next/link"
import { Hotel } from "lucide-react"

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
        <div className="bg-[#1E40AF]">
            <h1 className="flex gap-2 p-2 text-xl text-white justify-center items-center"> {allAdComponents.length} Resultados encontrados <Hotel /></h1>
            <section className="flex flex-col gap-2">
                {allAdComponents.map((adComponent) => {
                    return (
                        <Link href="https://google.com" key={adComponent.title} className="grid grid-cols-adComponent grid-rows-1 p-2 gap-2 border-2 border-[#002bba] my-[-2px] duration-150 m-2 rounded-sm bg-white hover:bg-[#e4ebff] active:bg-[#002bba] active:text-white">
                            <div className="w-full bg-cyan-300 border border-[#1E40AF] shadow-sm shadow-[#1e40af58] rounded-sm bg-local bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${adComponent.image})` }}>

                            </div>
                            <div className="flex flex-col">
                                <h2 className="font-bold">{adComponent.title}</h2>
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#1E40AF] w-[35px] h-[35px] rounded-lg flex justify-center items-center text-white">
                                        {adComponent.rating}
                                    </div>
                                    <h2>{adComponent.tier}</h2>
                                </div>
                                <h2>{adComponent.reviews}</h2>
                                <div className="flex flex-col self-end">
                                    <h2>3 noites, 2 adultos, 1 criança</h2>
                                    <h2 className="self-end font-bold text-2xl">R$ 1.321</h2>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </section>
        </div>
    )
}