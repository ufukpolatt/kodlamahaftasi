export const heroStats = [
  { label: "Katılımcı", value: "2.500+", detail: "Öğrenci & profesyonel" },
  { label: "Atölye", value: "32", detail: "Machine learning & etik" },
  { label: "Mentor", value: "48", detail: "Global & yerel uzmanlar" }
];

export const quickLinks = [
  {
    label: "AI Takvimi",
    href: "/schedule",
    description: "Yapay zeka etkinlikleri ve oturumlar",
  },
  {
    label: "AI Laboratuvarları",
    href: "/workshops",
    description: "Hands-on AI deneyimleri ve pratikler",
  },
  {
    label: "AI Mentorları",
    href: "/speakers",
    description: "Sektör liderleri ve etik uzmanları",
  },
  {
    label: "AI Etik İlkeleri",
    href: "/contact",
    description: "Sorumlu AI geliştirme prensipleri",
  },
];

export const scheduleDays = [
  {
    day: "Pazartesi",
    date: "8 Aralık",
    summary: "AI Ethics ve Sorumlu İnovasyon",
    events: [
      { title: "Keynote: AI Geleceği", time: "10:00", track: "Ana Sahne" },
      { title: "AI Ethics Paneli", time: "11:30", track: "Forum Salonu" },
      { title: "Sorumlu AI Workshop", time: "13:30", track: "AI Lab 1" },
      { title: "Bias in AI Tartışması", time: "15:00", track: "Etik Forumu" },
      { title: "AI Demo Showcase", time: "17:00", track: "Ana Sahne" },
    ],
  },
  {
    day: "Salı",
    date: "9 Aralık",
    summary: "Machine Learning ve Deep Learning",
    events: [
      { title: "Neural Networks 101", time: "09:30", track: "AI Lab 2" },
      { title: "Computer Vision Workshop", time: "11:00", track: "Vision Lab" },
      { title: "NLP ile Uygulamalar", time: "13:00", track: "NLP Lab" },
      { title: "Reinforcement Learning", time: "15:00", track: "ML Lab" },
      { title: "AI Model Deployment", time: "17:00", track: "DevOps Salonu" },
    ],
  },
  {
    day: "Çarşamba",
    date: "10 Aralık",
    summary: "Generative AI ve Yaratıcı Uygulamalar",
    events: [
      { title: "GenAI Introduction", time: "10:00", track: "Ana Sahne" },
      { title: "Prompt Engineering", time: "11:30", track: "GenAI Lab" },
      { title: "AI ile İçerik Üretimi", time: "13:00", track: "Creative Studio" },
      { title: "AI Sanat Atölyesi", time: "14:30", track: "AI Art Lab" },
      { title: "Müzik ve AI", time: "17:30", track: "Sound Studio" },
    ],
  },
  {
    day: "Perşembe",
    date: "11 Aralık",
    summary: "AI in Healthcare ve Sosyal Fayda",
    events: [
      { title: "Medical AI Applications", time: "09:00", track: "Healthcare Lab" },
      { title: "AI for Social Good", time: "11:00", track: "Impact Forum" },
      { title: "Climate AI Solutions", time: "13:30", track: "Sustainability Lab" },
      { title: "Education AI Tools", time: "15:30", track: "EdTech Salonu" },
      { title: "Accessibility AI", time: "17:00", track: "Inclusion Lab" },
    ],
  },
  {
    day: "Cuma",
    date: "12 Aralık",
    summary: "AI Startup ve Investment",
    events: [
      { title: "AI Startup Pitch", time: "09:00", track: "Ana Sahne" },
      { title: "VC ve AI Investment", time: "10:30", track: "Investment Forum" },
      { title: "AI Business Models", time: "14:00", track: "Business Lab" },
      { title: "Mentor Office Hours", time: "16:00", track: "Mentor Lounge" },
      { title: "AI Networking", time: "18:00", track: "Networking Area" },
    ],
  },
];

