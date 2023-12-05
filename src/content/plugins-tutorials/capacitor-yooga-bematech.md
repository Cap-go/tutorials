---
title: "Using capacitor-yooga-bematech Package"
description: "A tutorial on how to use the capacitor-yooga-bematech package in your application."
created_at: "2022-07-18"
published: true
slug: capacitor-yooga-bematech
---

# Using capacitor-yooga-bematech Package

This tutorial will guide you through the process of using the capacitor-yooga-bematech package in your Capacitor application.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js
- npm
- Capacitor (installed globally)

## Installation

To install the capacitor-yooga-bematech package, run the following command in your project directory:

```bash
npm install capacitor-yooga-bematech
```

## Configuration

Once the package is installed, you need to configure it in your Capacitor project.

1. Open the `capacitor.config.json` file in your project's root directory.
2. Add the following entry to the `plugins` array:

```json
{
  "name": "YoogaBematech",
  "packageName": "capacitor-yooga-bematech",
  "syncable": false
}
```

## Usage

Now that the package is installed and configured, you can start using it in your application.

1. Import the `YoogaBematech` plugin into your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';

const { YoogaBematech } = Plugins;
```

2. Use the plugin's methods as needed. Here are a few examples:

```typescript
// Example 1: Printing a text
async function printText(text: string): Promise<void> {
  await YoogaBematech.printText({ text });
}

// Example 2: Opening the cash drawer
async function openCashDrawer(): Promise<void> {
  await YoogaBematech.openCashDrawer();
}

// Example 3: Getting the printer status
async function getPrinterStatus(): Promise<{ connected: boolean, ready: boolean }> {
  const { connected, ready } = await YoogaBematech.getPrinterStatus();
  return { connected, ready };
}
```

## Conclusion

In this tutorial, you have learned how to install, configure, and use the capacitor-yooga-bematech package in your Capacitor application. You are now ready to integrate the Yooga Bematech printer functionalities into your app.

Remember to refer to the official documentation of the capacitor-yooga-bematech package for more detailed information on its features and options.