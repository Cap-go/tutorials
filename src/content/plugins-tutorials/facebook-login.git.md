---
"title": "Using Capacitor Facebook Login Plugin",
"description": "A step-by-step guide on how to add Facebook Login functionality to your Capacitor app using the @capacitor-community/facebook-login plugin.",
"created_at": "2023-10-31",
"published": true,
"slug": "facebook-login.git"
---

# Using Capacitor Facebook Login Plugin

In this tutorial, we will walk through the process of integrating Facebook Login into your Capacitor app using the `@capacitor-community/facebook-login` plugin. This plugin provides an easy way to implement Facebook Login for both Android and iOS platforms in Capacitor projects. 

## Installation

To get started, first install the `@capacitor-community/facebook-login` plugin by running the following commands in your terminal:

```bash
npm i --save @capacitor-community/facebook-login
npx cap update
```

If you are using Capacitor v5, make sure to install version v5 of the plugin:

```bash
npm install @capacitor-community/facebook-login@5
```

### Android Configuration

In your `android/app/src/main/AndroidManifest.xml` file, add the following XML elements under `<manifest><application>`:

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

In your `android/app/src/main/res/values/strings.xml` file, add the following lines:

```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

Be sure to replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application Id.

### iOS Configuration

In your `ios/App/App/AppDelegate.swift` file, add or replace the following code:

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

Once you have completed the installation and configuration steps for Android and iOS, you will be able to implement Facebook Login functionality in your Capacitor app seamlessly using the `@capacitor-community/facebook-login` plugin.