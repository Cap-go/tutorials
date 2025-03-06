---
title: "Using capacitor-pass-to-wallet package"
description: "Tutorial on how to use the capacitor-pass-to-wallet package to add .pkpass files to Apple Wallet"
created_at: "2023-10-23"
published: true
slug: capacitor-pass-to-wallet.git.git
---

# Using capacitor-pass-to-wallet package

This tutorial will guide you on how to utilize the capacitor-pass-to-wallet package to add .pkpass files to Apple Wallet in your project.

## Installation

To start using the capacitor-pass-to-wallet package, follow these steps:

```bash
npm install capacitor-pass-to-wallet
npx cap sync
```

## API Usage

### addToWallet

The `addToWallet` method allows adding a single .pkpass file to the Apple Wallet. Simply provide the file in base64 format.

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPassToWallet } = Plugins;

const filebase64 = 'BASE64_STRING_OF_PASS_FILE';

CapacitorPassToWallet.addToWallet({ base64: filebase64 })
  .then(res => {
    console.log(res.message);
  })
  .catch(err => {
    console.error(err);
  });
```

### addMultipleToWallet

If you want to add multiple .pkpass files to the Apple Wallet simultaneously, you can use the `addMultipleToWallet` method.

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorPassToWallet } = Plugins;

const filesBase64 = ['BASE64_STRING_OF_PASS_FILE_1', 'BASE64_STRING_OF_PASS_FILE_2'];

CapacitorPassToWallet.addMultipleToWallet({ base64: filesBase64 })
  .then(res => {
    console.log(res.message);
  })
  .catch(err => {
    console.error(err);
  });
```

By following these steps and using the provided API methods, you can easily integrate the capacitor-pass-to-wallet package into your project to add .pkpass files to Apple Wallet.