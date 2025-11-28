"use client";

import { motion } from "framer-motion";
import { Trophy, BookOpen, GraduationCap, School } from "lucide-react";
import { CompetitionCard } from "@/components/cards/competition-card";

// Define competition data for each education level
const primarySchoolCompetitions = [
  {
    title: "Lego Kodlama Maratonu",
    level: "İlkokul",
    capacity: "Aile katılımlı",
    desc: "Aile katılımıyla birlikte eğlenceli LEGO modelleri oluşturma etkinliği. Hazırlık ve 1. sınıf öğrencileri için tasarlanmış bu maraton, hayal gücünü çalıştırarak yaratıcı LEGO modelleri yapma fırsatı sunuyor.",
    image: "/lego.png",
    fullDesc: "Kodlama Haftası etkinlikleri kapsamında, öğrencileri ve ailelerini bir LEGO Kodlama Maratonu'na davet ediyoruz! Hep birlikte hayal gücümüzü çalıştırarak yaratıcı LEGO modelleri yapacak ve bu sürecin tadını çıkaracağız.\n\nTema:\nGeleceğin Dünyası\n\nKatılımcılar: Hazırlık ve 1. sınıf öğrencileri\n\nEtkinlik Süresi: 8-12 Aralık\n\nKatılım Şekli:\nAilenizle birlikte LEGO parçalarını kullanarak temaya uygun bir model oluşturun. Hazırladığınız modelin fotoğrafını çekin. Fotoğrafınızı kısa bir açıklama ile birlikte Padlet sayfamıza yükleyin.\n\nHerkese Katılım Sertifikası:\nBu maratona katılan her öğrenciye katılım sertifikası verilecek! Maraton boyunca yaratıcılığınızı sergilemek ve LEGO dünyasında eğlenceli anılar biriktirmek için bu harika bir fırsat.\n\nPadlet'e Fotoğraf Yüklemek İçin:\nModelinizin fotoğrafını yükleyin ve kısa bir açıklama ekleyin.\n\nSonuçların Paylaşımı:\nTüm katılımcıların eserleri Padlet üzerinden paylaşılacak ve okul topluluğumuzla birlikte eğlenceli bir galeride sergilenecek. Katılım sertifikalarınızı Kodlama Haftası sonunda alabilirsiniz.",
    instructor: "Yaratıcılık Ekibi",
    duration: "8-12 Aralık",
    prerequisites: "Aile katılımı",
    judging: "Yaratıcılık ve tema uygunluğu",

  },
  {
    title: "Scratch ile Dijital Hikâye Yarışması",
    level: "İlkokul",
    capacity: "Bireysel katılım",
    desc: "Scratch programlama dilini kullanarak öğrenciler, 'Yapay Zekâ ile Güvenli Bir Gelecek' temasıyla dijital hikayeler ve animasyonlar oluştururlar.",
    image: "/Scratch.png",
    fullDesc: "Bu yıl Kodlama Haftası etkinliklerimiz kapsamında sizleri Scratch ile Dijital Hikaye Yarışması'na davet ediyoruz! Hayal gücünüzü kullanarak gelecekteki dünyayı Scratch'te canlandıracağınız bu etkinlikte yaratıcı projelerinizi sergileme şansı bulacaksınız.\n\nTema:\n Yapay Zekâ ile Güvenli Bir Gelecek\n\nKatılımcılar: 2. ve 3. sınıf öğrencilerimiz\n\nEtkinlik Süresi: 8-12 Aralık\n\nKatılım Şekli:\nScratch'te Projenizi Oluşturun: 'Yapay Zeka ile Güvenli Bir Gelecek' temasıyla ilgili bir hikâye veya animasyon hazırlayın.\n\nPadlet'e Yükleyin: Projenizin bağlantısını ve kısa bir açıklamasını padlet bağlantı linki üzerinden paylaşın.\n\nHerkese Katılım Sertifikası:\nBu yarışmaya katılan her öğrenciye katılım sertifikası verilecek! Yarışma boyunca yaratıcılığınızı sergilemek ve Scratch dünyasında eğlenceli projeler oluşturmak için bu harika bir fırsat.\n\nPadlet Linki\nPadlet'e Fotoğraf Yüklemek İçin:\nProjenizin bağlantısını paylaşın ve kısa bir açıklama ekleyin.\n\nSonuçların Paylaşımı:\nTüm katılımcıların eserleri Padlet üzerinden paylaşılacak ve okul topluluğumuzla birlikte eğlenceli bir galeride sergilenecek. Katılım sertifikalarınızı Kodlama Haftası sonunda alabilirsiniz.\n\nBu maraton ile hem eğleneceğiz hem de ailelerimizle birlikte keyifli zaman geçireceğiz. Katılımınızı dört gözle bekliyoruz!",
    instructor: "Kodlama Ekibi",
    duration: "8-12 Aralık",
    prerequisites: "Scratch bilgisi",
    judging: "Yaratıcılık ve teknik beceri",
  },
  {
    title: "Canva Sihirli İçerik ile Dijital Sanat Maratonu",
    level: "İlkokul",
    capacity: "Bireysel katılım",
    desc: "Canva Sihirli İçerik aracını kullanarak öğrenciler, yapay zekâ destekli görseller oluştururlar. Kendi yazdıkları promptlarla sihirli içerikleri canlandırırlar.",
    image: "/canva_ile_sihirli.png",
    fullDesc: "Bu yıl Kodlama Haftası etkinliklerimiz kapsamında sizleri Canva Sihirli İçerik ile Dijital Sanat Maratonu'na davet ediyoruz! Hayal gücünüzü kullanarak yapay zekâ destekli görseller oluşturacağınız bu etkinlikte, kendi yazacağınız promptlarla sihirli içerikleri canlandıracak ve ortaya çıkardığınız dijital sanat eserlerinizi sergileme şansı bulacaksınız.\n\nTema:\n Yapay Zekâ ile Güvenli Bir Gelecek\n\nKatılımcılar: 4. sınıf öğrencilerimiz\n\nEtkinlik Süresi: 8-12 Aralık\n\nKatılım Şekli:\nPromptunuzu Oluşturun: 'Yapay Zekâ ile Güvenli Bir Gelecek' temasıyla oluşturmak istediğiniz görsel için kendi promptunuzu yazın.\n\nCanva'da Görselinizi Tasarlayın: Yazdığınız promptu Canva Sihirli İçerik aracına girerek görselinizi oluşturun.\n\nPadlet'e Yükleyin: Oluşturduğunuz görseli ve yazdığınız promptu Padlet bağlantısı üzerinden paylaşın.\n\nHerkese Katılım Sertifikası:\nBu yarışmaya katılan her öğrenciye katılım sertifikası verilecek! Yarışma boyunca yaratıcılığınızı sergilemek ve Canva Sihirli İçerik ile eğlenceli dijital sanat eserleri oluşturmak için bu harika bir fırsat.\n\nPadlet Linki\nPadlet'e Fotoğraf Yüklemek İçin:\nOluşturduğunuz görseli ve yazdığınız promptu Padlet bağlantısı üzerinden paylaşın.\n\nSonuçların Paylaşımı:\nTüm katılımcıların eserleri Padlet üzerinden paylaşılacak ve okul topluluğumuzla birlikte eğlenceli bir galeride sergilenecek. Katılım sertifikalarınızı Kodlama Haftası sonunda alabilirsiniz.\n\nBu maraton ile hem eğleneceğiz hem de ailelerimizle birlikte keyifli zaman geçireceğiz. Katılımınızı dört gözle bekliyoruz!",
    instructor: "Dijital Sanat Ekibi",
    duration: "8-12 Aralık",
    prerequisites: "Canva kullanımı",
    judging: "Yaratıcılık ve prompt yazma becerisi",
  },
];

