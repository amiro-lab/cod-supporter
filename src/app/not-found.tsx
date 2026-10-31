import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-md py-24 text-center">
      <p className="font-mono text-5xl font-bold text-accent">404</p>
      <h1 className="mt-4 text-xl font-bold">페이지를 찾을 수 없습니다</h1>
      <p className="mt-2 text-sm text-dim">주소가 바뀌었거나 아직 등록되지 않은 무기일 수 있습니다.</p>
      <div className="mt-8 flex justify-center gap-2">
        <Link href="/weapons" className="rounded-md border border-line px-4 py-2 text-sm hover:border-accent/50">
          무기 목록
        </Link>
        <Link href="/" className="rounded-md bg-accent px-4 py-2 text-sm font-semibold text-accent-ink">
          홈으로
        </Link>
      </div>
    </div>
  );
}
