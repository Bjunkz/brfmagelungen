/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      "images.ctfassets.net",
      "downloads.ctfassets.net",
      "i.pinimg.com",
    ],
  },
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
        },
      },
    });
    return config;
  },
};
