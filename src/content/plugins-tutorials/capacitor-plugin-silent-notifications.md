---
title: "Using capacitor-plugin-silent-notifications"
description: "A tutorial on how to use the capacitor-plugin-silent-notifications package"
created_at: "2021-08-22"
published: true
slug: "capacitor-plugin-silent-notifications"
---

# Using capacitor-plugin-silent-notifications

This tutorial will guide you through the process of using the capacitor-plugin-silent-notifications package in your Capacitor app. The capacitor-plugin-silent-notifications package allows you to handle silent notifications in your iOS and Android apps.

## iOS Setup

1. Install homebrew (if not already installed):

   ```
   /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
   ```

2. Install cocoapods:

   ```
   brew install cocoapods
   ```

3. Create a new Capacitor app:

   ```
   npx @capacitor/cli create my-cap-app
   ```

4. Navigate to the app directory:

   ```
   cd my-cap-app
   ```

5. Create the `index.html` file:

   ```
   mkdir www
   touch www/index.html
   ```

6. Add the iOS platform:

   ```
   npx cap add ios
   ```

7. Install the capacitor-plugin-silent-notifications package:

   ```
   npm install --save capacitor-plugin-silent-notifications
   ```

8. Sync the iOS project:

   ```
   npx cap sync ios
   ```

9. Open the iOS project in Xcode:

   ```
   npx cap open ios
   ```

10. Configure your app in Xcode:
    - Sign your app in the General tab.
    - Enable remote notification capabilities.
    - Add the `GoogleService-Info.plist` file to the app folder in Xcode.

11. (Optional) Turn off swizzling in the `info.plist` file:
    ```
    <key>FirebaseAppDelegateProxyEnabled</key>
    <string>NO</string>
    ```

## Android Setup

1. Create a new Capacitor app:

   ```
   npx @capacitor/cli create my-cap-app
   ```

2. Navigate to the app directory:

   ```
   cd my-cap-app
   ```

3. Create the `index.html` file:

   ```
   mkdir www
   touch www/index.html
   ```

4. Add the Android platform:
   
   ```
   npx cap add android
   ```

5. Install the capacitor-plugin-silent-notifications package:

   ```
   npm install --save capacitor-plugin-silent-notifications
   ```

6. Sync the Android project:

   ```
   npx cap sync android
   ```

7. Open the Android project in Android Studio:

   ```
   npx cap open android
   ```

8. Add the `google-services.json` file to the `android/app` folder.

## Usage

After completing the setup steps for your respective platform, you can now start using the capacitor-plugin-silent-notifications package in your Capacitor app. Refer to the package's documentation for details on how to implement and handle silent notifications.

## Conclusion

In this tutorial, you learned how to set up and use the capacitor-plugin-silent-notifications package in your Capacitor app. This package allows you to handle silent notifications in your iOS and Android apps, providing a seamless user experience. Enjoy using this powerful plugin in your Capacitor projects!

For more information and examples, you can refer to the [capacitor-plugin-silent-notifications example repository](https://github.com/capacitor-community/fcm/tree/master/example).

