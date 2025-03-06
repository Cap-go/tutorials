---
"title": "Capacitor Facebook Login Tutorial",
"description": "A step-by-step guide on how to use the @capacitor-community/facebook-login package for implementing Facebook login in a Capacitor app.",
"created_at": "September 23rd, 2023",
"published": true,
"slug": "facebook-login.git"
---

# Capacitor Facebook Login Tutorial

In this tutorial, we will guide you through the process of integrating the **@capacitor-community/facebook-login** package into your Capacitor app to enable Facebook login functionality. By following these steps, you will be able to provide seamless social login options for your users.

## Installation

To get started, first install the **@capacitor-community/facebook-login** package by running the following command in your project directory:

```bash
npm install @capacitor-community/facebook-login
npx cap sync
```

### Android Configuration

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

Make sure to replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application Id and Client Token respectively.

### iOS Configuration

1. In the file `ios/App/App/AppDelegate.swift`, add or replace the following:

```swift
import UIKit
import Capacitor
import FBSDKCoreKit

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        // Override point for customization after application launch.
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

This completes the installation and configuration process for incorporating the **@capacitor-community/facebook-login** package in your Capacitor project. Have fun implementing Facebook login in your app!