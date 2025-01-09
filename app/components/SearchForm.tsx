import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    // FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { useRouter } from "next/router";

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
    // const router = useRouter();


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
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>
                                Location
                                {/* Ícone de cama */}
                            </FormLabel>
                            <FormMessage />
                            <FormControl>
                                <Input placeholder="Salvador, BR" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}