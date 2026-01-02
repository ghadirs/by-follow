"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"
import { ThemeProvider } from "./theme-provider"

export function Providers({ children }: { children: React.ReactNode }) {
    // We use useState to ensure the QueryClient is only created once per session
    const [queryClient] = useState(() => new QueryClient())

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark" // Since your Figma is dark, set this as default
                enableSystem
                disableTransitionOnChange
            >
                {children}
                {/*<Toaster dir="rtl" position="top-center" />*/}
            </ThemeProvider>
        </QueryClientProvider>
    )
}