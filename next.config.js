/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [".tanuweb.cloud", "localhost", "arvai.tanuweb.cloud"],
  },
  i18n: {
    locales: ["en", "mn", "kr", "chn", "jp"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