const middleSchoolCompetitions = [
  {
    title: "DİJİTAL SANAT TASARIM YARIŞMASI",
    level: "Ortaokul",
    capacity: "Bireysel katılım",
    desc: "08-12 Aralık tarihleri arasında gerçekleşecek olan Kodlama Haftası kapsamında Yapay Zekâ Destekli Dijital Sanat Yarışması. Geleceğin dünyasını yapay zekâ araçlarını kullanarak tasarlayın.",
    image: "/dijital_sanat.png",
    fullDesc: "08-12 Aralık tarihleri arasında gerçekleşecek olan Kodlama Haftası kapsamında Yapay Zekâ Destekli Dijital Sanat Yarışması planladık.\n\nBu çalışmada, geleceğin dünyasını yapay zekâ araçlarını kullanarak tasarlamanız beklenmektedir.\n\nAşağıdaki temalardan birini seçebilirsiniz:\n\nGeleceğin ulaşım araçları\n\nGeleceğin akıllı evleri\n\nGeleceğin okulları\n\nGeleceğin teknolojileri\n\nSeçtiğiniz konu için kendi detaylı promptunuzu yazıp ve görselinizi bir yapay zekâ aracında oluşturmalısınız.\nTasarımınızda teknolojinin güvenli, adil ve etik kullanımına da dikkat etmeniz gerekmektedir.\n\nTeslim Şartları:\nDosya formatı: JPG, PNG veya PDF\n\nClassroom'a tek dosya olarak yükleyiniz.\n\nAçıklama olarak sizin oluşturduğunuz promptu eklemelisiniz.\n\nSon teslim tarihi: 12 Aralık 2025\n\nHayal gücünüzü kullanın, geleceği siz tasarlayın!",
    instructor: "Dijital Sanat Ekibi",
    duration: "08-12 Aralık",
    prerequisites: "Yapay zeka araçları bilgisi",
    judging: "Yaratıcılık, etik kullanım ve teknik beceri",
 
  },
];

