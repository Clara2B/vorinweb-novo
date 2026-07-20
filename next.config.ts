import type { NextConfig } from "next";

// TEMPORARY: while vorinweb.com.br still points at the old repo, this site is
// previewed at https://clara2b.github.io/vorinweb-novo/, a subpath — so asset
// paths need this prefix. Remove NEXT_BASE_PATH from .github/workflows/deploy.yml
// (and this fallback) once the custom domain is cut over to this repo, since the
// production site is served from the domain root.
const basePath = process.env.NEXT_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