export const workshops = [
  {
    title: "Wizefloor ile Kodlama",
    level: "İlkokul",
    capacity: "20 öğrenci",
    desc: "WizeFloor zemin etkileşim aracıyla eğlenceli ve hareketli bir şekilde kodlama mantığını deneyimleyin.",
    image: "/1_sinif_wizefloor.jpg",
    fullDesc: "Bu etkinlikte öğrenciler, WizeFloor zemin etkileşim aracıyla eğlenceli ve hareketli bir şekilde kodlama mantığını deneyimleyeceklerdir. WizeFloor üzerinde yer alan dijital oyun alanında, farklı yön okları, semboller veya adımlardan oluşan bir görev dizisi bulunmaktadır. Öğrencilerin amacı, verilen yönergeleri takip ederek karakteri doğru şekilde yönlendirmek ve hedefe ulaştırmaktır.",
    instructor: "1. Sınıf Öğretmenleri",
    duration: "1.5 saat",
    prerequisites: "Yok",
  },
  {
    title: "Gizli Kelimeyi Bul",
    level: "İlkokul",
    capacity: "25 öğrenci",
    desc: "Kodlamanın temel becerilerinden olan sembolleri çözümleme ve eşleştirme çalışması.",
    image: "/1_sinif_gizli_kelime.jpg",
    fullDesc: "Bu etkinlikte öğrenciler, kodlamanın temel becerilerinden biri olan sembolleri çözümleme ve eşleştirme çalışması yapacaklardır. Etkinlik sayfasının üst kısmında şekillerin temsil ettiği harfler, alt kısmında ise bu şekillerle oluşturulmuş bir gizli kelime yer almaktadır. Öğrenciler, kod tablosunu kullanarak şekilleri doğru harflerle eşleştirip gizlenen kelimeyi bulacaklardır.",
    instructor: "1. Sınıf Öğretmenleri",
    duration: "1 saat",
    prerequisites: "Yok",
  },
  {
    title: "3D Kalemle Mini Zaman Kapsülü",
    level: "İlkokul",
    capacity: "20 öğrenci",
    desc: "3D kalem kullanarak kişisel zaman kapsülü tasarlayarak geleceğe mesajlar gönderin.",
    image: "/dijital_sanat.png",
    fullDesc: "Öğrencilerimiz bu atölyede 3D kalem kullanarak küçük bir Mini Zaman Kapsülü tasarlayacaklardır. Çalışmanın içine öğrencinin bugünkü duygusunu, küçük bir hedefini ve gelecekte kendine ya da ailesine iletmek istediği minik bir mesajını içeren bir not yerleştirilecektir. Etkinliğin sonunda kapsüller kilitli poşetlerinde öğrencilere teslim edilerek evde aileleriyle birlikte açmaları ve paylaşmaları sağlanacaktır.",
    instructor: "2. Sınıf Öğretmenleri",
    duration: "1.5 saat",
    prerequisites: "Yok",
  },
  {
    title: "Binary Bileklik ve Yapay Zekâ ile El Takibi Atölyesi",
    level: "İlkokul",
    capacity: "25 öğrenci",
    desc: "Binary kodlama ile bileklik yapımı ve yapay zekâ destekli el takibi teknolojisi deneyimi.",
    image: "/3_sinif_binary_bileklik_2.png",
    fullDesc: "Öğrenciler bilgisayarların bilgiyi 0 ve 1 ile nasıl temsil ettiğini somut bir etkinlik üzerinden öğrenir. Seçtikleri harfin binary karşılığını boncuklarla kodlayarak kendi bilekliklerini tasarlarlar. Ardından Tynker platformundaki \"Turtle Racer\" etkinliği ile yapay zekâ destekli el takibi teknolojisini deneyimleyerek el hareketleriyle karakter kontrolü yaparlar. Bu atölye, hem temel bilgisayar mantığını hem de güncel teknoloji uygulamalarını eğlenceli bir şekilde bir araya getirir.",
    instructor: "3. Sınıf Öğretmenleri",
    duration: "2 saat",
    prerequisites: "Yok",
  },
  {
    title: "Micro:bit ile Yapay Zeka Etkinliği: Hareket Verileriyle Kendi Modelini Eğit!",
    level: "Ortaokul",
    capacity: "18 öğrenci",
    desc: "BBC micro:bit kullanarak hareket verilerine dayalı makine öğrenmesi modeli geliştirin.",
    image: "/Lego.png",
    fullDesc: "BBC micro:bit kullanarak hareket verilerine dayalı bir makine öğrenmesi modeli geliştirebilecekleri özel bir çalışmaya katılacaklar. Bu uygulamalı etkinlikte katılımcılar, hem micro:bit'in hareket sensörlerini keşfedecek hem de yapay zekanın temel prensiplerini deneyimleme fırsatı bulacak. Etkinlik süresince öğrenciler; Micro:bit'in ivmeölçer sensörüyle kendi hareket verilerini toplamayı, Bu verilerle bir makine öğrenmesi modeli eğitmeyi, Oluşturdukları modeli micro:bit'e aktararak gerçek zamanlı hareket tahminleri yapmayı öğrenecekler. Code Week ruhuna uygun olarak tasarlanan bu etkinlik, öğrencilerin yapay zeka ve kodlama becerilerini eğlenceli, keşfedici ve etkileşimli bir ortamda geliştirmelerini hedeflemektedir.",
    instructor: "5. Sınıf Öğretmenleri",
    duration: "2.5 saat",
    prerequisites: "Temel bilgisayar kullanımı",
  },
  {
    title: "Google Teachable Machine: Yapay Zeka ve Makine Öğrenmesi (Görüntü İşleme)",
    level: "Ortaokul",
    capacity: "22 öğrenci",
    desc: "Google Teachable Machine kullanarak kod yazmadan makine öğrenmesi modelleri oluşturun.",
    image: "/Scratch.png",
    fullDesc: "Google Teachable Machine (GTM), kod yazmadan makine öğrenmesi modelleri oluşturmayı sağlayan web tabanlı bir araçtır. Öğrenciler kendi bilgisayarlarındaki tarayıcı üzerinden kamerayı kullanarak veriyi (fotoğrafı) anlık olarak işlerler. Bu etkinlikte öğrenciler, görüntü işleme temellerini öğrenir, kendi yapay zeka modellerini eğitir ve bu modelleri gerçek zamanlı olarak test etme fırsatı bulurlar.",
    instructor: "6. Sınıf Öğretmenleri",
    duration: "2 saat",
    prerequisites: "Temel bilgisayar kullanımı",
  },
  {
    title: "CyberSafe AI: Daha Derine İn",
    level: "Ortaokul",
    capacity: "20 öğrenci",
    desc: "Minecraft kodlama saati ile yapay zekayı 3 boyutlu hayvanlar tasarlamaya yönlendirin.",
    image: "/7_sinif_minecraft.png",
    fullDesc: "MineCraft kodlama saati olan \"CyberSafe AI: Dig Deeper:Yapay zekayı 3 boyutlu yazdırılmış hayvanlar tasarlamaya yönlendirin, ancak dikkat edin: Yapay zeka hata yapar! Kütüphanede gerçek bilgiler arayın, sınıf arkadaşlarınızdan çeşitli fikirler toplayın ve herkesin mahremiyetini koruyun. Yapay zekayı olduğu gibi kabul etmeyin, daha derinlemesine araştırın!\" etkinliğini tamamlarlar. Sonrasında Tinkercad uygulamasında Creeper tasarımını yaparlar. Verilen görevleri tam anlamıyla yerine getiren öğrenciler sertifika ve 3D creeper almaya hak kazanır.",
    instructor: "7. Sınıf Öğretmenleri",
    duration: "2.5 saat",
    prerequisites: "Temel Minecraft bilgisi",
  },
  
  ];

