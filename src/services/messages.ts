import sourceMessages from '../../messages/en.json'

export type MessageKey = keyof typeof sourceMessages

export function t(key: MessageKey | string): string {
  return (sourceMessages as Record<string, string>)[key] ?? key
}
