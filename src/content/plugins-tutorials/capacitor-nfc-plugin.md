---
title: "Using Capacitor NFC Plugin"
description: "Learn how to use the Capacitor NFC plugin to access NFC functionality in your mobile app."
created_at: "2022-06-29"
published: true
slug: capacitor-nfc-plugin
---

# Using Capacitor NFC Plugin

This tutorial will guide you through the steps of using the Capacitor NFC plugin to access NFC functionality in your mobile app.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor installed in your project.
- A compatible device with NFC support.

## Installation

To install the Capacitor NFC plugin, run the following command in your project directory:

```bash
npm install capacitor-nfc
```

## Setup

1. Import the `NFC` module from the `capacitor-nfc` package in your JavaScript/TypeScript file:

```javascript
import { NFC } from 'capacitor-nfc';
```

2. Create an instance of `NFC`:

```javascript
const nfc = new NFC();
```

## Reading NFC Tags

To read NFC tags, follow these steps:

1. Request permission to access NFC functionality:

```javascript
nfc.checkNfcEnabled().then(enabled => {
  if (enabled) {
    // NFC is enabled
    nfc.requestNfcPermission().then(permission => {
      if (permission === 'granted') {
        // NFC permission granted
        nfc.addNfcTagDiscoveredListener().subscribe(tag => {
          // Tag discovered, handle it
          console.log(tag);
        });
      }
    });
  }
});
```

2. Start listening for NFC tag discoveries:

```javascript
nfc.addNfcTagDiscoveredListener().subscribe(tag => {
  // Tag discovered, handle it
  console.log(tag);
});
```

## Writing NFC Tags

To write data to NFC tags, follow these steps:

1. Request permission to access NFC functionality:

```javascript
nfc.checkNfcEnabled().then(enabled => {
  if (enabled) {
    // NFC is enabled
    nfc.requestNfcPermission().then(permission => {
      if (permission === 'granted') {
        // NFC permission granted
        // Write data to NFC tag
        const data = 'Hello NFC!';
        nfc.writeNfcTag(data).then(success => {
          if (success) {
            console.log('Data written to NFC tag successfully.');
          } else {
            console.error('Failed to write data to NFC tag.');
          }
        });
      }
    });
  }
});
```

## Conclusion

In this tutorial, you learned how to use the Capacitor NFC plugin to read and write NFC tags in your mobile app. You also learned how to request permission to access NFC functionality and handle NFC tag discoveries. Now, you can implement NFC functionality in your app and explore various use cases.

Remember to test your app on a device with NFC support to ensure proper functionality. Enjoy exploring the possibilities of NFC in your Capacitor app!
