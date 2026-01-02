"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

// 1. Define your schema with Persian error messages
const formSchema = z.object({
    phoneNumber: z.string().min(10, {
        message: "شماره همراه باید حداقل ۱۰ رقم باشد.", // "Phone number must be at least 10 digits"
    }),
    password: z.string().min(6, {
        message: "رمز عبور باید حداقل ۶ کاراکتر باشد.", // "Password must be at least 6 chars"
    }),
})

export default function LoginPage() {
    // 2. Define the form
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phoneNumber: "",
            password: "",
        },
    })

    // 3. Define the submit handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values) // Send this to your backend API
    }

    return (
        <div className="w-full max-w-md space-y-8 rounded-lg border border-gray-800 bg-surface p-8 shadow-lg">
            <div className="text-center">
                <h2 className="text-2xl font-bold text-white">ورود به حساب کاربری</h2>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Phone Input */}
                    <FormField
                        control={form.control}
                        name="phoneNumber"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-300">شماره همراه</FormLabel>
                                <FormControl>
                                    {/* Shadcn Input Component */}
                                    <Input
                                        placeholder="0912..."
                                        {...field}
                                        className="border-gray-700 bg-background text-right text-white focus-visible:ring-primary"
                                        dir="ltr" // Numbers are easier to type in LTR
                                    />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        )}
                    />

                    {/* Password Input */}
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-gray-300">رمز عبور</FormLabel>
                                <FormControl>
                                    <Input
                                        type="password"
                                        {...field}
                                        className="border-gray-700 bg-background text-right text-white focus-visible:ring-primary"
                                        dir="ltr"
                                    />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                        ورود
                    </Button>
                </form>
            </Form>
        </div>
    )
}