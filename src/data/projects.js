// Real, verified work pulled from Arslan Tanıtım's own site + named clients.
import yaylacik from '../assets/portfolio/gallery/lightbox.jpg'
import yaylacik2 from '../assets/portfolio/neon-kutuharf-12.jpg'
import balpet from '../assets/portfolio/circir-tabela.jpg'
import bijuces from '../assets/portfolio/eyupsultan-tabela.jpg'
import medusa from '../assets/portfolio/proj-5.jpg'
import alibeykoy from '../assets/portfolio/alibeykoy-tabela.jpg'
import yesilpinar from '../assets/portfolio/yesilpinar-tabela.jpg'
import k10 from '../assets/portfolio/neon-kutuharf-10.jpg'
import k11 from '../assets/portfolio/neon-kutuharf-11.jpg'
import k13 from '../assets/portfolio/neon-kutuharf-13.jpg'
import k15 from '../assets/portfolio/neon-kutuharf-15.jpg'
import proj6 from '../assets/portfolio/proj-6.jpg'

// client logos
import logoDetay from '../assets/portfolio/detay-deri-direksiyon.jpg'
import logoHello from '../assets/portfolio/hello-helen.jpg'
import logoOzay from '../assets/portfolio/oz-ay-rent-a-car.jpg'
import logoJandarma from '../assets/portfolio/dry-car-care-1.jpg'

export const categories = [
  { key: 'all', label: { tr: 'Tümü', en: 'All' } },
  { key: 'kutu', label: { tr: 'Kutu Harf', en: 'Box Letters' } },
  { key: 'neon', label: { tr: 'Neon Led', en: 'Neon LED' } },
  { key: 'isikli', label: { tr: 'Işıklı Tabela', en: 'Illuminated' } },
]

const catLabels = {
  kutu: { tr: 'Kutu Harf', en: 'Box Letters' },
  neon: { tr: 'Neon Led', en: 'Neon LED' },
  isikli: { tr: 'Işıklı Tabela', en: 'Illuminated' },
}
export const categoryLabel = (key) => catLabels[key] || { tr: key, en: key }

export const projects = [
  { id: 'lightbox', title: 'Işıklı Daire Pano', category: 'isikli', district: 'İstanbul', image: yaylacik, featured: true, desc: { tr: 'Cephe ışıklı yuvarlak pano uygulaması', en: 'Illuminated round façade panel' } },
  { id: 'medusa', title: 'Medusa Peruk', category: 'neon', district: 'İstanbul', image: medusa, featured: true, desc: { tr: 'Vitrin neon led tabela uygulaması', en: 'Storefront neon LED sign' } },
  { id: 'bijuces', title: "Bijuce's / Ece's Bijuteri", category: 'kutu', district: 'AVM', image: bijuces, featured: true, desc: { tr: 'AVM cephe ışıklı kutu harf', en: 'Mall façade illuminated box letters' } },
  { id: 'balpet', title: 'Bal Pet Shop', category: 'kutu', district: 'Çırçır', image: balpet, featured: true, desc: { tr: 'Cadde cephesi ışıklı kutu harf tabela', en: 'High-street illuminated box-letter sign' } },
  { id: 'alibeykoy', title: 'Alibeyköy Tabela', category: 'isikli', district: 'Alibeyköy', image: alibeykoy, featured: true, desc: { tr: 'İşletme cephe tabela uygulaması', en: 'Business façade sign' } },
  { id: 'yaylacik', title: 'Yaylacık Çiftliği', category: 'kutu', district: 'Eyüpsultan', image: yaylacik2, desc: { tr: 'Köşe cephe ışıklı kutu harf', en: 'Corner façade illuminated box letters' } },
  { id: 'yesilpinar', title: 'Yeşilpınar Tabela', category: 'isikli', district: 'Yeşilpınar', image: yesilpinar, desc: { tr: 'Cephe tabela ve montaj', en: 'Façade sign and installation' } },
  { id: 'k11', title: 'Kutu Harf Uygulaması', category: 'kutu', district: 'İstanbul', image: k11, desc: { tr: 'Işıklı kutu harf cephe çalışması', en: 'Illuminated box-letter façade work' } },
  { id: 'k10', title: 'Işıklı Kutu Harf', category: 'kutu', district: 'İstanbul', image: k10, desc: { tr: 'Mağaza cephe kutu harf', en: 'Store façade box letters' } },
  { id: 'k13', title: 'Neon Led Detay', category: 'neon', district: 'İstanbul', image: k13, desc: { tr: 'Dekoratif neon led çalışması', en: 'Decorative neon LED work' } },
  { id: 'k15', title: 'Kutu Harf Cephe', category: 'kutu', district: 'İstanbul', image: k15, desc: { tr: 'Işıklı tabela ve kutu harf', en: 'Illuminated sign and box letters' } },
  { id: 'proj6', title: 'Cephe Tabela', category: 'isikli', district: 'İstanbul', image: proj6, desc: { tr: 'İşletme tabela uygulaması', en: 'Business sign installation' } },
]

export const featuredProjects = projects.filter((p) => p.featured)

// Named clients with clean logos (verified from the live site references).
export const clients = [
  { name: 'Detay Deri Direksiyon', logo: logoDetay },
  { name: 'Hello Helen', logo: logoHello },
  { name: 'Öz Ay Rent A Car', logo: logoOzay },
  { name: 'Eyüp Sultan İlçe Jandarma', logo: logoJandarma },
]

export const clientNames = [
  'Dry Car Care — Vialand AVM',
  'Yaylacık Çiftliği',
  'Bal Pet Shop',
  "Bijuce's / Ece's Bijuteri",
  'Medusa Peruk',
  'Detay Deri Direksiyon',
  'Hello Helen',
  'Öz Ay Rent A Car',
]
