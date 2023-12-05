---
title: "Using @justglanceit/capacitor-plugin-external-link-account"
description: "A tutorial on how to use the @justglanceit/capacitor-plugin-external-link-account package in your Capacitor project."
created_at: "2021-09-27"
published: true
slug: "capacitor-plugin-external-link-account"
---

# Using @justglanceit/capacitor-plugin-external-link-account

This tutorial will guide you through the process of using the `@justglanceit/capacitor-plugin-external-link-account` package in your Capacitor project. This plugin allows you to open external links with specified account in external apps, such as opening a link in Instagram with a specific user account.

## Prerequisites

Before getting started, make sure you have the following installed:

- Capacitor: [Installing Capacitor](https://capacitorjs.com/docs/getting-started)
- @justglanceit/capacitor-plugin-external-link-account: [Package Installation](https://www.npmjs.com/package/@justglanceit/capacitor-plugin-external-link-account)

## Installation

In your Capacitor project, install the `@justglanceit/capacitor-plugin-external-link-account` package:

```shell
npm install @justglanceit/capacitor-plugin-external-link-account
```

## Android Configuration

### Update Android Manifest

Open the `android/app/src/main/AndroidManifest.xml` file in your project.

Add the following permissions inside the `<manifest>...</manifest>` tag:

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## iOS Configuration

### Configure URL Scheme

Open the `ios/App/App/Info.plist` file in your project.

Add the following code inside the `<dict>...</dict>` tag:

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>instagram</string> <!-- Replace with the URL schemes you need -->
</array>
```

### Configure Universal Links (Optional)

If you want to support Universal Links for the external apps, follow these steps:

1. Enable Associated Domains capabilities in Xcode.

2. Add the following entries to your Xcode project's `Entitlements`:

   - `com.apple.developer.associated-domains` with the value `applinks:yourdomain.com` (replace `yourdomain.com` with your own domain).

3. Create an Apple App Site Association (AASA) file named `apple-app-site-association` and add it to the root of your web server.

   Example AASA file content:

   ```json
   {
     "applinks": {
       "apps": [],
       "details": [
         {
           "appID": "XXXXXXXXXX.bundle.identifier",
           "paths": ["*"]
         }
       ]
     }
   }
   ```

   Replace `XXXXXXXXXX.bundle.identifier` with your app's bundle identifier.

## Usage

### Opening External Links

To open an external link with a specified account in an external app, you can use the `openExternalLinkWithAccount` method provided by the plugin.

```typescript
import { Plugins } from '@capacitor/core';

const { ExternalLinkAccount } = Plugins;

const accountId = 'your_account_id';
const url = 'https://example.com';

ExternalLinkAccount.openExternalLinkWithAccount({
  accountId,
  url
});
```

Replace `your_account_id` with the account ID you want to use and `https://example.com` with the URL you want to open.

## Summary

In this tutorial, we learned how to use the `@justglanceit/capacitor-plugin-external-link-account` package to open external links with specified accounts in external apps. We covered the installation process, Android and iOS configurations, and how to use the plugin in your Capacitor project.

Now you can take advantage of this plugin to enhance your app's functionality by seamlessly opening external links with specified accounts.

Happy coding!