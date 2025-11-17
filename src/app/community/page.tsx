import { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { communityPrograms } from "@/data/mockData";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Toplum & Veli Etkinlikleri",
  description: "Topluluk ve veli odaklı alanlar için placeholder layout.",
};

export default function CommunityPage() {
  return (
    <div className="space-y-12 pb-20">
      <PageHeader
        badge="Inclusive Zone"
        title="Toplum & Veli Programları"
        description="İki ana bölüm: sivil toplum işbirlikleri ve veli deneyim alanı. Her biri için kart yapısı hazır."
      />

      <section className="mx-auto w-[min(1100px,95%)] grid gap-8 md:grid-cols-2">
        {communityPrograms.map((program) => (
          <Card key={program.title} className="flex flex-col gap-3">
            <p className="text-xs uppercase tracking-widest text-slate-500">
              {program.audience}
            </p>
            <h3 className="text-2xl font-semibold text-slate-900">
              {program.title}
            </h3>
            <p className="text-sm text-slate-600">{program.desc}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}

