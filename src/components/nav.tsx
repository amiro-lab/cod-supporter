"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/meta/multiplayer", match: "/meta", label: "총기 메타" },
  { href: "/weapons", match: "/weapons", label: "무기" },
  { href: "/attachments", match: "/attachments", label: "파츠" },
  { href: "/dmz", match: "/dmz", label: "DMZ" },
  { href: "/mw4", match: "/mw4", label: "MW4 정보" },
  { href: "/sources", match: "/sources", label: "출처" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex min-w-0 items-center gap-1 overflow-x-auto text-sm" aria-label="주 메뉴">
      {LINKS.map((l) => {
        const active = pathname.startsWith(l.match);
        return (
          <Link
            key={l.href}
            href={l.href}
            aria-current={active ? "page" : undefined}
            className={`whitespace-nowrap rounded px-3 py-1.5 transition ${
              active ? "bg-accent text-accent-ink font-semibold" : "text-dim hover:bg-panel-2 hover:text-ink"
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
