---
title: "Using @rollershop/capacitor-emarsys-sdk Package"
description: "A tutorial on how to use the @rollershop/capacitor-emarsys-sdk package to integrate Emarsys SDK into your Capacitor app."
created_at: "2022-10-15"
published: true
slug: "capacitor-emarsys-sdk"
---

# Using @rollershop/capacitor-emarsys-sdk Package

In this tutorial, we will learn how to integrate the Emarsys SDK into a Capacitor app using the @rollershop/capacitor-emarsys-sdk package. Emarsys provides powerful marketing automation tools, and this package enables you to easily leverage those features in your mobile app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI

## Step 1: Install the Package

To get started, open your project's terminal and run the following command to install the @rollershop/capacitor-emarsys-sdk package:

```bash
npm install @rollershop/capacitor-emarsys-sdk
```

This will install the package and add it to your project's dependencies.

## Step 2: Initialize the SDK

Next, we need to initialize the Emarsys SDK in our Capacitor app. Open the `capacitor.config.ts` or `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "Emarsys": {
      "mobileEngageApplicationCode": "YOUR_APPLICATION_CODE",
      "merchantId": "YOUR_MERCHANT_ID",
      "consoleLogLevels": ["info", "debug", "..."]
    }
  }
}
```

Replace `YOUR_APPLICATION_CODE` with your Emarsys mobile engage application code and `YOUR_MERCHANT_ID` with your Emarsys merchant ID. You can obtain these values from your Emarsys account.

## Step 3: Use the Emarsys SDK

With the SDK initialized, you can now start using the Emarsys features in your app. The @rollershop/capacitor-emarsys-sdk package provides a set of APIs to interact with the Emarsys SDK. Here are a few examples:

- `register()` - Registers the device with Emarsys for push notifications.
- `setContact(...)` - Sets contact information for the user.
- `trackItem(...)` - Tracks an item in the app.
- `fetchMessages()` - Fetches in-app messages from Emarsys.

Refer to the [API documentation](https://github.com/rollershop/capacitor-emarsys-sdk#api) for a complete list of available methods.

## Step 4: Run the App

Now that everything is set up, you can run your Capacitor app to see the Emarsys SDK in action. Use the following command to start your app:

```bash
npx cap run
```

This will open your app in a simulator or on a connected device, depending on your configuration.

## Conclusion

In this tutorial, we learned how to integrate the Emarsys SDK into a Capacitor app using the @rollershop/capacitor-emarsys-sdk package. We covered the installation process, SDK initialization, and using the provided APIs to interact with the Emarsys features. You are now ready to leverage the power of Emarsys marketing automation in your mobile app.

If you encounter any issues or need further guidance, refer to the official [Emarsys SDK documentation](https://help.emarsys.com/hc/en-us) or the [package repository](https://github.com/rollershop/capacitor-emarsys-sdk) for more information. Happy coding!