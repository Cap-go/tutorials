---
title: "Using the ds-android-toast-plugin Package"
description: "A tutorial on how to use the ds-android-toast-plugin package for displaying toast messages in Capacitor apps."
created_at: "October 20, 2021"
published: true
slug: "capacitor-toast-plugin"
---

# Using the ds-android-toast-plugin Package

The ds-android-toast-plugin package is a Capacitor plugin that allows you to display toast messages in your Capacitor apps. Toast messages are short-lived feedback messages that appear at the bottom of the screen and can be used to provide information to the user or confirm an action.

This tutorial will guide you through the installation and usage of the ds-android-toast-plugin package in your Capacitor project.

## Installation

The first step is to install the ds-android-toast-plugin package from npm. Open your terminal or command prompt, navigate to your Capacitor project's root folder, and execute the following command:

```bash
npm install ds-android-toast-plugin
```

## Adding the Plugin to your Project

After installing the package, you need to add the plugin to your project. Follow the steps below:

1. Open the `android/app/src/main/java/<YOUR_PACKAGE_NAME>/MainActivity.java` file in Android Studio.

2. Import the ToastPlugin package at the top of the file:

```java
import ds.android.toast.ToastPlugin;
```

3. Add the plugin to the `initialize` method in `MainActivity.java`:

```java
this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
    // Add other plugins here
    add(ToastPlugin.class);
}});
```

## Displaying a Toast Message

Now that the plugin is added to your project, you can use it to display toast messages. Follow the steps below:

1. Open the file where you want to display the toast message.

2. Import the ToastPlugin package at the top of the file:

```java
import ds.android.toast.ToastPlugin;
```

3. Use the `ToastPlugin.showToast` method to display the toast message:

```java
ToastPlugin.showToast(getContext(), "Hello, World!");
```

Replace `"Hello, World!"` with the actual message you want to display.

That's it! You have successfully installed and used the ds-android-toast-plugin package to display toast messages in your Capacitor app.

Remember to sync your project with Capacitor using the `npx cap sync` command for the changes to take effect.

## Conclusion

In this tutorial, you learned how to install and use the ds-android-toast-plugin package to display toast messages in your Capacitor apps. Toast messages are a great way to provide brief information or confirmations to your app users. Enjoy using the ds-android-toast-plugin package in your Capacitor projects!