import { Helmet } from 'react-helmet-async'
import { site } from '../data/site'

// Per-route head: title, description, canonical, Open Graph + JSON-LD blocks.
export default function SEO({ title, description, path = '', image, schema }) {
  const url = `${site.url}${path}`
  const ogImage = `${site.url}${image || '/og-image.jpg'}`
  const blocks = Array.isArray(schema) ? schema : schema ? [schema] : []
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
      ))}
    </Helmet>
  )
}
