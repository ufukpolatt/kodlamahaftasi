## CodeWeek Haftası Taslağı

Next.js 14 (App Router), Tailwind CSS, Shadcn/UI ve Framer Motion kullanılarak hazırlanmış modern bir etkinlik sitesi taslağı. Tüm içerikler mock data üzerinden geliyor, böylece gerçek verileri eklemeniz yeterli.

### Kurulum

```bash
npm install
npm run dev
```

### Öne çıkanlar

- ♻️ Tek bir `mockData.ts` dosyası ile tüm placeholder veriler yönetilir.
- 🧱 `components/` altında Navbar, Footer, kartlar, accordion ve galeri gibi tekrar kullanılabilir bileşenler mevcut.
- 🧭 `app/` klasöründe her sayfa kendi `page.tsx` dosyasıyla hazır: takvim, atölyeler, yarışmalar, konuşmacılar, toplum, galeri ve iletişim.
- 🎨 Tailwind + Shadcn setup, CodeWeek renk paleti, responsive gridler ve hover/transition efektleri içerir.
- 🔍 SEO için metadata yapılandırıldı ve site bilgileri `siteConfig.ts` dosyasında tutulur.

Geliştirme için `src/app/globals.css` ve `tailwind.config.ts` dosyalarındaki tema ayarlarını düzenleyebilir, yeni veri setlerini `src/data/mockData.ts` içine ekleyebilirsiniz.
