import type { NextConfig } from "next";
import webpack from "webpack";

const nextConfig: NextConfig = {
  serverExternalPackages: ["@prisma/adapter-libsql", "@prisma/adapter-better-sqlite3"],
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:slug-tribute-fund",
        destination: "/:slug-tribute-page",
        permanent: true,
      },
    ];
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nlmsf.org",
      },
      {
        protocol: "http",
        hostname: "nlmsf.org",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "media.nlmsf.org",
      },
      {
        protocol: "http",
        hostname: "media.nlmsf.org",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "ars.els-cdn.com",
      },
      {
        protocol: "https",
        hostname: "leiomyosarcoma.info",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },
      {
        protocol: "https",
        hostname: "www.cancer.net",
      },
      {
        protocol: "https",
        hostname: "tse3.mm.bing.net",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  webpack: (config) => {
    // Ignore markdown and LICENSE files to prevent webpack from trying to parse them
    config.plugins.push(
      new webpack.IgnorePlugin({
        resourceRegExp: /\.md$/,
      }),
      new webpack.IgnorePlugin({
        resourceRegExp: /LICENSE$/,
      })
    );
    return config;
  },
};

export default nextConfig;
