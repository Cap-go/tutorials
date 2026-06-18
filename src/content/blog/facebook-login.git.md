---
"title": "Using Capacitor Facebook Login Package",
"description": "A tutorial on integrating the '@capacitor-community/facebook-login' package for Capacitor applications.",
"created_at": "2023-03-05",
"published": true,
"slug": "facebook-login.git"
---

# Using Capacitor Facebook Login Package

The tutorial will guide you through the process of integrating the '@capacitor-community/facebook-login' package into your Capacitor applications. This package provides Limited Login implementation for the iOS platform.

## Installation

To install the package, use the following command:

```bash
% npm i --save @freeedcom/capacitor-facebook-login
% npx cap update
```

For Capacitor v5 users, the version v5 of the Plugin should be used:

```bash
% npm install @freeedcom/capacitor-facebook-login@5
```

### Android Configuration

1. In the file `android/app/src/main/AndroidManifest.xml`, add the following XML elements under `<manifest><application>`:

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

2. In the file `android/app/src/main/res/values/strings.xml`, add the following lines (replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application Id):

```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

More information on Android configuration can be found [here](https://developers.facebook.com/docs/android/getting-started).

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

By following these steps, you can successfully integrate the Capacitor Facebook Login package into your application.