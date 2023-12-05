---
title: "Using mosip-sbi-capacitor-plugin"
description: "A tutorial on how to use the mosip-sbi-capacitor-plugin package for Capacitor"
created_at: "2022-02-23"
published: true
slug: sbi-capacitor-plugin
---

# Using mosip-sbi-capacitor-plugin

The mosip-sbi-capacitor-plugin is a package for Capacitor that provides integration with the State Bank of India (SBI) services. This tutorial will guide you through the process of installing and using the plugin in your Capacitor project.

## Installation

To install the mosip-sbi-capacitor-plugin, follow these steps:

1. Open your project's terminal or command prompt.
2. Navigate to your project's root folder.
3. Run the following command:

```bash
npm install mosip-sbi-capacitor-plugin
```

## Additional Settings

After installing the plugin, you may need to configure some additional settings depending on your platform.

### Android

To configure the plugin for Android, follow these steps:

1. Open your project in Android Studio.
2. Locate the `AndroidManifest.xml` file.
3. Add the following permissions:

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```

### iOS

To configure the plugin for iOS, follow these steps:

1. Open your project in Xcode.
2. Locate the `Info.plist` file.
3. Add the following permissions:

```xml
<key>NSLocationWhenInUseUsageDescription</key>
<string>This app needs access to your location for SBI services.</string>
```

## Usage

Once the plugin is installed and configured, you can use it in your Capacitor project.

### Import the plugin

First, import the plugin in your project:

```typescript
import 'mosip-sbi-capacitor-plugin';
```

### Initialize the plugin

Before using any of the plugin's functionalities, initialize it with your SBI credentials:

```typescript
import { SbiCapacitorPlugin } from 'mosip-sbi-capacitor-plugin';

const sbiPlugin = new SbiCapacitorPlugin();
sbiPlugin.initialize({
  clientId: 'YOUR_CLIENT_ID',
  clientSecret: 'YOUR_CLIENT_SECRET',
});
```

### Perform SBI operations

Once the plugin is initialized, you can perform various SBI operations, such as getting account details or making transactions:

```typescript
// Get account details
const accountDetails = await sbiPlugin.getAccountDetails('ACCOUNT_NUMBER');

// Make a transaction
const transactionResult = await sbiPlugin.makeTransaction({
  fromAccount: 'FROM_ACCOUNT_NUMBER',
  toAccount: 'TO_ACCOUNT_NUMBER',
  amount: 1000,
});
```

## Conclusion

In this tutorial, we learned how to install and use the mosip-sbi-capacitor-plugin package in a Capacitor project. We also saw how to configure the plugin for Android and iOS platforms, and how to perform SBI operations using the plugin's functionalities. Now you can integrate SBI services into your Capacitor app with ease.

Please refer to the official documentation of the mosip-sbi-capacitor-plugin for more details and advanced usage.