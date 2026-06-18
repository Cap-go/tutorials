```markdown
---
"title": "Using Keep Awake Plugin with Capacitor",
"description": "A step-by-step tutorial on how to use the @capacitor-community/keep-awake package to prevent devices from dimming or locking the screen.",
"created_at": "2022-01-14",
"published": true,
"slug": "keep-awake.git"
---

# Using Keep Awake Plugin with Capacitor

This tutorial will guide you through the process of using the `@capacitor-community/keep-awake` package to prevent devices from dimming or locking the screen.

## Installation

To begin, install the `@capacitor-community/keep-awake` package by running the following command:

```shell
npm install @capacitor-community/keep-awake
npx cap sync
```

## Usage

1. Import the `KeepAwake` module from `@capacitor-community/keep-awake`:

```typescript
import { KeepAwake } from '@capacitor-community/keep-awake';
```

2. Keeping the screen awake:

```typescript
const keepAwake = async () => {
  await KeepAwake.keepAwake();
};
```

3. Allowing the device to sleep:

```typescript
const allowSleep = async () => {
  await KeepAwake.allowSleep();
};
```

4. Checking if the feature is supported:

```typescript
const isSupported = async () => {
  const result = await KeepAwake.isSupported();
  return result.isSupported;
};
```

5. Checking if the screen is currently kept awake:

```typescript
const isKeptAwake = async () => {
  const result = await KeepAwake.isKeptAwake();
  return result.isKeptAwake;
};
```

This guide covers the basic usage of the `@capacitor-community/keep-awake` package. Feel free to explore the [official documentation](https://www.npmjs.com/package/@capacitor-community/keep-awake) for more advanced usage and options.
```