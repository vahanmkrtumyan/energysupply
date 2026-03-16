import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
  sassOptions: {
    silenceDeprecations: ["import", "legacy-js-api"],
  },
};

export default nextConfig;
