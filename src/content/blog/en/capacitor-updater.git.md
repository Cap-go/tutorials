---
title: Using @capgo/capacitor-updater Package Tutorial
description: >-
  A step-by-step guide on how to use the @capgo/capacitor-updater package for
  updating Capacitor applications.
created_at: '2021-10-20'
published: true
slug: capacitor-updater.git
locale: en
---

# Using @capgo/capacitor-updater Package Tutorial

This tutorial will guide you through the process of using the @capgo/capacitor-updater package to update Capacitor applications.

## Installation

To install the package, run the following command in your project directory:

```bash
npm install @capgo/capacitor-updater
npx cap sync
```

## Performing Auto-Update

### Step 1: Set Up Auto-Update

1. Create an account on capgo.app and obtain your API key.
2. Login to the CLI by running `npx @capgo/cli@latest init API_KEY`.

For detailed setup instructions, refer to the [Auto Update Documentation](https://capgo.app/docs/plugin/auto-update).

### Step 2: Implement Auto-Update in Your App

Use the following code snippets to inform Capacitor Updater that the update bundle has loaded successfully and to download and set a new version:

```javascript
import { CapacitorUpdater } from '@capgo/capacitor-updater'

// Notify Capacitor Updater that the current update bundle has loaded
CapacitorUpdater.notifyAppReady()

// Download and set a new version
const version = await CapacitorUpdater.download({
  url: 'https://github.com/Cap-go/demo-app/releases/download/0.0.4/dist.zip',
})
await CapacitorUpdater.set(version)
```

## Manual Update Setup

If you prefer manual control over the update process, here's how you can manually update your Capacitor application:

1. Edit your `capacitor.config.json` file and set `autoUpdate` to false.
2. Add the following code to your main application file:

```javascript
import { CapacitorUpdater } from '@capgo/capacitor-updater'

// Notify Capacitor Updater that the current update bundle has loaded
CapacitorUpdater.notifyAppReady()
```

3. To download and set a new version in manual mode, use the following code:

```javascript
const version = await CapacitorUpdater.download({
  url: 'https://github.com/Cap-go/demo-app/releases/download/0.0.4/dist.zip',
})
await CapacitorUpdater.set(version)
```

## Conclusion

In this tutorial, you learned how to use the @capgo/capacitor-updater package to update your Capacitor applications. Whether you prefer auto-updates or manual control, this package provides a seamless way to keep your apps up to date.
```
```
