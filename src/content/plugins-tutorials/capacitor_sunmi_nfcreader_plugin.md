---
title: "Using Capacitor Plugin Sunmi NFC"
description: "Learn how to use the Capacitor Plugin Sunmi NFC to enable NFC functionality in your Sunmi devices."
created_at: "2022-08-20"
published: true
slug: capacitor_sunmi_nfcreader_plugin
---

# Using Capacitor Plugin Sunmi NFC

The Capacitor Plugin Sunmi NFC is a powerful tool that allows you to utilize NFC capabilities on your Sunmi devices. This tutorial will guide you through the process of integrating and using this plugin in your Ionic Capacitor project.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Sunmi device with NFC support
- Ionic Capacitor project setup
- Basic knowledge of Ionic and Capacitor

## Installation

To install the Capacitor Plugin Sunmi NFC, follow these steps:

1. Open your terminal and navigate to your project directory.

2. Run the following command to install the plugin:

```bash
npm install capacitor-plugin-sunmi-nfc
```

3. Next, you need to sync the plugin with your Capacitor project. Run the following command:

```bash
npx cap sync
```

## Usage

Now that you have installed the plugin, let's see how to use it in your project:

1. Import the plugin in your component file:

```typescript
import { Plugins } from '@capacitor/core';

const { SunmiNfcReaderPlugin } = Plugins;
```

2. Use the plugin methods to perform NFC-related operations. For example, to check if NFC is available on the device, use the `isAvailable` method:

```typescript
const checkNfcAvailability = async () => {
  const { isAvailable } = await SunmiNfcReaderPlugin.isAvailable();
  if (isAvailable) {
    console.log('NFC is available on the device');
  } else {
    console.log('NFC is not available on the device');
  }
};
```

3. You can also listen for NFC tag read events using the `addDataListener` method:

```typescript
const startNfcTagRead = async () => {
  SunmiNfcReaderPlugin.addDataListener((data) => {
    console.log('NFC Tag data:', data);
  });
};
```

4. Don't forget to remove the data listener when it's no longer needed:

```typescript
const stopNfcTagRead = async () => {
  SunmiNfcReaderPlugin.removeDataListener();
};
```

## Conclusion

In this tutorial, you have learned how to integrate and use the Capacitor Plugin Sunmi NFC in your Ionic Capacitor project. You now have the ability to utilize NFC functionality on your Sunmi devices. Explore the plugin documentation for more advanced features and customization options.

Happy coding!