---
"title": "Tutorial on Using @whiteguru/capacitor-plugin-facebook-login Package",
"description": "A step-by-step guide on integrating and utilizing the @whiteguru/capacitor-plugin-facebook-login package in your Capacitor project.",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-plugin-facebook-login.git"
---

# Tutorial on Using @whiteguru/capacitor-plugin-facebook-login Package

In this tutorial, we will walk through the process of integrating and utilizing the `@whiteguru/capacitor-plugin-facebook-login` package in your Capacitor project. This plugin allows users to log in with Facebook in Capacitor applications.

## Installation

To get started, follow these installation steps based on your Capacitor version:

### For Capacitor 6.x
```bash
npm install @whiteguru/capacitor-plugin-facebook-login
npx cap sync
```

### For Capacitor 5.x
```bash
npm install @whiteguru/capacitor-plugin-facebook-login@^5.0.1
npx cap sync
```

### For Capacitor 4.x
```bash
npm install @whiteguru/capacitor-plugin-facebook-login@^4.0.1
npx cap sync
```

## Android Configuration

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
    Don't forget to replace `[APP_ID]` and `[CLIENT_TOKEN]` with your actual Facebook application ID.

## iOS Configuration

1. In the `ios/App/App/AppDelegate.swift` file, add or replace the following Swift code snippets:
    ```swift
    // Add or replace this function
    ```
  
2. Add the following in the `ios/App/App/info.plist` file inside of the outermost `<dict>`:
    ```xml
    # Add relevant configurations
    ```

## Conclusion

By following these steps, you can seamlessly integrate Facebook login functionality into your Capacitor project using the `@whiteguru/capacitor-plugin-facebook-login` package. Feel free to explore additional capabilities and features this package has to offer.