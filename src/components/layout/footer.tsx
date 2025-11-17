import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/60 bg-white/70">
      <div className="mx-auto flex w-[min(1200px,95%)] flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-semibold text-slate-900">
            CodeWeek Haftası
          </p>
          <p className="mt-2 text-sm text-slate-500">
            {siteConfig.description}
          </p>
        </div>
      </div>
      <div className="border-t border-white/60 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} CodeWeek Topluluğu. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}

