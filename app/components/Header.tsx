import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown, House, MessageSquare, Plane } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-blue-800 p-4">
            <Link href="/">
                <span className="sr-only">Booking.com</span>
                <Image
                    src="/booking-logo.png"
                    width={150}
                    height={100}
                    alt="Booking.com logo"
                />
            </Link>

            <nav>
                <ul className="flex gap-4 text-white">
                    <li className="cursor-pointer">
                        <Popover>
                            <PopoverTrigger asChild>
                                <span className="flex justify-center items-center">Stays <ChevronDown /></span>
                            </PopoverTrigger>
                            <PopoverContent className="flex flex-col gap-4 w-auto pb-14">
                                <Link href="/" className="flex items-center justify-center px-2 gap-4 border-2 border-blue-500 rounded-lg p-2 hover:bg-blue-200 duration-100 active:bg-blue-400">
                                    <House color="blue" width={70} height={55} className="bg-gray-200 justify-self-end p-3 rounded-lg border-blue-300 shadow-lg shadow-black-300" />
                                    <aside className="w-full">
                                        <h4 className="text-blue-600 font-medium">Book a Stay</h4>
                                        <p className="text-ellipsis truncate text-sm">Get a better understanting of our traffic</p>
                                    </aside>
                                </Link>
                                <Link href="/" className="flex items-center justify-center px-2 gap-4 border-2 border-blue-500 rounded-lg p-2 hover:bg-blue-200 duration-100 active:bg-blue-400">
                                    <Plane color="blue" width={70} height={55} className="bg-gray-200 justify-self-end p-3 rounded-lg border-blue-300 shadow-lg shadow-black-300" />
                                    <aside className="w-full">
                                        <h4 className="text-blue-600 font-medium">Book a Flight</h4>
                                        <p className="text-ellipsis truncate text-sm">Speak directly to your customers</p>
                                    </aside>
                                </Link>
                                <Link href="/" className="flex items-center justify-center px-2 gap-4 border-2 border-blue-500 rounded-lg p-2 hover:bg-blue-200 duration-100 active:bg-blue-400">
                                    <MessageSquare color="blue" width={70} height={55} className="bg-gray-200 justify-self-end p-3 rounded-lg border-blue-300 shadow-lg shadow-black-300" />
                                    <aside className="w-full">
                                        <h4 className="text-blue-600 font-medium">Contact out Support Team</h4>
                                        <p className="text-ellipsis truncate text-sm">Your customers data will be safe and secure </p>
                                    </aside>
                                </Link>
                                <div className="absolute bottom-0 left-0 w-full h-10 rounded-b-lg flex justify-center items-center border-collapse">
                                    <Link href="/" className="flex justify-center items-center w-full h-full border-t-2 border-blue-500 hover:bg-blue-200 duration-100 active:bg-blue-400">
                                        <h4 className="text-blue-600 font-medium">See Demo Booking</h4>
                                    </Link>
                                    <Link href="/" className="w-full flex justify-center items-center h-full border-l-2 border-t-2 border-blue-500 hover:bg-blue-200 duration-100 active:bg-blue-400">
                                        <h4 className="text-blue-600 font-medium">Contact Support</h4>
                                    </Link>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </li>
                    <li>Flights</li>
                    <li>Car rentals</li>
                    <li>Attractions</li>
                    <li>Airport taxis</li>
                </ul>
            </nav>
        </header>
    )
}