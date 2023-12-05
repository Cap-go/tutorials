---
title: "Using capacitor-sso Package"
description: "A tutorial on how to use the capacitor-sso package for social sign-in with Capacitor"
created_at: "2021-10-25"
published: true
slug: "capacitor-sso"
---

# Using capacitor-sso Package

This tutorial will guide you through the process of integrating and using the capacitor-sso package in your Capacitor project for social sign-in functionality.

## Installation

To begin, you need to install the capacitor-sso package. Open your terminal and run the following command:

```
$ yarn add capacitor-sso
```

Once the installation is complete, synchronize the Capacitor project with the native platform by running the following commands:

```
$ npx cap sync
$ npx cap update
```

## Adding URL Scheme

Next, you need to add a URL scheme to your project. This step is necessary for social sign-in to work properly. Follow the steps below:

1. Open the `Info.plist` file in Xcode for iOS or the `AndroidManifest.xml` file for Android.

2. Add the following URL scheme:

```
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleTypeRole</key>
    <string>Editor</string>
    <key>CFBundleURLName</key>
    <string>com.example.app</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>com.example.app</string>
    </array>
  </dict>
</array>
```

Replace `com.example.app` with your actual app bundle identifier.

3. Save the file.

## Configuration

Now, you need to configure the capacitor-sso plugin. Open the `capacitor.config.json` file in your project and add the following plugin configuration:

```json
"plugins": {
  "Sso": {
    "googleClientId": "your-google-client-id",
    "googleReversedId": "your-google-reversed-id"
  }
}
```

Replace `your-google-client-id` with the client ID obtained from the Google API Console, and `your-google-reversed-id` with the reversed client ID associated with your Google OAuth client.

## Usage

With the capacitor-sso package installed and configured, you can now start using it in your project. Here is an example of how to use the package:

```typescript
import { Plugins } from '@capacitor/core';

const { Sso } = Plugins;

async function signInWithGoogle() {
  try {
    const result = await Sso.signInWithGoogle();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

In the above code, we import the `Sso` plugin from `@capacitor/core` and define an `async` function `signInWithGoogle()` that attempts to sign in using Google SSO. The result of the sign-in operation is logged to the console.

You can similarly use other social sign-in methods provided by the capacitor-sso package, such as `signInWithApple()` or `signInWithFacebook()`.

That's it! You have successfully integrated and used the capacitor-sso package for social sign-in in your Capacitor project.

Remember to handle any errors and provide appropriate UI feedback to the user during the sign-in process.

Feel free to explore the capacitor-sso documentation for more details on advanced usage and customization options.