export const competitions = [
  {
    title: "AI for Social Impact Challenge",
    desc: "Eğitim, sağlık ve çevre sorunlarına AI çözümleri. Sosyal fayda odaklı projeler.",
    fullDesc: "Bu yarışmada katılımcılar, eğitim, sağlık ve çevre gibi temel alanlarda yapay zeka çözümleri geliştirerek toplumsal etki yaratmayı hedefliyor. Projelerinizde AI etiği ilkelerine uyum, sürdürülebilirlik ve ölçeklenebilirlik ön planda değerlendirilecektir.",
    requirements: "AI/ML temel bilgisi, problem çözme becerisi, ekip çalışması",
    duration: "3 hafta",
    judging: "AI etik uzmanları, sektör profesyonelleri ve akademisyenler tarafından değerlendirme",
    image: "/dijital_sanat.png",
    level: "Lise",
  },
  {
    title: "Generative AI Innovation",
    desc: "Content creation, design ve creative AI uygulamaları. Yaratıcı çözümler.",
    fullDesc: "Generative AI teknolojilerini kullanarak yaratıcı ve yenilikçi uygulamalar geliştirmeniz bekleniyor. Sanat, müzik, metin yazarlığı, tasarım ve diğer yaratıcı alanlarda sınırları zorlayın. Projelerde orijinallik, teknik yeterlilik ve ticari potansiyel değerlendirilecektir.",
    requirements: "Generative AI temel bilgisi, programlama, yaratıcılık",
    duration: "2 hafta",
    judging: "AI araştırmacıları, sanatçılar ve endüstri uzmanları tarafından değerlendirme",
    image: "/canva_ile_sihirli.PNG",
    level: "Lise",
  },
];

