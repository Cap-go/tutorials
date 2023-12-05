---
title: "Using the capacitor-plugin-sumup"
description: "A tutorial on how to use the capacitor-plugin-sumup package to integrate SumUp payment functionality into your Capacitor app."
created_at: "2021-09-29"
published: true
slug: "capacitor-plugin-sumup"
---

# Using the capacitor-plugin-sumup

In this tutorial, we will learn how to integrate SumUp payment functionality into your Capacitor app using the capacitor-plugin-sumup package. The SumUp plugin provides a simple and convenient way to accept card payments in your mobile application.

## Prerequisites

Before getting started, make sure you have the following prerequisites:

1. Capacitor installed globally on your machine.
2. An existing Capacitor project, or create a new one with the following command:

```bash
npx @capacitor/cli create
```

## Installation

To begin, let's install the capacitor-plugin-sumup package in our project:

```bash
npm install capacitor-plugin-sumup
```

## Android Configuration

### 1. Add the SumUp SDK to your project

To use SumUp on Android, we need to add the SumUp SDK as a dependency to our Android project. Follow these steps:

1. Open your Android project in Android Studio.

2. Go to `File` > `Project Structure`.

3. Under `Modules`, select your app module.

4. Click on the `Dependencies` tab.

5. Click the `+` button and select `Library Dependency`.

6. Search for `sumup` and click the `Add` button next to it.

7. Click `OK` to add the dependency.

### 2. Configure your SumUp credentials

Next, we need to configure the SumUp credentials in our Android project. Open the `strings.xml` file located in `app/src/main/res/values` directory and add the following lines:

```xml
<string name="sumup_api_key">YOUR_SUMUP_API_KEY</string>
<string name="sumup_redirect_url">YOUR_SUMUP_REDIRECT_URL</string>
```

Replace `YOUR_SUMUP_API_KEY` and `YOUR_SUMUP_REDIRECT_URL` with your actual SumUp API key and redirect URL.

## iOS Configuration

### 1. Add the SumUp SDK to your project

To use SumUp on iOS, we need to add the SumUp SDK as a dependency to our iOS project. Follow these steps:

1. Open your iOS project in Xcode.

2. Select your project in the Project Navigator.

3. Select your target under `Targets`.

4. Go to the `General` tab.

5. Scroll down to the `Frameworks, Libraries, and Embedded Content` section.

6. Click the `+` button and select `Add Other...`.

7. Navigate to the `SumUpSDK.framework` file in the `node_modules/capacitor-plugin-sumup/ios` directory and click `Open`.

8. Make sure the SumUpSDK.framework is added to both the `Frameworks` and `Embed & Sign` sections.

### 2. Configure your SumUp credentials

Next, we need to configure the SumUp credentials in our iOS project. Open the `Info.plist` file located in your project's root directory and add the following entries:

```xml
<key>SumUpAPIKey</key>
<string>YOUR_SUMUP_API_KEY</string>
<key>SumUpRedirectURL</key>
<string>YOUR_SUMUP_REDIRECT_URL</string>
```

Replace `YOUR_SUMUP_API_KEY` and `YOUR_SUMUP_REDIRECT_URL` with your actual SumUp API key and redirect URL.

## Usage

Now that we have the capacitor-plugin-sumup package installed and the platform configurations in place, we can start using it to integrate SumUp payment functionality.

### Import the plugin

First, import the SumUp plugin in your TypeScript/JavaScript file:

```typescript
import { Plugins } from '@capacitor/core';

const { SumUp } = Plugins;
```

### Initialize the SumUp SDK

Next, initialize the SumUp SDK by calling the `initialize` method:

```typescript
await SumUp.initialize();
```

### Check if SumUp is available

To check if SumUp is available on the device, use the `areAccountOptionsAvailable` method:

```typescript
const { available } = await SumUp.areAccountOptionsAvailable();
if (available) {
  // SumUp is available
} else {
  // SumUp is not available
}
```

### Process a payment

To process a payment, use the `checkout` method:

```typescript
const checkoutOptions = {
  title: 'My Product',
  amount: 9.99,
  currency: 'EUR',
};

const { success, code } = await SumUp.checkout(checkoutOptions);
if (success) {
  // Payment was successful
} else {
  // Payment failed, check the error code
  console.error('Payment failed with error code:', code);
}
```

## Conclusion

In this tutorial, we have learned how to integrate SumUp payment functionality into our Capacitor app using the capacitor-plugin-sumup package. We have covered the installation process, platform-specific configurations, and the usage of the SumUp plugin to initialize the SDK, check availability, and process payments.

With SumUp integration, you can now provide your users with a seamless and secure payment experience in your mobile application.

Happy coding!