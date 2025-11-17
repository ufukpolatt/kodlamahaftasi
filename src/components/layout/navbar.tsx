"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-4 z-50 mx-auto flex w-[min(1200px,95%)] items-center justify-between rounded-3xl border border-white/50 bg-white/80 px-6 py-4 backdrop-blur-xl transition-all",
        scrolled && "shrink-nav py-3"
      )}
    >
      <Link href="/" className="font-bold text-lg tracking-tight">
        <span className="text-codeweek-primary">Code</span>
        <span className="text-codeweek-secondary">Week</span>
      </Link>

      <nav className="hidden items-center gap-4 text-sm font-medium lg:flex">
        {siteConfig.navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "rounded-full px-4 py-2 text-slate-600 transition hover:text-codeweek-secondary",
              pathname === item.href && "bg-codeweek-red-50 text-codeweek-secondary font-semibold"
            )}
          >
            {item.label}
          </Link>
        ))}
      </nav>

    </header>
  );
}

