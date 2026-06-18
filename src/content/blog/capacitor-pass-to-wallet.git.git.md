```markdown
---
title: "How to Use capacitor-pass-to-wallet Package"
description: "Step-by-step tutorial on adding .pkpass file to Apple Wallet using capacitor-pass-to-wallet package."
created_at: "2023-10-24"
published: true
slug: capacitor-pass-to-wallet.git.git
---

# How to Use capacitor-pass-to-wallet Package

The `capacitor-pass-to-wallet` package allows you to easily add .pkpass file to Apple Wallet in your Capacitor project. Follow the steps below to integrate this functionality into your project:

## Installation

```bash
npm install capacitor-pass-to-wallet
npx cap sync
```

## Usage

### Adding a Single Pass to Wallet

Use the `addToWallet` method to add a single pass to the Apple Wallet.

```typescript
import { Plugins } from '@capacitor/core';

const { PassToWallet } = Plugins;

const base64String = 'BASE64 STRING OF THE .pkpass FILE';

PassToWallet.addToWallet({ base64: base64String })
  .then(res => {
    console.log(res.message);
  })
  .catch(err => {
    console.error(err);
  });
```

### Adding Multiple Passes to Wallet

To add multiple passes to the Wallet, utilize the `addMultipleToWallet` method.

```typescript
import { Plugins } from '@capacitor/core';

const { PassToWallet } = Plugins;

const base64Strings = ['BASE64 STRING OF PASS 1', 'BASE64 STRING OF PASS 2', 'BASE64 STRING OF PASS 3'];

PassToWallet.addMultipleToWallet({ base64: base64Strings })
  .then(res => {
    console.log(res.message);
  })
  .catch(err => {
    console.error(err);
  });
```

This tutorial provides a simple guide on how to use the `capacitor-pass-to-wallet` package to add .pkpass files to Apple Wallet in your Capacitor project.
```