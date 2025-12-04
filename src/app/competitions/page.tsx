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
    image: "/scratch.jpg",
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
    image: "/canva.jpg",
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
    fullDesc: "08-12 Aralık tarihleri arasında gerçekleşecek olan Kodlama Haftası kapsamında Yapay Zekâ Destekli Dijital Sanat Yarışması düzenliyoruz.\n\nBu yarışmada, geleceğin dünyasını yapay zekâ araçlarını kullanarak tasarlayacaksınız. Doğa dostu ve sürdürülebilir teknolojilerin olduğu bir gelecek hayal ediniz.\n\nAşağıdaki temalardan birini seçebilirsiniz:\n\n Geleceğin sürdürülebilir ulaşım araçları\n\n Geleceğin doğaya dost akıllı evleri\n\nGeleceğin okulları\n\nGeleceğin sürdürülebilir ve doğa dostu teknolojileri\n\nSeçtiğiniz konu için kendi detaylı promptunuzu yazıp ve görselinizi bir yapay zekâ aracında oluşturmalısınız.\n\nTasarımınızda teknolojinin güvenli, adil ve etik kullanımına da dikkat etmeniz gerekmektedir.\n\nTeslim Şartları:\nDosya formatı: JPG, PNG veya PDF\n\nClassroom'a tek dosya olarak yükleyiniz.\n\nAçıklama olarak sizin oluşturduğunuz promptu eklemelisiniz.\n\nSon teslim tarihi: 12 Aralık 2025 Cuma \n\nHayal gücünüzü kullanın, geleceği siz tasarlayın!",
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
    desc: "Yapay zekânın geleceğini şekillendirmeye hazır mısınız? InnovateHER Etik Zekâ Hackathonu ile algoritmik adalet, veri mahremiyeti, yapay zekâ şeffaflığı ve yanlış bilgilendirme gibi kritik etik sorunlara yaratıcı çözümler üretebileceksiniz!",
    image: "/hackathon.png",
    fullDesc: "Yapay zekânın geleceğini şekillendirmeye hazır mısınız? InnovateHER Etik Zekâ Hackathonu ile algoritmik adalet, veri mahremiyeti, yapay zekâ şeffaflığı ve yanlış bilgilendirme gibi kritik etik sorunlara yaratıcı çözümler üretebileceksiniz! Bu özel etkinlik yalnızca kız öğrencilere yöneliktir ve genç kadınların etik, güvenli ve insan odaklı yapay zekâ geliştirmeye liderlik etmesini desteklemeyi amaçlar.\n\n📅 Tarih: 12 - 14 Aralık\n⏰ Başlangıç Saati: 12 Aralık 20:00\n⏰ Bitiş Saati: 14 Aralık 20:00\n\n📌 Etkinlik Temaları\nBaşvuru sırasında aşağıdaki yapay zekâ etiği temalarından birini seçmeniz gerekmektedir:\n● Algoritmik Ayrımcılık ve Adalet (Algorithmic Bias & Fairness)\n● Mahremiyet ve Veri Güvenliği (Privacy & Data Protection)\n● Deepfake ve Yanlış Bilgi (AI Misinformation & Synthetic Media)\n● AI Şeffaflığı ve Açıklanabilirlik (Explainable & Transparent AI)\n\nHackathon başladığında ekibinizin isterse seçtiğiniz temayı farklı bir etik alt başlıkla ilişkilendirme veya genişletme hakkı vardır.\n\n📌 Başvuru Süreci\nHackathona başvururken katılımcıların dört ana yapay zekâ etiği temasından (Algoritmik Ayrımcılık ve Adalet, Mahremiyet ve Veri Güvenliği, Deepfake ve Yanlış Bilgi, AI Şeffaflığı ve Açıklanabilirlik) birini seçmeleri gerekmektedir. Seçilen tema, başvuru formunda ekibin ilgi alanı olarak belirtilir; ancak hackathonun başlangıcında ekiplerin çözeceği spesifik problem senaryosu organizasyon tarafından açıklanacaktır. Hackathon başladıktan sonra ekipler isterlerse fikirlerini seçtikleri temanın alt sorunlarına uyarlayabilir, farklı bir etik bakış açısıyla genişletebilir veya çözüm önerilerini yeniden yapılandırabilirler. Kod yazma zorunluluğu bulunmadığından, ekiplerin çözüm önerileri bir uygulama prototipi, algoritma fikri, arayüz tasarımı, politika önerisi ya da toplumsal etki modeli şeklinde de olabilir. Bu süreç, katılımcıların etik zekâ odaklı yaratıcı çözümler üretmesini ve yapay zekânın geleceği için yenilikçi düşünmelerini desteklemeyi amaçlar.\n\n🎓 Katılım Avantajları\nHackathon sürecini başarıyla tamamlayan her takım üyesine:\n● Oracle Academy üzerinden Self-Pace Java Foundation Sertifika Programı erişimi sağlanacaktır.\n● Ayrıca tüm katılımcılara Hackathon Katılım Sertifikası verilecektir.\n\n🏆 Ödüller\nHackathon sonunda dereceye giren ilk 3 takım şu ödülleri kazanacaktır:\n● Cisco Networking Academy veya Oracle Academy üzerinden kendi seçecekleri bir Self-Pace Sertifika Programı hakkı.\n\n💡 Kendinizi gösterin, dünyayı değiştirin!\nTeknoloji ve yaratıcılığınızı bir araya getirerek küresel hedeflere yönelik yenilikçi çözümler üretmek için bu heyecan verici fırsatı kaçırmayın. Başvurunuzu hemen yaparak bu ilham verici yolculuğa katılabilirsiniz!",
    instructor: "InnovateHER Ekibi",
    duration: "12 Aralık 20:00 - 14 Aralık 20:00",
    prerequisites: "Sadece kız öğrenciler için",
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
