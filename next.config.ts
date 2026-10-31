import type { NextConfig } from "next";

// GitHub Pages 배포 시 워크플로가 PAGES_BASE_PATH 를 주입한다.
// - amiro-lab/amiro-lab.github.io 저장소 → "" (루트)
// - amiro-lab/cod-supporter 저장소      → "/cod-supporter"
// 로컬 `next dev` 에서는 비어 있으므로 기존과 동일하게 / 에서 동작한다.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
  // cacheComponents / partialPrefetching(PPR)은 static export 와 함께 쓸 수 없어 제거.
  // 모든 데이터가 src/data 의 정적 TS 라 빌드 시점 렌더링만으로 충분하다.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
