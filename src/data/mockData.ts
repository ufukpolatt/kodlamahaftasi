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
    events: [
      { title: "Bir Yapay Zekâya Güvenmek Mümkün mü?", time: "12:50-13:30", track: "Çamlıca Kampüsü", speaker: "Prof. Dr. Diler Öner" },
      { title: "Yapay Zekâ Bizi Kandırabilir mi?", time: "14:30-15:10", track: "Kemerbuzgaz Kampüsü", speaker: "Batu İnceçay" },
    ],
  },
  {
    day: "Salı",
    date: "9 Aralık",
    events: [
      { title: "Deepfake ve Dijital Manipülasyon", time: "09:05-09:45", track: "Çamlıca Kampüsü", speaker: "Taha Aydoğmuş" },
      { title: "Siber Güvenlik Neden Yeni Neslin En Kritik Yeteneği?", time: "12:50-13:30", track: "Çamlıca Kampüsü", speaker: "Onur Doğan" },
    ],
  },
  {
    day: "Çarşamba",
    date: "10 Aralık",
    events: [
      { title: "TÜ AUV (Autonomous Underwater Vehicle / Otonom Su Altı Aracı) TAKIMI", time: "10:00", track: "Burçak Kampüsü", speaker: "İTÜ ATA TAKIMI" },
      { title: "TÜ AUV (Autonomous Underwater Vehicle / Otonom Su Altı Aracı) TAKIMI", time: "10:00", track: "Çamlıca Kampüsü", speaker: "İTÜ ATA TAKIMI" },
      { title: "TÜ AUV (Autonomous Underwater Vehicle / Otonom Su Altı Aracı) TAKIMI", time: "10:00", track: "Kemerburgaz Kampüsü", speaker: "İTÜ ATA TAKIMI" },
    ],
  },
  {
    day: "Perşembe",
    date: "11 Aralık",
    events: [
      { title: "Robotlar Hata Yaparsa Kim Suçlu?", time: "10:45-11:25", track: "Burçak Kampüsü", speaker: "Ebru Karayel Çınar" },
      { title: "Yapay Zekâya Güvenebilir miyiz?—Etik Sınırlar ve Sorular", time: "10:45-11:25", track: "Çamlıca Kampüsü", speaker: "Başak Ozan Özparlak" },
      { title: "Post Truth Belgeseli Üzerinden: Gerçekliğin Çöküşü Mü, Dönüşümü Mü?", time: "11:30-12:05", track: "Çamlıca Kampüsü", speaker: "Selin Güler" },
    ],
  },
  {
    day: "Cuma",
    date: "12 Aralık",
    events: [
      { title: "TOK", time: "09:00", track: "Burçak Kampüsü", speaker: "" },
      { title: "TOK", time: "10:30", track: "Çamlıca Kampüsü", speaker: "" },
      { title: "TOK", time: "14:00", track: "Kemerburgaz Kampüsü", speaker: "" },
    ],
  },
];

