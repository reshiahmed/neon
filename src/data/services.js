// Service catalogue — single source of truth for the /hizmetler hub + detail pages.
// Localized text fields are { tr, en }; use pick(field, lang) at render.
import imgNeon from '../assets/portfolio/proj-5.jpg'
import imgNeon2 from '../assets/portfolio/neon-kutuharf-14.jpg'
import imgNeon3 from '../assets/portfolio/neon-kutuharf-13.jpg'
import imgLedbox from '../assets/portfolio/eyupsultan-tabela.jpg'
import imgLedbox2 from '../assets/portfolio/neon-kutuharf-10.jpg'
import imgKutuharf2 from '../assets/portfolio/neon-kutuharf-11.jpg'
import imgKutuharf3 from '../assets/portfolio/circir-tabela.jpg'
import imgIsikli from '../assets/portfolio/alibeykoy-tabela.jpg'
import imgIsikli2 from '../assets/portfolio/neon-kutuharf-12.jpg'
import imgIsikli3 from '../assets/portfolio/neon-kutuharf-15.jpg'
import imgTotem from '../assets/portfolio/yesilpinar-tabela.jpg'
import imgTotem2 from '../assets/portfolio/proj-6.jpg'
import phCam from '../assets/placeholders/cam-giydirme.svg'
import phArac from '../assets/placeholders/arac-giydirme.svg'
import phBaski from '../assets/placeholders/dijital-baski.svg'

