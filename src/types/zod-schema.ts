// Zod Schema
import {z} from "zod";

export const formSchema = z.object({
    serviceCategory: z.string().default("telegram-member"),
    serviceType: z.string().default("cheap-mix"),
    link: z
        .string()
        .min(1, "لینک الزامی است")
        .regex(/(https?:\/\/)?(t\.me|telegram\.me)\/.+/, "فرمت لینک معتبر نیست (t.me/...)"),
    quantity: z.coerce
        .number()
        .min(100, "حداقل تعداد 100 است")
        .max(5000, "حداکثر تعداد 5000 است"),
    fullName: z.string().min(2, "نام و نام خانوادگی الزامی است"),
    mobile: z.string().regex(/^09[0-9]{9}$/, "شماره موبایل معتبر نیست"),
    email: z.string().email("ایمیل معتبر نیست").optional().or(z.literal("")),
    terms: z.literal(true, {
        errorMap: () => ({ message: "پذیرش قوانین الزامی است" }),
    }),
});