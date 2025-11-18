export const heroStats = [
  { label: "Katılımcı", value: "1.200+", detail: "Öğrenci & profesyonel" },
  { label: "Atölye", value: "24", detail: "Teknik ve tasarım" },
  { label: "Konuşmacı", value: "32", detail: "Ulusal & global" },
  { label: "Hackathon Ödülü", value: "-", detail: "Toplam ödül" },
];

export const quickLinks = [
  {
    label: "Takvimi incele",
    href: "/schedule",
    description: "Günlere göre tüm etkinlik akışı",
  },
  {
    label: "Atölyelere kayıt",
    href: "/workshops",
    description: "Kodlama, AI ve tasarım laboratuvarları",
  },
  {
    label: "Konuşmacılar",
    href: "/speakers",
    description: "Mentorlar ve sektör liderleri",
  },
  {
    label: "İletişim",
    href: "/contact",
    description: "Sorularınız için bize ulaşın",
  },
];

export const scheduleDays = [
  {
    day: "Pazartesi",
    date: "13 Ekim",
    summary: "Açılış seremonisi ve topluluk buluşmaları",
    events: [
      { title: "Keynote: Geleceğin Eğitimi", time: "10:00", track: "Ana Sahne" },
      { title: "Açılış Kokteyli", time: "11:30", track: "Foyer" },
      { title: "Topluluk Panelleri", time: "13:30", track: "Forum Salonu" },
      { title: "Mentor Speed-Dating", time: "16:00", track: "Atölye 1" },
      { title: "Networking Akşamı", time: "18:00", track: "Terrace" },
    ],
  },
  {
    day: "Salı",
    date: "14 Ekim",
    summary: "AI ve veri odaklı oturumlar",
    events: [
      { title: "AI Product Jam", time: "09:30", track: "Studio A" },
      { title: "Veri Görselleştirme Workshop", time: "11:00", track: "Lab 2" },
      { title: "Machine Learning 101", time: "13:00", track: "Atölye 3" },
      { title: "GenAI Etik Tartışması", time: "15:00", track: "Forum Salonu" },
      { title: "AI Demo Showcase", time: "17:00", track: "Ana Sahne" },
    ],
  },
  {
    day: "Çarşamba",
    date: "15 Ekim",
    summary: "Eğitimde kodlama ve veli etkinlikleri",
    events: [
      { title: "Okullarda Kodlama", time: "10:00", track: "Ana Sahne" },
      { title: "Scratch ile Başlangıç", time: "11:30", track: "Atölye 2" },
      { title: "Veli Deneyim Alanı", time: "13:00", track: "Experience Zone" },
      { title: "Öğretmenler için Teknoloji", time: "14:30", track: "Forum Salonu" },
      { title: "STEM Showcase", time: "17:30", track: "Agora" },
    ],
  },
  {
    day: "Perşembe",
    date: "16 Ekim",
    summary: "Web geliştirme ve tasarım günü",
    events: [
      { title: "Modern Web Stack", time: "09:00", track: "Studio B" },
      { title: "UI/UX Tasarım Prensipleri", time: "11:00", track: "Lab 1" },
      { title: "React ile Hızlı Prototip", time: "13:30", track: "Atölye 1" },
      { title: "Design System Workshop", time: "15:30", track: "Studio A" },
      { title: "Portfolio Review", time: "17:00", track: "Forum Salonu" },
    ],
  },
  {
    day: "Cuma",
    date: "17 Ekim",
    summary: "Hackathon başlangıcı ve özel oturumlar",
    events: [
      { title: "Hackathon Kickoff", time: "09:00", track: "Ana Sahne" },
      { title: "API Entegrasyonu", time: "10:30", track: "Lab 2" },
      { title: "Pitch Workshop", time: "14:00", track: "Studio B" },
      { title: "Mentor Office Hours", time: "16:00", track: "Atölye 3" },
      { title: "Hackathon Devam", time: "18:00", track: "Hackathon Alanı" },
    ],
  },
  {
    day: "Cumartesi",
    date: "18 Ekim",
    summary: "Hackathon finali ve ödül töreni",
    events: [
      { title: "Hackathon Final Sunumları", time: "10:00", track: "Ana Sahne" },
      { title: "Jüri Değerlendirmesi", time: "13:00", track: "Jüri Odası" },
      { title: "Ödül Töreni", time: "16:00", track: "Ana Sahne" },
      { title: "Kapanış Partisi", time: "18:30", track: "Terrace" },
    ],
  },
];

