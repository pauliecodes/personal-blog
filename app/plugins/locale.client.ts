import type { Locale } from '~/i18n/translations'

export default defineNuxtPlugin(() => {
  const locale = useState<Locale>('locale', () => 'en')
  const saved = localStorage.getItem('locale') as Locale | null
  if (saved === 'en' || saved === 'de') {
    locale.value = saved
  }
})
