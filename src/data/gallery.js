// Full gallery — auto-imports every image in assets/portfolio/gallery (deduped at download).
// Add a file to that folder and it shows up here automatically.
const mods = import.meta.glob('../assets/portfolio/gallery/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
})

const fileName = (p) => p.split('/').pop()

const categoryFor = (n) => {
  if (/^set-05|^kh-13|^kh-14/.test(n)) return 'neon'
  if (/^loc-alibeykoy|^loc-yesilpinar|^set-06|^lightbox/.test(n)) return 'isikli'
  return 'kutu'
}

const captions = {
  kutu: { tr: 'Işıklı Kutu Harf Tabela', en: 'Illuminated Box-Letter Sign' },
  neon: { tr: 'Neon Led Tabela', en: 'Neon LED Sign' },
  isikli: { tr: 'Işıklı Tabela & Cephe', en: 'Illuminated Sign & Façade' },
}

const entries = Object.keys(mods)
  .sort()
  .map((p) => {
    const id = fileName(p)
    const category = categoryFor(id)
    return { id, src: mods[p], category, caption: captions[category] }
  })

// Lead with the varied location/feature shots, then the box-letter/neon series.
const lead = entries.filter((e) => !e.id.startsWith('kh-'))
const rest = entries.filter((e) => e.id.startsWith('kh-'))

export const galleryItems = [...lead, ...rest]
