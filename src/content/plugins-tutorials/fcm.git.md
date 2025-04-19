---
"title": "Using @capacitor-community/fcm Package"
"description": "A comprehensive guide on incorporating the @capacitor-community/fcm package into your Capacitor project for push notifications."
"created_at": "2022-02-26"
"published": true
"slug": "fcm.git"
---

## Setup

First, you need to set up your Capacitor project and add the FCM package. Follow these steps:

1. Install homebrew _(once)_:
   ```
   brew install cocoapods
   ```

2. Add Capacitor to your project:
   ```
   ionic start my-cap-app --capacitor
   cd my-cap-app
   ```

3. Add the necessary directories for your project:
   ```
   mkdir www && touch www/index.html
   ```

4. Add the FCM plugin to your project:
   ```
   npm install --save @capacitor-community/fcm
   npx cap add ios/android
   npx cap sync ios/android
   ```

## iOS Specific Setup

Follow these steps for configuring the FCM package on iOS:

1. Sign your app in Xcode under the **General** tab.
2. Enable remote notification capabilities.
3. Add `GoogleService-Info.plist` to your Xcode app folder.
4. (Optional) Turn off `swizzling` in the `info.plist`:
   ```
   <key>FirebaseAppDelegateProxyEnabled</key>
   <string>NO</string>
   ```

## Android Specific Setup

For Android, add `google-services.json` to your `android/app` folder.

## Running Your Client

After setup, you can run your client using the following command:
```
ionic cap run android --livereload
```

Remember to clean up the cache when you make changes to the native code before running the app again.
```

For a complete example, check out the [official example repository](https://github.com/capacitor-community/fcm/tree/master/example).

License: MIT
```
