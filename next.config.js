/** @type {import('next').NextConfig} */

const path = require('path');
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.resolve.alias['~'] = path.resolve(__dirname + '/public');
        return config;
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cloudflare-ipfs.com',
                port: '',
                pathname: '/ipfs/**'
            },
            {
                protocol: 'https',
                hostname: 'wompampsupport.azureedge.net',
                port: ''
            },
            {
                protocol: 'https',
                hostname: 'loremflickr.com',
                port: ''
            }
        ]
    },
    compiler: {
        emotion: true // Change to false to get the icon rendered
    }
};

module.exports = nextConfig;