export const hackathon = {
  title: "AI Impact Hackathon",
  duration: "48 Saat",
  focus: "Sorumlu AI, sosyal etki ve etik yapay zeka çözümleri.",
  perks: ["AI Mentor Desteği", "Cloud Credits", "Investment Pitch"],
};

export const speakers = [
  {
    name: "Dr. Selin Arslan",
    role: "AI Ethics Lead, Google",
    topic: "Sorumlu AI ve fairness prensipleri",
    bio: "Dr. Selin Arslan, Google'da AI Ethics ekibini yönetmektedir. 15+ yıllık akademik ve endüstri deneyimiyle yapay zeka etiği alanında öncü çalışmalara imza atmıştır.",
    experience: "15+ yıl AI araştırması ve geliştirme",
    achievements: "AI Ethics Forum kurucusu, 50+ akademik yayın",
    session: "Keynote: Sorumlu AI Geleceği",
    sessionTime: "8 Aralık, 10:00-11:00",
    sessionLocation: "Ana Sahne"
  },
  {
    name: "Prof. Dr. Dario Mendes",
    role: "ML Research Director, DeepMind",
    topic: "Deep learning ve transformer mimarileri",
    bio: "Prof. Dr. Dario Mendes, DeepMind'de makine öğrenmesi araştırmalarına liderlik etmektedir. Transformer mimarilerinin gelişiminde kilit rol oynamıştır.",
    experience: "20+ yıl akademik araştırma, 10+ patent",
    achievements: "NeurIPS best paper award, AI breakthrough prize",
    session: "Deep Learning Revolution",
    sessionTime: "9 Aralık, 14:00-15:00",
    sessionLocation: "Ana Sahne"
  },
  {
    name: "Dr. Elif Kalkan",
    role: "AI Product Manager, OpenAI",
    topic: "Generative AI ürün geliştirme",
    bio: "Dr. Elif Kalkan, OpenAI'de generative AI ürünlerinin geliştirilmesinden sorumludur. GPT modellerinin ticari uygulamalarında uzmanlaşmıştır.",
    experience: "8+ yıl AI ürün yönetimi",
    achievements: "ChatGPT product team üyesi, 3 startup kurucusu",
    session: "Generative AI Product Strategy",
    sessionTime: "10 Aralık, 11:30-12:30",
    sessionLocation: "AI Lab 1"
  },
  {
    name: "Kenan Yurt",
    role: "Computer Vision Expert, Meta",
    topic: "Computer vision ve real-time AI",
    bio: "Kenan Yurt, Meta'de computer vision sistemlerinin geliştirilmesinde çalışmaktadır. Real-time image processing ve object detection alanında uzmandır.",
    experience: "12+ yıl CV araştırma ve geliştirme",
    achievements: "Meta Reality Labs lead, 20+ CV patenti",
    session: "Computer Vision in Practice",
    sessionTime: "9 Aralık, 11:00-12:00",
    sessionLocation: "Vision Lab"
  },
  {
    name: "Dr. Ayşe Demir",
    role: "NLP Research Lead, Anthropic",
    topic: "Large Language Models ve safety",
    bio: "Dr. Ayşe Demir, Anthropic'te LLM güvenliği araştırmalarına liderlik etmektedir. AI alignment ve safety alanında öncü çalışmalara imza atmıştır.",
    experience: "10+ yıl NLP araştırması",
    achievements: "AI Safety Research award, Constitutional AI geliştiricisi",
    session: "LLM Safety and Alignment",
    sessionTime: "10 Aralık, 14:00-15:00",
    sessionLocation: "NLP Lab"
  },
  {
    name: "Mehmet Kaya",
    role: "AI Startup Founder, Hugging Face",
    topic: "Open source AI ve community",
    bio: "Mehmet Kaya, Hugging Face'in kurucu ekibindendir. Open source AI hareketinin liderlerinden biri olarak AI demokratikleşmesine katkı sağlamaktadır.",
    experience: "7+ yıl open source AI liderliği",
    achievements: "Hugging Face kurucu ortağı, OSS advocate",
    session: "Open Source AI Movement",
    sessionTime: "11 Aralık, 13:00-14:00",
    sessionLocation: "Community Hub"
  }
];

