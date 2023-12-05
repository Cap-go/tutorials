---
title: "Using Capacitor Firebase Crashlytics"
description: "A step-by-step tutorial on how to use the @rdlabo/capacitor-firebase-crashlytics package in your Capacitor project."
created_at: "2022-01-01"
published: true
slug: capacitor-firebase-crashlytics
---

# Using Capacitor Firebase Crashlytics

In this tutorial, we will learn how to integrate Firebase Crashlytics into a Capacitor project using the `@rdlabo/capacitor-firebase-crashlytics` package. Firebase Crashlytics is a powerful tool for tracking and managing app crashes, providing valuable insights into app stability.

## Prerequisites

Before we get started, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- Firebase account

## Step 1: Install the Package

To install the `@rdlabo/capacitor-firebase-crashlytics` package, open your terminal and navigate to your Capacitor project directory. Then run the following command:

```bash
npm install @rdlabo/capacitor-firebase-crashlytics
```

## Step 2: Android Configuration

### Add `google-services.json` File

Download the `google-services.json` file from the Firebase console and copy it to the `android/app/` directory of your Capacitor project.

### Modify `MainActivity.java`

In your Android project, open the `MainActivity.java` file located at `android/app/src/main/java/your-package-name/MainActivity.java`. Import the Crashlytics plugin at the top of the file:

```java
import jp.rdlabo.capacitor.plugin.firebase.crashlytics.FirebaseCrashlyticsPlugin;
```

Inside the `init` method, add the Crashlytics plugin to the initialization list:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    // Add other plugins...
    add(FirebaseCrashlyticsPlugin.class);
}});
```

## Step 3: iOS Configuration

### Add `GoogleService-Info.plist` File

Download the `GoogleService-Info.plist` file from the Firebase console. In Xcode, right-click on the yellow folder named "App" and select "Add files to 'App'". Select the downloaded `GoogleService-Info.plist` file to add it to your Xcode project.

### Enable dSYM Upload

Follow the instructions in the Firebase Crashlytics documentation to enable dSYM upload in Xcode.

## Step 4: Initialize Firebase Crashlytics

To initialize Firebase Crashlytics in your application, add the following code to your app's entry file (e.g., `index.js` or `app.ts`):

```javascript
import { Plugins } from '@capacitor/core';

const { FirebaseCrashlytics } = Plugins;

FirebaseCrashlytics.initialize();
```

## Step 5: Test Crash Reporting

To test crash reporting, you can manually trigger a crash in your app. For example, you can add a button with a click event that calls the `crash` method of the `FirebaseCrashlytics` plugin:

```javascript
import { Plugins } from '@capacitor/core';

const { FirebaseCrashlytics } = Plugins;

// ...

button.addEventListener('click', () => {
    FirebaseCrashlytics.crash();
});
```

Make sure to remove this code before releasing your app to production.

## Conclusion

In this tutorial, we have learned how to integrate Firebase Crashlytics into a Capacitor project using the `@rdlabo/capacitor-firebase-crashlytics` package. By following these steps, you can track and manage app crashes, improving the stability and user experience of your app.

Continue exploring the Firebase Crashlytics documentation and experiment with different features to fully utilize the capabilities of this powerful tool.

Happy coding!