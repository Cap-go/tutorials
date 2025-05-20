---
title: Using capacitor-pass-to-wallet package
description: >-
  Generate a markdown tutorial on how to use the capacitor-pass-to-wallet
  package in Capacitor applications
created_at: '2022-01-26'
published: true
slug: capacitor-pass-to-wallet.git.git
locale: en
---

# Using capacitor-pass-to-wallet package

In this tutorial, we will learn how to use the `capacitor-pass-to-wallet` package in Capacitor applications. This package allows you to add .pkpass files to the Apple Wallet in your Ionic projects.

## Installation

To get started, you need to install the `capacitor-pass-to-wallet` package in your Capacitor project. Run the following commands:

```bash
npm install capacitor-pass-to-wallet
npx cap sync
```

## Usage

The `capacitor-pass-to-wallet` package provides two main methods for adding .pkpass files to the Apple Wallet: `addToWallet` and `addMultipleToWallet`. 

### Adding a Single Pass

You can add a single pass to the Apple Wallet using the `addToWallet` method. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
const { CapacitorPassToWallet } = Plugins;

// Convert .pkpass file to base64 string
const passBase64 = '...'; // Base64 string of the .pkpass file

// Add the pass to the Apple Wallet
CapacitorPassToWallet.addToWallet({ base64: passBase64 })
  .then(result => {
    console.log(result.message);
  })
  .catch(error => {
    console.error(error);
  });
```

### Adding Multiple Passes

If you need to add multiple passes to the Apple Wallet, you can use the `addMultipleToWallet` method. Here's an example:

```javascript
// Convert .pkpass files to an array of base64 strings
const passBase64Array = ['...', '...']; // Array of Base64 strings of the .pkpass files

// Add multiple passes to the Apple Wallet
CapacitorPassToWallet.addMultipleToWallet({ base64: passBase64Array })
  .then(result => {
    console.log(result.message);
  })
  .catch(error => {
    console.error(error);
  });
```

## Conclusion

In this tutorial, we covered how to use the `capacitor-pass-to-wallet` package to add .pkpass files to the Apple Wallet in Capacitor applications. You can now enhance your Ionic projects by integrating passes with Apple Wallet functionality.
