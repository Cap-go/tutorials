---
title: "Using @capgo/capacitor-keep-awake Package"
description: "This tutorial will guide you through using the @capgo/capacitor-keep-awake package to prevent devices from dimming or locking the screen."
created_at: 2023-10-02
published: true
slug: capacitor-keep-awake.git
locale: en
---

# Using @capgo/capacitor-keep-awake Package

The @capgo/capacitor-keep-awake package is a Capacitor plugin that prevents devices from dimming or locking the screen. Follow the steps below to learn how to use this package in your Capacitor project.

## Installation

```shell
npm install @capgo/capacitor-keep-awake
npx cap sync
```

## Usage

1. Import the `KeepAwake` module from the package.

```typescript
import { KeepAwake } from '@capgo/capacitor-keep-awake';
```

2. Keep the device awake using the `keepAwake` method.

```typescript
const keepDeviceAwake = async () => {
  await KeepAwake.keepAwake();
};
```

3. Allow the device to sleep normally using the `allowSleep` method.

```typescript
const allowDeviceSleep = async () => {
  await KeepAwake.allowSleep();
};
```

4. Check if the feature is supported on the device using the `isSupported` method.

```typescript
const checkSupport = async () => {
  const result = await KeepAwake.isSupported();
  return result.isSupported;
};
```

5. Check if the device is currently kept awake using the `isKeptAwake` method.

```typescript
const checkAwakeStatus = async () => {
  const result = await KeepAwake.isKeptAwake();
  return result.isKeptAwake;
};
```

By following these simple steps, you can easily integrate the @capgo/capacitor-keep-awake package in your Capacitor project to prevent the device from dimming or locking the screen.
