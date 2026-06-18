import { defaultLocale } from '@/services/locale'

type MessageCatalog = Record<string, string>

export type RemoteLanguageFailureReason = 'pending' | 'unavailable'

export class RemoteLanguageError extends Error {
  constructor(public reason: RemoteLanguageFailureReason) {
    super(reason === 'pending' ? 'Translation is not ready yet' : 'Translation is unavailable')
  }
}

const workerLanguageCodes: Record<string, string> = {
  'pt-br': 'pt',
  'zh-cn': 'zh',
}

const pendingLanguageLoads = new Map<string, Promise<MessageCatalog>>()
const loadedLanguages = new Map<string, MessageCatalog>()

function isMessageCatalog(value: unknown): value is MessageCatalog {
  return !!value && typeof value === 'object' && !Array.isArray(value)
    && Object.values(value).every(entry => typeof entry === 'string')
}

function getWorkerLanguageCode(lang: string) {
  return workerLanguageCodes[lang] ?? lang
}

function getApiHost() {
  const configured = (import.meta.env.PUBLIC_TRANSLATION_API_HOST || '').replace(/\/$/, '')
  if (configured)
    return configured
  if (typeof window === 'undefined')
    return ''
  const { hostname, protocol } = window.location
  if (hostname === 'localhost')
    return 'http://localhost:8787'
  return `${protocol}//api.${hostname.replace(/^www\./, '')}`
}

function getLocaleFromPathname(pathname: string) {
  const segment = pathname.split('/').filter(Boolean)[0]?.toLowerCase()
  if (!segment || segment === defaultLocale)
    return defaultLocale
  return segment
}

async function fetchRemoteMessages(lang: string): Promise<MessageCatalog> {
  const pending = pendingLanguageLoads.get(lang)
  if (pending)
    return pending

  const request = fetch(`${getApiHost()}/translation/messages/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      targetLanguage: getWorkerLanguageCode(lang),
    }),
  }).then(async (response) => {
    if (response.status === 202)
      throw new RemoteLanguageError('pending')
    if (!response.ok)
      throw new RemoteLanguageError('unavailable')

    const payload = await response.json() as { messages?: unknown }
    if (!isMessageCatalog(payload.messages))
      throw new RemoteLanguageError('unavailable')

    return payload.messages
  }).catch((error) => {
    if (error instanceof RemoteLanguageError)
      throw error
    throw new RemoteLanguageError('unavailable')
  }).finally(() => {
    pendingLanguageLoads.delete(lang)
  })

  pendingLanguageLoads.set(lang, request)
  return request
}

async function ensureLanguageLoaded(lang: string) {
  if (loadedLanguages.has(lang))
    return loadedLanguages.get(lang)!

  const messages = await fetchRemoteMessages(lang)
  loadedLanguages.set(lang, messages)
  return messages
}

function applyMessages(messages: MessageCatalog) {
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.getAttribute('data-i18n')
    if (!key)
      return

    const translated = messages[key]
    if (!translated)
      return

    if (element instanceof HTMLMetaElement) {
      element.content = translated
      return
    }

    if (element instanceof HTMLTitleElement) {
      element.textContent = translated
      document.title = translated
      return
    }

    element.innerHTML = translated
  })

  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const key = element.getAttribute('data-i18n-title')
    if (!key)
      return
    const translated = messages[key]
    if (translated)
      element.setAttribute('title', translated)
  })
}

async function loadLanguage(lang: string) {
  if (lang === defaultLocale)
    return

  const messages = await ensureLanguageLoaded(lang)
  applyMessages(messages)
  document.documentElement.lang = lang
}

export async function initRuntimeI18n() {
  const locale = getLocaleFromPathname(window.location.pathname)
  if (locale === defaultLocale)
    return

  try {
    await loadLanguage(locale)
  }
  catch (error) {
    if (error instanceof RemoteLanguageError && error.reason === 'pending') {
      window.setTimeout(() => {
        void initRuntimeI18n()
      }, 10_000)
    }
  }
}

if (typeof window !== 'undefined')
  void initRuntimeI18n()
