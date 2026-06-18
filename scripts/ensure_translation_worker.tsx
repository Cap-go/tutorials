import keys from '../configs.json'

const accountId = process.env.CLOUDFLARE_ACCOUNT_ID
const token = process.env.CLOUDFLARE_API_TOKEN

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

for (const queue of queues)
  await ensureQueue(queue)

console.log(`Translation API host: ${keys.translation_api_host.prod}`)
