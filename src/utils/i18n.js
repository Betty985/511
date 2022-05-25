import i18n from '@/locale'
export function generateTitle(title) {
  return i18n.global.t('route.' + title)
}
