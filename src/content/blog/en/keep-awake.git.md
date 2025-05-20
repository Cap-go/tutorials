---
title: Using @capacitor-community/keep-awake Package Tutorial
description: >-
  A step-by-step guide on utilizing the @capacitor-community/keep-awake package
  in Capacitor applications.
created_at: '2022-02-01'
published: true
slug: keep-awake.git
locale: en
---

## Using @capacitor-community/keep-awake Package Tutorial

In this tutorial, we will walk through how to use the @capacitor-community/keep-awake package in Capacitor applications. This package allows you to prevent devices from dimming or locking the screen, which can be useful in scenarios where you want to keep the screen awake.

### Installation

First, install the package using npm:

```shell
npm install @capacitor-community/keep-awake
npx cap sync
```

### Usage

Import the `KeepAwake` module in your TypeScript file:

```typescript
import { KeepAwake } from '@capacitor-community/keep-awake';
```

#### Keeping the Screen Awake

To prevent the screen from dimming or locking, use the `keepAwake` method:

```typescript
const keepAwake = async () => {
  await KeepAwake.keepAwake();
};
```

#### Allowing the Screen to Sleep

To allow the screen to dim or lock as usual, use the `allowSleep` method:

```typescript
const allowSleep = async () => {
  await KeepAwake.allowSleep();
};
```

#### Checking Support

You can check if the device supports screen wake locking using the `isSupported` method:

```typescript
const isSupported = async () => {
  const result = await KeepAwake.isSupported();
  return result.isSupported;
};
```

#### Checking if Screen is Kept Awake

To determine if the screen is currently kept awake, use the `isKeptAwake` method:

```typescript
const isKeptAwake = async () => {
  const result = await KeepAwake.isKeptAwake();
  return result.isKeptAwake;
};
```

This concludes our tutorial on using the @capacitor-community/keep-awake package in Capacitor applications.
