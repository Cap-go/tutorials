---
title: "Using capacitor-plugin-ecc"
description: "A tutorial on how to use the capacitor-plugin-ecc package"
created_at: "2021-11-05"
published: true
slug: "capacitor-plugin-ecc"
---

# Using capacitor-plugin-ecc

The `capacitor-plugin-ecc` package is a Capacitor plugin that provides support for elliptic curve cryptography (ECC) in your Ionic applications. This tutorial will guide you through the process of using this package in your project.

## Prerequisites

Before we get started, make sure you have Capacitor installed globally on your machine. You can install it by running the following command:

```bash
npm install -g @capacitor/core @capacitor/cli
```

## Step 1: Installing the Package

To use the `capacitor-plugin-ecc` package in your project, you need to install it first. Open your project directory in a terminal and run the following command:

```bash
npm install capacitor-plugin-ecc
```

This will add the package as a dependency in your `package.json` file and download the necessary files.

## Step 2: Linking the Plugin

After installing the package, you need to link it to your project. Run the following command in your project directory:

```bash
npx cap update
```

This command will update the Capacitor configuration with the new plugin. If you haven't initialized Capacitor in your project yet, you can do so by running `npx cap init`.

## Step 3: Importing and Using the Plugin

Now that you have successfully linked the `capacitor-plugin-ecc` package to your project, you can import and use its functionalities in your code.

First, import the plugin in your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';
const { ECCPlugin } = Plugins;
```

To use a specific function from the plugin, you can call it as follows:

```typescript
async function generateKeyPair() {
  const result = await ECCPlugin.generateKeyPair();
  console.log(result.publicKey);
  console.log(result.privateKey);
}
```

In the above example, the `generateKeyPair` function uses the `generateKeyPair` function provided by the `capacitor-plugin-ecc` package to generate a public-private key pair. The result is then logged to the console.

## Step 4: Testing the Plugin

To test the functionality of the `capacitor-plugin-ecc` package in your application, you can run it on a device or emulator. Use the following command to build and run your app:

```bash
npx cap run android
```

Replace `android` with `ios` if you are building for iOS.

## Conclusion

In this tutorial, you have learned how to use the `capacitor-plugin-ecc` package to add support for elliptic curve cryptography in your Ionic applications. You installed the package, linked it to your project, imported and used its functionalities, and tested the plugin on a device or emulator. Now you can leverage the power of ECC in your app's security features.

For more information, refer to the official documentation of the `capacitor-plugin-ecc` package.

Note: Make sure to handle the keys securely and follow best practices for encryption and key management to maintain the security of your application.

---

I hope this tutorial helps you get started with the capacitor-plugin-ecc package. If you have any questions or face any issues, feel free to reach out for assistance. Happy coding!