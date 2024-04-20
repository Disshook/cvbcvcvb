const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["emt.tanuweb.cloud", "localhost"],
  },
  i18n: {
    locales: ["en", "mn", "kr", "chn", "jp"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
