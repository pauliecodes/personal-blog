import { translations, type Locale, type TranslationKey } from '~/i18n/translations'

export function useLocale() {
  const locale = useState<Locale>('locale', () => 'en')

  function toggle() {
    locale.value = locale.value === 'en' ? 'de' : 'en'
    if (import.meta.client) {
      localStorage.setItem('locale', locale.value)
    }
  }

  function t(key: TranslationKey): string {
    return translations[locale.value][key] ?? translations.en[key] ?? key
  }

  return { locale, t, toggle }
}
