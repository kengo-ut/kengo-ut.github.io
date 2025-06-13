import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export' を設定
  output: 'export',

  // 画像を配信する外部ドメインを登録
  images: {
    unoptimized: true, // 画像の最適化を無効化
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
