import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    const albumRobots = [
      {
        key: "X-Robots-Tag",
        value: "noindex, nofollow, noimageindex, noarchive, noai, noimageai",
      },
    ] as const;
    return [
      { source: "/wedding-album", headers: [...albumRobots] },
      { source: "/wedding-album/:path*", headers: [...albumRobots] },
    ];
  },
};

export default nextConfig;
