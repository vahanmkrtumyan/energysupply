import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  output: "export",
  sassOptions: {
    includePaths: [path.join(process.cwd(), "node_modules")],
    silenceDeprecations: ["import", "legacy-js-api"],
  },
};

export default nextConfig;
