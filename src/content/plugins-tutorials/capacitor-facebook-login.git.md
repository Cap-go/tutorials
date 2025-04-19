---
"title": "Using Capacitor Facebook Login Package Tutorial",
"description": "A step-by-step guide on how to use the @freeedcom/capacitor-facebook-login package for integrating Facebook login in a Capacitor project.",
"created_at": "2023-10-12",
"published": true,
"slug": "capacitor-facebook-login-git"
---

# Using Capacitor Facebook Login Package Tutorial

In this tutorial, we will walkthrough the steps to integrate Facebook login in a Capacitor project using the `@freeedcom/capacitor-facebook-login` package. This package is a fork of `capacitor-community/facebook-login` with Limited Login implementation for iOS platform.

## Installation

First, install the `@freeedcom/capacitor-facebook-login` package by running the following command:

```bash
$ npm i --save @freeedcom/capacitor-facebook-login
$ npx cap update
```

Users of Capacitor v5 should install version v5 of the plugin:

```bash
$ npm install @freeedcom/capacitor-facebook-login@5
```

### Android Configuration

1. In your `android/app/src/main/AndroidManifest.xml`, add the following XML elements under `<manifest><application>` :

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

2. In `android/app/src/main/res/values/strings.xml`, add the following lines :

```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

Make sure to replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application Id.

### iOS Configuration

1. In `ios/App/App/AppDelegate.swift`, add or replace the following:

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

By following these steps, you should be able to successfully integrate Facebook login into your Capacitor project using the `@freeedcom/capacitor-facebook-login` package.