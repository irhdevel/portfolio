/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.m?js$/,
            type: "javascript/auto",
            resolve: {
                fullySpecified: false,
            },
        })
        return config
    },
    images: {
        unoptimized: true
   }
}

export default nextConfig;
