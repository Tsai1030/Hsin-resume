/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 雲端建置（Zeabur）時略過 ESLint：本專案未設定 ESLint，避免建置卡住或失敗
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
