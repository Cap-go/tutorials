---
title: Using Barcode Scanner with Capacitor
description: "Learn how to integrate the @capacitor-community/barcode-scanner package into your Capacitor project for fast and efficient (QR) barcode scanning."
created_at: 2022-02-15
published: true
slug: barcode-scanner-git
locale: en
---

# Using Barcode Scanner with Capacitor

This tutorial will guide you on how to integrate and use the `@capacitor-community/barcode-scanner` package for efficient barcode scanning in your Capacitor project.

## Installation

To start using the `@capacitor-community/barcode-scanner` package, you can install it using npm:

```bash
npm install @capacitor-community/barcode-scanner
npx cap sync
```

## iOS Configuration

For iOS, make sure to set a usage description in your Info.plist file. You can do this by directly adding it to the Source Code or using Xcode Property List inspector.

## Usage

Once you have installed the package, you can use it in your project. Here's a simple example of how to scan a barcode:

```javascript
import { Plugins } from '@capacitor/core'
const { BarcodeScanner } = Plugins

export default defineComponent({
  setup() {
    const scanBarcode = async () => {
      let result = await BarcodeScanner.scan()
      console.log(result)
    }

    return {
      scanBarcode
    }
  }
})
```

By following these steps, you can easily integrate the barcode scanner functionality into your Capacitor project.