export const workshops = [
  {
    title: "Wizefloor ile Kodlama",
    level: "Anaokulu",
    capacity: "20 öğrenci",
    desc: "WizeFloor zemin etkileşim aracıyla eğlenceli ve hareketli bir şekilde kodlama mantığını deneyimleyin.",
    image: "/wizefloor.jpg",
    fullDesc: "Öğrencilere önce WizeFloor’un kullanım şekli tanıtılır; ardından çocuklar zemin üzerindeki ok işaretlerine basarak temel yönleri dener. Sonrasında hedefe ulaşmayı amaçlayan “kodlama yolu” oyunu oynanır ve öğrenciler adımları doğru sırayla belirleyerek ilerler. Devamında ikili gruplar oluşturularak bir öğrencinin komut verdiği, diğerinin uyguladığı iş birliği etkinliği gerçekleştirilir ve etkinlik öğrencilerle yapılan kısa bir değerlendirme ile tamamlanır.",
    instructor: "Anaokulu Öğretmenleri",
    duration: "1 saat",
    prerequisites: "Yok",
  },
  {
    title: "3D Kalem ile Tasarım",
    level: "Anaokulu",
    capacity: "15 öğrenci",
    desc: "3D kalem kullanarak temel geometrik şekiller, çiçek, yıldız ve gözlük figürleri tasarlayın.",
    image: "/3d_kalem.png",
    fullDesc: "Öğrenciler, 3D kalemle temel geometrik şekiller, çiçek, yıldız ve gözlük figürleri tasarlayacaktır. ",
    instructor: "Anaokulu Öğretmenleri",
    duration: "45 dakika",
    prerequisites: "Yok",
  },
  {
    title: "Makey Makey ile Oyun Konsolu",
    level: "Anaokulu",
    capacity: "16 öğrenci",
    desc: "Meyveler ve diğer günlük nesneler kullanarak piyano çalın ve basit elektrik devreleri öğrenin.",
    image: "/makey_makey.jpg",
    fullDesc: "Öğrenciler, Makey Makey aracılığıyla basit elektrik devrelerinin nasıl çalıştığını deneyimleyecek, dokunmatik uyarılarla müzik üretmenin mantığını keşfedecek ve problem çözme, iş birliği ile yaratıcılık becerilerini geliştireceklerdir. ",
    instructor: "Anaokulu Öğretmenleri",
    duration: "40 dakika",
    prerequisites: "Yok",
  },
  {
    title: "Dash Robot ile Bowling",
    level: "Anaokulu",
    capacity: "18 öğrenci",
    desc: "Dash robot ile temel kodlama becerilerini öğrenin ve robotik teknolojisini oyun yoluyla keşfedin.",
    image: "/dash_robot.jpg",
    fullDesc: "Dash robot ile öğrenciler temel kodlama ve algoritma becerilerini keşfedecek, problem çözme ve mantık yürütme yeteneklerini geliştirecek, ayrıca robotik ve teknoloji kavramlarını oyun yoluyla eğlenceli bir şekilde deneyimleyecekler.",
    instructor: "Anaokulu Öğretmenleri",
    duration: "50 dakika",
    prerequisites: "Yok",
  },
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
    image: "/",
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
    title: "STEM Çalışması: Led Teknolojisi ile Işıklı Code Week Kartı",
    level: "İlkokul",
    capacity: "24 öğrenci",
    desc: "Basit bir elektrik devresi kurarak Led ışıklar ve para pil ile Code Week yazısını aydınlatan bir tasarım hazırlayın.",
    image: "/4_sinif_stem.png",
    fullDesc: "Code Week etkinlikleri kapsamında öğrencilerimiz, basit bir elektrik devresi kurarak Led ışıklar ve para pil ile Code Week yazısını aydınlatan bir tasarım hazırladılar. Bu etkinlikte; Ledlerin nasıl çalıştığını, pilin artı ve eksi kutuplarını, devrenin nasıl tamamlandığını uygulamalı olarak öğrendiler. Hem mühendislik hem de yaratıcılık becerilerini bir araya getirerek kendi ışıklı kartlarını tasarladılar. Code Week'i kutlarken, öğrencilerimiz kendi ışıklı kartlarını tasarladı! Led ışıklar ve para pillerle yazılarını parlatan öğrencilerimiz, hem elektrik devrelerini öğrendi hem de yaratıcılıklarını ortaya koydular.",
    instructor: "4. Sınıf Öğretmenleri",
    duration: "1.5 saat",
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
  {
    title: "LED'li Park Sensörü",
    level: "Ortaokul",
    capacity: "20 öğrenci (2 kişilik gruplar)",
    desc: "Arduino kullanarak çevreyi algılayan akıllı uyarı sistemi tasarlayın ve otomatik LED kontrolü yapın.",
    image: "/",
    fullDesc: "Bu etkinlikte öğrenciler, Arduino kullanarak çevresindeki nesneleri algılayan basit bir akıllı uyarı sistemi tasarlayacaktır. Mesafe sensörü ortamı sürekli tarayacak, öğrenciler de sensörden gelen veriye göre LED'in davranışını kontrol eden bir kod yazacaklardır. El veya bir cisim sensöre yaklaştığında LED'in otomatik olarak yanması, uzaklaştığında sönmesi sağlanarak 'algılayıcı – işlemci – çıktı' mantığı uygulanır. Bu çalışma, öğrencilere günlük hayatta gördükleri otomatik kapılar, park sensörleri ve temassız sistemlerin temel nasıl çalıştığını deneyimleme fırsatı sunar. Etkinlik boyunca öğrenciler hem temel devre bağlantılarını kuracak hem de koşullu ifadeler kullanarak kodlama becerilerini geliştirecektir.",
    instructor: "8. Sınıf Öğretmenleri",
    duration: "2 saat",
    prerequisites: "Temel bilgisayar kullanımı",
  },
  {
    title: "Yapay Zekânın İzinde: El Becerisiyle Etik Farkındalık",
    level: "Lise",
    capacity: "20 öğrenci",
    desc: "Ahşap tasarım setlerini kullanarak yapay zekâ ve etik temelli yaratıcı ürünler tasarlayın.",
    image: "/el_becerisi.png",
    fullDesc: "Kodlama Haftası kapsamında lise hazırlık öğrencilerimiz, ahşap tasarım setlerini kullanarak yapay zekâ ve etik temalı yaratıcı ürünler tasarlayacaktır. Rozet, terazi ve benzeri sembolik objeler arasından kendi tercihlerine göre seçim yapacak olan öğrenciler, el becerisi gerektiren üretim süreciyle hem somut bir tasarım ortaya koyacak hem de yapay zekânın birey ve toplum üzerindeki etkilerini sorgulama fırsatı bulacaktır. Bu uygulama sayesinde öğrenciler, üretirken düşünmeyi; düşünürken sorgulamayı deneyimleyecek, teknolojinin salt bir araç değil aynı zamanda etik sorumluluk doğuran bir güç olduğunu fark edecektir.",
    instructor: "Lise Hazırlık Öğretmenleri",
    duration: "2 saat",
    prerequisites: "Yok",
  },
  {
    title: "Gerçekliğin Ötesinde: VR ile Yapay Zekâ ve Etik Deneyimi",
    level: "Lise",
    capacity: "16 öğrenci",
    desc: "VR gözlükler aracılığıyla yapay zekâ ve etik temelli dijital senaryoları deneyimleyin.",
    image: "/vr.png",
    fullDesc: "Kodlama Haftası kapsamında 9. sınıf öğrencilerimiz, VR gözlükler aracılığıyla yapay zekâ ve etik temalı dijital senaryoları deneyimleyecek, teknolojinin sunduğu sanal dünyalarda karar verme ve sorgulama süreçlerini birebir yaşayacaktır. Bu etkileşimli deneyim sayesinde öğrenciler, yapay zekânın günlük yaşamda nasıl yönlendirdiğini, hangi sınırlar içinde güvenli ve etik kullanılması gerektiğini somut örnekler üzerinden keşfedecektir. VR tabanlı bu çalışma; öğrencilerin yalnızca izleyen değil, sürecin aktif katılımcısı olduğu bir öğrenme ortamı sunarak eleştirel düşünme, dijital farkındalık ve etik bilinç kazanmalarını hedeflemektedir.",
    instructor: "9. Sınıf Öğretmenleri",
    duration: "1.5 saat",
    prerequisites: "Yok",
  },
  {
    title: "Yapay Zeka Araçlarını Keşfetme ve Deniz Altı Hikayesinden İlham Alma",
    level: "Lise",
    capacity: "20 öğrenci",
    desc: "Deniz altı temalı hikâyeden yola çıkarak yapay zekâ araçlarıyla dijital içerik üretin.",
    image: "/",
    fullDesc: "Bu etkinlikte öğrenciler, deniz altı temalı kısa bir hikâyeden yola çıkarak yapay zekâ araçlarıyla kendi dijital içeriklerini üreteceklerdir. DALL·E veya Ideogram kullanarak hikâyedeki sahne ve karakterler için görseller oluşturacak; Soundraw, Mubert veya AIVA ile ortama uygun ses ve müzik tasarlayacaklardır. Dileyen öğrenciler bu görsel ve sesleri birleştirerek kısa bir video da hazırlayabilecektir. Bu çalışma, öğrencilerin yapay zekâ teknolojilerini tanımasını, yaratıcı düşünme becerilerini geliştirmesini ve kendi hikâyelerini dijital bir ürün hâline getirmesini amaçlamaktadır.",
    instructor: "Lise Öğretmenleri",
    duration: "2 saat",
    prerequisites: "Temel bilgisayar kullanımı",
  }
  
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
    image: "/canva_ile_sihirli.png",
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
    name: "Prof. Dr. Diler Öner",
    role: "Boğaziçi Üniversitesi Elektronik ve Yapay Zeka Laboratuvarı",
    topic: "Bir Yapay Zekâya Güvenmek Mümkün mü?",
    bio: "Prof. Dr. Diler Öner, Boğaziçi Üniversitesi'nde Elektronik ve Yapay Zeka Laboratuvarı'nı yönetmektedir. Yapay zeka güvenilirliği ve etiği alanında öncü çalışmalara imza atmıştır.",
    image: "/diler_oner.jpeg",
    experience: "20+ yıl akademik araştırma",
    achievements: "Yapay Zeka Laboratuvarı kurucusu, 50+ akademik yayın",
    session: "Bir Yapay Zekâya Güvenmek Mümkün mü?",
    sessionTime: "8 Aralık, 12:50-13:30",
    sessionLocation: "Çamlıca Kampüsü"
  },
  {
    name: "Batu İnceçay",
    role: "Bilim Kahramanları Derneği",
    topic: "Yapay Zekâ Bizi Kandırabilir mi?",
    bio: "Batu İnceçay, Bilim Kahramanları Derneği'nde yapay zeka ve teknoloji etiği üzerine çalışmaktadır. Yapay zeka güvenliği ve manipülasyon konularında uzmandır.",
    image: "/batu_incecay.jpeg",
    experience: "10+ yıl teknoloji araştırması",
    achievements: "Bilim Kahramanları Derneği kurucu üyesi",
    session: "Yapay Zekâ Bizi Kandırabilir mi?",
    sessionTime: "8 Aralık, 14:30-15:10",
    sessionLocation: "Kemerbuzgaz Kampüsü"
  },
  {
    name: "Onur Doğan",
    role: "Cisco Networking Academy",
    topic: "Siber Güvenlik Neden Yeni Neslin En Kritik Yeteneği?",
    bio: "Onur Doğan, Cisco Networking Academy'de siber güvenlik eğitimi vermekte ve yeni nesil dijital yetkinlikler üzerine araştırmalar yapmaktadır.",
    image: "/onur_dogan.jpeg",
    experience: "15+ yıl siber güvenlik uzmanlığı",
    achievements: "Cisco Sertifikalı Eğitmen, Siber Güvenlik Danışmanı",
    session: "Siber Güvenlik Neden Yeni Neslin En Kritik Yeteneği?",
    sessionTime: "9 Aralık, 12:50-13:30",
    sessionLocation: "Çamlıca Kampüsü"
  },
  {
    name: "Taha Aydoğmuş",
    role: "Habitat Derneği",
    topic: "Deepfake ve Dijital Manipülasyon",
    bio: "Taha Aydoğmuş, Habitat Derneği'nde dijital haklar ve medya okuryazarlığı çalışmaları yürütmektedir. Deepfake teknolojileri ve dijital manipülasyon konularında uzmandır.",
    image: "/taha_aydogmus.jpeg",
    experience: "8+ yıl dijital haklar aktivizmi",
    achievements: "Dijital Medya Okuryazarlığı Programı Koordinatörü",
    session: "Deepfake ve Dijital Manipülasyon",
    sessionTime: "9 Aralık, 09:05-09:45",
    sessionLocation: "Çamlıca Kampüsü"
  },
  {
    name: "Ebru Karayel Çınar",
    role: "Robotik ve AI Etiği Uzmanı",
    topic: "Robotlar Hata Yaparsa Kim Suçlu?",
    bio: "Ebru Karayel Çınar, robotik etiği ve yapay zeka hukuku alanında çalışmaktadır. Otonom sistemlerin yasal sorumluluğu konusunda uzmandır.",
    image: "/ebru_karayel.jpeg",
    experience: "12+ yıl robotik ve hukuk araştırması",
    achievements: "AI Hukuku Araştırma Grubu Kurucusu",
    session: "Robotlar Hata Yaparsa Kim Suçlu?",
    sessionTime: "11 Aralık, 10:45-11:25",
    sessionLocation: "Burçak Kampüsü"
  },
  {
    name: "Başak Ozan Özparlak",
    role: "Etik Derneği / Özyeğin Üniversitesi",
    topic: "Yapay Zekâya Güvenebilir miyiz?—Etik Sınırlar ve Sorular",
    bio: "Başak Ozan Özparlak, Etik Derneği'nde ve Özyeğin Üniversitesi'nde yapay zeka etiği üzerine çalışmalar yürütmektedir. Etik sınırlar ve ahlaki sorumluluk konularında uzmandır.",
    image: "/basak_ozan.jpeg",
    experience: "10+ yıl etik araştırmacısı",
    achievements: "Etik Derneği Yönetim Kurulu Üyesi",
    session: "Yapay Zekâya Güvenebilir miyiz?—Etik Sınırlar ve Sorular",
    sessionTime: "11 Aralık, 10:45-11:25",
    sessionLocation: "Çamlıca Kampüsü"
  },
  {
    name: "Selin Güler",
    role: "Sinema Yazarlar Derneği - Yapay Zeka Etiği",
    topic: "Post Truth Belgeseli Üzerinden: Gerçekliğin Çöküşü Mü, Dönüşümü Mü?",
    bio: "Selin Güler, Sinema Yazarlar Derneği'nde yapay zeka ve medya etiği üzerine çalışmalar yapmaktadır. Post-truth çağında gerçeklik algısı ve dijital manipülasyon konularında uzmandır.",
    image: "/selin_guler.jpeg",
    experience: "8+ yıl sinema ve medya araştırmacısı",
    achievements: "Sinema Yazarlar Derneği Üyesi",
    session: "Post Truth Belgeseli Üzerinden: Gerçekliğin Çöküşü Mü, Dönüşümü Mü?",
    sessionTime: "11 Aralık, 11:30-12:05",
    sessionLocation: "Çamlıca Kampüsü"
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

