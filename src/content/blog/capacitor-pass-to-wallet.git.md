---
title: "Using @belongnet/capacitor-pass-to-wallet Package"
description: "Generate a markdown tutorial for using @belongnet/capacitor-pass-to-wallet package with detailed instructions and examples."
created_at: "2022-01-27"
published: true
slug: capacitor-pass-to-wallet.git
---

## Add Pass File to Apple Wallet with Capacitor-Pass-to-Wallet

In this tutorial, we will explore how to use the **@belongnet/capacitor-pass-to-wallet** package to add .pkpass files to the Apple Wallet using Capacitor in an Ionic application.

### Installation

First, install the package using npm:

```bash
npm install @belongnet/capacitor-pass-to-wallet
npx cap sync
```

### Instructions

#### Single File Addition

To add a single file to the Apple Wallet:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorPassToWallet } = Plugins;

// Encode the .pkpass file to base64
const passFileBase64 = "your_encoded_pkpass_file_as_base64";

CapacitorPassToWallet.addToWallet({ base64: passFileBase64 })
  .then(result => {
    console.log(result.message);
  })
  .catch(error => {
    console.error('Error adding pass to wallet: ', error);
  });
```

#### Multiple Files Addition

To add multiple files to the Apple Wallet:

```typescript
import { Plugins } from '@capacitor/core';
const { CapacitorPassToWallet } = Plugins;

// Encode the .pkpass files to base64
const passFilesBase64 = ["base64_encoded_pass_file_1", "base64_encoded_pass_file_2"];

CapacitorPassToWallet.addMultipleToWallet({ base64: passFilesBase64 })
  .then(result => {
    console.log(result.message);
  })
  .catch(error => {
    console.error('Error adding passes to wallet: ', error);
  });
```

### Example

For a visual guide on using the package, you can check out this [YouTube video](https://youtu.be/FUt2J385yCQ) and the [GitHub repository](https://github.com/NitnelavAH/IonicAdd2Wallet) for a sample project.

Feel free to support the plugin developer by [buying them a coffee](https://paypal.me/nitnelavah?country.x=MX&locale.x=es_XC) if you found this plugin useful in your project.