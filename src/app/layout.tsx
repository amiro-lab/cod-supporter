import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { Nav } from "@/components/nav";
import { formatDateKo } from "@/components/ui";
import { DATA_UPDATED_AT, LATEST_BALANCE_PATCH } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 정적 생성 강제는 next.config.ts 의 output: "export" 가 맡는다
// (요청 시점 API를 쓰면 빌드가 실패함). ensureStatic 은 cacheComponents 전용이라 쓰지 않는다.

export const metadata: Metadata = {
  title: {
    template: "%s | COD 서포터",
    default: "COD 서포터 — 모던 워페어 4 · DMZ · 총기 메타",
  },
  description:
    "콜 오브 듀티: 모던 워페어 4 기본 정보, DMZ 가이드, 매체 종합 총기 메타와 빌드를 출처와 함께 정리한 한국어 팬 사이트.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
            <Link href="/" className="flex shrink-0 items-center gap-2 font-bold">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded bg-accent font-mono text-sm text-accent-ink">
                MW
              </span>
              <span className="hidden sm:inline">COD 서포터</span>
            </Link>
            <Nav />
          </div>
        </header>

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">{children}</main>

        <footer className="border-t border-line">
          <div className="mx-auto max-w-6xl space-y-2 px-4 py-8 text-xs text-mute">
            <p>
              데이터 기준일 {formatDateKo(DATA_UPDATED_AT)} · 반영된 최신 밸런스 패치{" "}
              {formatDateKo(LATEST_BALANCE_PATCH)}. 패치마다 메타가 바뀌므로 각 항목의 날짜와 출처를 함께
              확인하세요.
            </p>
            <p>
              비공식 팬 사이트입니다. Activision, Infinity Ward와 관련이 없습니다. Call of Duty 및 Modern
              Warfare는 Activision Publishing, Inc.의 상표입니다.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
