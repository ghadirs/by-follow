import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // The deep background seen in your dashboard & auth pages
                background: "#0B0E14",
                // Slightly lighter blue for cards/inputs (e.g., the login inputs)
                surface: "#161B22",

                // The main purple/blue used for "Login" buttons and active tabs
                primary: {
                    DEFAULT: "#4338CA", // Indigo-700 approx
                    foreground: "#FFFFFF",
                },

                // The Golden Yellow seen in the 'Sign Up' button and sidebar icons
                accent: {
                    DEFAULT: "#F59E0B", // Amber-500
                    foreground: "#000000",
                },

                // Text colors
                muted: "#94A3B8", // Slate-400 for secondary text
            },
            // Essential for Persian typography
            fontFamily: {
                sans: ["var(--font-vazir)", "sans-serif"],
            },
        },
    },
    plugins: [require("tailwindcss-animate")], // Required for Shadcn
};
export default config;