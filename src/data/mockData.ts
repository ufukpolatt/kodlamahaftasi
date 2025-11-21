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
    title: "Machine Learning Fundamentals",
    level: "Başlangıç",
    capacity: "40 kişi",
    desc: "Yapay zeka temelleri ve algoritma mantığı ile başlangıç seviyesi ML uygulamaları.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
    fullDesc: "Bu atölyede, makine öğrenmesinin temel kavramlarını öğreneceksiniz. Supervised, unsupervised ve reinforcement learning konularına giriş yapacak, basit ML modelleri oluşturarak yapay zekanın nasıl çalıştığını deneyimleyeceksiniz. Python ve scikit-learn kullanarak gerçek dünya verileriyle çalışacaksınız.",
    instructor: "Dr. Ayşe Yılmaz",
    duration: "4 saat",
    prerequisites: "Temel Python bilgisi",
  },
  {
    title: "AI Ethics and Responsible AI",
    level: "Orta",
    capacity: "35 kişi",
    desc: "Yapay zeka etiği, bias ve sorumlu AI geliştirme prensipleri.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=400&fit=crop",
    fullDesc: "Yapay zeka etiğinin temel prensiplerini öğrenerek, bias, fairness, transparency ve accountability konularında derinlemesine bilgi sahibi olacaksınız. Gerçek AI sistemlerindeki etik sorunları analiz edecek, sorumlu AI geliştirme framework'lerini öğreneceksiniz.",
    instructor: "Prof. Dr. Mehmet Kaya",
    duration: "3 saat",
    prerequisites: "AI temel bilgisi",
  },
  {
    title: "Deep Learning with Neural Networks",
    level: "İleri",
    capacity: "30 kişi",
    desc: "Derin öğrenme, CNN, RNN ve transformer mimarileri ile ileri seviye uygulamalar.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    fullDesc: "Derin öğrenmenin temellerinden başlayarak, convolutional neural networks (CNN), recurrent neural networks (RNN) ve transformer mimarilerini öğreneceksiniz. TensorFlow ve PyTorch kullanarak computer vision ve NLP projeleri geliştireceksiniz.",
    instructor: "Dr. Zeynep Arslan",
    duration: "6 saat",
    prerequisites: "Machine Learning temel bilgisi, Python",
  },
  {
    title: "Generative AI and LLMs",
    level: "İleri",
    capacity: "25 kişi",
    desc: "Large Language Models, prompt engineering ve generative AI uygulamaları.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    fullDesc: "Large Language Models'in nasıl çalıştığını öğrenecek, prompt engineering tekniklerini mastering yapacaksınız. OpenAI API, Hugging Face ve custom LLM training konularında pratik deneyim kazanacaksınız. Kendi generative AI uygulamanızı geliştireceksiniz.",
    instructor: "Can Demir",
    duration: "5 saat",
    prerequisites: "Python ve ML temel bilgisi",
  },
  {
    title: "Computer Vision and Image Processing",
    level: "Orta",
    capacity: "32 kişi",
    desc: "Görüntü işleme, object detection ve computer vision uygulamaları.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&h=400&fit=crop",
    fullDesc: "Computer vision temellerini öğrenerek, image processing, object detection, face recognition ve image segmentation konularında uzmanlaşacaksınız. OpenCV, YOLO ve modern CV teknikleri kullanarak gerçek dünya projeleri geliştireceksiniz.",
    instructor: "Elif Çelik",
    duration: "4.5 saat",
    prerequisites: "Python ve temel matematik bilgisi",
  },
  {
    title: "Natural Language Processing",
    level: "Orta",
    capacity: "28 kişi",
    desc: "Text processing, sentiment analysis ve NLP ile uygulama geliştirme.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    fullDesc: "Natural Language Processing'in temellerini öğrenerek, text preprocessing, tokenization, sentiment analysis, named entity recognition ve text classification konularında uzmanlaşacaksınız. NLTK, spaCy ve transformer tabanlı modeller kullanarak NLP projeleri geliştireceksiniz.",
    instructor: "Burak Şahin",
    duration: "4 saat",
    prerequisites: "Python ve temel ML bilgisi",
  },
  {
    title: "AI for Social Good",
    level: "Başlangıç",
    capacity: "50 kişi",
    desc: "Toplumsal fayda için AI uygulamaları ve sosyal etki projeleri.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop",
    fullDesc: "Yapay zekanın toplumsal sorunlara çözüm üretme potansiyelini keşfedeceksiniz. Healthcare, education, environment ve accessibility alanlarındaki AI uygulamalarını inceleyecek, kendi sosyal etik AI projenizi geliştirmeye başlayacaksınız.",
    instructor: "Dr. Deniz Aydın",
    duration: "3 saat",
    prerequisites: "Yok",
  },
  {
    title: "AI Startup and Product Development",
    level: "İleri",
    capacity: "20 kişi",
    desc: "AI ürün geliştirme, MVP oluşturma ve AI startup stratejileri.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    fullDesc: "AI tabanlı ürün geliştirme sürecini öğrenerek, problem identification, data collection, model development ve deployment konularında uzmanlaşacaksınız. AI startup'ları için business model creation, funding ve scaling stratejilerini öğreneceksiniz.",
    instructor: "Emre Doğan",
    duration: "5 saat",
    prerequisites: "AI/ML temel bilgisi",
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
  },
  {
    title: "Generative AI Innovation",
    desc: "Content creation, design ve creative AI uygulamaları. Yaratıcı çözümler.",
    fullDesc: "Generative AI teknolojilerini kullanarak yaratıcı ve yenilikçi uygulamalar geliştirmeniz bekleniyor. Sanat, müzik, metin yazarlığı, tasarım ve diğer yaratıcı alanlarda sınırları zorlayın. Projelerde orijinallik, teknik yeterlilik ve ticari potansiyel değerlendirilecektir.",
    requirements: "Generative AI temel bilgisi, programlama, yaratıcılık",
    duration: "2 hafta",
    judging: "AI araştırmacıları, sanatçılar ve endüstri uzmanları tarafından değerlendirme",
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
  },
  {
    name: "Zeynep Öztürk",
    role: "AI Policy Advisor, EU Commission",
    topic: "AI regulation ve governance",
    bio: "Zeynep Öztürk, AB Komisyonu'nda AI politikaları danışmanlığı yapmaktadır. AI Act ve Avrupa AI stratejisinin gelişiminde aktif rol oynamıştır.",
    experience: "12+ yıl AI policy ve regulation",
    achievements: "EU AI Act taslağı yazarı, AI governance expert",
    session: "AI Regulation in Europe",
    sessionTime: "11 Aralık, 10:00-11:00",
    sessionLocation: "Policy Forum"
  },
  {
    name: "Can Yılmaz",
    role: "ML Engineer, Netflix",
    topic: "Recommendation systems ve personalization",
    bio: "Can Yılmaz, Netflix'te makine öğrenmesi mühendisi olarak çalışmaktadır. İçerik öneri sistemleri ve personalization algoritmaları geliştirmektedir.",
    experience: "9+ yıl recommendation systems",
    achievements: "Netflix recommendation algorithm geliştiricisi, 5+ ML patenti",
    session: "Personalization at Scale",
    sessionTime: "12 Aralık, 14:00-15:00",
    sessionLocation: "Business Lab"
  },
  {
    name: "Dr. Deniz Aydın",
    role: "Healthcare AI Specialist, IBM Watson",
    topic: "Medical AI ve clinical applications",
    bio: "Dr. Deniz Aydın, IBM Watson Health'te tıbbi AI uygulamaları geliştirmektedir. Healthcare AI alanında öncü çalışmalara imza atmıştır.",
    experience: "14+ yıl medical AI araştırması",
    achievements: "FDA approved AI systems, Healthcare innovation award",
    session: "AI in Healthcare",
    sessionTime: "11 Aralık, 09:00-10:00",
    sessionLocation: "Healthcare Lab"
  },
  {
    name: "Burak Şahin",
    role: "Robotics AI Lead, Boston Dynamics",
    topic: "Robotics ve autonomous systems",
    bio: "Burak Şahin, Boston Dynamics'te robotik AI sistemleri geliştirmektedir. Otonom robotlar ve navigation sistemleri alanında uzmandır.",
    experience: "11+ yıl robotics ve AI",
    achievements: "Spot robot AI systems lead, Robotics innovation award",
    session: "Autonomous Robotics",
    sessionTime: "11 Aralık, 15:30-16:30",
    sessionLocation: "Robotics Lab"
  },
  {
    name: "Gizem Çelik",
    role: "AI Safety Researcher, Anthropic",
    topic: "AI safety ve alignment",
    bio: "Gizem Çelik, Anthropic'te AI güvenliği araştırmacısı olarak çalışmaktadır. AI alignment ve interpretability alanında öncü çalışmalara imza atmıştır.",
    experience: "6+ yıl AI safety araştırması",
    achievements: "AI safety fellowship, Interpretability tools geliştiricisi",
    session: "AI Safety Research",
    sessionTime: "12 Aralık, 10:30-11:30",
    sessionLocation: "Safety Lab"
  },
  {
    name: "Emre Doğan",
    role: "AI Venture Partner, Sequoia Capital",
    topic: "AI investment ve startup scaling",
    bio: "Emre Doğan, Sequoia Capital'de AI odaklı yatırımlardan sorumludur. AI startup'larının büyümesi ve scaling konusunda uzmandır.",
    experience: "13+ yıl VC ve AI investment",
    achievements: "50+ AI startup investment, Unicorn exits",
    session: "AI Investment Landscape",
    sessionTime: "12 Aralık, 10:30-11:30",
    sessionLocation: "Investment Forum"
  },
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
      "Evet, tüm ana sahne konuşmaları ve birçok atölye CodeWeek AI platformu üzerinden canlı yayınlanır. Online katılımcılar interaktif Q&A session'lara katılabilirler.",
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
