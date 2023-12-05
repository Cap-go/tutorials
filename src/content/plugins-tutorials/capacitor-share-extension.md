---
title: "Using capacitor-share-extension package"
description: "This tutorial will guide you through the process of using the capacitor-share-extension package to enable sharing functionality in your Capacitor app."
created_at: "2022-04-25"
published: true
slug: "capacitor-share-extension"
---

# Using capacitor-share-extension package

In this tutorial, we will learn how to integrate the capacitor-share-extension package into your Capacitor application to enable easy sharing functionality.

## Prerequisites

Before we begin, ensure that you have the following prerequisites:
- Node.js and npm installed on your machine.
- An existing Capacitor project set up.

## Installation

To start using the capacitor-share-extension package, follow these steps:

1. Open your project in a terminal or command prompt.
2. Install the package using npm:

   ```bash
   npm install capacitor-share-extension
   ```

3. After the installation is complete, run the following command to sync the native Android and iOS projects:

   ```bash
   npx cap sync
   ```

## Configuration

Once the package is installed, you need to configure it for each platform.

### Android

To configure capacitor-share-extension for Android, perform the following steps:

1. Open the file `android/app/src/main/java/{YOUR_APP_ID}/MainActivity.java` and add the following import statement at the top:

   ```java
   import com.getcapacitor.plugin.shareextension.ShareExtension;
   ```

2. Inside the `init` method of the `MainActivity` class, add the following line of code:

   ```java
   add(ActivityPlugin.class);
   ```

3. Next, open the file `android/app/src/main/AndroidManifest.xml` and add the following intent filter inside the `<activity>` tag:

   ```xml
   <intent-filter>
       <action android:name="android.intent.action.SEND" />
       <category android:name="android.intent.category.DEFAULT" />
       <data android:mimeType="*/*" />
   </intent-filter>
   ```

### iOS

The configuration for iOS is slightly different. Follow these steps to configure capacitor-share-extension for iOS:

1. Open the file `ios/App/AppDelegate.swift` and add the following import statement at the top:

   ```swift
   import capacitorShareExtension
   ```

2. Inside the `application(_:didFinishLaunchingWithOptions:)` method, add the following line of code:

   ```swift
   ShareExtension.registerPlugin()
   ```

   This registers the plugin with the Capacitor runtime.

3. Next, open the file `ios/App/Share/ShareViewController.swift` and add the following import statement at the top:

   ```swift
   import capacitorShareExtension
   ```

4. Inside the `viewDidLoad` method of the `ShareViewController` class, add the following line of code:

   ```swift
   ShareExtension.handlePost()
   ```

   This handles the shared data received by the Share Extension.

## Usage

Once the package is installed and configured, you can use it to implement sharing functionality in your app.

To open the share sheet and allow the user to share content, use the following code:

```typescript
import { Share } from 'capacitor-share-extension';

async function openShareSheet() {
    const shareData = {
        title: 'My Awesome App',
        text: 'Check out this amazing content!',
        url: 'https://example.com',
    };

    await Share.share(shareData);
}
```

You can customize the content to be shared by modifying the `shareData` object.

## Conclusion

In this tutorial, you have learned how to install and configure the capacitor-share-extension package to enable sharing functionality in your Capacitor app. You also learned how to use the package to implement sharing features in your app. Now you can enable your users to easily share content from your app with others.

Feel free to explore the official [capacitor-share-extension documentation](https://capacitorjs.com/docs/apis/share) for more information and advanced usage.

Happy sharing!