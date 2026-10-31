"use client";

import { useState } from "react";

export function CopyButton({ text, label }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        } catch {
          // 클립보드 권한이 없으면 아무것도 하지 않는다
        }
      }}
      className="inline-flex items-center gap-1.5 rounded border border-line bg-panel-2 px-2 py-1 font-mono text-xs text-dim transition hover:border-accent/50 hover:text-ink"
      title="빌드 코드 복사"
    >
      {label && <span className="text-mute">{label}</span>}
      <span className="text-ink">{text}</span>
      <span className={copied ? "text-accent" : "text-mute"}>{copied ? "복사됨" : "복사"}</span>
    </button>
  );
}
