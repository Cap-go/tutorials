---
title: Using the @capgo/capacitor-ibeacon Package
description: Learn how to integrate the @capgo/capacitor-ibeacon package into your Capacitor app.
created_at: 2022-03-01
published: true
slug: capacitor-ibeacon.git
locale: en
---

# Integrating @capgo/capacitor-ibeacon Package

In this tutorial, we will guide you through the process of integrating the @capgo/capacitor-ibeacon package into your Capacitor app to work with iBeacon technology.

## Step 1: Installation

First, install the package using npm or yarn:

```bash
npm install @capgo/capacitor-ibeacon
```

## Step 2: Configuration

After installation, configure the @capgo/capacitor-ibeacon package by following these steps:

1. Import the package in your project:

```typescript
import '@capacitor/ibeacon';
```

2. Sync the native files by running:

```bash
npx cap sync
```

## Step 3: Usage

Now that you have installed and configured the package, you can start using it in your app. Here's an example of how to scan for iBeacons:

```typescript
import { Plugins } from '@capacitor/core';

const { IBeacon } = Plugins;

// Start iBeacon scan
const result = await IBeacon.startRangingBeacons({
  UUID: 'YOUR_UUID_HERE',
});
```

## Step 4: Handling Events

You can also handle iBeacon events in your app. Here's an example of how to listen for iBeacon sightings:

```typescript
import { Plugins } from '@capacitor/core';

const { IBeacon } = Plugins;

IBeacon.addListener('onIBeaconSighting', (info) => {
  console.log('iBeacon Sighted', info);
});
```

That's it! You have successfully integrated the @capgo/capacitor-ibeacon package into your Capacitor app. Start exploring the capabilities of iBeacon technology in your application.