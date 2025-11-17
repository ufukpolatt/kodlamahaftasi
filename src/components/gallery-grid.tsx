type GalleryGridProps = {
  items: { title: string; type: string }[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative h-64 overflow-hidden rounded-3xl border border-white/70 bg-gradient-to-br from-codeweek-light to-white shadow-soft"
        >
          <div className="absolute inset-0 grid place-items-center text-center">
            <div className="rounded-full bg-codeweek-secondary px-3 py-1 text-xs font-semibold text-white">
              {item.type}
            </div>
            <p className="mt-3 text-lg font-semibold text-slate-900">
              {item.title}
            </p>
            <span className="mt-2 text-sm text-slate-500">Placeholder görsel {idx + 1}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

