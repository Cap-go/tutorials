---
title: "Using @capacitor-community/keep-awake Package"
description: "Learn how to use the @capacitor-community/keep-awake package to prevent devices from dimming or locking the screen."
created_at: "2021-10-12"
published: true
slug: keep-awake
---

# Using @capacitor-community/keep-awake Package

In this tutorial, we will explore how to use the `@capacitor-community/keep-awake` package to prevent devices from dimming or locking the screen. The package is a Capacitor plugin that provides functionalities to keep the screen awake and allow the screen to sleep. 

## Installation

First, let's install the package using npm:

```shell
npm install @capacitor-community/keep-awake
npx cap sync
```

## Usage

Import the `KeepAwake` object from the `@capacitor-community/keep-awake` package. This object exposes several methods that allow you to interact with the device's screen:

```typescript
import { KeepAwake } from '@capacitor-community/keep-awake';
```

### Keeping the Screen Awake

To keep the screen awake and prevent it from dimming or locking, use the `keepAwake()` method:

```typescript
const keepAwake = async () => {
  await KeepAwake.keepAwake();
};
```

### Allowing the Screen to Sleep

To allow the screen to sleep, use the `allowSleep()` method:

```typescript
const allowSleep = async () => {
  await KeepAwake.allowSleep();
};
```

### Checking if the Feature is Supported

To check if the device supports preventing the screen from dimming or locking, use the `isSupported()` method:

```typescript
const isSupported = async () => {
  const result = await KeepAwake.isSupported();
  return result.isSupported;
};
```

### Checking if the Screen is Kept Awake

To check if the screen is currently kept awake, use the `isKeptAwake()` method:

```typescript
const isKeptAwake = async () => {
  const result = await KeepAwake.isKeptAwake();
  return result.isKeptAwake;
};
```

## Conclusion

In this tutorial, we learned how to use the `@capacitor-community/keep-awake` package to prevent devices from dimming or locking the screen. We explored the various methods provided by the package to keep the screen awake, allow the screen to sleep, and check the feature's support and current status. By using this package, you can ensure that the device's screen stays awake when necessary, providing a better user experience for your application or game.