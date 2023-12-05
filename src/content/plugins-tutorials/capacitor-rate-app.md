---
title: "Using capacitor-app-rate Package"
description: "A tutorial on how to use the capacitor-app-rate package to implement rating feature in Capacitor apps."
created_at: "2023-03-16"
published: true
slug: "capacitor-app-rate"
---

# Using capacitor-app-rate Package

In this tutorial, we will learn how to use the `capacitor-app-rate` package to implement a rating feature in Capacitor apps. The `capacitor-app-rate` package provides a simple and customizable way to prompt users to rate your app on the app store.

## Prerequisites

Before we begin, make sure you have Capacitor installed and initialized in your project. If not, you can follow the official Capacitor documentation for installation and setup instructions.

## Installation

To install the `capacitor-app-rate` package, run the following command in your project root directory:

```bash
npm install capacitor-app-rate
```

## Integration

Once the installation is complete, we need to integrate the `capacitor-app-rate` package into our Capacitor app. Follow the steps below:

### Android Integration

1. Open your Android project in Android Studio.

2. Locate the `MainActivity.java` file in your project's `/android/app/src/main/java/__PACKAGE_PATH__/` directory.

3. Import the `AppRate` package:

   ```java
   import com.getcapacitor.community.apprate.AppRate;
   ```

4. Add the `AppRate` plugin to the `init` method:

   ```java
   this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
     // Other plugins...
     add(AppRate.class);
   }});
   ```

5. Save the changes and rebuild your Android project.

### iOS Integration

1. Open your iOS project in Xcode.

2. Locate the `AppDelegate.swift` file in your project's `/ios/App/App` directory.

3. Import the `AppRate` package:

   ```swift
   import CapacitorAppRate
   ```

4. Add the `AppRate` plugin to the AppDelegate's `application` method:

   ```swift
   self.registerPlugin(AppRate.self)
   ```

5. Save the changes and build your iOS project.

## Implementation

Now that we have integrated the `capacitor-app-rate` package into our project, we can start using it to prompt users to rate our app. Follow the steps below to implement the rating feature:

1. Import the `AppRate` module in your TypeScript file:

   ```typescript
   import { Plugins } from '@capacitor/core';
   const { AppRate } = Plugins;
   ```

2. Add the following method to check if the user has already rated the app:

   ```typescript
   async checkAppRateStatus() {
     const { hasRated } = await AppRate.checkAppRateStatus();
     if (hasRated) {
       // The user has already rated the app
     } else {
       // Prompt the user to rate the app
     }
   }
   ```

3. Invoke the `checkAppRateStatus` method to check the rating status:

   ```typescript
   this.checkAppRateStatus();
   ```

4. Customize the rating prompt by modifying the options:

   ```typescript
   AppRate.setOptions({
     appStoreId: '<YOUR_APP_STORE_ID>',
     usesUntilPrompt: 5,
     promptTitle: 'Enjoying the app?',
     promptMessage: 'Please take a moment to rate us on the app store.',
     cancelButtonLabel: 'No, thanks',
     laterButtonLabel: 'Remind me later',
     rateButtonLabel: 'Rate now'
   });
   ```

5. Call the `promptForRating` method to show the rating prompt:

   ```typescript
   async promptRating() {
     await AppRate.promptForRating();
   }
   ```

6. Invoke the `promptRating` method whenever you want to show the rating prompt:

   ```typescript
   this.promptRating();
   ```

That's it! You have successfully implemented the rating feature in your Capacitor app using the `capacitor-app-rate` package.

## Conclusion

In this tutorial, we learned how to use the `capacitor-app-rate` package to prompt users to rate our app on the app store. We integrated the package into our Capacitor app and implemented the rating feature by customizing the prompt options and displaying the prompt to users. The `capacitor-app-rate` package provides a straightforward way to encourage user ratings, which can help improve the visibility and credibility of your app in the app store.

Now you can go ahead and enhance the user experience in your Capacitor app by incorporating the `capacitor-app-rate` package.