```markdown
---
"title": "Using Firebase Crashlytics with Capacitor",
"description": "Learn how to integrate Firebase Crashlytics into your Capacitor project for error monitoring and reporting.",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-firebase.git"
---

# Getting Started with @capacitor-firebase/crashlytics

In this tutorial, we will walk through the process of integrating Firebase Crashlytics into your Capacitor project for effective error monitoring and reporting.

## Installation

First, install the `@capacitor-firebase/crashlytics` package using npm:

```bash
npm install @capacitor-firebase/crashlytics
npx cap sync
```

Make sure you have Firebase set up in your project, following the [Firebase setup guide](https://firebase.google.com/docs/crashlytics/get-started).

### Android

For Android, you need to add the Firebase Crashlytics plugin to your app. Follow the instructions provided by Firebase to set up your app correctly.

#### Variables

This plugin uses the following project variables in your app’s `variables.gradle` file:

- `$firebaseCrashlyticsVersion` (default: `18.2.8`)

### iOS

On iOS, set up Xcode to automatically upload dSYM files as per the instructions provided by Firebase. Make sure you follow the correct path mentioned in the Firebase guide.

## Configuration

No additional configuration is required for this plugin. You are now ready to start using Firebase Crashlytics in your Capacitor project.

Happy coding!
```
