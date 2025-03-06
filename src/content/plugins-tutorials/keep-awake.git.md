```md
---
"title": "Using @capacitor-community/keep-awake Package",
"description": "This tutorial will guide you on how to use the @capacitor-community/keep-awake package to prevent devices from dimming or locking the screen.",
"created_at": "2023-12-14",
"published": true,
"slug": "keep-awake.git"
---

# Using @capacitor-community/keep-awake Package

## Introduction
The @capacitor-community/keep-awake package is a Capacitor plugin that prevents devices from dimming or locking the screen. This tutorial will walk you through the installation, configuration, and usage of this package.

## Installation
To install the package, run the following command in your project directory:
```shell
npm install @capacitor-community/keep-awake
npx cap sync
```

## Configuration
There is no configuration required for this plugin. 

## Usage
```typescript
import { KeepAwake } from '@capacitor-community/keep-awake';

const keepAwake = async () => {
  await KeepAwake.keepAwake();
};

const allowSleep = async () => {
  await KeepAwake.allowSleep();
};

const isSupported = async () => {
  const result = await KeepAwake.isSupported();
  return result.isSupported;
};

const isKeptAwake = async () => {
  const result = await KeepAwake.isKeptAwake();
  return result.isKeptAwake;
};
```
In the above code snippet, we have defined functions to keep the device awake, allow the device to sleep, check if the feature is supported, and check if the device is being kept awake.

## API
The following methods are available in the API of the @capacitor-community/keep-awake package:

1. `keepAwake()`: Prevents the device from dimming or locking the screen.
2. `allowSleep()`: Allows the device to sleep.
3. `isSupported()`: Checks if the keep awake feature is supported.
4. `isKeptAwake()`: Checks if the device is being kept awake.

This tutorial provides a basic overview of how to use the @capacitor-community/keep-awake package in your Capacitor project. For more detailed information, refer to the official documentation.
```  