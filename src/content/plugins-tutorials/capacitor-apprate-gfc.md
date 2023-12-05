---
title: "Using the capacitor-apprate-gfc package"
description: "In this tutorial, we will learn how to use the capacitor-apprate-gfc package to implement an app rating feature in your Capacitor app."
created_at: "2021-10-25"
published: true
slug: "capacitor-apprate-gfc"
---

# Using the capacitor-apprate-gfc package

The capacitor-apprate-gfc package allows you to easily implement an app rating feature in your Capacitor app. It provides a simple and customizable way to prompt your users to rate your app on the Android platform. This tutorial will guide you through the steps required to integrate and use the capacitor-apprate-gfc package in your project.

## Prerequisites

Before we begin, make sure you have the following:

- Node.js and NPM installed on your machine.
- A Capacitor project set up.

## Installation

To start using the capacitor-apprate-gfc package, follow these steps:

1. Open your terminal and navigate to your Capacitor project's root directory.
2. Install the package using NPM by running the following command:

   ```bash
   npm install capacitor-apprate-gfc
   ```

3. After the installation is complete, sync your app with Capacitor by running:

   ```bash
   npx cap sync
   ```

4. Open your project in an Android IDE (e.g., Android Studio).

## Usage

To use the capacitor-apprate-gfc package in your project, follow these steps:

1. In your project's `MainActivity.java` file, import the necessary classes:

   ```java
   import com.capacitorapprategfc.apprategfc.AppRateGFC;
   import com.capacitorapprategfc.apprategfc.AppRateGFCPlugin;
   ```

2. Add the following code to your `MainActivity` class:

   ```java
   public class MainActivity extends BridgeActivity {
       @Override
       public void onCreate(Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);

           // Initialize the AppRateGFC plugin
           AppRateGFC appRateGFC = new AppRateGFC(this);

           // Set the minimum number of launches before showing the rating dialog (optional)
           appRateGFC.setMinLaunches(5);

           // Set the minimum number of days before showing the rating dialog (optional)
           appRateGFC.setMinDays(7);

           // Set the title and message for the rating dialog (optional)
           appRateGFC.setTitle("Rate the App");
           appRateGFC.setMessage("If you enjoy using this app, please take a moment to rate it.");

           // Show the rating dialog
           appRateGFC.showDialog();
       }
   }
   ```

3. Build and run your app on an Android device or emulator to see the app rating dialog in action. The dialog will be displayed after the specified minimum launches or minimum days.

## Customization

The capacitor-apprate-gfc package provides several customization options for the app rating dialog. You can modify the following properties:

- `setTitle(title: string)`: Set the title of the rating dialog.
- `setMessage(message: string)`: Set the main message of the rating dialog.
- `setPositiveButton(text: string)`: Set the text for the positive button (Rate Now).
- `setNegativeButton(text: string)`: Set the text for the negative button (Remind Me Later).
- `setCancelButton(text: string)`: Set the text for the cancel button (Never Ask Again).
- `setMinLaunches(launches: number)`: Set the minimum number of app launches before showing the rating dialog.
- `setMinDays(days: number)`: Set the minimum number of days before showing the rating dialog.
- `setStoreTarget(storeTarget: string)`: Set the store target for the rating link (e.g., "market://details?id=com.example.app").

You can call these methods on the `AppRateGFC` instance to customize the behavior of the app rating dialog.

## Conclusion

In this tutorial, we learned how to use the capacitor-apprate-gfc package to implement an app rating feature in your Capacitor app. We covered the installation process, usage instructions, and customization options available for the app rating dialog. Now you can prompt your users to rate your app and gather valuable feedback from them.

For more information and advanced usage, refer to the [capacitor-apprate-gfc documentation](https://github.com/SASGeniusFlashConception/capacitor-apprate-gfc).

Happy coding!