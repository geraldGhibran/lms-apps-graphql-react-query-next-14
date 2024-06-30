/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/courses",
        permanent: true,
      },
    ];
  },
  reactStrictMode: false,
  images: {
    domains: ["us-east-1-shared-usea1-02.graphassets.com"],
  },
};

export default nextConfig;
