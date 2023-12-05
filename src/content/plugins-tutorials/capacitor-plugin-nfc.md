---
title: "Using capacitor-plugin-nfc"
description: "A tutorial on how to use the capacitor-plugin-nfc package"
created_at: "2022-08-10"
published: true
slug: "capacitor-plugin-nfc"
---

# Using capacitor-plugin-nfc

In this tutorial, we will learn how to use the capacitor-plugin-nfc package to interact with NFC (Near Field Communication) functionality in your Capacitor app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor
- Capacitor CLI
- capacitor-plugin-nfc package

If you haven't installed Capacitor and Capacitor CLI, you can do so by running the following command:

```shell
npm install -g @capacitor/core @capacitor/cli
```

To install the capacitor-plugin-nfc package, run:

```shell
npm install capacitor-plugin-nfc
```

## Adding the Plugin to Your Project

To add the capacitor-plugin-nfc plugin to your Capacitor project, follow these steps:

1. Generate the plugin using the Capacitor CLI:

   ```shell
   npx cap plugin:generate
   ```

   Choose a suitable name for the plugin, such as "capacitor-plugin-nfc", and provide other required information.

2. Link the plugin to your project:

   ```shell
   npm install capacitor-plugin-nfc
   ```

   This will link the plugin to your project and make it available for usage.

## Using the Plugin

Once you have added the capacitor-plugin-nfc plugin to your project, you can start using it to interact with NFC functionality. Below is an example of how to use some of its functions:

```typescript
import { Plugins } from '@capacitor/core';

const { NfcReaderPlugin } = Plugins;

// Check if NFC is available on the device
const isNfcAvailable = async () => {
  const { available } = await NfcReaderPlugin.isAvailable();
  console.log('NFC is available:', available);
};

// Start reading NFC tags
const readNfcTags = () => {
  NfcReaderPlugin.startReading().then(tag => {
    console.log('NFC tag data:', tag);
  }).catch(error => {
    console.error('Error reading NFC tag:', error);
  });
};

// Stop reading NFC tags
const stopNfcReading = () => {
  NfcReaderPlugin.stopReading().then(() => {
    console.log('NFC reading stopped');
  }).catch(error => {
    console.error('Error stopping NFC reading:', error);
  });
};

// Listen for NFC tag detected events
NfcReaderPlugin.onTagDetected().subscribe(tag => {
  console.log('NFC tag detected:', tag);
});
```

The above code demonstrates how to check NFC availability, start reading NFC tags, stop reading NFC tags, and listen for NFC tag detected events using the capacitor-plugin-nfc package.

## Conclusion

In this tutorial, we have learned how to use the capacitor-plugin-nfc package to interact with NFC functionality in a Capacitor app. We covered how to add the plugin to your project and demonstrated some of its key functions.

Now you can incorporate NFC capabilities into your Capacitor app using the capacitor-plugin-nfc package. Happy coding!