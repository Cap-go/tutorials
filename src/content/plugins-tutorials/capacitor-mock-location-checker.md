---
title: "Using capacitor-mock-location-checker package"
description: "A tutorial on how to use the capacitor-mock-location-checker package to check for mock locations in your app."
created_at: "2021-10-28"
published: true
slug: "capacitor-mock-location-checker"
---

# Using capacitor-mock-location-checker package

The `capacitor-mock-location-checker` package is a Capacitor plugin that allows you to check for mock locations in your app. This tutorial will guide you through the installation and usage of the plugin.

## Installation

To install the `capacitor-mock-location-checker` package, run the following command:

```bash
npm install capacitor-mock-location-checker
npx cap sync
```

## API

### check(options: { value: string; }): Promise<{ value: string; }>

This method checks if the device is using a mock location. It takes an options object with a `value` property and returns a promise that resolves to an object with a `value` property.

Example usage:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorMockLocationChecker } = Plugins;

async function checkMockLocation() {
  try {
    const result = await CapacitorMockLocationChecker.check({ value: 'check' });
    console.log(result.value);
    // Output: 'Mock location detected'
  } catch (error) {
    console.error(error);
  }
}
```

### echo(options: { value: string; }): Promise<{ value: string; }>

This method echoes the input value. It takes an options object with a `value` property and returns a promise that resolves to an object with a `value` property.

Example usage:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorMockLocationChecker } = Plugins;

async function echoValue() {
  try {
    const result = await CapacitorMockLocationChecker.echo({ value: 'Hello, World!' });
    console.log(result.value);
    // Output: 'Hello, World!'
  } catch (error) {
    console.error(error);
  }
}
```

---

That's it! You've learned how to install and use the `capacitor-mock-location-checker` package in your Capacitor app.