export const workshops = [
  {
    title: "Web Geliştirme ile Proje Yapımı",
    level: "Orta",
    capacity: "30 kişi",
    desc: "Ortaokul öğrencileri için HTML, CSS ve JavaScript ile interaktif web projeleri.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
    fullDesc: "Ortaokul seviyesine uygun bu atölyede, HTML, CSS ve JavaScript kullanarak kendi web projenizi geliştireceksiniz. Formlar, animasyonlar ve interaktif öğeler ekleyerek dinamik web sayfaları oluşturacaksınız. Modern web geliştirme araçlarını tanıyacak, gerçek projeler üzerinde çalışacaksınız.",
    instructor: "Ahmet Yılmaz",
    duration: "3 saat",
    prerequisites: "Temel bilgisayar kullanımı",
  },
  {
    title: "Scratch ile Kodlama",
    level: "Başlangıç",
    capacity: "25 kişi",
    desc: "İlkokul öğrencileri için görsel programlama ile kodlama dünyasına ilk adım.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    fullDesc: "İlkokul öğrencileri için özel tasarlanmış bu atölyede, Scratch programlama dili ile eğlenceli ve yaratıcı projeler geliştireceksiniz. Blok tabanlı programlama ile algoritma düşüncesini öğrenecek, kendi oyunlarınızı ve animasyonlarınızı yaratacaksınız. Kodlama mantığını oyunlaştırılmış aktivitelerle keşfedeceksiniz.",
    instructor: "Zeynep Kaya",
    duration: "2.5 saat",
    prerequisites: "Yok",
  },
  {
    title: "Gelişmiş Web Geliştirme",
    level: "İleri",
    capacity: "20 kişi",
    desc: "Lise öğrencileri için React ve modern web teknolojileri ile gelişmiş projeler.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=400&fit=crop",
    fullDesc: "Lise seviyesine uygun bu atölyede, React kütüphanesi ile modern web uygulamaları geliştireceksiniz. Component yapıları, state management, API entegrasyonu ve routing konularını öğreneceksiniz. Gerçek dünya projeleri üzerinde çalışarak, profesyonel web geliştirme pratiklerini deneyimleyeceksiniz.",
    instructor: "Mehmet Demir",
    duration: "4 saat",
    prerequisites: "HTML, CSS ve JavaScript temel bilgisi",
  },
  {
    title: "Minecraft ile Kodlama",
    level: "Başlangıç",
    capacity: "35 kişi",
    desc: "İlkokul öğrencileri için Minecraft Education Edition ile kodlama öğrenme.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    fullDesc: "Minecraft Education Edition kullanarak kodlama öğrenmek artık çok eğlenceli! İlkokul öğrencileri için hazırlanmış bu atölyede, Minecraft dünyasında Code Builder ile programlama yapacak, kendi otomasyonlarınızı oluşturacaksınız. Oyun tabanlı öğrenme ile algoritma ve problem çözme becerilerinizi geliştireceksiniz.",
    instructor: "Ayşe Özkan",
    duration: "3 saat",
    prerequisites: "Yok",
  },
  {
    title: "Mobil Uygulama Tasarımı",
    level: "Orta",
    capacity: "28 kişi",
    desc: "Ortaokul öğrencileri için mobil uygulama tasarımı ve prototipleme.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=400&fit=crop",
    fullDesc: "Mobil uygulama tasarımının temellerini öğreneceğiniz bu atölyede, kullanıcı arayüzü tasarımı, navigasyon yapıları ve kullanıcı deneyimi prensipleri üzerinde duracaksınız. Figma gibi tasarım araçları kullanarak kendi mobil uygulama prototipinizi oluşturacaksınız. Tasarım düşüncesi ve problem çözme becerilerinizi geliştireceksiniz.",
    instructor: "Can Arslan",
    duration: "4 saat",
    prerequisites: "Temel bilgisayar kullanımı",
  },
  {
    title: "Python ile İlk Adımlar",
    level: "Başlangıç",
    capacity: "32 kişi",
    desc: "İlkokul öğrencileri için Python programlama diline eğlenceli giriş.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    fullDesc: "Python programlama diline ilk adımınızı atacağınız bu atölyede, temel programlama kavramlarını öğreneceksiniz. Basit komutlar, değişkenler, döngüler ve koşullu ifadeler ile eğlenceli projeler geliştireceksiniz. Turtle grafikleri ile görsel programlama yaparak kodlamanın keyfini çıkaracaksınız.",
    instructor: "Deniz Yıldız",
    duration: "3.5 saat",
    prerequisites: "Yok",
  },
  {
    title: "Oyun Geliştirme",
    level: "Orta",
    capacity: "24 kişi",
    desc: "Ortaokul öğrencileri için Unity veya Scratch ile oyun geliştirme.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    fullDesc: "Kendi oyununuzu geliştirmeyi öğreneceğiniz bu atölyede, oyun tasarımı prensipleri, karakter hareketleri, çarpışma algılama ve oyun mekanikleri üzerinde çalışacaksınız. Unity veya Scratch kullanarak 2D oyunlar geliştirecek, oyun döngüsü ve seviye tasarımı konularını keşfedeceksiniz.",
    instructor: "Burak Şen",
    duration: "4 saat",
    prerequisites: "Temel bilgisayar kullanımı",
  },
  {
    title: "Web Tasarımına Giriş",
    level: "Başlangıç",
    capacity: "30 kişi",
    desc: "İlkokul öğrencileri için web sayfası tasarımının temelleri.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=400&fit=crop",
    fullDesc: "Web tasarımının temellerini öğreneceğiniz bu atölyede, renkler, yazı tipleri ve düzen hakkında bilgi sahibi olacaksınız. Basit HTML ve CSS ile kendi web sayfanızı tasarlayacak, görsel olarak çekici içerikler oluşturacaksınız. Tasarım prensipleri ve kullanıcı deneyimi kavramlarını eğlenceli aktivitelerle keşfedeceksiniz.",
    instructor: "Elif Çelik",
    duration: "3 saat",
    prerequisites: "Yok",
  },
  {
    title: "Mobil Uygulama Geliştirme",
    level: "İleri",
    capacity: "22 kişi",
    desc: "Lise öğrencileri için React Native ile cross-platform mobil uygulama geliştirme.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=400&fit=crop",
    fullDesc: "React Native kullanarak iOS ve Android için mobil uygulamalar geliştireceğiniz bu atölyede, native modüller, navigation, state management ve API entegrasyonu konularını öğreneceksiniz. Expo framework ile hızlı prototipleme yapacak, gerçek mobil uygulama projeleri geliştireceksiniz.",
    instructor: "Emre Doğan",
    duration: "5 saat",
    prerequisites: "JavaScript ve React temel bilgisi",
  },
  {
    title: "Yapay Zeka ile Tanışma",
    level: "Orta",
    capacity: "26 kişi",
    desc: "Ortaokul öğrencileri için yapay zeka kavramları ve uygulamaları.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    fullDesc: "Yapay zeka dünyasına giriş yapacağınız bu atölyede, makine öğrenmesi, görüntü tanıma ve doğal dil işleme gibi temel AI kavramlarını öğreneceksiniz. Basit AI modelleri oluşturarak, yapay zekanın nasıl çalıştığını deneyimleyeceksiniz. AI etiği ve sorumlu kullanım konuları da ele alınacak.",
    instructor: "Gizem Aydın",
    duration: "4.5 saat",
    prerequisites: "Temel bilgisayar kullanımı",
  },
];

