---
title: "Using @recognizebv/capacitor-plugin-msauth"
description: "A tutorial on how to use the @recognizebv/capacitor-plugin-msauth package for Capacitor"
created_at: "2021-10-26"
published: true
slug: capacitor-plugin-msauth
---

# Using @recognizebv/capacitor-plugin-msauth

This tutorial will guide you through the steps to use the `@recognizebv/capacitor-plugin-msauth` package in your Capacitor project.

## Installation

To install the package, open your project in a terminal and run the following command:

```shell
yarn add @recognizebv/capacitor-plugin-msauth
```

Then, synchronize Capacitor with your project by running:

```shell
npx cap sync
```

## App Registration

Before you can use the `@recognizebv/capacitor-plugin-msauth` package, you need to create an app registration in the Microsoft Azure portal. Follow these steps:

1. Go to the Azure portal and sign in with your Microsoft account.
2. Navigate to the App Registrations section and click on "New registration".
3. Provide a name for your app registration and choose the appropriate account type.
4. In the authentication settings, select the platforms (iOS and/or Android) for your app.
5. For iOS, enter the bundle identifier of your app as found in Xcode.
6. For Android, enter the package name from your `AndroidManifest.xml` file.
7. Generate a key hash for Android and make a note of it.
8. Save your changes.

## Configuration

### iOS Configuration

To configure the plugin for iOS, follow these steps:

1. Add a new keychain group to your project's Signing & Capabilities. The keychain group should be `com.microsoft.adalcache`.
2. Configure URL schemes by adding the following code to your `Info.plist` file:

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>msauth.$(PRODUCT_BUNDLE_IDENTIFIER)</string>
        </array>
    </dict>
</array>
<key>LSApplicationQueriesSchemes</key>
<array>
    <string>msauthv2</string>
    <string>msauthv3</string>
</array>
```

3. Import `RecognizebvCapacitorPluginMsauth` at the top of your AppDelegate file.
4. If your app's AppDelegate already implements a `application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey : Any] = [:]) -> Bool` function, add the following code inside this method:

```swift
if MsAuthPlugin.checkAppOpen(url: url, options: options) == true {
    return true
}
```

### Android Configuration

To configure the plugin for Android, follow these steps:

1. In your `AndroidManifest.xml` file, add the following code within the `<application>` section:

```xml
<activity
    android:name="com.microsoft.identity.client.BrowserTabActivity">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="msauth"
        android:host="<package name>"
        android:path="/<key hash, with prepending slash>" />
    </intent-filter>
</activity>
```

Replace `<package name>` with the package name from your app registration and `<key hash, with prepending slash>` with the generated key hash.

2. Add the following code to the `build.gradle` file in the `android/` folder:

```java
allprojects {
    repositories {
        maven {
            url 'https://pkgs.dev.azure.com/MicrosoftDeviceSDK/DuoSDK-Public/_packaging/Duo-SDK-Feed/maven/v1'
        }
    }
}
```

## Usage

To use the `@recognizebv/capacitor-plugin-msauth` package in your Capacitor project, follow these steps:

1. Import the necessary plugins from the `@capacitor/core` module:

```typescript
import { Plugins } from '@capacitor/core';
```

2. Extract the `MsAuthPlugin`