export const communityPrograms = [
  {
    title: "AI Ethics Laboratory",
    audience: "AI geliştiricileri ve araştırmacılar",
    desc: "Sorumlu AI geliştirme pratikleri ve etik framework'leri.",
  },
  {
    title: "AI for Good Initiative",
    audience: "STK ve sosyal girişimler",
    desc: "Toplumsal fayda için AI çözümleri ve mentorluk programı.",
  },
];

export const galleryItems = Array.from({ length: 8 }).map((_, idx) => ({
  title: `AI Moment ${idx + 1}`,
  type: idx % 3 === 0 ? "AI Demo" : "AI Workshop",
}));

export const faqs = [
  {
    question: "AI etkinliklerine kimler katılabilir?",
    answer:
      "Öğrenciler, araştırmacılar, geliştiriciler, AI meraklıları ve teknoloji profesyonelleri katılabilir. Temel programlama bilgisi bazı atölyeler için gereklidir.",
  },
  {
    question: "Online AI katılımı var mı?",
    answer:
      "Evet, tüm ana sahne konuşmaları ve birçok atölye KodlamaHaftası AI platformu üzerinden canlı yayınlanır. Online katılımcılar interaktif Q&A session'lara katılabilirler.",
  },
  {
    question: "AI Hackathon'a nasıl başvurabilirim?",
    answer: "AI Hackathon başvuruları etkinlik öncesi açılır. Takım halinde veya bireysel başvuru yapabilirsiniz. AI ethics prensiplerine uygun projeler önceliklidir.",
  },
  {
    question: "AI sertifika programı var mı?",
    answer: "Evet, tüm AI atölyelerine katılanlara dijital AI katılım sertifikası verilir. AI ethics ve responsible AI modüllerini tamamlayanlara özel sertifika sunulur.",
  },
];

