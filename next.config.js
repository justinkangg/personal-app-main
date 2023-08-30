/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ["tailwindui.com", "images.unsplash.com", "eincode.com", "thrangra.sirv.com", "as1.ftcdn.net", "as2.ftcdn.net"]
  }
}

module.exports = nextConfig
