import animate from "tailwindcss-animate";

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0B0E14",
                surface: "#161B22",
                primary: {
                    DEFAULT: "#4338CA",
                    foreground: "#FFFFFF",
                },
                accent: {
                    DEFAULT: "#F59E0B",
                    foreground: "#000000",
                },
                muted: "#94A3B8",
            },
            fontFamily: {
                sans: ["var(--font-vazir)", "sans-serif"],
            },
            dir:'rtl',
        },
    },
    plugins: [animate],
};