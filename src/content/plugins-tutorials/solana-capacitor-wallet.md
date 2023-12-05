---
title: "Using the Solana Mobile Wallet Capacitor Package"
description: "A tutorial on how to use the solana-mobile-wallet-capacitor package to build mobile apps on Solana using Capacitor."
created_at: "2022-09-20"
published: true
slug: solana-capacitor-wallet
---

# Using the Solana Mobile Wallet Capacitor Package

The solana-mobile-wallet-capacitor package is a plugin that allows developers to access the native Android functionality provided in the Solana Mobile SDK when building web apps with Capacitor. In this tutorial, we will guide you through the process of using the package to build mobile apps on Solana using Capacitor.

## Prerequisites

Before getting started, make sure you have the following:

- Capacitor installed in your project. You can install it by running `npm install @capacitor/core @capacitor/cli`.

## Installation

To install the solana-mobile-wallet-capacitor package, run the following command:

```bash
npm install solana-mobile-wallet-capacitor
```

## Importing the Plugin

Once installed, you can import the solana-mobile-wallet-capacitor plugin into your project. Open your project's `src` folder and locate the `capacitor.ts` or `capacitor.plugin.ts` file. Import the plugin by adding the following line:

```typescript
import { SolanaMobileWalletCapacitor } from 'solana-mobile-wallet-capacitor';
```

## Initializing the Plugin

Next, you need to initialize the SolanaMobileWalletCapacitor plugin. Locate the `initializePlugins` function in your `capacitor.ts` or `capacitor.plugin.ts` file and add the following line:

```typescript
import { SolanaMobileWalletCapacitor } from 'solana-mobile-wallet-capacitor';

// Inside the initializePlugins function
export async function initializePlugins() {
  // Other plugin initialization code

  // Initialize the Solana Mobile Wallet Capacitor plugin
  const solanaMobileWallet = new SolanaMobileWalletCapacitor();
  await solanaMobileWallet.init();
}
```

## Using the Plugin Methods

The solana-mobile-wallet-capacitor package provides various methods for interacting with Solana's mobile wallet functionality. Here's an example of how to use the `connectToWallet` method to connect to a Solana wallet:

```typescript
import { SolanaMobileWalletCapacitor } from 'solana-mobile-wallet-capacitor';

const solanaMobileWallet = new SolanaMobileWalletCapacitor();

async function connectToWallet() {
  try {
    const isConnected = await solanaMobileWallet.connectToWallet();
    if (isConnected) {
      console.log('Successfully connected to Solana wallet');
      // Perform further actions after successful connection
    } else {
      console.log('Failed to connect to Solana wallet');
      // Handle connection failure
    }
  } catch (error) {
    console.error('Error connecting to Solana wallet:', error);
    // Handle error
  }
}
```

Refer to the [API documentation](https://github.com/nolsonlabs/solana-capacitor-wallet/blob/main/API.md) of the solana-mobile-wallet-capacitor package for more information on available methods and their usage.

## Conclusion

In this tutorial, we walked through the process of using the solana-mobile-wallet-capacitor package to build mobile apps on Solana using Capacitor. We covered the installation steps, how to import and initialize the plugin, as well as an example of using one of the plugin methods.

Feel free to explore the solana-mobile-wallet-capacitor package and experiment with other methods to build powerful mobile apps on Solana using Capacitor.