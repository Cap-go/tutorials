---
title: "Using the Capacitor BlinkID Package"
description: "Learn how to integrate the Capacitor BlinkID package into your app"
created_at: "2022-01-10"
published: true
slug: "capacitor-blinkid"
---

# Using the Capacitor BlinkID Package

In this tutorial, we will walk you through the steps to integrate the Capacitor BlinkID package into your Capacitor app. The Capacitor BlinkID package allows you to perform scanning and recognition of various types of identification documents such as passports, driver's licenses, and ID cards.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor installed in your app (`npm install --save @capacitor/core @capacitor/cli`).
- An existing Capacitor app or a new one created using `npx @capacitor/cli create`.
- A valid license for BlinkID SDK from Microblink. You can obtain a trial license or purchase it on their website.

## Installation

1. Install the Capacitor BlinkID package:

```bash
npm install --save capacitor-blinkid
npx cap sync
```

2. Copy the relevant BlinkID resources to your Capacitor project:

```bash
npx cap copy
```

3. Register the plugin in your `src/app.ts` file:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorBlinkID } = Plugins;
```

## Usage

The Capacitor BlinkID package provides various methods for performing document scanning and recognition. Below are a few examples:

### 1. Scanning and Recognizing a Driver's License

```typescript
const result = await CapacitorBlinkID.scanID({
  licenseKey: 'YOUR_BLINKID_LICENSE_KEY',
  documentType: 'DRIVER_LICENSE',
});

console.log('Scanning result:', result);
```

### 2. Scanning and Recognizing a Passport

```typescript
const result = await CapacitorBlinkID.scanID({
  licenseKey: 'YOUR_BLINKID_LICENSE_KEY',
  documentType: 'PASSPORT',
});

console.log('Scanning result:', result);
```

### 3. Scanning and Recognizing an ID Card

```typescript
const result = await CapacitorBlinkID.scanID({
  licenseKey: 'YOUR_BLINKID_LICENSE_KEY',
  documentType: 'ID_CARD',
});

console.log('Scanning result:', result);
```

Make sure to replace `'YOUR_BLINKID_LICENSE_KEY'` with your actual BlinkID license key.

## Conclusion

In this tutorial, we have learned how to integrate the Capacitor BlinkID package into your Capacitor app. We have covered the installation process, registration of the plugin, and provided examples of scanning and recognizing different types of identification documents.

Now you can leverage the power of the Capacitor BlinkID package to enhance your app's functionality with document scanning and recognition capabilities.