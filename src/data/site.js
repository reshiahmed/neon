import logo from '../assets/brand/logo-arslan.png'
import storefront from '../assets/brand/storefront-hero.png'

export const site = {
  name: 'Arslan Tanıtım',
  legalName: 'Arslan Tanıtım Reklam ve Tabela Hizmetleri',
  slogan: 'Reklam Her Şeye Değer',
  url: 'https://www.arslantanitim.com',
  // contact
  phonePrimary: '905325780687',
  phonePrimaryDisplay: '0532 578 06 87',
  phoneSecondary: '905345658730',
  phoneSecondaryDisplay: '0534 565 87 30',
  whatsapp: '905325780687',
  email: 'info@arslantanitim.com',
  address: {
    line: 'Esentepe Mah., Gaziosmanpaşa Cad., Huzur Apt. No:65 İç Kapı No:01',
    district: 'Eyüpsultan',
    city: 'İstanbul',
    zip: '34065',
    full: 'Esentepe Mah., Gaziosmanpaşa Cad., Huzur Apt. No:65 İç Kapı No:01, 34065 Eyüpsultan / İstanbul',
    mapsQuery: 'Arslan+Tanıtım+Reklam+Eyüpsultan+İstanbul',
  },
  hours: [
    { d: 'Pazartesi – Cuma', h: '10:00 – 18:00' },
    { d: 'Cumartesi – Pazar', h: '10:00 – 14:00' },
  ],
  social: {
    instagram: 'https://www.instagram.com/arslantanitimreklam/',
    facebook: 'https://www.facebook.com/arslantanitimreklamtabela',
  },
  assets: { logo, storefront },
  // marketing stats (owner-supplied claims)
  stats: [
    { value: { tr: '15+', en: '15+' }, key: 'years' },
    { value: { tr: '1000+', en: '1000+' }, key: 'projects' },
    { value: { tr: '%100', en: '100%' }, key: 'local' },
    { value: { tr: '7/24', en: '24/7' }, key: 'support' },
  ],
}

export const districts = [
  'Eyüpsultan',
  'Alibeyköy',
  'Gaziosmanpaşa',
  'Kağıthane',
  'Mecidiyeköy',
  'Şişli',
]

export const nav = [
  { key: 'home', to: '/' },
  { key: 'services', to: '/hizmetler' },
  { key: 'portfolio', to: '/referanslar' },
  { key: 'about', to: '/kurumsal' },
  { key: 'faq', to: '/sss' },
  { key: 'contact', to: '/iletisim' },
]
