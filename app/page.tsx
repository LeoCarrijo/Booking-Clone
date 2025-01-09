/* eslint-disable @next/next/no-img-element */
import SearchForm from "./components/SearchForm";
import { trending_data } from "./data/trending";

export default function Home() {
  return (
    <main className="bg-blue-800">
      <section className="max-w-7xl mx-auto pb-4 px-3 lg:px-0">
        <h1 className="text-white font-bold text-5xl pb-2">Find your next Stay</h1>
        <h3 className="text-white">Search low prices on hotels, homes and much more...</h3>
      </section>
      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>
      <section className="mx-auto max-w-7xl mt-10 p-6 bg-white rounded-t-lg">
        <div>
          <h3 className="font-bold text-xl">Trending Destinations</h3>
          <p className="font-light">Most popular choices for travellers from around the world</p>
        </div>
        <div className="flex overflow-x-scroll space-x-4 py-5">
          {trending_data.map((item) => (
            <div key={item.id} className="space-y-1 shrink-0 cursor-pointer rounded-lg shadow-md">
              <img src={item.src} alt={item.title} className="w-80 h-72 object-cover rounded-lg pb-2" />
              <div className="p-4">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <p className="text-gray-600">{item.location}</p>
                <p className="text-gray-800 font-light text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
