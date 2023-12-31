import * as dotenv from 'dotenv'
import keys from '../configs.json' assert { type: 'json' }

dotenv.config()

export const branch = import.meta.env.BRANCH || import.meta.env.GITHUB_HEAD_REF || 'main'

export const getRightKey = (keyname) => {
  if (!keys || !keys[keyname]) return ''
  if (branch === 'development') return keys[keyname].development
  else if (branch === 'local') return keys[keyname].local
  return keys[keyname].prod
}

export const supa_url = getRightKey('supa_url')
export const supa_anon = getRightKey('supa_anon')
