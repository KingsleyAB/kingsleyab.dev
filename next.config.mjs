/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'kingsleyab.vercel.app' }],
        destination: 'https://kingsleyab.dev/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
