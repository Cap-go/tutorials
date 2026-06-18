```markdown
---
"title": "Using @capacitor-community/fcm package tutorial",
"description": "Step-by-step guide on integrating and using the @capacitor-community/fcm package in your Capacitor project for iOS and Android platforms.",
"created_at": "2023-10-06",
"published": true,
"slug": "fcm-git"
---

# Using @capacitor-community/fcm Package in Capacitor Projects

This tutorial will guide you through the process of integrating the @capacitor-community/fcm package into your Capacitor projects for iOS and Android platforms.

## Installing the Package

- First, make sure you have Homebrew installed, if not, [install Homebrew](https://capacitorjs.com/docs/getting-started/environment-setup#homebrew).
- Install CocoaPods by running `brew install cocoapods`.
- Create a new Capacitor project by running `ionic start my-cap-app --capacitor`.
- Move into the project directory with `cd my-cap-app`.
- Create a directory and an index.html file with `mkdir www && touch www/index.html`.
- Add the iOS platform with `npx cap add ios`.
- Install the @capacitor-community/fcm package by running `npm install --save @capacitor-community/fcm`.
- Synchronize the iOS platform by running `npx cap sync ios`.
- Open the iOS project in Xcode using `npx cap open ios`.

## Configuring iOS

- Sign your app in Xcode under the general tab.
- Enable remote notification capabilities.
- Add `GoogleService-Info.plist` to the app folder in Xcode.
- Optionally, turn off swizzling in the `Info.plist` by adding:
  
  ```
  <key>FirebaseAppDelegateProxyEnabled</key>
  <string>NO</string>
  ```

> Tip: After changing native code, remember to clean the cache (Product > Clean build folder) and then run the app again.

### Prevent Auto Initialization

To implement opt-in behavior, follow the [Firebase docs](https://firebase.google.com/docs/cloud-messaging/ios/client#prevent_auto_initialization) to disable the auto initialization of the library.

## Configuring Android

- Include the Android platform in your project with `npx cap add android`.
- Create a directory and an index.html file with `mkdir www && touch www/index.html`.
- Install the @capacitor-community/fcm package by running `npm install --save @capacitor-community/fcm`.
- Synchronize the Android platform by running `npx cap sync android`.
- Open the Android project in Android Studio using `npx cap open android`.
- Add `google-services.json` to your `android/app` folder.

Now your project is ready to run. Use `ionic cap run android --livereload` to launch your client.

> Remember to clean up the cache (Build > Clean Project | Build > Rebuild Project) each time you change native code.

### Variables

The plugin will utilize the project variable `$firebaseMessagingVersion`, which defaults to `23.1.2`.

### Prevent Auto Initialization

For opt-in behavior, disable the auto initialization by following the [Firebase docs](https://firebase.google.com/docs/cloud-messaging/android/client#prevent-auto-init).

## Example

Check out the [example repository](https://github.com/capacitor-community/fcm/tree/master/example) for a demonstration.

## License

This project is licensed under MIT.

## Contributors ✨

Special thanks to all the wonderful contributors to this project. Find the emoji key [here](https://allcontributors.org/docs/en/emoji-key).
```
```