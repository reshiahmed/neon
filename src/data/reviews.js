// REAL Google reviews scraped from the business's Maps listing (4.9★ · 18 reviews).
// Turkish = original text; English = Google's translation (lightly cleaned).
// Reviewer photos intentionally omitted (privacy); initials avatars used instead.
// Generic, non-named installs paired by work type (no reviewer tied to a named client).
import imgNeon from '../assets/portfolio/neon-kutuharf-14.jpg'
import imgKutu from '../assets/portfolio/neon-kutuharf-15.jpg'
import imgKutuB from '../assets/portfolio/neon-kutuharf-11.jpg'
import imgKutuC from '../assets/portfolio/neon-kutuharf-10.jpg'
import imgNeonB from '../assets/portfolio/neon-kutuharf-13.jpg'
import imgGen from '../assets/portfolio/proj-6.jpg'

export const googleRating = { score: '4.9', count: 18 }
export const googleMapsUrl =
  'https://www.google.com/maps/search/?api=1&query=Arslan+Tan%C4%B1t%C4%B1m+Reklam+ve+Tabela+Hizmetleri'

export const reviews = [
  {
    name: 'Mikail Özdemir',
    initials: 'MÖ',
    rating: 5,
    when: { tr: '8 ay önce', en: '8 months ago' },
    image: imgNeon,
    text: {
      tr: "Dükkan tabelamızı düz halinden neon LED'li hale getirmek istedik, iyi ki sizinle tanıştık. Hızlı ve sorunlara karşı olumlu çözümleriniz için teşekkür ederim.",
      en: "We wanted to upgrade our shop sign from a plain one to neon LED — so glad we found you. Thank you for your fast and positive solutions to every problem.",
    },
  },
  {
    name: 'Emre Eroğlu',
    initials: 'EE',
    rating: 5,
    when: { tr: '6 ay önce', en: '6 months ago' },
    image: imgKutu,
    text: {
      tr: 'Yeni açtığımız dükkanımız için ışıklı kutu harf tabela yaptırdım. Bütçe uygun, uçuk fiyatlar yok, işin hakkını veriyorlar. Canı gönülden 5 yıldız.',
      en: 'I had an illuminated box-letter sign made for our newly opened shop. Budget-friendly, no crazy prices — they do the job right. Wholehearted 5 stars.',
    },
  },
  {
    name: 'Erdem Korkmaz',
    initials: 'EK',
    rating: 5,
    when: { tr: '7 ay önce', en: '7 months ago' },
    image: imgKutuB,
    text: {
      tr: 'Birçok yere başvurdum, bakır bir tabela yaptıracaktım, kimse yapamadı. Arslan Tanıtım dövme bakırdan tabelamı yaptı. Elleriniz dert görmesin ustalarım!',
      en: 'I tried many places to have a copper sign made and no one could do it. Arslan Tanıtım made mine from hammered copper. Bless your hands, masters!',
    },
  },
  {
    name: 'H. R. Aytür',
    initials: 'HA',
    rating: 5,
    when: { tr: '7 ay önce', en: '7 months ago' },
    image: imgKutuC,
    text: {
      tr: 'Çok memnun kaldık; hızlı hizmet ve anlayışlı bir ekiple tabela ve ışıklı tanıtımlarımızı istediğimiz gibi yaptılar. Sadece biz değil müşterilerimiz de çok beğeniyor. Çok teşekkürler.',
      en: 'Very pleased — fast service and an understanding team made our signs and illuminated displays exactly as we wanted. Not just us, our customers love them too. Many thanks.',
    },
  },
  {
    name: 'halim uçar',
    initials: 'HU',
    rating: 5,
    when: { tr: '8 ay önce', en: '8 months ago' },
    image: imgNeonB,
    text: {
      tr: 'Kaliteli hizmet ve güler yüzlü çalışanları var. Sürecin başından sonuna kadar çok ilgilendiler, verdikleri süre içinde tabelam takıldı ve çok güzel oldu. Kesinlikle tavsiye ederim.',
      en: 'Quality service and friendly staff. They were attentive from start to finish; my sign was installed within the promised time and looks great. Definitely recommend.',
    },
  },
  {
    name: 'Müslüm Onur',
    initials: 'MO',
    rating: 5,
    when: { tr: '8 ay önce', en: '8 months ago' },
    image: imgGen,
    text: {
      tr: 'Gelen ustalara teşekkür ederim, işinin ehli kişiler. Fiyat konusunda da yardımcı oldular. Emeklerine sağlık.',
      en: 'Thanks to the craftsmen who came — true experts. They were also helpful on pricing. Well done.',
    },
  },
]