export const competitions = [
  {
    title: "GenAI Challenge",
    prize: "₺100K",
    desc: "Eğitimde üretken yapay zekâ senaryoları. ChatGPT, Claude ve özel modellerle öğrenme deneyimleri tasarlayın.",
  },
  {
    title: "Kamu için Açık Veri Yarışması",
    prize: "₺75K",
    desc: "Şehir verileriyle yeni deneyimler yarat. Belediye API'leri ve açık veri setleriyle toplumsal fayda projeleri.",
  },
  {
    title: "Sürdürülebilirlik Hackathon",
    prize: "₺50K",
    desc: "İklim değişikliği ve çevre sorunlarına teknoloji çözümleri. Karbon ayak izi takibi ve yeşil enerji projeleri.",
  },
  {
    title: "Erişilebilirlik İnovasyonu",
    prize: "₺40K",
    desc: "Engelsiz teknoloji çözümleri. Görme, işitme ve motor engelliler için uygulamalar geliştirin.",
  },
];

export const hackathon = {
  title: "CodeWeek Impact Hackathon",
  duration: "48 Saat",
  focus: "Sürdürülebilirlik, kapsayıcı eğitim ve toplumsal fayda.",
  perks: ["Mentor desteği", "Prototip fonu", "Pitch sahnesi"],
};

