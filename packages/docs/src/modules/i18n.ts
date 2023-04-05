import type { Locale } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import type { UserModule } from './../types'
import { isEnglish } from '~/composables'

export const i18n = createI18n({
  legacy: false,
  locale: '',
  messages: {},
})

export function setI18nLanguage(lang: Locale) {
  i18n.global.locale.value = lang as any
  if (typeof document !== 'undefined')
    document.querySelector('html')?.setAttribute('lang', lang)
  return lang
}

const localesMap = Object.fromEntries(
  Object.entries(import.meta.glob('../../locales/*.yml'))
    .map(([path, loadLocale]) => [path.match(/([\w-]*)\.yml$/)?.[1], loadLocale]),
) as Record<Locale, () => Promise<{ default: Record<string, string> }>>

export const availableLocales = Object.keys(localesMap)

const loadedLanguages: string[] = []

export async function loadLanguageAsync(lang: string | string[]): Promise<Locale> {
  lang = Array.isArray(lang) ? lang : [lang]
  const primaryLang = lang[0]
  if (i18n.global.locale.value === primaryLang)
    return setI18nLanguage(primaryLang)

  if (loadedLanguages.includes(primaryLang))
    return setI18nLanguage(primaryLang)

  for (const language of lang) {
    const messages = await localesMap[language]()
    i18n.global.setLocaleMessage(language, messages.default)
    loadedLanguages.push(language)
  }
  return setI18nLanguage(primaryLang)
}

export const install: UserModule = ({ app }) => {
  app.use(i18n)
  loadLanguageAsync(isEnglish.value ? ['en', 'zh-CN'] : ['zh-CN', 'en'])
}
