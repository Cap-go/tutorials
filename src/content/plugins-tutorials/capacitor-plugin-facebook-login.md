---
title: "Using @whiteguru/capacitor-plugin-facebook-login"
description: "A guide on how to use the @whiteguru/capacitor-plugin-facebook-login package in your Capacitor project."
created_at: "2022-01-01"
published: true
slug: "capacitor-plugin-facebook-login"
---

# Using @whiteguru/capacitor-plugin-facebook-login

In this tutorial, we will walk you through the steps to integrate the `@whiteguru/capacitor-plugin-facebook-login` package into your Capacitor project. This plugin allows users to log in using their Facebook credentials. Let's get started!

## Installation

To install the `@whiteguru/capacitor-plugin-facebook-login` package, open your terminal and run the following command:

```bash
npm install @whiteguru/capacitor-plugin-facebook-login
npx cap sync
```

If you are using Capacitor 4.x, use the following command instead:

```bash
npm install @whiteguru/capacitor-plugin-facebook-login@^4.0.1
npx cap sync
```

## Android Configuration

### MainActivity

Open the file `android/app/src/main/java/**/**/MainActivity.java` and add the plugin to the initialization list:

```java
import android.os.Bundle;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    registerPlugin(
      com.whiteguru.capacitor.plugin.facebooklogin.FacebookLoginPlugin.class
    );
  }
}
```

### AndroidManifest.xml

Open the file `android/app/src/main/AndroidManifest.xml` and add the following XML elements under `<manifest><application>`:

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

### strings.xml

Open the file `android/app/src/main/res/values/strings.xml` and add the following lines:

```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

Make sure to replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application Id.

More information on Android configuration can be found here: [Facebook Android Getting Started](https://developers.facebook.com/docs/android/getting-started)

If you encounter any issues, please restart Android Studio and perform a clean build.

## iOS Configuration

### AppDelegate.swift

Open the file `ios/App/App/AppDelegate.swift` and add or replace the following code:

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

    // Other methods...
}
```

## Conclusion

Congratulations! You have successfully integrated the `@whiteguru/capacitor-plugin-facebook-login` package into your Capacitor project. With this plugin, you can now add Facebook login functionality to your app. Feel free to explore the plugin's documentation for advanced usage and customization.

Thank you for following along with this tutorial. If you have any questions or feedback, please let us know. Happy coding!