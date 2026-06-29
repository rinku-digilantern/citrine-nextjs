import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
      },
      {
        protocol: 'https',
        hostname: 'web.digifolio.co.in',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8000',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.citrineclinic.com',
        pathname: '/**',
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
      {
        source: '/medifacials-for-acne',
        destination: '/medifacial-for-pigmentation',
        permanent: true,
      },
      {
        source: '/medifacials',
        destination: '/medifacial-for-pigmentation',
        permanent: true,
      },
      {
        source: '/acne-scar-treatment',
        destination: '/acne-scar-treatment-in-gurgaon',
        permanent: true,
      },
      {
        source: '/exilis-elite-for-wrinkles-treatment',
        destination: '/exilis-elite',
        permanent: true,
      },
      {
        source: '/eye-pla-te-let-rich-fibrin-prf-therapy',
        destination: '/eye-pla-te-let-rich-fibrin-therapy',
        permanent: true,
      },
      {
        source: '/dark-circles',
        destination: '/dark-circles-treatment-gurgaon',
        permanent: true,
      },
      {
        source: '/melasma',
        destination: '/melasma-treatment-in-gurgaon',
        permanent: true,
      },
      {
        source: '/patchy-pigmentation',
        destination: '/hyperpigmentation-treatment-in-gurgaon',
        permanent: true,
      },
      {
        source: '/chemical-peels-for-ageing',
        destination: '/chemical-peel-treatment-in-gurgaon',
        permanent: true,
      },
      {
        source: '/microdermabrasion',
        destination: '/microdermabrasion-treatment-in-gurgaon',
        permanent: true,
      },
      {
        source: '/chemical-peels-for-acne',
        destination: '/chemical-peel-treatment-in-gurgaon',
        permanent: true,
      },
      {
        source: '/ingrown-toenails',
        destination: '/ingrown-toe-nail',
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