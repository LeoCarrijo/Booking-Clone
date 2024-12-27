'use client'

import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown, CirclePlay, House, LogIn, Menu, MessageSquare, Phone, Plane } from "lucide-react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Header() {
    return (
        <header className="flex items-center justify-between lg:justify-around bg-blue-800 p-4">
            <Link href="/">
                <span className="sr-only">Booking.com</span>
                <Image
                    src="/booking-logo.png"
                    width={150}
                    height={100}
                    alt="Booking.com logo"
                />
            </Link>
            <Dialog>
                <DialogTrigger asChild>
                    <button type="button" className="text-white lg:hidden">
                        <span className="sr-only">Open Main Menu</span>
                        <Menu />
                    </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="flex justify-center items-center">
                            <Image
                                src="/booking-logo-azul.png"
                                width={150}
                                height={100}
                                alt="Booking.com logo"
                            />
                        </DialogTitle>
                    </DialogHeader>
                    <nav className="flex flex-col justify-center items-center gap-4 font-medium text-lg text-blue-500">
                        <li className="list-none">
                            <DropdownMenu>
                                <DropdownMenuTrigger className="flex justify-center items-center relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[3px] before:bg-blue-500 before:transition-all hover:before:w-full">Stays<ChevronDown /></DropdownMenuTrigger>
                                <DropdownMenuContent className="text-blue-500 font-medium">
                                    <DropdownMenuItem className="flex justify-center items-center"><House />Book a Stay</DropdownMenuItem>
                                    <DropdownMenuItem className="flex justify-center items-center"><Plane />Book a Flight</DropdownMenuItem>
                                    <DropdownMenuItem className="flex justify-center items-center"><MessageSquare />Contact Our Support Team</DropdownMenuItem>
                                    <DropdownMenuItem className="flex justify-center items-center"><CirclePlay />See Demo Booking</DropdownMenuItem>
                                    <DropdownMenuItem className="flex justify-center items-center"><Phone />Contact Support</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </li>
                        <Link href="/" className="flex justify-center items-center relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[3px] before:bg-blue-500 before:transition-all hover:before:w-full">Flights<ChevronDown /></Link>
                        <Link href="/" className="flex justify-center items-center relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[3px] before:bg-blue-500 before:transition-all hover:before:w-full">Car rentals<ChevronDown /></Link>
                        <Link href="/" className="flex justify-center items-center relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[3px] before:bg-blue-500 before:transition-all hover:before:w-full">Attractions<ChevronDown /></Link>
                        <Link href="/" className="flex justify-center items-center relative before:content-[''] before:absolute before:bottom-[-2px] before:left-0 before:w-0 before:h-[3px] before:bg-blue-500 before:transition-all hover:before:w-full">Airport taxis<ChevronDown /></Link>
                    </nav>
                    <DialogFooter>
                        <button type="button" className="flex justify-center items-center gap-2 font-medium relative before:content-[''] before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[3px] before:bg-black before:transition-all hover:before:w-full">
                            <span className="sr-only">Login Button</span>
                            <span>Login</span>
                            <LogIn />
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <nav className="hidden lg:block">
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
                                        <span className="text-blue-600 flex justify-center items-center gap-2">
                                            <CirclePlay />
                                            <h4 className="font-medium">See Demo Booking</h4>
                                        </span>
                                    </Link>
                                    <Link href="/" className="w-full flex justify-center items-center h-full border-l-2 border-t-2 border-blue-500 hover:bg-blue-200 duration-100 active:bg-blue-400">
                                        <span className="text-blue-600 flex justify-center items-center gap-2">
                                            <Phone />
                                            <h4 className="font-medium">Contact Support</h4>
                                        </span>
                                    </Link>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </li>
                    <li className="flex justify-center items-center">Flights <ChevronDown /></li>
                    <li className="flex justify-center items-center">Car rentals <ChevronDown /></li>
                    <li className="flex justify-center items-center">Attractions <ChevronDown /></li>
                    <li className="flex justify-center items-center">Airport taxis <ChevronDown /></li>
                </ul>
            </nav>
            <button type="button" className="hidden lg:flex justify-center items-center gap-2 text-white">
                <span className="sr-only">Login Button</span>
                <span>Login</span>
                <LogIn />
            </button>
        </header>
    )
}