---
title: "Using capacitor-plugin-facebook-login-enhance"
description: "A tutorial on how to use the capacitor-plugin-facebook-login-enhance package in Capacitor"
created_at: "2021-10-01"
published: true
slug: "capacitor-plugin-facebook-login-enhance"
---

# Using capacitor-plugin-facebook-login-enhance

In this tutorial, we will learn how to use the `capacitor-plugin-facebook-login-enhance` package in Capacitor to enable Facebook login functionality in your mobile app. This plugin is an enhancement of the `@whiteguru/capacitor-plugin-facebook-login` package with additional features.

## Prerequisites

Before we get started, make sure you have the following installed in your development environment:

- Capacitor
- Node.js
- npm or yarn
- Facebook Developer Account and App Setup

## Installation

To install the capacitor-plugin-facebook-login-enhance package, open your terminal and run the following command:

```bash
npm install capacitor-plugin-facebook-login-enhance
npx cap sync
```

This will install the package and synchronize your Capacitor project.

## Android Configuration

In your Android project, open the file `android/app/src/main/AndroidManifest.xml` and add the following XML elements inside the `<manifest><application>` tag:

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

Next, open the file `android/app/src/main/res/values/strings.xml` and add the following lines:

```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

Replace `[APP_ID]` and `[CLIENT_TOKEN]` with the appropriate values from your Facebook Developer Account.

## iOS Configuration

In your iOS project, open the file `ios/App/App/AppDelegate.swift` and add or replace the following code:

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

    // Other code...

}
```

## Usage

To use the capacitor-plugin-facebook-login-enhance package in your Capacitor project, follow these steps:

1. Import the plugin in your project:

```typescript
import { Plugins } from '@capacitor/core';
const { FacebookLogin } = Plugins;
```

2. Implement the login functionality in your desired component or page:

```typescript
import { FacebookLoginPlugin, FacebookLoginResponse } from 'capacitor-plugin-facebook-login-enhance';

// Other code...

async function loginWithFacebook() {
  try {
    const response: FacebookLoginResponse = await FacebookLogin.login();

    // Handle successful login
    console.log('Login success:', response);
  } catch (error) {
    // Handle login error
    console.error('Login error:', error);
  }
}

// Other code...
```

In the above code, we import the necessary types from the `capacitor-plugin-facebook-login-enhance` package and define an `async` function for Facebook login. We use the `FacebookLogin.login()` method to initiate the login process and handle the response accordingly.

3. Call the `loginWithFacebook()` function whenever you want to trigger the Facebook login functionality.

That's it! You have successfully integrated the capacitor-plugin-facebook-login-enhance package into your Capacitor project and implemented Facebook login.

## Conclusion

In this tutorial, we learned how to use the capacitor-plugin-facebook-login-enhance package to add Facebook login functionality to your Capacitor project. We covered the installation process, Android and iOS configuration, and demonstrated how to use the plugin in your code.

Now you can allow your users to log in to your mobile app using their Facebook accounts. Happy coding!