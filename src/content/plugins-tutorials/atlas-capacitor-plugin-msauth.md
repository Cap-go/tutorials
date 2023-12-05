---
title: "Using the Atlas Capacitor Plugin MSAuth Package"
description: "Learn how to use the Atlas Capacitor Plugin MSAuth package to implement MSAL in your Capacitor app."
created_at: "2022-01-05"
published: true
slug: "atlas-capacitor-plugin-msauth"
---

# Using the Atlas Capacitor Plugin MSAuth Package

In this tutorial, we will learn how to use the Atlas Capacitor Plugin MSAuth package to implement MSAL (Microsoft Authentication Library) in your Capacitor app. MSAL provides a simple and secure way to handle authentication with Microsoft identity providers.

## Installation

To get started, follow these installation steps:

1. Install the package using npm or yarn:

   ```bash
   npm install atlas-capacitor-plugin-msauth
   ```

   or

   ```bash
   yarn add atlas-capacitor-plugin-msauth
   ```

2. Sync the Capacitor configuration with the project:

   ```bash
   npx cap sync
   ```

3. Create an app registration in the Azure Portal. This app registration will be used to configure authentication for your app.

## iOS Configuration

For iOS, follow these additional configuration steps:

1. In the app registration, go to **Authentication**, then **Add platform**, and select **iOS/macOS**.
2. Enter the bundle identifier for your iOS app. You can find this identifier in Xcode under the **General** tab of your project.
3. Add a new keychain group to your project's **Signing & Capabilities**. The keychain group should be `com.microsoft.adalcache`.
4. Configure the URL schemes by adding the following code to your `Info.plist` file:

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

5. Import the `AtlasCapacitorPluginMsauth` package in your `AppDelegate` file:

   ```swift
   import AtlasCapacitorPluginMsauth
   ```

6. If your app's `AppDelegate` already implements the `application(_:open:url:options:)` method, add the following code inside that method:

   ```swift
   if AtlasCapacitorPluginMsauth.checkAppOpen(url, options: options) == true {
       return true
   }
   ```

## Android Configuration

For Android, follow these additional configuration steps:

1. In the app registration, go to **Authentication**, then **Add platform**, and select **Android**.
2. Enter the package name for your Android app.
3. Generate a key hash for your Android key.

   - In the Signature section of the app registration, generate a hash for your key. You will need this key hash later.

4. In the `AndroidManifest.xml` file, add the following code within the `<application>` section:

   ```xml
   <activity
           android:name="com.microsoft.identity.client.BrowserTabActivity">
       <intent-filter>
           <action android:name="android.intent.action.VIEW" />
           <category android:name="android.intent.category.DEFAULT" />
           <category android:name="android.intent.category.BROWSABLE" />
           <data android:scheme="msauth"
                 android:host="com.example.package"
                 android:path="/<key hash, with prepending slash>" />
       </intent-filter>
   </activity>
   ```

   Replace `com.example.package` with your package name and `<key hash, with prepending slash>` with the key hash you generated.

5. Add the following snippet to the `build.gradle` file in the `android/app/` directory:

   ```gradle
   allprojects {
       repositories {
           maven {
               url 'https://pkgs.dev.azure.com/MicrosoftDeviceSDK/DuoSDK-Public/_packaging/Duo-SDK-Feed/maven/v1'
           }
       }
   }
   ```

6. Register the plugin in the main activity file:

   ```kotlin
   import com.microsoft.identity.client.BrowserTabActivity

   // ...

   // Add this line inside