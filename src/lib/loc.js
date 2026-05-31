// Pure localization picker (no React) — select { tr, en } field by language.
export function pick(field, lang) {
  if (field && typeof field === 'object' && ('tr' in field || 'en' in field)) {
    return field[lang] ?? field.tr
  }
  return field
}
