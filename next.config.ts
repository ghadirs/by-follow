import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                // Define your brand colors from the Figma
                primary: "#4F46E5", // Example Purple
                secondary: "#1E293B", // Dark Blue
                background: "#0F172A", // Very dark background
            },
        },
    },
    plugins: [],
};
export default config;