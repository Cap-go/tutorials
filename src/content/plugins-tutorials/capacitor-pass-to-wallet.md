---
title: "Using capacitor-pass-to-wallet Package"
description: "A tutorial on how to use the capacitor-pass-to-wallet package to add .pkpass files to Apple Wallet"
created_at: "2022-11-29"
published: true
slug: "capacitor-pass-to-wallet"
---

# Using capacitor-pass-to-wallet Package

capacitor-pass-to-wallet is a plugin that allows you to add .pkpass files to Apple Wallet. It provides a simple and convenient way to integrate passbook functionality into your Ionic or Capacitor app.

## Install

To install the capacitor-pass-to-wallet package, use the following command:

```bash
npm install capacitor-pass-to-wallet
npx cap sync
```

These commands will install the package and sync the project with Capacitor.

## API

### addToWallet

The `addToWallet` function allows you to add a single .pkpass file to Apple Wallet.

```typescript
addToWallet(options: { base64: string; }) => Promise<{ message: string; }>
```

To use this function, provide the .pkpass file as a base64-encoded string in the `options` parameter.

### addMultipleToWallet

The `addMultipleToWallet` function allows you to add multiple .pkpass files to Apple Wallet.

```typescript
addMultipleToWallet(options: { base64: string[]; }) => Promise<{ message: string; }>
```

To use this function, provide an array of base64-encoded strings representing the .pkpass files in the `options` parameter.

## Example Usage

Here is an example of how to use the capacitor-pass-to-wallet package in an Ionic app:

```typescript
import { CapacitorPassToWallet } from 'capacitor-pass-to-wallet';

// Add a single .pkpass file to Apple Wallet
const addToWallet = async () => {
  const base64String = '...'; // Base64-encoded .pkpass file
  const result = await CapacitorPassToWallet.addToWallet({ base64: base64String });
  console.log(result.message);
};

// Add multiple .pkpass files to Apple Wallet
const addMultipleToWallet = async () => {
  const base64Strings = ['...', '...']; // Array of base64-encoded .pkpass files
  const result = await CapacitorPassToWallet.addMultipleToWallet({ base64: base64Strings });
  console.log(result.message);
};
```

That's it! You can now add .pkpass files to Apple Wallet using the capacitor-pass-to-wallet package in your Ionic or Capacitor app.

For more information, check out the [capacitor-pass-to-wallet GitHub repository](https://github.com/NitnelavAH/IonicAdd2Wallet).

This tutorial was created on November 29, 2022.