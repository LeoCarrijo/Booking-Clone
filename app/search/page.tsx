export default function SearchPage() {
    const url = "https://www.booking.com/searchresults.html?ss=Salvador&group_adults=3&group_children=0&no_rooms=1&checkin=2025-2-11&checkout=2025-2-13";
    const apiUrl = `http://localhost:3000/api?url=${encodeURIComponent(url)}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });

    return (
        <div>
            <h1>Search Page</h1>
        </div>
    )
}