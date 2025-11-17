import { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { WorkshopCard } from "@/components/cards/workshop-card";
import { workshops } from "@/data/mockData";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Atölyeler",
  description: "CodeWeek atölye planları için placeholder kartlar ve grid yapısı.",
};

export default function WorkshopsPage() {
  const beginnerWorkshops = workshops.filter((w) => w.level === "Başlangıç");
  const intermediateWorkshops = workshops.filter((w) => w.level === "Orta");
  const advancedWorkshops = workshops.filter((w) => w.level === "İleri");

  return (
    <div className="space-y-12 pb-20">
      <PageHeader
        badge="10+ Atölye"
        title="Atölyeler"
        description="İlkokuldan liseye kadar farklı konularda teknik atölyeler. Her atölye kontenjan, seviye ve detaylı açıklama içeriyor."
        actions={
          <Button size="lg" variant="secondary">
            Programı PDF olarak al
          </Button>
        }
      />

      <section className="mx-auto w-[min(1100px,95%)] space-y-12">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-slate-900">İlkokul Atölyesi</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {beginnerWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.title} {...workshop} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Ortaokul Atölyesi</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {intermediateWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.title} {...workshop} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-6 text-2xl font-bold text-slate-900">Lise Atölyesi</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {advancedWorkshops.map((workshop) => (
              <WorkshopCard key={workshop.title} {...workshop} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

