---
title: "Using @microblink/blinkid-capacitor Package Tutorial"
description: "A step-by-step guide on how to use the @microblink/blinkid-capacitor package in your Capacitor app."
created_at: "2022-10-25"
published: true
slug: "blinkid-capacitor"
---

# Using @microblink/blinkid-capacitor Package Tutorial

In this tutorial, we will walk through the steps of using the `@microblink/blinkid-capacitor` package in your Capacitor app. This package allows you to integrate AI-driven ID scanning functionality into your cross-platform app.

## Step 1: Install the Package

To get started, you need to install the `@microblink/blinkid-capacitor` package in your Capacitor app. Open your app's terminal and run the following command:

```shell
npm install --save @microblink/blinkid-capacitor
```

This will download and install the package into your project.

## Step 2: Minimum Software Requirements

Before using the package, make sure you meet the minimum software requirements. The `@microblink/blinkid-capacitor` package depends on the BlinkID SDK and requires you to download and install the BlinkID iOS SDK and BlinkID Android SDK. Check the [Platform specifics](#platform-specifics) section in the official documentation to learn how to install the SDKs.

## Step 3: Initialize the Plugin

To use the `@microblink/blinkid-capacitor` package, you need to initialize the plugin in your app. Import the package in your TypeScript file:

```typescript
import * as BlinkID from '@microblink/blinkid-capacitor';
```

## Step 4: Choose the Recognizer

Depending on your use case, you can choose from different recognizers provided by the package. Here are the available options:

- BlinkID Recognizer: Scan and extract data from the front side of the document or any machine readable travel document (MRTD).
- BlinkID Combined Recognizer: Scan both sides of the supported document and any machine readable travel document. This recognizer supports passports and travel visas.
- BlinkID IDBarcode Recognizer: Extract data from various barcodes found on identity documents.

Choose the recognizer that fits your needs and proceed with the next steps.

## Step 5: Implement the ID Scanning Functionality

Now, it's time to implement the ID scanning functionality in your app. Follow the documentation and code examples provided by the `@microblink/blinkid-capacitor` package to integrate the desired recognizer into your app.

Make sure to handle permission requests and provide a user-friendly interface for capturing the ID document.

## Step 6: Test and Run Your App

Once you have implemented the ID scanning functionality, test your app thoroughly to ensure everything is working as expected. Run your app on different devices and simulate various ID documents to verify the accuracy and reliability of the scanning process.

## Conclusion

Congratulations! You have successfully integrated the `@microblink/blinkid-capacitor` package into your Capacitor app and implemented ID scanning functionality. Now, you can easily extract data from various ID documents in your cross-platform app.

Remember to refer to the official documentation and code examples provided by `@microblink/blinkid-capacitor` for more detailed instructions and advanced usage scenarios. Happy coding!