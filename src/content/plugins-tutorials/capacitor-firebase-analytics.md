---
title: "Using @boundstate/capacitor-firebase-analytics"
description: "A tutorial on how to use the @boundstate/capacitor-firebase-analytics package in your Capacitor projects."
created_at: "2021-12-01"
published: true
slug: "capacitor-firebase-analytics"
---

# Using @boundstate/capacitor-firebase-analytics

In this tutorial, we will learn how to integrate the `@boundstate/capacitor-firebase-analytics` package into your Capacitor project. This package allows you to track user events, app screens, and custom events using Firebase Analytics.

## Prerequisites

Before we begin, make sure you have the following requirements met:

- Capacitor project set up
- Firebase project created and configured

If you haven't set up your Capacitor project or Firebase project, please refer to their respective documentation for detailed instructions.

## Step 1: Install the package

To get started, navigate to your Capacitor project's root directory and install the `@boundstate/capacitor-firebase-analytics` package using npm or yarn.

```bash
npm install @boundstate/capacitor-firebase-analytics --save
```

or

```bash
yarn add @boundstate/capacitor-firebase-analytics
```

## Step 2: Android setup

For Android, there are a few additional steps you need to perform.

1. Make sure you have added the `google-services.json` file provided by Firebase to your `android/app` folder.

2. Open your `android/app/src/main/java/{package-name}/MainActivity.java` file and import the `Analytics` class from the `@boundstate/capacitor-firebase-analytics` package.

```java
import com.getcapacitor.plugin.Analytics;
```

3. Inside the `init` method of the `MainActivity` class, add the `Analytics` plugin.

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // ...
      add(Analytics.class); // Add this line
      // ...
    }});
  }
}
```

## Step 3: iOS setup

For iOS, there are also some additional steps.

1. Open your Xcode project by running the following command in your Capacitor project's root directory:

```bash
npx cap open ios
```

2. In Xcode, navigate to your app target's **Build Phases** settings.

3. Click on the **+** button and select **New Run Script Phase**.

4. Enter the following script into the newly created run script phase:

```bash
../node_modules/.bin/boundstate-capacitor-firebase-analytics configure
```

This script will automatically configure your Xcode project with the necessary Firebase Analytics settings.

5. Build and run your iOS app using Xcode.

## Step 4: Initialize the plugin

In your Capacitor project's entry file (usually `src/main.ts` or `src/index.ts`), import and initialize the `@boundstate/capacitor-firebase-analytics` plugin.

```typescript
import { CapacitorFirebaseAnalytics } from '@boundstate/capacitor-firebase-analytics';

CapacitorFirebaseAnalytics.initialize();
```

## Step 5: Track events

Now that the plugin is set up, you can start tracking events using Firebase Analytics. The plugin provides various methods to track different types of events, such as screen views and custom events.

```typescript
import { CapacitorFirebaseAnalytics } from '@boundstate/capacitor-firebase-analytics';

// Track a screen view
CapacitorFirebaseAnalytics.logScreenView({
  screenName: 'Home',
});

// Track a custom event
CapacitorFirebaseAnalytics.logEvent({
  name: 'button_click',
  params: {
    button_id: 'login_button',
  },
});
```

You can find more information on the available methods and event parameters in the plugin's documentation.

## Conclusion

In this tutorial, we have learned how to integrate the `@boundstate/capacitor-firebase-analytics` package into your Capacitor project. We covered the installation process, Android and iOS setup steps, initializing the plugin, and tracking events using Firebase Analytics.

Firebase Analytics is a powerful tool to gain insights into user behavior and app performance. By tracking events, you can make data-driven decisions to improve your app and user experience.

Remember to refer to the official documentation for more detailed information and additional features provided by the `@boundstate/capacitor-firebase-analytics` package.

Happy tracking!

---

I hope you find this tutorial helpful. If you have any questions, feel free to ask!