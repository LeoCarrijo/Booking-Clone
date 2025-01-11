'use client'

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input";

import { BedDouble } from 'lucide-react';

export const formSchema = z.object({
    location: z.string().min(2).max(50),
    dates: z.object({
        from: z.date(),
        to: z.date(),
    }),
    adults: z
        .string()
        .min(1, { message: "Please select at least one adult" })
        .max(12, { message: "Max 12 adults Occupacy" }),
    children: z.string().min(0).max(12, { message: "Max 12 children Occupacy" }),
    rooms: z.string().min(1, { message: "Please select at least one room" })
});

export default function SearchForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            location: "",
            dates: {
                from: undefined,
                to: undefined,
            },
            adults: "1",
            children: "0",
            rooms: "1",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col lg:flex-col lg:max-w-6xl lg:mx-auto items-center justify-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 rounded-lg">
                <div className="grid w-full lg:max-w-sm items-center gap-1.5">
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='text-white flex'>
                                    Location
                                    <BedDouble className='ml-2 h-4 w-4 text-white' />
                                </FormLabel>
                                <FormMessage />
                                <FormControl>
                                    <Input placeholder="Salvador, BR" {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </div>
                <div className='grid w-full lg:max-w-sm items-center gap-1.5'>
                    <FormField
                        control={form.control}
                        name="dates"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Dates</FormLabel>
                                <FormMessage />
                                <Popover>
                                    <PopoverTrigger asChild>Open</PopoverTrigger>
                                    <PopoverContent>Place content for the popover here.</PopoverContent>
                                </Popover>

                            </FormItem>
                        )}
                    />
                </div>
            </form>
        </Form>
    )
}