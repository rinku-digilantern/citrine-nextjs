import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'api.citrineclinic.com',
      },
    ],
    localPatterns: [
      {
        pathname: '/assets/images/**',
      },
    ],
  },
  allowedDevOrigins: ['192.168.1.20'],
  async redirects() {
    return [
      {
        source: '/about-doctor',
        destination: '/dr-niti-gaur',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     removeConsole: process.env.NODE_ENV === "production",
//   },
//   // ✅ gzip/brotli compression
//   compress: true,
//   // ✅ Modern package import optimization (Next.js 16)
//   experimental: {
//     optimizePackageImports: [
//       "react-icons",
//       "embla-carousel-react"
//     ],
//   },
//   // ✅ Image optimization
//   images: {
//     formats: ["image/avif", "image/webp"],
//     minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'cdn.prod.website-files.com',
//       },
//     ],
//     unoptimized: false, // ✅ Enforce Next.js image optimization
//     dangerouslyAllowSVG: false, // ✅ Security best practice
//   },
//   // ✅ Better caching headers
//   async headers() {
//     return [
//       {
//         source: "/_next/static/(.*)",
//         headers: [
//           {
//             key: "Cache-Control",
//             value: "public, max-age=31536000, immutable",
//           },
//         ],
//       },
//       {
//         source: "/(.*)",
//         headers: [
//           {
//             key: "X-DNS-Prefetch-Control",
//             value: "on",
//           },
//         ],
//       },
//     ];
//   },
// };
// module.exports = nextConfig;