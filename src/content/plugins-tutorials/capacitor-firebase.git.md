```markdown
---
"title": "Using @capacitor-firebase/crashlytics in Your Capacitor Project",
"description": "Learn how to integrate the @capacitor-firebase/crashlytics package in your Capacitor project for effective crash reporting.",
"created_at": "2023-10-27",
"published": true,
"slug": "capacitor-firebase.git"
---

# Using @capacitor-firebase/crashlytics Package

In this tutorial, you will learn how to integrate the @capacitor-firebase/crashlytics package into your Capacitor project to enable efficient crash reporting. The Firebase Crashlytics service helps you track, prioritize, and fix stability issues that are impacting your app's performance.

## Installation

To get started, install the @capacitor-firebase/crashlytics package using npm and sync your Capacitor project:

```bash
npm install @capacitor-firebase/crashlytics
npx cap sync
```

Make sure you have Firebase set up in your project for both Android and iOS platforms. Follow the respective platform setup guides on the Firebase website.

### Android Setup

Ensure that you add the Firebase Crashlytics plugin to your Android app. Follow the instructions provided by Firebase to set up your Android app correctly.

#### Variables

The project will use the following project variables defined in your app's `variables.gradle` file:

- `$firebaseCrashlyticsVersion`: Version of `com.google.firebase:firebase-crashlytics` (default: `18.2.8`)

### iOS Setup

For iOS, configure Xcode to automatically upload dSYM files as specified in the Firebase Crashlytics documentation. Pay attention to the correct path to be used in Xcode.

## Configuration

No additional configuration is required for this plugin. You are now ready to utilize Firebase Crashlytics for monitoring and debugging crashes in your app.

By following the steps outlined in this tutorial, you can enhance the stability and performance of your Capacitor project by effectively leveraging Firebase Crashlytics.

Happy coding!
```
