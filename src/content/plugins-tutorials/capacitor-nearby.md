---
title: "Using Capacitor Nearby Package"
description: "This tutorial will guide you through the process of using the Capacitor Nearby package in your app."
created_at: "2022-12-01"
published: true
slug: "capacitor-nearby"
---

# Using Capacitor Nearby Package

In this tutorial, we will explore how to use the Capacitor Nearby package in your Capacitor app. The Capacitor Nearby package allows you to discover and communicate with nearby devices using Bluetooth Low Energy (BLE) technology.

## Prerequisites

Before we begin, make sure you have the following installed:

1. Capacitor CLI: You can install it globally using the following command:

```
npm install -g @capacitor/cli
```

2. A Capacitor app project: If you don't have an existing project, you can create one using the following command:

```
npx @capacitor/cli create
```

## Installation

To install the Capacitor Nearby package in your Capacitor app, run the following command:

```
npm install capacitor-nearby
```

## Usage

Once the Capacitor Nearby package is installed, you can use it in your app as follows:

1. Import the `Nearby` module from `capacitor-nearby` in your TypeScript code:

```typescript
import { Nearby } from 'capacitor-nearby';
```

2. Initialize the `Nearby` module in your app, typically in the `ngOnInit` method of your main component:

```typescript
ngOnInit() {
  Nearby.initialize();
}
```

3. Use the various methods provided by the `Nearby` module to discover and communicate with nearby devices. For example, to start a BLE scan:

```typescript
Nearby.startBleScan()
  .then((result) => {
    console.log('Scan successful:', result);
  })
  .catch((error) => {
    console.error('Scan failed:', error);
  });
```

4. Implement the necessary callbacks and event listeners to handle the results and events from the nearby devices.

## Conclusion

In this tutorial, we have learned how to use the Capacitor Nearby package to discover and communicate with nearby devices in your Capacitor app. You can now incorporate this package to build exciting features such as proximity-based interactions or device synchronization. Happy coding!

Please note that this tutorial assumes basic knowledge of Capacitor and TypeScript. For more detailed information and advanced usage, refer to the official documentation of the Capacitor Nearby package.

Remember to check the Capacitor Nearby GitHub repository for any updates or additional features: [https://github.com/your-github-username/capacitor-nearby](https://github.com/your-github-username/capacitor-nearby).