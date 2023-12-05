---
title: "Using apps-timestamps-plugin Package"
description: "This tutorial will guide you on how to use the apps-timestamps-plugin package in your Capacitor app."
created_at: "2021-10-05"
published: true
slug: "apps-timestamps-plugin"
---

# Using apps-timestamps-plugin Package

The apps-timestamps-plugin is a Capacitor plugin that allows you to retrieve timestamps for each installed app on the device. This can be useful for tracking the usage of apps or analyzing app usage patterns. In this tutorial, we will guide you through the installation process and demonstrate how to use this plugin in your Capacitor app.

## Installation

To install the apps-timestamps-plugin package, follow these steps:

1. Open your project directory in a terminal.
2. Run the following command to install the package:

   ```
   npm i apps-timestamps-plugin
   ```

## Sync

After installing the package, you need to sync your Capacitor project to ensure the plugin is properly registered. Follow these steps to sync your project:

1. Run the following command in your terminal:

   ```
   npx cap sync
   ```

### Android Notes

If you are targeting Android, there are a few additional steps:

1. Open the `AndroidManifest.xml` file in your Android project.
2. Add the following permission before the closing `</manifest>` tag:

   ```
   <uses-permission android:name="android.permission.QUERY_ALL_PACKAGES"/>
   ```

3. Import the `capContacts` class to your `MainActivity` file:

   ```java
   // Initializes the Bridge
   this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
     // Additional plugins you've installed go here
     add(NumOfActiveAppsPlugin.class)
   }});
   ```

That's it! The apps-timestamps-plugin package is now installed and ready to be used in your Capacitor app.

---

You can now start using the apps-timestamps-plugin package in your app to retrieve app timestamps and analyze app usage patterns. Refer to the plugin's documentation for available methods and examples.

Remember to consult the official Capacitor documentation for more information on working with plugins and building Capacitor apps.

Happy coding!