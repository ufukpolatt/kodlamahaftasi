import { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { galleryItems } from "@/data/mockData";
import { GalleryGrid } from "@/components/gallery-grid";

export const metadata: Metadata = {
  title: "Medya Galerisi",
  description: "Fotoğraf grid ve video placeholder alanlarıyla hazır taslak.",
};

export default function GalleryPage() {
  return (
    <div className="space-y-12 pb-20">
      <PageHeader
        badge="Media Hub"
        title="Medya Galerisi Taslağı"
        description="Placeholder görsel grid ve video alanlarıyla esnek bir düzen. Gerçek medya içerikleri eklendiğinde galeri yayına hazır."
      />

      <section className="mx-auto w-[min(1100px,95%)]">
        <GalleryGrid items={galleryItems} />
        <div className="mt-10 rounded-3xl border border-white/70 bg-white/90 p-8 shadow-soft">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            Video Alanı
          </p>
          <div className="mt-4 aspect-video w-full rounded-2xl border border-dashed border-slate-300 bg-slate-50/70" />
          <p className="mt-3 text-xs text-slate-500">
            Buraya YouTube veya Vimeo embed&apos;i ekleyebilirsiniz.
          </p>
        </div>
      </section>
    </div>
  );
}

