---
title: "Using @aparajita/capacitor-splash-screen"
description: "Learn how to install and configure the @aparajita/capacitor-splash-screen package for Capacitor."
created_at: "2021-12-01"
published: true
slug: "capacitor-splash-screen"
---

# Using @aparajita/capacitor-splash-screen

In this tutorial, we will learn how to install and configure the `@aparajita/capacitor-splash-screen` package for Capacitor. This package provides complete control over native splash screens on iOS and Android, allowing you to customize their appearance and behavior.

## Installation

To install the `@aparajita/capacitor-splash-screen` package, you can use either npm or yarn. Open your terminal and navigate to your project directory. Then run the following command:

```shell
pnpm add @aparajita/capacitor-splash-screen
```

This will download and install the package in your project.

## Launch screen configuration

The `@aparajita/capacitor-splash-screen` package supports two types of splash screens: launch screens and programmatic screens. The configuration and usage of these screens differ depending on the platform. We'll cover the basic configuration steps for iOS and Android:

### iOS

1. Create a launch screen storyboard and set it as the launch screen for your app, as you normally would.
2. Open your app's `AppDelegate.swift` file.
3. Add the following import statement at the top of the file:

   ```swift
   import AparajitaCapacitorSplashScreen
   ```

4. Inside the `application(_:didFinishLaunchingWithOptions:)` method, add the following line:

   ```swift
   SplashScreen.initLaunchTime()
   ```

   This initializes the `@aparajita/capacitor-splash-screen` package and ensures that the launch screen is displayed until after the app is fully mounted and drawn.

### Android

1. In Android Studio, create or import a vector drawable that will serve as the splash screen for your app.
2. Open your app's `res/values/styles.xml` file.
3. Add the following style definition:

   ```xml
   <style name="AppTheme.NoActionBarLaunch" parent="Theme.SplashScreen">
       <!-- Set the background color of the splash screen here -->
       <item name="windowSplashScreenBackground">@color/splash_screen_background</item>
   </style>
   ```

   Replace `@color/splash_screen_background` with the color of your choice or create a color resource for the background.

4. Optionally, you can also customize the status bar and navigation bar colors by adding the following lines to the same style definition:

   ```xml
   <item name="android:statusBarColor">@color/status_bar_color</item>
   <item name="android:navigationBarColor">@color/navigation_bar_color</item>
   ```

   Replace `@color/status_bar_color` and `@color/navigation_bar_color` with the colors of your choice or create color resources for them.

## Usage

Once you have installed and configured the `@aparajita/capacitor-splash-screen` package, you can use its features in your Capacitor app. Here are some examples of how to use the package:

### Automatically at launch

By default, the package will automatically display the configured splash screen at launch. You don't need to write any additional code for this. Just make sure that you have properly configured the launch screen as explained in the previous sections.

### Programmatically

If you need to show the splash screen programmatically at a later point in your app, you can use the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { SplashScreen } = Plugins;

// Show the splash screen
SplashScreen.show();
```

This will display the configured splash screen until you explicitly hide it.

### Customize timing

You can customize the timing parameters of the splash screen, such as delay, fade in duration, duration, and fade out duration. These parameters can be helpful when testing and fine-tuning the splash screen behavior. The default values are provided by the package, but you can override them if needed.

To customize the timing parameters, you can add the following configuration to your `capacitor.config.ts` file:

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // Other configuration options...

  plugins: {
    // Other plugins...

    SplashScreen: {
      launchShowDuration: 2000, // Duration in milliseconds
      launchAutoHide: true, // Whether to automatically hide the splash screen after the duration
      backgroundColor: '#ffffff', // Custom background color of the splash screen
    },
  },
};

export default config;
```

Adjust the values according to your requirements.

## Conclusion

In this tutorial, we have learned how to install and configure the `@aparajita/capacitor-splash-screen` package for Capacitor. We have covered the basic steps for configuring launch screens on iOS and Android, as well as how to use the package's features programmatically. Additionally, we have seen how to customize the timing parameters of the splash screen.

With the `@aparajita/capacitor-splash-screen` package, you have complete control over your app's splash screens, allowing you to create a seamless and customized user experience during app startup.

I hope this tutorial has been helpful to you. Happy coding!
