```markdown
---
"title": "How to Use capacitor-plugin-speaker-toggle-ios-android Package",
"description": "In this tutorial, you will learn how to integrate and utilize the capacitor-plugin-speaker-toggle-ios-android package in your Capacitor project for iOS and Android platforms.",
"created_at": "2022-01-13",
"published": true,
"slug": "capacitor-speaker-toggle-ios-android.git"
---

## Installing capacitor-plugin-speaker-toggle-ios-android

To begin, you need to have a Capacitor project set up. Follow the steps below to integrate the `capacitor-plugin-speaker-toggle-ios-android` package:

### iOS Setup

1. Install Homebrew if you haven't already (_once_):
   - [Install homebrew](https://capacitorjs.com/docs/getting-started/environment-setup#homebrew)

2. Install CocoaPods (_once a time_):
   ```bash
   brew install cocoapods
   ```

3. Create a Capacitor project and add iOS platform:
   ```bash
   ionic start my-cap-app --capacitor
   cd my-cap-app
   mkdir www && touch www/index.html
   npx cap add ios
   ```

4. Install the `capacitor-plugin-speaker-toggle-ios-android` package:
   ```bash
   npm install --save capacitor-plugin-speaker-toggle-ios-android
   ```

5. Sync the iOS platform:
   ```bash
   npx cap sync ios
   ```

6. Open the iOS project in Xcode:
   ```bash
   npx cap open ios
   ```

7. Sign your app in Xcode and enable remote notification capabilities.

8. (Optional) Turn off `swizzling` in the `info.plist`:
   ```
   <key>FirebaseAppDelegateProxyEnabled</key>
   <string>NO</string>
   ```

### Android Setup

1. Follow the initial steps to create a Capacitor project and set up Android platform:
   ```bash
   ionic start my-cap-app --capacitor
   cd my-cap-app
   mkdir www && touch www/index.html
   npx cap add android
   ```

2. Install the `capacitor-plugin-speaker-toggle-ios-android` package:
   ```bash
   npm install --save capacitor-plugin-speaker-toggle-ios-android
   ```

3. Sync the Android platform:
   ```bash
   npx cap sync android
   ```

4. Open the Android project:
   ```bash
   npx cap open android
   ```

5. Add `google-services.json` to the `android/app` folder.

### Usage

After following these setup steps, the `capacitor-plugin-speaker-toggle-ios-android` package will be integrated into your Capacitor project and you can utilize its functionalities for both iOS and Android.

Remember, every time you change native code, clean up the cache and rebuild the project before running the app again.

For more detailed instructions and examples, please refer to the [official documentation](https://github.com/capacitor-plugin-speaker-toggle-ios-android).

Enjoy incorporating speaker toggle capabilities into your mobile app projects!
```