const highSchoolCompetitions = [

  {
    title: "InnovateHER Etik Zekâ Hackathonu: Shape the AI Future",
    level: "Lise",
    capacity: "Takım",
    desc: "Yapay zeka etiği konusunda farkındalık yaratan ve etik AI çözümleri geliştiren hackathon.",
    image: "/hackathon.png",
    fullDesc: "\n\nToplam Puan: 100:\n\n1. Etik Problemi Anlama ve Çözüm Odaklı Yaklaşım (25 Puan):\n\n● Etik Problemin Analizi (10 Puan):\nTakım, seçtiği yapay zekâ etik sorununu (algoritmik ayrımcılık, mahremiyet, deepfake, şeffaflık vb.) doğru şekilde analiz etmiş ve problemin kök nedenlerini detaylı ele almıştır.\n\n ● 10 Etik problem kapsamlı, akademik derinlikte ve çok boyutlu analiz edilmiş.\n\n ● 5–9 Problem iyi analiz edilmiş ancak bazı boyutlar yüzeysel kalmış.\n\n● 1–4 Problem yüzeysel, hatalı veya eksik ele alınmış.\n\n● Çözüm Önerisinin Etik Açıdan Gerçekçiliği ve Yenilikçiliği (15 Puan):\nGeliştirilen çözüm hem uygulanabilir hem de etik riskleri azaltmaya yönelik yenilikçi unsurlar içerir.\n\n● 15 Hem uygulanabilir hem özgün; etik farkındalık açısından güçlü.\n\n● 8–14 Çözüm uygulanabilir, ancak yenilikçilik veya etik yön sınırlı.\n\n● 1–7 Çözüm zayıf, uygulanamaz veya etik açıdan sorunlu.\n\n2. Teknik Uygulama ve Etik Tasarım (30 Puan):\n\n● Teknoloji Kullanımı ve Teknik Derinlik (15 Puan):\nKullanılan teknoloji (AI modeli, veri analizi, VR/AR, web uygulaması, oyun vb.) etik ilkelere uygun şekilde uygulanmıştır.\n\n● 15 Teknoloji çok iyi uygulanmış; veri kullanımı, model tasarımı ve süreç etik ilkelere tam uygun.\n\n ● 8–14 Teknoloji doğru kullanılmış ancak etik veya teknik bazı eksiklikler var.\n\n● 1–7 Teknoloji yetersiz; etik riskler veya teknik hatalar belirgin.\n\n● Etik Tasarım Kalitesi ve Kullanıcı Deneyimi (15 Puan):\nTasarım kullanıcıyı koruyan, şeffaf, güvenilir ve bilgilendirici bir yapıdadır.\n\n ● 15 Etik tasarım mükemmel; kullanıcı güvenliği ve bilinçlendirme çok güçlü.\n\n ● 8–14 Tasarım iyi; bazı alanlarda eksikler mevcut.\n\n ● 1–7 Tasarım zayıf; etik ilkeler yeterince yansıtılmamış.\n\n3. Tema ile Uyum ve Toplumsal Etki (20 Puan):\n\n● \"Yapay Zekâ ve Etik\" Temasına Uygunluk (10 Puan):\nProje temadaki etik boyutu (adalet, şeffaflık, mahremiyet, yanlış bilgi vb.) etkili biçimde ele almıştır.\n\n ● 10 Tema mükemmel bir şekilde işlenmiş; etik yön belirgin ve güçlü.\n\n ● 5–9 Tema iyi işlenmiş ancak eksik noktalar mevcut.\n\n ● 1–4 Tema yüzeysel veya hatalı ele alınmış.\n\n● Sosyal Etki ve Farkındalık Yaratma (10 Puan):\nProje, toplumda etik AI kullanımı konusunda farkındalık oluşturur ve somut etki hedefler.\n\n ● 10 Sosyal etki yüksek; toplumsal katkı çok güçlü.\n\n ● 5–9 Farkındalık var ancak etki sınırlı.\n\n ● 1–4 Etki zayıf, farkındalık oluşturma yetersiz.\n\n4. Sunum ve İletişim (15 Puan):\n\n● Projenin Sunumu (10 Puan):\nTakım projesini açık, düzenli ve etkili bir yapı ile sunmuştur.\n\n ● 10 Sunum kusursuz; akıcı, iyi organize, ikna edici.\n\n ● 5–9 Sunum iyi; bazı zayıf yönler mevcut.\n\n ● 1–4 Sunum eksik, belirsiz veya yetersiz.\n\n● Soru–Cevap Performansı (5 Puan):\nTakım, etik ve teknik sorulara doğru, bilinçli ve tutarlı cevaplar verir.\n\n ● 5 Tüm sorulara net, doğru ve güçlü cevaplar verilmiş.\n\n ● 3–4 Genel olarak iyi cevaplar; bazı eksiklikler var.\n\n ● 1–2 Cevaplar yetersiz veya hazırlıksız.\n\n5. Takım Çalışması ve İşbirliği (10 Puan):\n\n● Ekip Çalışması (10 Puan):\nTakım üyeleri proje boyunca dengeli iş bölümü, etkili iletişim ve işbirliği göstermiştir.\n\n ● 10 Mükemmel işbirliği; tüm üyeler aktif katkı sağlamış.\n\n ● 5–9 İşbirliği iyi; bazı üyelerin katkısı az.\n\n ● 1–4 Ekip çalışması zayıf; görev dağılımı düzensiz.",
    instructor: "InnovateHER Ekibi",
    duration: "12 Aralık 20:00 - 14 Aralık 16:00",
    prerequisites: "Takım çalışması",
    judging: "Etik yaklaşım, teknik beceri ve sunum",
  },
];

