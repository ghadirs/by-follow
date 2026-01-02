import type { Metadata } from "next";
// Use 'next/font/google' or local fonts for Vazirmatn
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"; // Optional if using next-themes
import { Providers } from "@/components/providers"; // Your state providers

const vazir = Vazirmatn({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
    title: "ByFollow Dashboard",
    description: "Social media services panel",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        // CRITICAL: dir="rtl" sets the direction for the whole app
        <html lang="fa" dir="rtl" className="dark">
        <body className={`${vazir.className} bg-background text-foreground antialiased`}>
        <Providers>
            {children}
        </Providers>
        </body>
        </html>
    );
}