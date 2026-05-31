import { site, districts } from '../data/site'
import { pick } from './loc'

// LocalBusiness schema — emitted site-wide for local SEO / Google.
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#business`,
  name: site.legalName,
  alternateName: site.name,
  slogan: site.slogan,
  url: site.url,
  telephone: `+${site.phonePrimary}`,
  email: site.email,
  image: `${site.url}/og-image.jpg`,
  priceRange: '₺₺',
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.line,
    addressLocality: site.address.district,
    addressRegion: 'İstanbul',
    postalCode: site.address.zip,
    addressCountry: 'TR',
  },
  areaServed: districts.map((d) => ({ '@type': 'City', name: `${d}, İstanbul` })),
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '10:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday', 'Sunday'],
      opens: '10:00',
      closes: '14:00',
    },
  ],
  sameAs: [site.social.instagram, site.social.facebook],
}

export const serviceSchema = (svc, lang = 'tr') => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: pick(svc.title, lang),
  name: `${pick(svc.title, lang)} İstanbul`,
  description: pick(svc.metaDescription, lang),
  provider: { '@type': 'LocalBusiness', name: site.legalName, '@id': `${site.url}/#business` },
  areaServed: { '@type': 'City', name: 'İstanbul' },
  url: `${site.url}/hizmetler/${svc.slug}`,
})

export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: `${site.url}${it.path}`,
  })),
})

export const faqSchema = (faqs, lang = 'tr') => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: pick(f.q, lang),
    acceptedAnswer: { '@type': 'Answer', text: pick(f.a, lang) },
  })),
})
