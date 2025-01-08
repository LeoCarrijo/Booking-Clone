import * as z from "zod";

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
    return (
        <h1>Search Form</h1>
    )
}