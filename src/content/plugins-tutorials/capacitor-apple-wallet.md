---
title: "Using the capacitor-apple-wallet Package"
description: "This tutorial will guide you through the process of using the capacitor-apple-wallet package to integrate Apple Wallet functionality into your Capacitor app."
created_at: "2023-09-19"
published: true
slug: capacitor-apple-wallet
---

# Using the capacitor-apple-wallet Package

In this tutorial, we will learn how to use the capacitor-apple-wallet package to integrate Apple Wallet functionality into your Capacitor app. The capacitor-apple-wallet package provides a simple interface to interact with the Apple Wallet API and allows you to add passes, update passes, and handle pass-related events.

Let's get started!

## Installation

To start using the capacitor-apple-wallet package, you need to follow these steps:

1. Install the capacitor-apple-wallet package using npm:

```bash
npm install capacitor-apple-wallet
```

2. Sync the native project with Capacitor:

```bash
npx cap sync
```

3. Add the necessary configuration to your `capacitor.config.json` file. Make sure to include the `AppleWallet` plugin:

```json
{
  "plugins": {
    "AppleWallet": {
      "usageDescription": "Access to Apple Wallet"
    }
  }
}
```

4. Build and run your app:

```bash
npx cap build
npx cap open ios
```

## Usage

Now that you have installed the capacitor-apple-wallet package, let's explore how to use its features.

### Adding a Pass

To add a pass to the Apple Wallet, you can use the `addPass` method. Here's an example of how to add a pass:

```typescript
import { Plugins } from '@capacitor/core';

const { AppleWallet } = Plugins;

const passFileUrl = 'https://example.com/pass.pkpass';

AppleWallet.addPass({ url: passFileUrl })
  .then(() => {
    console.log('Pass added successfully');
  })
  .catch((error) => {
    console.error('Failed to add pass', error);
  });
```

### Updating a Pass

If you want to update a pass in the Apple Wallet, you can use the `updatePass` method. Here's an example of how to update a pass:

```typescript
import { Plugins } from '@capacitor/core';

const { AppleWallet } = Plugins;

const passFileUrl = 'https://example.com/pass.pkpass';

AppleWallet.updatePass({ url: passFileUrl })
  .then(() => {
    console.log('Pass updated successfully');
  })
  .catch((error) => {
    console.error('Failed to update pass', error);
  });
```

### Handling Pass-Related Events

The capacitor-apple-wallet package also allows you to listen for pass-related events. You can use the `addListener` method to register an event listener. Here's an example of how to handle a pass-related event:

```typescript
import { Plugins } from '@capacitor/core';

const { AppleWallet } = Plugins;

AppleWallet.addListener('onPassAdded', (pass) => {
  console.log('Pass added', pass);
});

AppleWallet.addListener('onPassUpdated', (pass) => {
  console.log('Pass updated', pass);
});

AppleWallet.addListener('onPassDeleted', (pass) => {
  console.log('Pass deleted', pass);
});
```

That's it! You have learned how to add, update, and handle pass-related events using the capacitor-apple-wallet package.

## Conclusion

In this tutorial, we have explored the process of using the capacitor-apple-wallet package to integrate Apple Wallet functionality into your Capacitor app. We covered the installation process, as well as the usage of adding passes, updating passes, and handling pass-related events. With this knowledge, you can now enhance your app by leveraging the capabilities of Apple Wallet.

Happy coding!