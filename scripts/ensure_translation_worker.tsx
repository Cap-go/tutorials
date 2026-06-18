import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import keys from '../configs.json'

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
const token = process.env.CLOUDFLARE_API_TOKEN
const wranglerPath = resolve('cloudflare_workers/translation/wrangler.jsonc')
const env = process.env.TRANSLATION_WORKER_ENV || 'prod'

if (!accountId || !token) {
  console.log('Skipping translation worker ensure: missing Cloudflare credentials')
  process.exit(0)
}

const queues = [
  'capgo-tutorials-prod-translation-messages',
  'capgo-tutorials-local-translation-messages',
]

async function ensureQueue(name: string) {
  const list = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/queues`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(r => r.json()) as { result?: Array<{ queue_name: string }> }

  if (list.result?.some(q => q.queue_name === name)) {
    console.log(`Queue exists: ${name}`)
    return
  }

  const created = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/queues`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ queue_name: name }),
  }).then(r => r.json())

  if (!created.success)
    throw new Error(`Failed to create queue ${name}: ${JSON.stringify(created)}`)

  console.log(`Created queue: ${name}`)
}


async function patchDatabaseId(databaseName: string) {
  const config = readFileSync(wranglerPath, 'utf8')
  const envBlock = `"${env}"`
  const envIndex = config.indexOf(envBlock)
  if (envIndex === -1)
    throw new Error(`Missing env block: ${env}`)

  const dbNameNeedle = `"database_name": "${databaseName}"`
  const dbNameIndex = config.indexOf(dbNameNeedle, envIndex)
  if (dbNameIndex === -1)
    throw new Error(`Missing database_name ${databaseName} in ${env}`)

  const afterDbName = config.slice(dbNameIndex, dbNameIndex + 400)
  if (afterDbName.includes('"database_id"'))
    return true

  const list = await fetch(`https://api.cloudflare.com/client/v4/accounts/${accountId}/d1/database`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(r => r.json()) as { success?: boolean, result?: Array<{ name: string, uuid: string }>, errors?: unknown }

  if (!list.success)
    throw new Error(`d1 list failed: ${JSON.stringify(list.errors || list)}`)

  const match = list.result?.find(db => db.name === databaseName)
  if (!match?.uuid)
    return false

  const insertAt = dbNameIndex + dbNameNeedle.length
  const patched = `${config.slice(0, insertAt)},
          "database_id": "${match.uuid}"${config.slice(insertAt)}`
  writeFileSync(wranglerPath, patched)
  console.log(`Patched database_id for ${databaseName}: ${match.uuid}`)
  return true
}

for (const queue of queues)
  await ensureQueue(queue)

const databaseName = env === 'local' ? 'capgo_translation_tutorials_local' : 'capgo_translation_tutorials'
await patchDatabaseId(databaseName)
console.log(`Translation API host: ${keys.translation_api_host.prod}`)
