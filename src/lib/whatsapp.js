import { site } from '../data/site'

// Build a wa.me deep link with a prefilled Turkish message.
export function waLink(message) {
  const base = `https://wa.me/${site.whatsapp}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export const telLink = (num) => `tel:+${num}`

// Default + service-specific prefilled messages
export const waMessages = {
  general:
    'Merhaba Arslan Tanıtım, işletmem için tabela/kutu harf hakkında ücretsiz teklif almak istiyorum.',
  service: (name) =>
    `Merhaba Arslan Tanıtım, "${name}" hizmeti için ücretsiz teklif almak istiyorum.`,
  quote: ({ name, phone, service, district, message }) =>
    [
      'Merhaba Arslan Tanıtım, teklif talebim:',
      name && `• Ad Soyad: ${name}`,
      phone && `• Telefon: ${phone}`,
      service && `• Hizmet: ${service}`,
      district && `• Bölge: ${district}`,
      message && `• Detay: ${message}`,
    ]
      .filter(Boolean)
      .join('\n'),
}
