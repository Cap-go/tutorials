---
title: "Using Firebase Analytics with @capacitor-community/firebase-analytics"
description: "Learn how to integrate Firebase Analytics into your Capacitor project using the @capacitor-community/firebase-analytics package."
created_at: "2021-07-15"
published: true
slug: firebase-analytics
---

# Using Firebase Analytics with @capacitor-community/firebase-analytics

In this tutorial, we will walk through the steps to integrate Firebase Analytics into your Capacitor project using the `@capacitor-community/firebase-analytics` package. Firebase Analytics allows you to track user engagement and gather valuable insights about how users interact with your app.

## Prerequisites

Before getting started, make sure you have the following installed:

- Capacitor CLI
- Firebase account
- An existing Capacitor project

## Step 1: Install the package

To install `@capacitor-community/firebase-analytics`, run the following command in your project directory:

```bash
npm install @capacitor-community/firebase-analytics
```

or with Yarn:

```bash
yarn add @capacitor-community/firebase-analytics
```

## Step 2: Sync native files

Next, we need to sync the native files by running the following command:

```bash
npx cap sync
```

## Step 3: Configure the plugin

No additional configuration is required for this plugin. It will automatically use the configuration from your Firebase project.

## Step 4: Add the plugin to your project

On Android, navigate to your project's main activity file (usually located at `android/app/src/main/java/com/{your_project_namespace}/MainActivity.java`). Import the `FirebaseAnalytics` class and add it to the list of plugins in the `onCreate` method:

```java
import com.getcapacitor.community.firebaseanalytics.FirebaseAnalytics;

public class MainActivity extends BridgeActivity {

  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(
      savedInstanceState,
      new ArrayList<Class<? extends Plugin>>() {
        {
          add(FirebaseAnalytics.class);
        }
      }
    );
  }
}
```

On iOS, no further steps are needed as the plugin will be automatically registered.

## Step 5: Use Firebase Analytics in your code

With the plugin installed and configured, you can now use the Firebase Analytics methods to track events, set user properties, and more. Here are a few examples:

```typescript
import { Plugins } from '@capacitor/core';
const { FirebaseAnalytics } = Plugins;

// Track a custom event
FirebaseAnalytics.logEvent('custom_event', {
  param1: 'value1',
  param2: 'value2',
});

// Set user properties
FirebaseAnalytics.setUserProperty('favorite_food', 'pizza');

// Log a screen view
FirebaseAnalytics.logScreenView({
  screen_name: 'HomeScreen',
});
```

These are just a few examples of what you can do with Firebase Analytics. Refer to the official [Firebase Analytics documentation](https://firebase.google.com/docs/analytics) for more information on the available methods and their usage.

## Conclusion

In this tutorial, you learned how to integrate Firebase Analytics into your Capacitor project using the `@capacitor-community/firebase-analytics` package. You can now start gathering valuable insights about your app's user engagement and behavior. Happy tracking!