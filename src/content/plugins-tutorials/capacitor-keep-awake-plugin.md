---
"title": "Using Capacitor Keep Awake Plugin",
"description": "A tutorial on how to use the @gachlab/capacitor-keep-awake-plugin package to keep the device screen awake.",
"created_at": "2023-12-02",
"published": true,
"slug": "capacitor-keep-awake-plugin"
---

# Using Capacitor Keep Awake Plugin

This tutorial will guide you on how to use the `@gachlab/capacitor-keep-awake-plugin` package to keep the device screen awake.

## Installation

To begin, install the package using npm:

```bash
npm install @gachlab/capacitor-keep-awake-plugin
npx cap sync
```

## API

The package provides the following API methods:

### `dontAllowSleep()`

```typescript
dontAllowSleep() => Promise<{ isAllowdSleep: boolean; }>
```

This method prevents the device from going to sleep.

### `allowSleep()`

```typescript
allowSleep() => Promise<{ isAllowdSleep: boolean; }>
```

This method allows the device to go to sleep.

## Example Usage

```typescript
import { dontAllowSleep, allowSleep } from '@gachlab/capacitor-keep-awake-plugin';

const keepAwake = async () => {
  await dontAllowSleep();
}

const allowDeviceSleep = async () => {
  await allowSleep();
}
```

By using the `@gachlab/capacitor-keep-awake-plugin` package, you can control when the device screen stays awake or goes to sleep.