export const services = [
  {
    slug: 'kutu-harf-tabela',
    icon: 'Type',
    image: imgKutuharf2,
    name: { tr: 'Kutu Harf', en: 'Box Letters' },
    title: { tr: 'Kutu Harf Tabela', en: 'Box Letter Signs' },
    short: { tr: 'Pleksi ve paslanmaz kutu harf ile prestijli cephe.', en: 'Prestigious storefronts with acrylic & stainless box letters.' },
    eyebrow: { tr: 'En çok tercih edilen', en: 'Most requested' },
    h1: { tr: 'Kutu Harf Tabela — İstanbul', en: 'Box Letter Signs — Istanbul' },
    metaTitle: { tr: 'Kutu Harf Tabela İstanbul | Pleksi & Paslanmaz Harf | Arslan Tanıtım', en: 'Box Letter Signs Istanbul | Acrylic & Stainless | Arslan Tanıtım' },
    metaDescription: {
      tr: "İstanbul kutu harf tabela üretimi: pleksi ışıklı harf, paslanmaz harf, ters tava halo efektli harf. Keşif, 3D tasarım ve montaj dahil. WhatsApp'tan ücretsiz teklif alın.",
      en: 'Box letter sign production in Istanbul: acrylic illuminated letters, stainless letters, halo-lit reverse-pan letters. Survey, 3D design and install included. Free quote on WhatsApp.',
    },
    intro: {
      tr: 'Kutu harf, markanızı cephede üç boyutlu ve ışıklı olarak öne çıkaran en prestijli tabela türüdür. Pleksi, paslanmaz ve kompozit malzemelerle, gündüz şık görünen gece okunaklı bir kurumsal kimlik kazandırıyoruz.',
      en: 'Box letters are the most prestigious sign type — your brand rendered three-dimensionally and illuminated on the façade. With acrylic, stainless and composite materials we give you a corporate identity that looks sharp by day and reads clearly by night.',
    },
    forWho: {
      tr: ['Mağaza ve showroom cepheleri', 'Restoran, kafe ve markalar', 'AVM içi dükkânlar', 'Klinik, ofis ve kurumsal binalar'],
      en: ['Store & showroom façades', 'Restaurants, cafés & brands', 'Shops inside malls', 'Clinics, offices & corporate buildings'],
    },
    variants: [
      { name: { tr: 'Pleksi Kutu Harf', en: 'Acrylic Box Letters' }, desc: { tr: 'Mükemmel ışık geçirgenliği ve sınırsız renk seçeneğiyle canlı, modern aydınlatma.', en: 'Vivid, modern illumination with excellent light transmission and unlimited color options.' } },
      { name: { tr: 'Paslanmaz Harf', en: 'Stainless Letters' }, desc: { tr: 'Uzun ömürlü ve estetik paslanmaz çelik harflerle markanıza prestij katın.', en: 'Add prestige with durable, elegant stainless-steel letters.' } },
      { name: { tr: 'Ters Tava (Halo)', en: 'Reverse-Pan (Halo)' }, desc: { tr: 'Duvara yansıyan arka aydınlatmayla premium ve şık bir hale efekti.', en: 'A premium halo effect from back-lighting that glows onto the wall.' } },
      { name: { tr: 'Kompozit Oyma / Dekupe', en: 'Composite Cut / Routed' }, desc: { tr: 'Dış cepheyle kusursuz bütünleşen, pürüzsüz yüzeyli modern harfler.', en: 'Modern, smooth-faced letters that integrate seamlessly with the façade.' } },
    ],
    benefits: [
      { t: { tr: 'Üç boyutlu prestij', en: 'Three-dimensional prestige' }, d: { tr: 'Düz tabelaya göre çok daha kurumsal ve dikkat çekici bir cephe.', en: 'A far more corporate, eye-catching façade than a flat sign.' } },
      { t: { tr: 'Gece–gündüz okunaklılık', en: 'Day & night legibility' }, d: { tr: 'LED aydınlatmayla 7/24 marka görünürlüğü.', en: '24/7 brand visibility with LED illumination.' } },
      { t: { tr: '%100 yerli üretim', en: '100% in-house' }, d: { tr: 'Kendi atölyemizde ürettiğimiz için kalite ve hız bizde.', en: 'We produce in our own workshop — quality and speed are on us.' } },
    ],
    gallery: [imgKutuharf3, imgLedbox, imgIsikli3],
    related: ['led-box-tabela', 'neon-led-tabela', 'isikli-tabela'],
  },
  {
    slug: 'neon-led-tabela',
    icon: 'Zap',
    image: imgNeon,
    name: { tr: 'Neon Led', en: 'Neon LED' },
    title: { tr: 'Neon Led Tabela', en: 'Neon LED Signs' },
    short: { tr: 'Esnek neon led ile dikkat çeken, dekoratif aydınlatma.', en: 'Eye-catching, decorative lighting with flexible neon LED.' },
    eyebrow: { tr: 'Modern & dekoratif', en: 'Modern & decorative' },
    h1: { tr: 'Neon Led Tabela Çeşitleri — İstanbul', en: 'Neon LED Sign Types — Istanbul' },
    metaTitle: { tr: 'Neon Led Tabela İstanbul | Logo, İç & Dış Mekan Neon | Arslan Tanıtım', en: 'Neon LED Signs Istanbul | Logo, Indoor & Outdoor | Arslan Tanıtım' },
    metaDescription: {
      tr: "İstanbul neon led tabela: logo, iç mekân, dış mekân, yönlendirme ve dekoratif neon çözümleri. Düşük enerji, yüksek görünürlük. WhatsApp'tan ücretsiz teklif alın.",
      en: 'Neon LED signs in Istanbul: logo, indoor, outdoor, wayfinding and decorative neon. Low energy, high visibility. Free quote on WhatsApp.',
    },
    intro: {
      tr: 'Esnek LED neon ile cam camekânlarınıza, duvarlarınıza ve cephenize markanızı sıcak, dikkat çekici bir ışıkla yansıtın. Düşük enerji tüketimi ve uzun ömürle hem dekoratif hem kurumsal kullanım için idealdir.',
      en: 'Project your brand onto windows, walls and façades with a warm, eye-catching glow using flexible LED neon. Low energy use and long life make it ideal for both decorative and corporate use.',
    },
    forWho: {
      tr: ['Kafe, restoran ve barlar', 'Mağaza vitrinleri ve camekânlar', 'Etkinlik ve fuar alanları', 'Ev, ofis ve galeri dekorasyonu'],
      en: ['Cafés, restaurants & bars', 'Store windows & display cases', 'Events & exhibition spaces', 'Home, office & gallery decor'],
    },
    variants: [
      { name: { tr: 'Dış Mekân Neon', en: 'Outdoor Neon' }, desc: { tr: 'UV, toz ve hava koşullarına dayanıklı, gündüz–gece yüksek görünürlük.', en: 'Resistant to UV, dust and weather, with high day-and-night visibility.' } },
      { name: { tr: 'İç Mekân Neon', en: 'Indoor Neon' }, desc: { tr: 'Şık tasarım, düşük enerji tüketimi ve kolay montaj.', en: 'Elegant design, low energy use and easy installation.' } },
      { name: { tr: 'Logo Neon', en: 'Logo Neon' }, desc: { tr: 'Markanızın logosunu renk ve fontuyla birebir aydınlatma.', en: 'Light up your logo exactly in its colors and font.' } },
      { name: { tr: 'Dekoratif & Yönlendirme', en: 'Decorative & Wayfinding' }, desc: { tr: 'Slogan, ok ve şekillerle vitrin ve mekân dekorasyonu.', en: 'Slogans, arrows and shapes for window and interior decor.' } },
    ],
    benefits: [
      { t: { tr: 'Düşük enerji', en: 'Low energy' }, d: { tr: 'Klasik neona göre çok daha az elektrik tüketir.', en: 'Uses far less electricity than classic neon.' } },
      { t: { tr: 'Sınırsız tasarım', en: 'Unlimited design' }, d: { tr: 'Her renk, yazı ve şekil esnek neon ile mümkün.', en: 'Any color, text and shape is possible with flexible neon.' } },
      { t: { tr: 'Uzun ömür', en: 'Long life' }, d: { tr: 'Dayanıklı LED yapısıyla yıllarca bakımsız kullanım.', en: 'Years of maintenance-free use thanks to durable LEDs.' } },
    ],
    gallery: [imgNeon, imgNeon2, imgNeon3],
    related: ['kutu-harf-tabela', 'led-box-tabela', 'isikli-tabela'],
  },
  {
    slug: 'led-box-tabela',
    icon: 'Square',
    image: imgLedbox,
    name: { tr: 'Led Box', en: 'Light Box' },
    title: { tr: 'Led Box Tabela (Işıklı Kutu)', en: 'Light Box Signs' },
    short: { tr: 'İnce, şık, görseli saniyede değişen ışıklı kutu sistemleri.', en: 'Slim, sleek light boxes with swappable graphics.' },
    eyebrow: { tr: 'İnce & modern', en: 'Slim & modern' },
    h1: { tr: 'Led Box Tabela — Işıklı Kutu Sistemleri', en: 'Light Box Signs — Illuminated Box Systems' },
    metaTitle: { tr: 'Led Box Tabela İstanbul | İnce Işıklı Kutu | Arslan Tanıtım', en: 'Light Box Signs Istanbul | Slim Illuminated Boxes | Arslan Tanıtım' },
    metaDescription: {
      tr: "İstanbul led box (ışıklı kutu) tabela: ince kasalı, homojen aydınlatmalı, görseli kolayca değiştirilebilen modern ışıklı kutu sistemleri. WhatsApp'tan teklif alın.",
      en: 'Light box signs in Istanbul: slim-frame, evenly lit, modern illuminated boxes with easily swappable graphics. Get a quote on WhatsApp.',
    },
    intro: {
      tr: 'Görsellerinizi saniyeler içinde değiştirebildiğiniz ince, şık ve modern ışıklı kutu sistemleri. Homojen LED aydınlatmayla cephenizde her zaman net ve parlak bir görünüm.',
      en: 'Slim, sleek, modern light box systems whose graphics you can swap in seconds. Even LED lighting keeps your façade crisp and bright at all times.',
    },
    forWho: {
      tr: ['Zincir ve kurumsal markalar', 'AVM ve cadde mağazaları', 'Restoran menü ve vitrinleri', 'Kampanya odaklı işletmeler'],
      en: ['Chains & corporate brands', 'Mall & high-street stores', 'Restaurant menus & windows', 'Campaign-driven businesses'],
    },
    variants: [
      { name: { tr: 'Tek Yön Led Box', en: 'Single-sided Light Box' }, desc: { tr: 'Cephe montajı için ince kasalı, homojen aydınlatmalı kutu.', en: 'Slim-frame, evenly lit box for façade mounting.' } },
      { name: { tr: 'Çift Yön Led Box', en: 'Double-sided Light Box' }, desc: { tr: 'İki taraftan görünür, cadde ve köşe konumlar için ideal.', en: 'Visible from both sides — ideal for streets and corners.' } },
      { name: { tr: 'Gergi Tuval (SEG)', en: 'Tension Fabric (SEG)' }, desc: { tr: 'Görseli kolayca değiştirilebilen, çerçevesiz şık yüzey.', en: 'Frameless, elegant surface with easily changed graphics.' } },
    ],
    benefits: [
      { t: { tr: 'Değiştirilebilir görsel', en: 'Swappable graphics' }, d: { tr: 'Kampanya görselinizi dakikalar içinde yenileyin.', en: 'Refresh your campaign artwork in minutes.' } },
      { t: { tr: 'İnce ve şık', en: 'Slim & sleek' }, d: { tr: 'Modern, minimal kasa cephenize hafiflik katar.', en: 'A modern, minimal frame lightens your façade.' } },
      { t: { tr: 'Homojen ışık', en: 'Even lighting' }, d: { tr: 'Lekesiz, eşit dağılan parlak aydınlatma.', en: 'Spot-free, evenly distributed bright illumination.' } },
    ],
    gallery: [imgLedbox, imgLedbox2],
    related: ['kutu-harf-tabela', 'neon-led-tabela', 'isikli-tabela'],
  },
  {
    slug: 'isikli-tabela',
    icon: 'PanelTop',
    image: imgIsikli,
    name: { tr: 'Işıklı Tabela', en: 'Illuminated Signs' },
    title: { tr: 'Işıklı & Işıksız Tabela', en: 'Illuminated & Non-lit Signs' },
    short: { tr: 'Vinil, kompozit, sac ve dikey form tabela çözümleri.', en: 'Vinyl, composite, sheet-metal and pylon sign solutions.' },
    eyebrow: { tr: 'Ekonomikten premiuma', en: 'Budget to premium' },
    h1: { tr: 'Işıklı ve Işıksız Tabela Sistemleri', en: 'Illuminated & Non-lit Sign Systems' },
    metaTitle: { tr: 'Işıklı & Işıksız Tabela İstanbul | Vinil, Kompozit, Dikey Form | Arslan Tanıtım', en: 'Illuminated & Non-lit Signs Istanbul | Vinyl, Composite, Pylon | Arslan Tanıtım' },
    metaDescription: {
      tr: "İstanbul ışıklı ve ışıksız tabela: kompozit, vinil, sac ve dikey form (pylon) çözümleri. Ekonomik ve dayanıklı. WhatsApp'tan ücretsiz teklif alın.",
      en: 'Illuminated and non-lit signs in Istanbul: composite, vinyl, sheet-metal and pylon solutions. Affordable and durable. Free quote on WhatsApp.',
    },
    intro: {
      tr: 'Bütçenize ve cephenize en uygun tabelayı üretiyoruz. Sıfır enerji maliyetli ekonomik ışıksız tabelalardan, dar cephelerde kilometrelerce öteden okunan dikey form sistemlere kadar geniş bir çözüm yelpazesi.',
      en: 'We produce the sign that best fits your budget and façade — from zero-energy, economical non-lit signs to pylon systems read from far away on narrow frontages.',
    },
    forWho: {
      tr: ['Bütçe odaklı işletmeler', 'Dar veya yüksek cepheler', 'Hızlı açılış yapan dükkânlar', 'Şantiye ve geçici tanıtım'],
      en: ['Budget-focused businesses', 'Narrow or tall façades', 'Fast-opening shops', 'Sites & temporary promotion'],
    },
    variants: [
      { name: { tr: 'Işıksız Tabela', en: 'Non-lit Sign' }, desc: { tr: 'Vinil, kompozit ve sac ile ekonomik, hızlı ve dayanıklı çözüm.', en: 'Affordable, fast and durable using vinyl, composite and sheet metal.' } },
      { name: { tr: 'Dikey Form / Pylon', en: 'Pylon / Vertical' }, desc: { tr: 'Dar cepheler için kilometrelerce öteden görünen dikey sistemler.', en: 'Vertical systems for narrow frontages, visible from far away.' } },
      { name: { tr: 'Kompozit Oyma Işıklı', en: 'Routed Composite (lit)' }, desc: { tr: 'Dekupe harf ve oyma detaylarla modern, bütünleşik tabela.', en: 'A modern, integrated sign with cut letters and routed detail.' } },
      { name: { tr: 'Kayan Yazı', en: 'LED Ticker' }, desc: { tr: 'Programlanabilir LED kayan yazı panelleri.', en: 'Programmable scrolling LED message panels.' } },
    ],
    benefits: [
      { t: { tr: 'Sıfır enerji seçeneği', en: 'Zero-energy option' }, d: { tr: 'Işıksız modellerde elektrik gideri olmadan dayanıklılık.', en: 'Durability with no electricity cost on non-lit models.' } },
      { t: { tr: 'Hızlı üretim', en: 'Fast production' }, d: { tr: 'Açılışınıza yetişen kısa üretim süreleri.', en: 'Short lead times that make your opening.' } },
      { t: { tr: 'Her cepheye uyum', en: 'Fits any façade' }, d: { tr: 'Dar, geniş veya yüksek; doğru forma birlikte karar veririz.', en: 'Narrow, wide or tall — we choose the right form together.' } },
    ],
    gallery: [imgIsikli, imgIsikli2, imgIsikli3],
    related: ['kutu-harf-tabela', 'totem-cati-yonlendirme', 'led-box-tabela'],
  },
  {
    slug: 'totem-cati-yonlendirme',
    icon: 'Milestone',
    image: imgTotem,
    name: { tr: 'Totem & Çatı', en: 'Totem & Roof' },
    title: { tr: 'Totem, Çatı & Yönlendirme', en: 'Totem, Roof & Wayfinding' },
    short: { tr: 'Açık hava: totem, çatı tabelası ve yönlendirme panoları.', en: 'Outdoor: totems, roof signs and wayfinding boards.' },
    eyebrow: { tr: 'Açık hava reklam', en: 'Outdoor advertising' },
    h1: { tr: 'Totem, Çatı Tabelası & Yönlendirme Panoları', en: 'Totems, Roof Signs & Wayfinding' },
    metaTitle: { tr: 'Totem & Çatı Tabelası İstanbul | Yönlendirme Panoları | Arslan Tanıtım', en: 'Totem & Roof Signs Istanbul | Wayfinding | Arslan Tanıtım' },
    metaDescription: {
      tr: "İstanbul totem tabela, çatı tabelası ve yönlendirme panoları. AVM, plaza, hastane ve kampüsler için açık hava reklam çözümleri. WhatsApp'tan teklif alın.",
      en: 'Totem signs, roof signs and wayfinding boards in Istanbul. Outdoor advertising for malls, plazas, hospitals and campuses. Get a quote on WhatsApp.',
    },
    intro: {
      tr: 'İşletmenizi uzaktan görünür kılan açık hava reklam sistemleri. Totem ve çatı tabelalarıyla yol üzerinden fark edilin, yönlendirme panolarıyla ziyaretçilerinize net bir rota sunun.',
      en: 'Outdoor advertising systems that make your business visible from afar. Get noticed from the road with totem and roof signs, and give visitors a clear route with wayfinding boards.',
    },
    forWho: {
      tr: ['AVM, plaza ve siteler', 'Hastane ve kampüsler', 'Akaryakıt ve oto galerileri', 'Yol kenarı işletmeler'],
      en: ['Malls, plazas & complexes', 'Hospitals & campuses', 'Fuel stations & car dealers', 'Roadside businesses'],
    },
    variants: [
      { name: { tr: 'Totem Tabela', en: 'Totem Sign' }, desc: { tr: 'Bağımsız, yüksek ve uzaktan okunan kurumsal totemler.', en: 'Free-standing, tall corporate totems read from a distance.' } },
      { name: { tr: 'Çatı Tabelası', en: 'Roof Sign' }, desc: { tr: 'Bina silüetinde markanızı gökyüzüne taşıyan çözümler.', en: 'Solutions that lift your brand into the skyline.' } },
      { name: { tr: 'Yönlendirme Panoları', en: 'Wayfinding Boards' }, desc: { tr: 'İç ve dış mekânda etkili, okunaklı yön bilgisi.', en: 'Clear, effective directional information indoors and out.' } },
    ],
    benefits: [
      { t: { tr: 'Uzaktan görünürlük', en: 'Long-range visibility' }, d: { tr: 'Trafikte ve yaya akışında fark edilirlik.', en: 'Stand out in traffic and pedestrian flow.' } },
      { t: { tr: 'Dayanıklı yapı', en: 'Durable build' }, d: { tr: 'Rüzgar ve hava koşullarına uygun mühendislik.', en: 'Engineered for wind and weather.' } },
      { t: { tr: 'Kurumsal bütünlük', en: 'Brand consistency' }, d: { tr: 'Marka kimliğinizle uyumlu tasarım.', en: 'Design aligned with your brand identity.' } },
    ],
    gallery: [imgTotem, imgTotem2],
    related: ['isikli-tabela', 'kutu-harf-tabela', 'dijital-baski-matbaa'],
  },
  {
    slug: 'arac-giydirme',
    icon: 'Car',
    image: phArac,
    isPlaceholderImage: true,
    name: { tr: 'Araç Giydirme', en: 'Vehicle Wraps' },
    title: { tr: 'Araç Giydirme', en: 'Vehicle Wraps' },
    short: { tr: 'Filo ve ticari araçlarınızı gezen reklam panosuna çevirin.', en: 'Turn your fleet and commercial vehicles into moving billboards.' },
    eyebrow: { tr: 'Hareketli reklam', en: 'Mobile advertising' },
    h1: { tr: 'Araç Giydirme — İstanbul', en: 'Vehicle Wraps — Istanbul' },
    metaTitle: { tr: 'Araç Giydirme İstanbul | Filo & Ticari Araç Kaplama | Arslan Tanıtım', en: 'Vehicle Wraps Istanbul | Fleet & Commercial | Arslan Tanıtım' },
    metaDescription: {
      tr: "İstanbul araç giydirme ve folyo kaplama: ticari araç, filo ve binek araçlar için tam veya kısmi giydirme. Dayanıklı baskı folyolar. WhatsApp'tan teklif alın.",
      en: 'Vehicle wrapping and vinyl in Istanbul: full or partial wraps for commercial, fleet and passenger vehicles. Durable print films. Get a quote on WhatsApp.',
    },
    intro: {
      tr: 'Ticari araçlarınızı şehirde gezen bir reklam panosuna dönüştürüyoruz. Tam veya kısmi giydirme, dayanıklı baskı folyolar ve markanıza özel tasarımla her gün binlerce kişiye ulaşın.',
      en: 'We turn your commercial vehicles into billboards on the move. Reach thousands every day with full or partial wraps, durable print films and a design tailored to your brand.',
    },
    forWho: {
      tr: ['Filo sahibi işletmeler', 'Servis ve dağıtım araçları', 'Esnaf ve KOBİ ticari araçları', 'Etkinlik ve lansman araçları'],
      en: ['Fleet operators', 'Service & delivery vehicles', 'SME commercial vehicles', 'Event & launch vehicles'],
    },
    variants: [
      { name: { tr: 'Tam Giydirme', en: 'Full Wrap' }, desc: { tr: 'Aracın tüm yüzeyini kaplayan komple kaplama.', en: 'Complete coverage of the entire vehicle surface.' } },
      { name: { tr: 'Kısmi Giydirme', en: 'Partial Wrap' }, desc: { tr: 'Logo, iletişim ve slogan odaklı ekonomik çözüm.', en: 'An economical option focused on logo, contact and slogan.' } },
      { name: { tr: 'Cam & Yan Yüzey', en: 'Glass & Side Panels' }, desc: { tr: 'Tek yön görüş folyo ve yan panel uygulamaları.', en: 'One-way vision film and side-panel applications.' } },
    ],
    benefits: [
      { t: { tr: 'Gezen reklam', en: 'Moving advertising' }, d: { tr: 'Tek seferlik maliyetle sürekli görünürlük.', en: 'Continuous visibility for a one-time cost.' } },
      { t: { tr: 'Dayanıklı folyo', en: 'Durable film' }, d: { tr: 'UV ve yıkamaya dayanıklı, iz bırakmadan sökülebilir.', en: 'UV- and wash-resistant, removable without residue.' } },
      { t: { tr: 'Marka bütünlüğü', en: 'Brand consistency' }, d: { tr: 'Tabela ve baskılarınızla aynı kurumsal dil.', en: 'The same corporate language as your signs and print.' } },
    ],
    gallery: [],
    related: ['cam-giydirme', 'dijital-baski-matbaa', 'kutu-harf-tabela'],
  },
  {
    slug: 'cam-giydirme',
    icon: 'AppWindow',
    image: phCam,
    isPlaceholderImage: true,
    name: { tr: 'Cam Giydirme', en: 'Glass Wraps' },
    title: { tr: 'Cam Giydirme', en: 'Glass Wraps' },
    short: { tr: 'Vitrin ve cephe camlarına kurumsal folyo uygulamaları.', en: 'Corporate film for shopfront and façade glass.' },
    eyebrow: { tr: 'Vitrin & cephe', en: 'Window & façade' },
    h1: { tr: 'Cam Giydirme — İstanbul', en: 'Glass Wraps — Istanbul' },
    metaTitle: { tr: 'Cam Giydirme İstanbul | Vitrin Folyo & Kumlama | Arslan Tanıtım', en: 'Glass Wraps Istanbul | Window Film & Frosting | Arslan Tanıtım' },
    metaDescription: {
      tr: "İstanbul cam giydirme: vitrin folyo, tek yön görüş, buzlu/kumlama folyo ve cephe cam kaplama. Mağaza ve ofisler için. WhatsApp'tan ücretsiz teklif alın.",
      en: 'Glass wraps in Istanbul: window film, one-way vision, frosted/etched film and façade glass coverage for stores and offices. Free quote on WhatsApp.',
    },
    intro: {
      tr: 'Vitrin ve cephe camlarınızı hem reklam alanına hem de şık bir kurumsal yüzeye dönüştürüyoruz. Tek yön görüş, buzlu kumlama ve baskılı folyolarla mahremiyet ve marka görünürlüğünü birlikte sağlıyoruz.',
      en: 'We turn shopfront and façade glass into both an ad space and an elegant corporate surface. With one-way vision, frosted etching and printed film we deliver privacy and brand visibility together.',
    },
    forWho: {
      tr: ['Mağaza ve showroom vitrinleri', 'Ofis ve toplantı odaları', 'Klinik ve güzellik merkezleri', 'Restoran ve kafe cepheleri'],
      en: ['Store & showroom windows', 'Offices & meeting rooms', 'Clinics & beauty centers', 'Restaurant & café façades'],
    },
    variants: [
      { name: { tr: 'Vitrin Baskı Folyo', en: 'Printed Window Film' }, desc: { tr: 'Kampanya ve marka görselleriyle dikkat çeken vitrinler.', en: 'Windows that grab attention with campaign and brand graphics.' } },
      { name: { tr: 'Tek Yön Görüş', en: 'One-way Vision' }, desc: { tr: 'İçeriden dışarıyı görün, dışarıdan görseliniz okunsun.', en: 'See out from inside while your graphic reads from outside.' } },
      { name: { tr: 'Buzlu / Kumlama', en: 'Frosted / Etched' }, desc: { tr: 'Mahremiyet için şık, mat cam efekti.', en: 'An elegant matte-glass effect for privacy.' } },
    ],
    benefits: [
      { t: { tr: 'Çift işlev', en: 'Dual purpose' }, d: { tr: 'Hem reklam hem mahremiyet tek uygulamada.', en: 'Advertising and privacy in a single application.' } },
      { t: { tr: 'Hızlı yenilenir', en: 'Quick to refresh' }, d: { tr: 'Kampanya değişiminde kolayca güncellenir.', en: 'Easily updated when campaigns change.' } },
      { t: { tr: 'Temiz uygulama', en: 'Clean application' }, d: { tr: 'Profesyonel montaj, kabarcıksız sonuç.', en: 'Professional install, bubble-free result.' } },
    ],
    gallery: [],
    related: ['arac-giydirme', 'dijital-baski-matbaa', 'led-box-tabela'],
  },
  {
    slug: 'dijital-baski-matbaa',
    icon: 'Printer',
    image: phBaski,
    isPlaceholderImage: true,
    name: { tr: 'Dijital Baskı & Matbaa', en: 'Print & Press' },
    title: { tr: 'Dijital Baskı & Matbaa', en: 'Digital Print & Press' },
    short: { tr: 'Branda, afiş, mesh ve tüm kurumsal matbaa işleri.', en: 'Banners, posters, mesh and all corporate print.' },
    eyebrow: { tr: 'Baskı & matbaa', en: 'Print & press' },
    h1: { tr: 'Dijital Baskı & Matbaa Hizmetleri', en: 'Digital Print & Press Services' },
    metaTitle: { tr: 'Dijital Baskı & Matbaa İstanbul | Branda, Afiş, Folyo | Arslan Tanıtım', en: 'Digital Print & Press Istanbul | Banner, Poster, Vinyl | Arslan Tanıtım' },
    metaDescription: {
      tr: "İstanbul dijital baskı ve matbaa: branda, afiş, mesh, folyo, kurumsal basılı malzeme. Yüksek çözünürlük, canlı renkler. WhatsApp'tan teklif alın.",
      en: 'Digital print and press in Istanbul: banners, posters, mesh, vinyl and corporate printed materials. High resolution, vivid colors. Get a quote on WhatsApp.',
    },
    intro: {
      tr: 'Tabela ve giydirmenin yanında tüm görsel iletişim ihtiyaçlarınızı tek elden karşılıyoruz. Geniş format dijital baskıdan kurumsal matbaa işlerine kadar canlı renkler ve net detaylarla üretim.',
      en: 'Beyond signs and wraps, we cover all your visual communication needs from one source — from large-format digital print to corporate press work, with vivid colors and crisp detail.',
    },
    forWho: {
      tr: ['Mağaza ve etkinlik tanıtımları', 'Kurumsal kimlik malzemeleri', 'Fuar ve lansmanlar', 'Kampanya ve sezon görselleri'],
      en: ['Store & event promotion', 'Corporate identity materials', 'Fairs & launches', 'Campaign & seasonal artwork'],
    },
    variants: [
      { name: { tr: 'Branda & Mesh', en: 'Banner & Mesh' }, desc: { tr: 'Cephe ve şantiye için büyük ebat dayanıklı baskı.', en: 'Large-format durable print for façades and sites.' } },
      { name: { tr: 'Afiş & Poster', en: 'Poster & Print' }, desc: { tr: 'Vitrin ve iç mekân için yüksek çözünürlüklü baskı.', en: 'High-resolution print for windows and interiors.' } },
      { name: { tr: 'Folyo & Sticker', en: 'Vinyl & Stickers' }, desc: { tr: 'Kesim ve baskı folyo uygulamaları.', en: 'Cut and printed vinyl applications.' } },
      { name: { tr: 'Kurumsal Matbaa', en: 'Corporate Press' }, desc: { tr: 'Kartvizit, broşür, antetli ve basılı set.', en: 'Business cards, brochures, letterheads and print sets.' } },
    ],
    benefits: [
      { t: { tr: 'Tek elden çözüm', en: 'One-stop solution' }, d: { tr: 'Tabela + baskı + matbaa aynı kurumsal dilde.', en: 'Signs + print + press in one corporate language.' } },
      { t: { tr: 'Canlı renkler', en: 'Vivid colors' }, d: { tr: 'Yüksek çözünürlüklü, solmaya dayanıklı baskı.', en: 'High-resolution, fade-resistant printing.' } },
      { t: { tr: 'Hızlı teslim', en: 'Fast delivery' }, d: { tr: 'Etkinlik ve açılışlara yetişen üretim.', en: 'Production that makes your events and openings.' } },
    ],
    gallery: [],
    related: ['cam-giydirme', 'arac-giydirme', 'totem-cati-yonlendirme'],
  },
]

export const getService = (slug) => services.find((s) => s.slug === slug)
