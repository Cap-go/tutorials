---
title: "Using @anuradev/capacitor-proximity Package"
created_at: "2022-05-15"
description: "This tutorial will guide you through the usage of the @anuradev/capacitor-proximity package for Capacitor."
published: true
slug: "capacitor-proximity"
---

# Using @anuradev/capacitor-proximity Package

In this tutorial, we will explore how to use the `@anuradev/capacitor-proximity` package in your Capacitor project to interact with the device proximity sensor.

## Installation

First, let's install the package by running the following command in your project directory:

```bash
npm install @anuradev/capacitor-proximity
npx cap sync
```

This will install the `@anuradev/capacitor-proximity` package and sync the native project with Capacitor.

## Usage

Once the package is installed, you can start using it in your code. Import the `CapacitorProximity` object from the package:

```typescript
import { CapacitorProximity } from '@anuradev/capacitor-proximity';
```

### Enabling the Proximity Sensor

To enable the proximity sensor, use the `enable()` method:

```typescript
CapacitorProximity.enable()
  .then(() => {
    console.log('Proximity sensor enabled');
  })
  .catch((error) => {
    console.error('Failed to enable proximity sensor', error);
  });
```

### Disabling the Proximity Sensor

To disable the proximity sensor, use the `disable()` method:

```typescript
CapacitorProximity.disable()
  .then(() => {
    console.log('Proximity sensor disabled');
  })
  .catch((error) => {
    console.error('Failed to disable proximity sensor', error);
  });
```

## Conclusion

In this tutorial, we have learned how to install and use the `@anuradev/capacitor-proximity` package in a Capacitor project. We explored how to enable and disable the device proximity sensor using the provided methods.

Now, you can leverage the proximity sensor in your Capacitor app to develop unique and interactive features based on the user's proximity to the device.

Happy coding!