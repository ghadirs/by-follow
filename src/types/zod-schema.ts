import { z } from "zod";

export const formSchema = z.object({
    serviceCategory: z.string().min(1),
    serviceType: z.string().min(1),
    link: z.string().min(1),
    // Use .coerce.number() to ensure the output is strictly 'number'
    quantity: z.number(),
    fullName: z.string().min(2),
    mobile: z.string().regex(/^09[0-9]{9}$/),
    email: z.union([z.string().email(), z.literal("")]).optional(),
    terms: z.boolean(),
});

// IMPORTANT: Do not write "interface FormValues { ... }"
// Instead, use this line to generate the type automatically:
export type FormValues = z.infer<typeof formSchema>;