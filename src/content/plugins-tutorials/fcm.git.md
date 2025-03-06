```md
---
"title": "Using @capacitor-community/fcm Package Tutorial",
"description": "A step-by-step guide on integrating the @capacitor-community/fcm package for push notifications in Capacitor projects",
"created_at": "2022-07-27",
"published": true,
"slug": "fcm.git"
---

# Using @capacitor-community/fcm Package Tutorial

## Introduction
This tutorial will guide you through the process of integrating the @capacitor-community/fcm package to enable push notifications in your Capacitor projects. 

### Step 1: Setup iOS
1. Install homebrew _(once)_
2. Run `brew install cocoapods` _(once a time)_
3. Create a Capacitor project: `ionic start my-cap-app --capacitor`
4. Navigate to the project directory: `cd my-cap-app`
5. Create an `index.html` file: `mkdir www && touch www/index.html`
6. Add iOS platform: `npx cap add ios`
7. Install @capacitor-community/fcm package: `npm install --save @capacitor-community/fcm`
8. Sync the iOS project: `npx cap sync ios`
9. Open the iOS project in Xcode: `npx cap open ios`
10. Sign your app in Xcode, enable remote notification capabilities, and add `GoogleService-Info.plist` to the app folder.

### Step 2: Prevent Auto Initialization
If you need to implement opt-in behavior, follow the [Firebase docs](https://firebase.google.com/docs/cloud-messaging/ios/client#prevent_auto_initialization) to disable auto initialization of the library.

## Android Setup
1. Create a Capacitor project: `ionic start my-cap-app --capacitor`
2. Navigate to the project directory: `cd my-cap-app`
3. Create an `index.html` file: `mkdir www && touch www/index.html`
4. Add Android platform: `npx cap add android`
5. Install @capacitor-community/fcm package: `npm install --save @capacitor-community/fcm`
6. Sync the Android project: `npx cap sync android`
7. Open the Android project in Android Studio: `npx cap open android`
8. Add `google-services.json` to the `android/app` folder.

### Persisting Variables
This plugin uses project variables from your app's `variables.gradle` file. 
- `$firebaseMessagingVersion`: version of `com.google.firebase:firebase-messaging` (default: `23.1.2`)

### Prevent Auto Initialization
To disable auto initialization of the library on Android, follow the [Firebase docs](https://firebase.google.com/docs/cloud-messaging/android/client#prevent-auto-init).

## Example
For a practical example, refer to the [FCM Plugin Example](https://github.com/capacitor-community/fcm/tree/master/example).

## License

This package is under the MIT License.

## Contributors ✨

Credits to the contributors who have helped with this project!
```
```