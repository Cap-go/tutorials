---
"title": "Using @freeedcom/capacitor-facebook-login Package",
"description": "A step-by-step tutorial on how to integrate and use the @freeedcom/capacitor-facebook-login package in your Capacitor project. Includes Android and iOS configuration instructions.",
"created_at": "2021-11-15",
"published": true,
"slug": "capacitor-facebook-login.git"
---

# Integrating @freeedcom/capacitor-facebook-login Package

In this tutorial, we will walk through the process of integrating the @freeedcom/capacitor-facebook-login package into your Capacitor project. This package is a fork of the capacitor-community/facebook-login plugin and includes Limited Login implementation for the iOS platform.

## Installation

To install the @freeedcom/capacitor-facebook-login package, run the following command in your project directory:

```bash
npm i --save @freeedcom/capacitor-facebook-login
npx cap update
```

For Capacitor v5 users, use the following command to install the v5 version of the plugin:

```bash
npm install @freeedcom/capacitor-facebook-login@5
```

## Android Configuration

1. In the file `android/app/src/main/AndroidManifest.xml`, add the following XML elements under `<manifest><application>`:

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

2. In the file `android/app/src/main/res/values/strings.xml`, add the following lines:

```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

Replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application ID and client token, respectively.

For more information, refer to the [Facebook Android SDK documentation](https://developers.facebook.com/docs/android/getting-started).

## iOS Configuration

1. In the file `ios/App/App/AppDelegate.swift`, add or replace the following code:

```swift
// AppDelegate.swift content here
```

2. Add the following to the `ios/App/App/info.plist` file inside the outermost `<dict>`:

```xml
# iOS info.plist configuration here
```

This tutorial covers the basic setup and configuration of the @freeedcom/capacitor-facebook-login package. Make sure to follow the instructions carefully to enable Facebook login functionality in your Capacitor project.