import { Metadata } from "next";

import { PageHeader } from "@/components/layout/page-header";
import { siteConfig } from "@/lib/siteConfig";
import { faqs } from "@/data/mockData";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FAQAccordion } from "@/components/faq-accordion";

export const metadata: Metadata = {
  title: "İletişim & SSS",
  description: "Form taslağı ve accordion yapısıyla iletişim sayfası.",
};

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-20">
      <PageHeader
        badge="İletişim"
        title="Bize Ulaşın"
        description="Sorularınız, önerileriniz veya iş birliği teklifleriniz için bizimle iletişime geçin. Aşağıdaki formu doldurun veya doğrudan e-posta gönderin."
      />

      <section className="mx-auto grid w-[min(1100px,95%)] gap-8 md:grid-cols-[1fr_0.8fr]">
        <div className="rounded-3xl border border-white/70 bg-white/90 p-8 shadow-soft">
          <h3 className="mb-6 text-xl font-bold text-slate-900">İletişim Formu</h3>
          <form className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Ad Soyad
              </label>
              <Input placeholder="Adınız ve soyadınız" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                E-posta Adresi
              </label>
              <Input type="email" placeholder="ornek@email.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Konu
              </label>
              <Input placeholder="Mesajınızın konusu" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Mesajınız
              </label>
              <Textarea
                placeholder="Mesajınızı buraya yazın..."
                className="min-h-[120px]"
              />
            </div>
            <Button className="w-full" size="lg">
              Mesajı Gönder
            </Button>
          </form>
        </div>
        <div className="space-y-6">
          <div className="rounded-3xl border border-white/70 bg-white/90 p-6 shadow-soft">
            <h3 className="text-lg font-semibold text-slate-900">İletişim Bilgileri</h3>
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  E-posta
                </p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-1 block text-sm text-codeweek-secondary hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Telefon
                </p>
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="mt-1 block text-sm text-codeweek-secondary hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
              </div>
            </div>
          </div>
          <FAQAccordion items={faqs} />
        </div>
      </section>
    </div>
  );
}

