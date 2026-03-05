/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
      },
      

    ],
    domains: ['images.unsplash.com','exato.ai','plus.unsplash.com','www.nextiva.com'],
  },
};

export default nextConfig;
