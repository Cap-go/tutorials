---
title: "Using @kokotree-inc/capacitor-plugin-apple-storekit-external-link-account Package"
description: "A tutorial on how to use the @kokotree-inc/capacitor-plugin-apple-storekit-external-link-account package to implement external link accounts with Apple StoreKit in Capacitor."
created_at: "2022-03-28"
published: true
slug: "capacitor-plugin-apple-storekit-external-link-account"
---

# Using @kokotree-inc/capacitor-plugin-apple-storekit-external-link-account Package

In this tutorial, we will learn how to use the `@kokotree-inc/capacitor-plugin-apple-storekit-external-link-account` package to implement external link accounts with Apple StoreKit in Capacitor.

## Prerequisites

Before we begin, make sure you have the following prerequisites set up in your environment:

- Capacitor installed in your project
- Xcode installed (for iOS development)
- Android Studio installed (for Android development)
- An Apple Developer Account

## Step 1: Installation

To install the `@kokotree-inc/capacitor-plugin-apple-storekit-external-link-account` package, run the following command in your project directory:

```bash
npm install @kokotree-inc/capacitor-plugin-apple-storekit-external-link-account
```

## Step 2: Configure Apple Developer Account

Before we can use external link accounts with Apple StoreKit, we need to configure our Apple Developer Account.

1. Open the [Apple Developer Account](https://developer.apple.com) website and sign in with your Apple ID.
2. Navigate to "Certificates, Identifiers & Profiles" > "Identifiers".
3. Create a new App ID for your application. Make sure to enable the "Associated Domains" capability.
4. Generate a new Service ID for your application. Enable the "Sign In with Apple" capability and enter the domains you want to associate with the external link accounts.
5. Navigate to "App Store Connect" > "My Apps" and create a new app for your project.

## Step 3: Configure Capacitor

Next, we need to configure Capacitor to work with the Apple StoreKit plugin and our Apple Developer Account.

### iOS Configuration

1. Open your iOS project in Xcode.
2. Add the following entry to your `Info.plist` file:

```xml
<key>ASWebAuthenticationSessionURLScheme</key>
<string>your-url-scheme</string>
```

Replace `your-url-scheme` with the URL scheme defined in your App ID.

3. In Xcode, navigate to your project's "Signing & Capabilities" tab.
4. Add the "Sign In with Apple" capability and select the Service ID you created earlier.

### Android Configuration

1. Open your Android project in Android Studio.
2. In the `android/app/src/main/AndroidManifest.xml` file, add the following intent-filter inside the `<activity>` tag:

```xml
<intent-filter>
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="your-url-scheme" />
</intent-filter>
```

Replace `your-url-scheme` with the URL scheme defined in your App ID.

3. Save the changes and close Android Studio.

## Step 4: Initialize the Plugin

To use the `@kokotree-inc/capacitor-plugin-apple-storekit-external-link-account` package, we need to initialize it in our Capacitor project.

1. Open your `capacitor.config.json` file.
2. Add the following entry to the `plugins` section:

```json
{
  "name": "AppleStoreKitExternalLinkAccount",
  "package": "@kokotree-inc/capacitor-plugin-apple-storekit-external-link-account"
}
```

3. Save the changes to the `capacitor.config.json` file.

## Step 5: Using the Plugin

Now that we have installed and configured the plugin, we can start using it in our Capacitor project.

### Import the Plugin

In your TypeScript file, import the plugin using the following syntax:

```typescript
import { Plugins } from '@capacitor/core';

const { AppleStoreKitExternalLinkAccount } = Plugins;
```

### Request External Link Account

To request an external link account with Apple StoreKit, use the `requestExternalLinkAccount` method:

```typescript
AppleStoreKitExternalLinkAccount.requestExternalLinkAccount()
  .then(result => {
    // Handle the success response.
    console.log('External link account requested:', result);
  })
  .catch(error => {
    // Handle the error response.
    console.error('Failed to request external link account:', error);
  });
```

### Handle the Result

The `requestExternalLinkAccount` method returns a promise that resolves to the result of the request. The result object contains the following properties:

- `status`: A string indicating the status of the request. Possible values are "SUCCESS" and "CANCEL".
- `accountHolderId`: The identifier of the linked Apple ID account holder.

You can use this information to handle the result of the request accordingly.

## Conclusion

In this tutorial, we have learned how to use the `@kokotree-inc/capacitor-plugin-apple-storekit-external-link-account` package to implement external link accounts with Apple StoreKit in Capacitor. We covered the installation and configuration steps, as well as how to use the plugin to request a link account and handle the result. Now you can integrate external link accounts with Apple StoreKit into your Capacitor applications.

Remember to refer to the official documentation and the plugin's source code for more detailed information on usage and available methods.