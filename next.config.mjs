import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const oneDay = 60 * 60 * 24;

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  poweredByHeader: false,
  compress: true,
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  images: {
    // Serve modern, smaller formats and keep optimized images cached for 30 days
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: oneDay * 30,
  },
  async headers() {
    // Static files in /public are otherwise revalidated on every visit.
    // If you replace an image, give it a new file name.
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${oneDay}, stale-while-revalidate=${oneDay * 7}` },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: `public, max-age=${oneDay * 365}, immutable` },
        ],
      },
    ];
  },
};

export default withMDX(nextConfig);