export default function CompetitionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="mx-auto w-[min(1400px,95%)] mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-codeweek-purple-500/20 to-codeweek-pink-500/20 border border-codeweek-purple-500/30 px-6 py-3">
            <Trophy className="w-5 h-5 text-codeweek-purple-400" />
            <span className="text-sm font-bold uppercase tracking-widest text-codeweek-purple-300">
              Yarışmalar & Maratonlar
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black">
            <span className="gradient-text">Yarışmalar & Maratonlar</span>
          </h1>
          
          <p className="text-xl text-codeweek-purple-200 max-w-3xl mx-auto leading-relaxed">
            Yarışma ve maratonlarda katılım sağlayarak, inovasyonun sınırlarını zorlayın ve
            toplumsal fayda sağlayan projeler geliştirin.
          </p>
        </motion.div>
      </section>

      {/* Competition Categories */}
      <section className="mx-auto w-[min(1400px,95%)] space-y-16">
        {/* İlkokul Competitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <School className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">İlkokul Maratonlar</h2>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {primarySchoolCompetitions.map((competition, index) => (
              <motion.div
                key={competition.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CompetitionCard
                  title={competition.title}
                  desc={competition.desc}
                  fullDesc={competition.fullDesc}
                  requirements={competition.prerequisites}
                  duration={competition.duration}
                  judging={competition.judging}
                  image={competition.image}
                  level={competition.level}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Ortaokul Competitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">Ortaokul Maratonlar</h2>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {middleSchoolCompetitions.map((competition, index) => (
              <motion.div
                key={competition.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <CompetitionCard
                  title={competition.title}
                  desc={competition.desc}
                  fullDesc={competition.fullDesc}
                  requirements={competition.prerequisites}
                  duration={competition.duration}
                  judging={competition.judging}
                  image={competition.image}
                  level={competition.level}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lise Competitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-codeweek-purple-600 to-codeweek-pink-600 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold gradient-text">Lise Yarışmaları</h2>
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2">
            {highSchoolCompetitions.map((competition, index) => (
              <motion.div
                key={competition.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <CompetitionCard
                  title={competition.title}
                  desc={competition.desc}
                  fullDesc={competition.fullDesc}
                  requirements={competition.prerequisites}
                  duration={competition.duration}
                  judging={competition.judging}
                  image={competition.image}
                  level={competition.level}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
