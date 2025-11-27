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
    prerequisites: "Yok",
    judging: "Yaratıcılık ve temaya uygunluk",
  },
  {
    title: "Scratch ile Dijital Hikâye Yarışması",
    level: "İlkokul",
    capacity: "Bireysel katılım",
    desc: "Scratch programlama dilini kullanarak öğrenciler, 'Yapay Zekâ ile Güvenli Bir Gelecek' temasıyla dijital hikayeler ve animasyonlar oluştururlar.",
    image: "/canva_ile_sihirli.png",
    fullDesc: "Bu yıl Kodlama Haftası etkinliklerimiz kapsamında sizleri Scratch ile Dijital Hikaye Yarışması'na davet ediyoruz! Hayal gücünüzü kullanarak gelecekteki dünyayı Scratch'te canlandıracağınız bu etkinlikte yaratıcı projelerinizi sergileme şansı bulacaksınız.\n\nTema:\n Yapay Zekâ ile Güvenli Bir Gelecek\n\nKatılımcılar: 2. ve 3. sınıf öğrencilerimiz\n\nEtkinlik Süresi: 8-12 Aralık\n\nKatılım Şekli:\nScratch'te Projenizi Oluşturun: 'Yapay Zeka ile Güvenli Bir Gelecek' temasıyla ilgili bir hikâye veya animasyon hazırlayın.\n\nPadlet'e Yükleyin: Projenizin bağlantısını ve kısa bir açıklamasını padlet bağlantı linki üzerinden paylaşın.\n\nHerkese Katılım Sertifikası:\nBu yarışmaya katılan her öğrenciye katılım sertifikası verilecek! Yarışma boyunca yaratıcılığınızı sergilemek ve Scratch dünyasında eğlenceli projeler oluşturmak için bu harika bir fırsat.\n\nPadlet Linki\nPadlet'e Fotoğraf Yüklemek İçin:\nProjenizin bağlantısını paylaşın ve kısa bir açıklama ekleyin.\n\nSonuçların Paylaşımı:\nTüm katılımcıların eserleri Padlet üzerinden paylaşılacak ve okul topluluğumuzla birlikte eğlenceli bir galeride sergilenecek. Katılım sertifikalarınızı Kodlama Haftası sonunda alabilirsiniz.\n\nBu maraton ile hem eğleneceğiz hem de ailelerimizle birlikte keyifli zaman geçireceğiz. Katılımınızı dört gözle bekliyoruz!",
    instructor: "Kodlama Ekibi",
    duration: "8-12 Aralık",
    prerequisites: "Temel bilgisayar kullanımı",
    judging: "Hikaye anlatımı ve teknik beceri",
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
    prerequisites: "Yok",
    judging: "Görsel estetik ve prompt yaratıcılığı",
  },
];

const middleSchoolCompetitions = [
  {
    title: "AI İnovasyon Challenge",
    level: "Ortaokul",
    capacity: "3-4 kişilik takımlar",
    desc: "12-15 yaş grubu öğrenciler için tasarlanmış bu yarışmada, gerçek dünya sorunlarına yapay zeka çözümleri geliştirirler. Temel machine learning kavramlarını ve Python programlamayı öğrenirler.",
    image: "/canva_ile_sihirli.png",
    fullDesc: "12-15 yaş grubu öğrenciler için tasarlanmış bu yarışmada, gerçek dünya sorunlarına yapay zeka çözümleri geliştirirler. Temel machine learning kavramlarını ve Python programlamayı öğrenirler.",
    instructor: "AI Geliştirme Ekibi",
    duration: "4 hafta",
    prerequisites: "Temel bilgisayar kullanımı",
    judging: "İnovasyon ve teknik başarı",
  },
  {
    title: "Veri Bilimi Mini Proje Yarışması",
    level: "Ortaokul",
    capacity: "2-3 kişilik takımlar",
    desc: "Öğrenciler basit veri setleriyle çalışarak veri analizi ve pattern recognition becerilerini geliştirirler. Eğitim, çevre veya sağlık gibi alanlarda sosyal fayda odaklı projeler geliştirirler.",
    image: "/canva_ile_sihirli.png",
    fullDesc: "Öğrenciler basit veri setleriyle çalışarak veri analizi ve pattern recognition becerilerini geliştirirler. Eğitim, çevre veya sağlık gibi alanlarda sosyal fayda odaklı projeler geliştirirler.",
    instructor: "Veri Bilimi Ekibi",
    duration: "3 hafta",
    prerequisites: "Temel matematik bilgisi",
    judging: "Veri analizi ve sosyal etki",
  },
];

const highSchoolCompetitions = [
  {
    title: "Advanced AI Hackathon",
    level: "Lise",
    capacity: "4-5 kişilik takımlar",
    desc: "15-18 yaş grubu öğrenciler için ileri seviye yapay zeka yarışması. Deep learning, NLP ve computer vision gibi alanlarda karmaşık problemlere çözüm geliştirirler. Üniversite seviyesinde teknik beceriler kazanırlar.",
    image: "/canva_ile_sihirli.png",
    fullDesc: "15-18 yaş grubu öğrenciler için ileri seviye yapay zeka yarışması. Deep learning, NLP ve computer vision gibi alanlarda karmaşık problemlere çözüm geliştirirler. Üniversite seviyesinde teknik beceriler kazanırlar.",
    instructor: "AI Uzman Ekibi",
    duration: "48 saat",
    prerequisites: "Python ve temel ML bilgisi",
    judging: "Teknik karmaşıklık ve yenilikçilik",
  },
  {
    title: "AI Ethics & Social Impact Challenge",
    level: "Lise",
    capacity: "Bireysel veya takım",
    desc: "Lise öğrencilerinin yapay zeka etiği, bias ve sosyal etki konularında projeler geliştirdikleri yarışma. Teknik becerilerin yanı sıra eleştirel düşünme ve etik değerlendirme yeteneklerini geliştirirler.",
    image: "/canva_ile_sihirli.png",
    fullDesc: "Lise öğrencilerinin yapay zeka etiği, bias ve sosyal etki konularında projeler geliştirdikleri yarışma. Teknik becerilerin yanı sıra eleştirel düşünme ve etik değerlendirme yeteneklerini geliştirirler.",
    instructor: "AI Ethics Ekibi",
    duration: "5 hafta",
    prerequisites: "Araştırma ve sunum becerisi",
    judging: "Etik analiz ve sosyal etki potansiyeli",
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
              <h2 className="text-3xl font-bold gradient-text">İlkokul Yarışmaları</h2>
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
              <h2 className="text-3xl font-bold gradient-text">Ortaokul Yarışmaları</h2>
              <p className="text-lg text-codeweek-purple-200">Pratik AI uygulamaları</p>
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
              <p className="text-lg text-codeweek-purple-200">İleri AI ve uzmanlık</p>
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
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
