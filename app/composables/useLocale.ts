import { translations, type Locale, type TranslationKey } from '~/i18n/translations'

export function useLocale() {
  const locale = useCookie<Locale>('locale', { default: () => 'en', sameSite: 'lax' })

  function toggle() {
    locale.value = locale.value === 'en' ? 'de' : 'en'
  }

  function t(key: TranslationKey): string {
    return translations[locale.value ?? 'en'][key] ?? translations.en[key] ?? key
  }

  return { locale, t, toggle }
}
