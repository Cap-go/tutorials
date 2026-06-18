---
"title": "Using @capacitor-firebase/crashlytics Package",
"description": "A tutorial on how to integrate and use the @capacitor-firebase/crashlytics package in a Capacitor project.",
"created_at": "2023-10-30",
"published": true,
"slug": "capacitor-firebase.git"
---

## Integrate and Use @capacitor-firebase/crashlytics Package

The `@capacitor-firebase/crashlytics` package allows you to easily integrate Firebase Crashlytics into your Capacitor project for enhanced error tracking and crash reporting. Follow the steps below to enable Crashlytics in your app.

### Installation

1. Install the package using npm:
    ```bash
    npm install @capacitor-firebase/crashlytics
    npx cap sync
    ```

2. If you haven't already, add Firebase to your project (for [Android](https://firebase.google.com/docs/android/setup) and [iOS](https://firebase.google.com/docs/ios/setup)).

### Android Configuration

1. Follow the [Add the Firebase Crashlytics plugin to your app](https://firebase.google.com/docs/crashlytics/get-started?platform=android#add-plugin) guide to set up your app correctly.

2. Define the following project variables in your app’s `variables.gradle` file:
    - `$firebaseCrashlyticsVersion` (default: `18.2.8`)

### iOS Configuration

1. Set up Xcode to automatically upload dSYM files as mentioned in [this guide](https://firebase.google.com/docs/crashlytics/get-started?platform=ios#set-up-dsym-uploading). Make sure to use the correct path in section `4.c` of the guide.

## Usage

Once you have integrated the package and configured it for Android and iOS, you can start using Firebase Crashlytics in your app to track errors and crashes effectively.

Don't forget to test the crash reporting by forcing a crash using the `crash` method and then re-starting the app.

That's it! You have successfully integrated and configured the `@capacitor-firebase/crashlytics` package in your Capacitor project. Happy error tracking!

For more information, you can refer to the official [GitHub repository](https://github.com/capacitor-community/firebase-crashlytics).

Remember to regularly update your package by running the following command:
```bash
npm update @capacitor-firebase/crashlytics
```

Enjoy seamless error tracking with Firebase Crashlytics in your Capacitor app!