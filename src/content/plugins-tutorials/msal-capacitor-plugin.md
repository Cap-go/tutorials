---
title: "Using the msal-capacitor-plugin Package"
description: "A tutorial on how to use the msal-capacitor-plugin package to implement Microsoft Authentication Library (MSAL) in Capacitor."
created_at: "2022-03-12"
published: true
slug: "msal-capacitor-plugin"
---

# Using the msal-capacitor-plugin Package

This tutorial will guide you through the process of using the msal-capacitor-plugin package to implement Microsoft Authentication Library (MSAL) in your Capacitor project.

## Installation

To get started, follow these steps to install the msal-capacitor-plugin package:

1. Open your project's terminal and run the following command:

   ```
   yarn add msal-capacitor-plugin
   ```

2. After the installation is complete, sync your project by running the following command:

   ```
   npx cap sync
   ```

## App Registration

Before you can start using MSAL with Capacitor, you need to create an app registration in the Azure Portal. Follow these steps to create an app registration:

1. Log in to the [Azure Portal](https://portal.azure.com/) with your Azure account.

2. Select the Azure Active Directory (AD) service from the left-hand menu.

3. In the Azure AD overview, select "App registrations" in the left-hand menu.

4. Click on the "New registration" button to create a new app registration.

5. Enter a name for your app and select the appropriate supported account types.

6. Under "Redirect URI", enter the appropriate paths for iOS and Android platforms. These paths are used to redirect the authentication flow back to your app.

## iOS Configuration

To configure MSAL for iOS in Capacitor, follow these steps:

1. Open your Xcode project and navigate to the General tab of your project settings.

2. Copy the Bundle Identifier value, as you will need it in the next step.

3. Go back to the Azure Portal and select your app registration.

4. In the app registration overview, click on "Authentication" in the left-hand menu.

5. Under "Platforms", click on "Add a platform" and select "iOS/macOS".

6. Enter the Bundle Identifier you copied earlier in the "Bundle Identifier" field.

7. Save your changes.

8. In Xcode, open your project's Info.plist file.

9. Add the following code inside the `<dict>` element:

   ```xml
   <key>CFBundleURLTypes</key>
   <array>
       <dict>
           <key>CFBundleURLSchemes</key>
           <array>
               <string>msauth.[YOUR_BUNDLE_IDENTIFIER]</string>
           </array>
       </dict>
   </array>
   <key>LSApplicationQueriesSchemes</key>
   <array>
       <string>msauthv2</string>
       <string>msauthv3</string>
   </array>
   ```

   Replace `[YOUR_BUNDLE_IDENTIFIER]` with your actual Bundle Identifier value.

10. Import the `RecognizebvCapacitorPluginMsauth` module at the top of your AppDelegate.swift file:

    ```swift
    import RecognizebvCapacitorPluginMsauth
    ```

11. If your AppDelegate.swift file already implements the `application(_: open: options:)` method, add the following code inside it:

    ```swift
    if MsAuthPlugin.checkAppOpen(url: url, options: options) == true {
        return true
    }
    ```

    This code is used to handle the authentication callback from the MSAL library.

12. Add a new keychain group to your project's Signing & Capabilities. The keychain group should be set to `com.microsoft.adalcache`.

## Android Configuration

To configure MSAL for Android in Capacitor, follow these steps:

1. Open your project's `AndroidManifest.xml` file.

2. Inside the `<application>` element, add the following code:

   ```xml
   <activity
       android:name="com.microsoft.identity.client.BrowserTabActivity">
       <intent-filter>
           <action android:name="android.intent.action.VIEW" />
           <category android:name="android.intent.category.DEFAULT" />
           <category android:name="android.intent.category.BROWSABLE" />
           <data android:scheme="msauth"
                 android:host="[YOUR_PACKAGE_NAME]"
                 android:path="/[YOUR_KEY_HASH]" />
       </intent-filter>
   </activity>
   ```

   Replace `[YOUR_PACKAGE_NAME]` with your app's package name and `[YOUR_KEY_HASH]` with the generated key hash value.

3. Open the `build.gradle` file located in the `android/` folder.

4. Add the following code inside the `allprojects` > `repositories` section:

   ```gradle
   maven {
       url 'https://pkgs.dev.azure.com/MicrosoftDeviceSDK/DuoSDK-Public/_packaging/Duo-SDK-Feed/maven/v1'
   }
   ```

5. In your main activity file (typically `MainActivity.java` or `MainActivity.kt`), add the following code to register the plugin:

   ```java
   import com.getcapacitor.BridgeActivity;
   import com.getcapacitor.Plugin;

   import java.util.ArrayList;

   public class MainActivity extends BridgeActivity {
       @Override
       public void onCreate(Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);

           registerPlugin(MsAuthPlugin.class);
       }
   }
   ```

## Usage

The msal-capacitor-plugin package provides two methods: `login` and `logout`. Here's how you can use them in your Capacitor project:

### Login

To initiate the login process with MSAL, use the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { MsAuthPlugin } = Plugins;

const result = await MsAuthPlugin.login({
    clientId: '[YOUR_CLIENT_ID]',
    tenant: '[OPTIONAL_TENANT]', // Defaults to 'common'
    domainHint: '[OPTIONAL_DOMAIN_HINT]',
    scopes: ['[SCOPE_1]', '[SCOPE_2]'], // Defaults to no scopes
    keyHash: '[ANDROID_KEY_HASH]', // Android only, obtained during setup
});

console.log(result);
```

Replace the placeholders with the appropriate values:

- `[YOUR_CLIENT_ID]`: The client ID of your app registration.
- `[OPTIONAL_TENANT]`: (Optional) The Azure AD tenant to authenticate against. Defaults to `'common'`.
- `[OPTIONAL_DOMAIN_HINT]`: (Optional) The domain hint for Azure AD account selection.
- `[SCOPE_1]`, `[SCOPE_2]`: (Optional) The scopes required by your app.

The `login` method returns a result containing the authentication token or an error, which you can handle accordingly in your code.

### Logout

To log out the user, use the `logout` method:

```typescript
await MsAuthPlugin.logout();
```

The `logout` method logs out the current user and clears any stored authentication tokens.

## Conclusion

In this tutorial, you learned how to use the msal-capacitor-plugin package to implement MSAL in your Capacitor project. You configured MSAL for iOS and Android, and learned how to use the `login` and `logout` methods provided by the plugin. With this knowledge, you can now integrate Microsoft authentication into your Capacitor apps with ease.