---
title: "Using @gachlab/capacitor-keep-awake-plugin Package"
description: "Learn how to keep the device screen awake using the @gachlab/capacitor-keep-awake-plugin package."
created_at: 2023-01-26
published: true
slug: capacitor-keep-awake-plugin.git
locale: en
---

# Using @gachlab/capacitor-keep-awake-plugin Package

The @gachlab/capacitor-keep-awake-plugin package is designed to keep the device screen awake. This tutorial will guide you through the installation and usage of this plugin.

## Installation

To install the package, you can use npm. Open your terminal and run the following commands:

```bash
npm install @gachlab/capacitor-keep-awake-plugin
npx cap sync
```

## How to Use

### 1. Prevent the Screen from Sleeping

To prevent the device screen from dimming or locking, you can use the `dontAllowSleep()` method provided by the plugin.

```typescript
import { dontAllowSleep } from '@gachlab/capacitor-keep-awake-plugin';

dontAllowSleep().then((result) => {
  console.log('Allow Sleep: ', result.isAllowdSleep);
});
```

### 2. Allow the Screen to Sleep

If you want to allow the device screen to sleep, you can use the `allowSleep()` method.

```typescript
import { allowSleep } from '@gachlab/capacitor-keep-awake-plugin';

allowSleep().then((result) => {
  console.log('Allow Sleep: ', result.isAllowdSleep);
});
```

By following these steps, you can easily keep the device screen awake using the @gachlab/capacitor-keep-awake-plugin package in your Capacitor project.
