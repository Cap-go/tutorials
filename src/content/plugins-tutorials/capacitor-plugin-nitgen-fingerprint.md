---
title: "Using the capacitor-plugin-nitgen-fingerprint Package"
description: "A tutorial on how to use the capacitor-plugin-nitgen-fingerprint package to integrate fingerprint authentication in your Capacitor app."
created_at: "2022-09-20"
published: true
slug: capacitor-plugin-nitgen-fingerprint
---

# Using the capacitor-plugin-nitgen-fingerprint Package

In this tutorial, we will learn how to use the capacitor-plugin-nitgen-fingerprint package to integrate fingerprint authentication in your Capacitor app. This plugin provides a wrapper around the Nitgen fingerprint library, allowing you to easily add fingerprint authentication to your app.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor: Follow the [official Capacitor installation guide](https://capacitorjs.com/docs/getting-started/installation) if you haven't already.
- Nitgen fingerprint library: Ensure that you have installed the Nitgen fingerprint library on your development machine. Refer to the library's documentation for installation instructions.

## Step 1: Install the Plugin

To get started, install the capacitor-plugin-nitgen-fingerprint package by running the following command in your project directory:

```bash
npm install capacitor-plugin-nitgen-fingerprint
```

## Step 2: Link the Plugin

Next, link the plugin to your Capacitor project by running the following command:

```bash
npx cap plugin:link capacitor-plugin-nitgen-fingerprint
```

This will add the necessary platform-specific files for both iOS and Android.

## Step 3: Register the Plugin

Open the `capacitor.config.json` file in your project and add the following entry under the `plugins` section:

```json
"capacitor-plugin-nitgen-fingerprint": {
  "appId": "your.app.id"
}
```

Replace `your.app.id` with your actual app ID.

## Step 4: Import and Initialize the Plugin

In your app's main entry file (e.g., `app.ts`), import and initialize the plugin by adding the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { NitgenFingerprint } = Plugins;

NitgenFingerprint.initialize();
```

## Step 5: Authenticate with Fingerprint

Now that the plugin is set up, you can use the provided methods to authenticate with fingerprint.

To check if fingerprint authentication is available on the device, use the `isAvailable` method:

```typescript
const isAvailable = await NitgenFingerprint.isAvailable();

if (isAvailable) {
  // Fingerprint authentication is available
} else {
  // Fingerprint authentication is not available
}
```

To authenticate with fingerprint, use the `authenticate` method:

```typescript
const result = await NitgenFingerprint.authenticate();

if (result.success) {
  // Fingerprint authentication successful
} else {
  // Fingerprint authentication failed
}
```

## Conclusion

In this tutorial, we have learned how to use the capacitor-plugin-nitgen-fingerprint package to integrate fingerprint authentication in your Capacitor app. By following the steps outlined above, you can easily add an extra layer of security to your app by leveraging fingerprint technology.

Remember to test your app thoroughly on both iOS and Android devices to ensure proper functionality.