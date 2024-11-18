// NOTE: Uncomment this when building with docker
// const path = require("path");

const withDocker = {
  // output: "standalone",
  // experimental: {
  //   outputFileTracingRoot: path.join(__dirname, "../../"),
  // },
};

/** @type {import('next').NextConfig} */
module.exports = {
  ...withDocker,
  reactStrictMode: true,
  modularizeImports: {
    "@mui/material": {
      transform: "@mui/material/{{member}}",
    },
    "@tabler/icons-react": {
      transform: "@tabler/icons-react/dist/esm/icons/{{member}}",
    },
  },
  transpilePackages: ["@tabler/icons-react", "react-tweet"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.inilah.com",
        port: "",
        pathname: "/**",
      },
      { protocol: "https", hostname: "pbs.twimg.com" },
      { protocol: "https", hostname: "abs.twimg.com" },
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  experimental: {
    scrollRestoration: true,
    proxyTimeout: 300000,
    largePageDataBytes: 128 * 10000,
  },
  async rewrites() {
    return [
      /**
       * Rewrites for communicating to the backend locally
       */
      {
        source: "/api/v1/:path*",
        destination: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/api/:path*`,
      },
    ];
  },
};
