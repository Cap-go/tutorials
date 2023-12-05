---
title: "Using the @capgo/capacitor-flash Package"
description: "This tutorial will guide you through the steps to use the @capgo/capacitor-flash package in your Capacitor app."
created_at: "2022-09-28"
published: true
slug: "capacitor-flash"
---

# Using the @capgo/capacitor-flash Package

The @capgo/capacitor-flash package allows you to control the device's flashlight, making it easy to integrate flashlight functionality into your Capacitor app.

Follow the steps below to start using the @capgo/capacitor-flash package in your project:

## Installation

1. Open your terminal and navigate to your Capacitor app's root directory.
2. Run the following command to install the package:

```bash
npm install @capgo/capacitor-flash
```

## Configuration

1. Open your Capacitor configuration file (`capacitor.config.json`) located in the root directory of your app.
2. Add the following configuration entry under the `plugins` section:

```json
{
  "name": "@capgo/capacitor-flash",
  "enabled": true
}
```

## Usage

1. Import the `Flashlight` module from the @capgo/capacitor-flash package in your TypeScript file:

```typescript
import { Flashlight } from '@capgo/capacitor-flash';
```

2. Use the `Flashlight` module to control the flashlight. Here are some examples:

- Turn the flashlight on:

```typescript
Flashlight.turnOn();
```

- Turn the flashlight off:

```typescript
Flashlight.turnOff();
```

- Check if the flashlight is available on the device:

```typescript
const isAvailable = Flashlight.isAvailable();
console.log(`Flashlight is ${isAvailable ? 'available' : 'not available'}`);
```

That's it! You have successfully integrated the @capgo/capacitor-flash package into your Capacitor app.

Feel free to explore the official documentation of the package for more advanced usage and options.

Remember to test your app on different devices to ensure compatibility and handle potential error scenarios.

Happy coding!