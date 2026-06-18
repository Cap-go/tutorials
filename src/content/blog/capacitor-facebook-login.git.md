---
"title": "Using @freeedcom/capacitor-facebook-login Package",
"description": "In this tutorial, you will learn how to integrate the @freeedcom/capacitor-facebook-login package into your Capacitor project for Facebook login functionality. The tutorial covers installation, configuration for Android and iOS, and provides guidance on troubleshooting potential issues.",
"created_at": "2022-01-01",
"published": true,
"slug": "capacitor-facebook-login-git"
---

# Capacitor Facebook Login Tutorial

## Introduction
The @freeedcom/capacitor-facebook-login package is a fork of the capacitor-community/facebook-login plugin, enhanced with Limited Login implementation for the iOS platform. This tutorial will guide you through the process of integrating this package into your Capacitor project for enabling Facebook login functionality.

## Installation
To get started, install the @freeedcom/capacitor-facebook-login package by running the following commands in your terminal:

```bash
% npm i --save @freeedcom/capacitor-facebook-login
% npx cap update
```

### Versions
Ensure that you are using version 5 of the plugin if you are a user of Capacitor v5:

```bash
% npm install @freeedcom/capacitor-facebook-login@5
```

## Android Configuration
For Android, you need to make some configurations in your Android project files. Follow these steps:

1. In the `android/app/src/main/AndroidManifest.xml` file, add the following XML elements under `<manifest><application>`:
```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

2. In the `android/app/src/main/res/values/strings.xml` file, add the following lines:
```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

Replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application ID and client token respectively.

3. If you encounter any issues, try restarting Android Studio and perform a clean build.

## iOS Configuration
For iOS, add or replace the following code snippet in the `ios/App/App/AppDelegate.swift` file:

```swift
import UIKit
import Capacitor
import FBSDKCoreKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        FBSDKCoreKit.ApplicationDelegate.shared.application(
            application,
            didFinishLaunchingWithOptions: launchOptions
        )

        return true
    }

    ...

    func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool {
        if (FBSDKCoreKit.ApplicationDelegate.shared.application(
            app,
            open: url,
            sourceApplication: options[UIApplication.OpenURLOptionsKey.sourceApplication] as? String,
            annotation: options[UIApplication.OpenURLOptionsKey.annotation]
        )) {
            return true;
        } else {
            return ApplicationDelegateProxy.shared.application(app, open: url, options: options)
        }
    }
}
```

## Conclusion
You have successfully learned how to integrate the @freeedcom/capacitor-facebook-login package into your Capacitor project. Now, you can enable Facebook login functionality for both Android and iOS platforms. If you encounter any issues, refer to the provided resources for further assistance.