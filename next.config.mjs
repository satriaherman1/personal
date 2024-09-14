/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        hostname: "i.pravatar.cc",
      },
    ],
  },
};

export default nextConfig;
