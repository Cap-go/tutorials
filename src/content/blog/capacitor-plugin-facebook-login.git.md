```markdown
---
"title": "Using @whiteguru/capacitor-plugin-facebook-login Package",
"description": "Step-by-step guide on setting up and using @whiteguru/capacitor-plugin-facebook-login package for Facebook login integration in Capacitor",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-plugin-facebook-login.git"
---

# Using @whiteguru/capacitor-plugin-facebook-login Package

This tutorial will guide you through the process of installing and setting up the @whiteguru/capacitor-plugin-facebook-login package for integrating Facebook login functionality into your Capacitor app.

## Installation

### Install the Package

For Capacitor 6.x:

```bash
npm install @whiteguru/capacitor-plugin-facebook-login
npx cap sync
```

For Capacitor 5.x:

```bash
npm install @whiteguru/capacitor-plugin-facebook-login@^5.0.1
npx cap sync
```

For Capacitor 4.x:

```bash
npm install @whiteguru/capacitor-plugin-facebook-login@^4.0.1
npx cap sync
```

## Android Configuration

1. In the file `android/app/src/main/AndroidManifest.xml`, add the following XML elements under `<manifest><application>` :

   ```xml
   <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
   <meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
   ```

2. In the file `android/app/src/main/res/values/strings.xml`, add the following lines:

   ```xml
   <string name="facebook_app_id">[APP_ID]</string>
   <string name="facebook_client_token">[CLIENT_TOKEN]</string>
   ```

   Replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application Id.

3. For more information, refer to: [Facebook Android Getting Started Guide](https://developers.facebook.com/docs/android/getting-started)

4. If you encounter any issues, restart Android Studio and perform a clean build.

## iOS Configuration

1. In the file `ios/App/App/AppDelegate.swift`, add or replace the following code:

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

2. Add the following code in the `ios/App/App/info.plist` file inside the outermost `<dict>`:

   ```xml
   <key>FacebookAppID</key>
   <string>[APP_ID]</string>
   <key>FacebookClientToken</key>
   <string>[CLIENT_TOKEN]</string>
   ```

   Replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application Id.

This tutorial covers the basic setup and configuration steps for integrating Facebook login using the @whiteguru/capacitor-plugin-facebook-login package in your Capacitor app.
```
```