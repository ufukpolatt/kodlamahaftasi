import { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { competitions, hackathon } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Yarışmalar & Hackathon",
  description:
    "Yarışma kartları ve hackathon hero alanı placeholder içeriklerle hazır.",
};

export default function CompetitionsPage() {
  return (
    <div className="space-y-12 pb-20">
      <PageHeader
        badge="4 Yarışma + Hackathon"
        title="Yarışmalar ve Hackathon"
        description="Toplam ₺265K ödül havuzu ile teknoloji yarışmaları. GenAI, açık veri, sürdürülebilirlik ve erişilebilirlik temalarında yarışmalar."
        actions={
          <Button size="lg" asChild>
            <a href="#hackathon">Hackathon Başvurusu</a>
          </Button>
        }
      />

      <section className="mx-auto w-[min(1100px,95%)] space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900">Yarışmalar</h2>
          <p className="text-sm text-slate-600">Toplam Ödül: ₺265K</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {competitions.map((competition) => (
            <Card key={competition.title} className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-xs font-semibold uppercase tracking-widest text-codeweek-secondary">
                    Ödül: {competition.prize}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                    {competition.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {competition.desc}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <Button variant="secondary" size="sm">
                  Başvur
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section id="hackathon" className="mx-auto w-[min(1100px,95%)]">
        <div className="rounded-[36px] border border-white/70 bg-gradient-to-br from-codeweek-primary to-codeweek-secondary p-10 text-white shadow-[0_25px_70px_rgba(222,30,24,0.35)]">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            {hackathon.duration}
          </p>
          <h2 className="mt-2 text-4xl font-bold">{hackathon.title}</h2>
          <p className="mt-4 max-w-2xl text-base text-white/90">{hackathon.focus}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {hackathon.perks.map((perk) => (
              <span
                key={perk}
                className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur"
              >
                {perk}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button size="lg" variant="secondary">
              Başvuru Formu
            </Button>
            <Button size="lg" variant="ghost" className="text-white">
              Kurallar Dokümanı
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

