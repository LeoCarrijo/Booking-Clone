import type { Character } from "@/typings"
import Image from "next/image"

export default async function SearchPage() {
    const mainURL = "http://localhost:3000/api"
    const namesResponse = await fetch(`${mainURL}/getAllNames`)
    const names = await namesResponse.json()
    const avatarsResponse = await fetch(`${mainURL}/getAllAvatars`)
    const avatars = await avatarsResponse.json()
    const characters: Character[] = []

    for (const name in names) {
        characters.push({
            name: name,
            avatar: avatars[name]
        })
    }

    return (
        <div>
            <h1>Search Page</h1>
            <div className="flex">
                {characters.map((character) => {
                    return (
                        <li key={character.name}>
                            <Image
                                src={character.avatar}
                                width={100}
                                height={100}
                                alt={character.name} />
                            <h2>{character.name}</h2>
                        </li>
                    )
                })}
            </div>
        </div>
    );
}