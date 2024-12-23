import Link from "next/link";
import Image from "next/image";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

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
                <ul className="flex gap-4">
                    <li>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button variant="outline">Stays</Button>
                            </PopoverTrigger>
                            <PopoverContent className="">
                                <div className="grid gap-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium leading-none">Dimensions</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Set the dimensions for the layer.
                                        </p>
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="grid grid-cols-3 items-center gap-4">
                                            <Label htmlFor="width">Width</Label>
                                            <Input
                                                id="width"
                                                defaultValue="100%"
                                                className="col-span-2 h-8"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 items-center gap-4">
                                            <Label htmlFor="maxWidth">Max. width</Label>
                                            <Input
                                                id="maxWidth"
                                                defaultValue="300px"
                                                className="col-span-2 h-8"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 items-center gap-4">
                                            <Label htmlFor="height">Height</Label>
                                            <Input
                                                id="height"
                                                defaultValue="25px"
                                                className="col-span-2 h-8"
                                            />
                                        </div>
                                        <div className="grid grid-cols-3 items-center gap-4">
                                            <Label htmlFor="maxHeight">Max. height</Label>
                                            <Input
                                                id="maxHeight"
                                                defaultValue="none"
                                                className="col-span-2 h-8"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </li>
                    <li>Stays</li>
                    <li>Flights</li>
                    <li>Car rentals</li>
                    <li>Attractions</li>
                    <li>Airport taxis</li>
                </ul>
            </nav>
        </header>
    )
}