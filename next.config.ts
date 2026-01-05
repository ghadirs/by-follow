import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // This is what enables the deployment to GitHub Pages
    output: 'export',

    // Replace 'your-repo-name' with your actual repository name
    basePath: process.env.NODE_ENV === 'production' ? '/by-follow' : '',

    images: {
        unoptimized: true,
    },
};

export default nextConfig;