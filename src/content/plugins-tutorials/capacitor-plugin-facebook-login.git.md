```markdown
---
"title": "Using @whiteguru/capacitor-plugin-facebook-login Package Tutorial"
"description": "Step-by-step guide on implementing Facebook login with @whiteguru/capacitor-plugin-facebook-login package in Capacitor"
"created_at": "2022-01-27"
"published": true
"slug": "capacitor-plugin-facebook-login.git"
---

# Using @whiteguru/capacitor-plugin-facebook-login Package

This tutorial will guide you through the process of integrating Facebook login functionality into your Capacitor project using the @whiteguru/capacitor-plugin-facebook-login package.

## Installation

To get started, install the plugin using npm:

```bash
npm install @whiteguru/capacitor-plugin-facebook-login
npx cap sync
```

For Capacitor 5.x or 6.x, use:
```bash
npm install @whiteguru/capacitor-plugin-facebook-login
npx cap sync
```

For Capacitor 4.x, use:
```bash
npm install @whiteguru/capacitor-plugin-facebook-login@^4.0.1
npx cap sync
```

### Android Configuration

1. Open the `android/app/src/main/AndroidManifest.xml` file.
2. Add the following XML elements under `<manifest><application>`:

```xml
<meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
<meta-data android:name="com.facebook.sdk.ClientToken" android:value="@string/facebook_client_token"/>
```

3. In the `android/app/src/main/res/values/strings.xml` file, add the following lines:

```xml
<string name="facebook_app_id">[APP_ID]</string>
<string name="facebook_client_token">[CLIENT_TOKEN]</string>
```

Remember to replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application ID.

### iOS Configuration

1. Open the `ios/App/App/AppDelegate.swift` file.
2. Add or replace the following code snippet:

```swift
// Add this import statement
import FBSDKCoreKit

// Inside your application's AppDelegate class, add the following method:
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
    FBSDKCoreKit.ApplicationDelegate.shared.application(
        application,
        didFinishLaunchingWithOptions: launchOptions
    )

    return true
}
```

3. Update the `ios/App/App/info.plist` file inside the outermost `<dict>` with the following:

```xml
<key>FacebookAppID</key>
<string>[APP_ID]</string>
<key>FacebookClientToken</key>
<string>[CLIENT_TOKEN]</string>
```

Make sure to replace `[APP_ID]` and `[CLIENT_TOKEN]` with your Facebook application ID and client token.

### Troubleshooting

If you encounter any issues, try restarting Android Studio and performing a clean build.

That's it! You have successfully integrated Facebook login using the @whiteguru/capacitor-plugin-facebook-login package in your Capacitor project.
```
```