export const speakers = [
  {
    name: "Selin Arslan",
    role: "AI Product Lead, Atlassian",
    topic: "Öğrenme deneyimlerinde GenAI",
  },
  {
    name: "Dario Mendes",
    role: "CTO, SolarLabs",
    topic: "Enerji dönüşümünde yazılım",
  },
  {
    name: "Elif Kalkan",
    role: "Eğitim Teknolojileri Direktörü, Kolektif",
    topic: "Okul sonrası maker programları",
  },
  {
    name: "Kenan Yurt",
    role: "Kurucu, CivicTech Hub",
    topic: "Kamu verisiyle etki",
  },
  {
    name: "Ayşe Demir",
    role: "Senior Frontend Engineer, Spotify",
    topic: "Modern web geliştirme pratikleri",
  },
  {
    name: "Mehmet Kaya",
    role: "Blockchain Architect, Consensys",
    topic: "Web3 ve merkeziyetsiz sistemler",
  },
  {
    name: "Zeynep Öztürk",
    role: "UX Research Lead, Google",
    topic: "Kullanıcı deneyimi araştırması",
  },
  {
    name: "Can Yılmaz",
    role: "Data Scientist, Netflix",
    topic: "Büyük veri ve makine öğrenmesi",
  },
  {
    name: "Deniz Aydın",
    role: "DevOps Engineer, Amazon",
    topic: "Cloud infrastructure ve scaling",
  },
  {
    name: "Burak Şahin",
    role: "Mobile Lead, Uber",
    topic: "Cross-platform mobil geliştirme",
  },
  {
    name: "Gizem Çelik",
    role: "Security Expert, Microsoft",
    topic: "Yazılım güvenliği ve etik hacking",
  },
  {
    name: "Emre Doğan",
    role: "Startup Founder, TechStars",
    topic: "Girişimcilik ve yatırım süreçleri",
  },
];

export const communityPrograms = [
  {
    title: "Toplum Laboratuvarı",
    audience: "STK ve yerel inisiyatifler",
    desc: "Sosyal fayda projelerini CodeWeek ekosistemiyle eşleştir.",
  },
  {
    title: "Veli Deneyim Alanı",
    audience: "Aileler",
    desc: "Kodlama atölyelerini aileler birlikte deneyimlesin.",
  },
];

export const galleryItems = Array.from({ length: 8 }).map((_, idx) => ({
  title: `Anı Kare ${idx + 1}`,
  type: idx % 3 === 0 ? "Video" : "Fotoğraf",
}));

export const faqs = [
  {
    question: "Etkinliğe kimler katılabilir?",
    answer:
      "Öğrenciler, öğretmenler, veliler, geliştiriciler ve teknoloji meraklıları katılabilir. Yaş sınırı yoktur, herkes CodeWeek haftasına katılabilir.",
  },
  {
    question: "Online katılım var mı?",
    answer:
      "Evet, ana sahne konuşmaları ve bazı atölyeler CodeWeek canlı yayın platformu üzerinden izlenebilir. Online katılım için ayrı kayıt gereklidir.",
  },
  {
    question: "Hackathon'a nasıl başvurabilirim?",
    answer: "Hackathon başvuruları etkinlik öncesi açılır. Takım halinde veya bireysel başvuru yapabilirsiniz. Başvuru formu yarışmalar sayfasında yer alacaktır.",
  },
  {
    question: "Sertifika veriliyor mu?",
    answer: "Evet, tüm atölyelere katılanlara dijital katılım sertifikası verilir. Hackathon kazananlarına özel ödül sertifikaları da sunulur.",
  },
];

