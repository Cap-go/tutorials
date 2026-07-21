---
title: Implementing Channel-Based OTA Deployment with Capgo
description: Learn how to use Capgo channels to ship updates to specific user groups — beta testers, internal teams, or regional rollouts — before releasing to everyone.
---

# Implementing Channel-Based OTA Deployment with Capgo

Over-the-air (OTA) updates let you ship fixes and features to users instantly, without an app store review. But shipping every update to every user at once is risky. **Channels** let you control exactly who gets what — so you can test updates with a small group before rolling out to everyone.

In this tutorial you will set up a multi-channel deployment pipeline with Capgo: a `development` channel for your team, a `beta` channel for early adopters, and a `production` channel for everyone else.

---

## What You Will Build

A deployment pipeline with three channels:

- **development** — internal team only, updated on every commit
- **beta** — opt-in users, updated after internal sign-off
- **production** — all users, updated after beta validation

---

## Prerequisites

- A Capacitor app (Ionic, React Native via Capacitor, or plain Capacitor)
- Node.js >= 18
- A Capgo account ([capgo.app](https://capgo.app))

Authenticate the Capgo CLI once before running channel/bundle commands:

---

## Step 1 — Install the Capgo Plugin

```bash
npm install @capgo/capacitor-updater
npx cap sync
```

Initialize the plugin in your app's entry file:

```typescript
import { CapacitorUpdater } from "@capgo/capacitor-updater"

// Call this as early as possible so Capgo knows the app launched successfully
CapacitorUpdater.notifyAppReady()
```

---

## Step 2 — Configure the Plugin

In `capacitor.config.ts`, add the updater configuration:

```typescript
import { CapacitorConfig } from "@capacitor/cli"

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "My App",
  plugins: {
    CapacitorUpdater: {
      autoUpdate: true,
    },
  },
}

export default config
```

---

## Step 3 — Create Your Channels

Log in to the Capgo dashboard at [web.capgo.app](https://web.capgo.app) and navigate to your app.

Under **Channels**, create three channels:

- `development` — disable auto-update (manual assignment only)
- `beta` — enable auto-update, set rollout to 100%
- `production` — enable auto-update, set rollout to 100%

Alternatively, use the CLI:

```bash
npx @capgo/cli channel add development
npx @capgo/cli channel add beta
npx @capgo/cli channel add production
```

---

## Step 4 — Upload Bundles to Specific Channels

Build your web assets and upload to the target channel:

```bash
# Build
npm run build

# Upload to development channel (internal testing)
npx @capgo/cli bundle upload --channel development

# After internal sign-off, promote to beta
npx @capgo/cli bundle upload --channel beta

# After beta validation, promote to production
npx @capgo/cli bundle upload --channel production
```

To promote an existing bundle from one channel to another without re-uploading:

```bash
npx @capgo/cli bundle set <bundle-version> --channel production
```

---

## Step 5 — Assign Devices to Channels

### Self-assignment (let users opt in)

Enable self-assignment on the `beta` channel in the Capgo dashboard, then in your app:

```typescript
import { CapacitorUpdater } from "@capgo/capacitor-updater"

// Let the user opt into beta
async function joinBeta() {
  await CapacitorUpdater.setChannel({ channel: "beta" })
  console.log("Joined beta channel")
}

// Return to production
async function leaveBeta() {
  await CapacitorUpdater.setChannel({ channel: "production" })
  console.log("Left beta channel")
}
```

### Forced assignment (assign from your backend)

Use the Capgo API to assign a device to a channel from your server:

```typescript
// Server-side example (Node.js)
await fetch(
  `https://api.capgo.app/channel_devices`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${CAPGO_API_KEY}`,
    },
    body: JSON.stringify({
      app_id: "com.example.app",
      device_id: deviceId,
      channel_id: "beta",
    }),
  }
)
```

---

## Step 6 — Check the Active Channel

To display the current channel to your users (e.g. in a settings screen):

```typescript
import { CapacitorUpdater } from "@capgo/capacitor-updater"

async function getCurrentChannel(): Promise<string> {
  const channel = await CapacitorUpdater.getChannel()
  return channel.channel ?? "production"
}
```

---

## Step 7 — Automate with CI/CD

Add this to your GitHub Actions workflow to auto-deploy on every push:

```yaml
# .github/workflows/deploy.yml
name: Deploy OTA Update

on:
  push:
    branches:
      - main        # → development channel
      - beta        # → beta channel
      - production  # → production channel

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Determine channel
        id: channel
        run: |
          if [ "${{ github.ref_name }}" = "main" ]; then
            echo "name=development" >> $GITHUB_OUTPUT
          elif [ "${{ github.ref_name }}" = "beta" ]; then
            echo "name=beta" >> $GITHUB_OUTPUT
          else
            echo "name=production" >> $GITHUB_OUTPUT
          fi

      - name: Upload to Capgo
        run: npx @capgo/cli bundle upload --channel ${{ steps.channel.outputs.name }}
        env:
          CAPGO_TOKEN: ${{ secrets.CAPGO_TOKEN }}
```

Add your `CAPGO_TOKEN` (from the Capgo dashboard → API keys) as a GitHub secret.

---

## Step 8 — Monitor Your Rollout

In the Capgo dashboard, navigate to **Statistics** to monitor:

- **Active installs** per channel
- **Update success rate** — percentage of devices that applied the update successfully
- **Rollback events** — automatic rollbacks triggered when an update crashes on launch

If the success rate drops below your threshold, disable the channel bundle immediately:

```bash
npx @capgo/cli bundle disable <bundle-version> --channel beta
```

Devices that haven't updated yet will stop receiving the bad bundle and fall back to the previous version.

---

## Best Practices

**Never skip the development channel.** Even a one-line change can introduce a regression. Always validate internally first.

**Keep beta small.** 5–10% of your user base is enough to catch most issues before full rollout.

**Use semantic versioning for bundles.** Tag your bundles with the same version as your app release (e.g. `1.4.2-ota.1`) so issues are easy to trace.

**Set a rollback threshold.** In the Capgo dashboard, configure automatic rollback if the crash rate exceeds a percentage — this protects production users automatically.

---

## Summary

You now have a fully automated channel-based OTA pipeline:

1. Installed and configured `@capgo/capacitor-updater`
2. Created `development`, `beta`, and `production` channels
3. Set up manual and self-assignment for channel membership
4. Automated deployment with GitHub Actions
5. Enabled monitoring and rollback

For further reading see the [Capgo plugin configuration reference](/docs/plugin/settings/) and the [CI/CD integration guide](/docs/cli/commands/).
