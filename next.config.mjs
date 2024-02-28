/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "a0.muscache.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "uewkgvbknhnsipbqcdhv.supabase.co",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
