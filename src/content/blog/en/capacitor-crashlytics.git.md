---
title: Using capacitor-crashlytics-cc-fork Package Tutorial
description: Learn how to integrate and use the capacitor-crashlytics-cc-fork package in your Capacitor projects.
created_at: 2023-10-29
published: true
slug: capacitor-crashlytics.git
locale: en
---

# Using capacitor-crashlytics-cc-fork Package Tutorial

In this tutorial, you will learn how to integrate and use the `capacitor-crashlytics-cc-fork` package in your Capacitor projects.

## Setup

To start using the `capacitor-crashlytics-cc-fork` package, follow these steps:

1. Install the package in your Capacitor project:
   ```bash
   npm install --save capacitor-crashlytics-cc-fork
   ```

2. Add the Android platform to your project:
   ```bash
   npx cap add android
   ```

3. Sync your project to update any changes:
   ```bash
   npx cap sync android
   ```

4. Open your Android project in Android Studio:
   ```bash
   npx cap open android
   ```

5. Place the necessary configurations, like `google-services.json`, in the required directories.

6. Initialize the plugin by adding the following code to the `MainActivity.java` file:
   ```java
   import io.stewan.capacitor.crashlytics.CrashlyticsPlugin;
   ```

   Inside the init callback:
   ```java
   add(CrashlyticsPlugin.class);
   ```

## Build Phase

1. Create a Fabric account according to the instructions provided.

2. Follow the installation instructions to configure the build phase and add your API Key.

3. After building the app in Xcode, link it to the Firebase console.

4. To view logs on the panel, force a crash using the `crash` method and then restart the app.

## Updating

For existing projects, you can upgrade all Capacitor-related packages, including this plugin, with the following command:
```bash
npx npm-upgrade '*capacitor*' && npm install
```

## Additional Information

For more details on using this package, you can refer to the [capacitor-crashlytics-cc-fork GitHub repository](https://github.com/example/capacitor-crashlytics-cc-fork).

Remember to follow best practices and keep your dependencies updated.

Happy coding!
