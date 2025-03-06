---
"title": "Using capacitor-plugin-android-insets Package",
"description": "This tutorial will guide you through the steps of incorporating the capacitor-plugin-android-insets package into your Capacitor project on Android.",
"created_at": "2022-01-25",
"published": true,
"slug": "capacitor-plugin-android-insets.git"
---

# Using capacitor-plugin-android-insets Package

In this tutorial, you will learn how to utilize the **capacitor-plugin-android-insets** package to enhance your Capacitor project on Android by handling system insets. Follow the steps below to integrate this package into your project:

## Step 1: Installation

To get started, install the **capacitor-plugin-android-insets** package by running:

```bash
npm install capacitor-plugin-android-insets
```

## Step 2: Import the Package

After the installation is complete, import the package in your project. You can do this by adding the import statement to your code files:

```java
import com.kikosoftware.capacitor.android_insets.AndroidInsetsPlugin;
```

## Step 3: Initialize the Plugin

Next, initialize the plugin in your project. Make sure to add the following line inside the init callback in your `MainActivity.java` file:

```java
add(AndroidInsetsPlugin.class);
```

## Step 4: Configure System Insets

You can now configure and handle system insets using the **capacitor-plugin-android-insets** package. Utilize the functions provided by the package to manage system inset behavior in your Android application.

## Step 5: Testing

Finally, test the functionality of the plugin by running your Capacitor project on an Android device. Ensure that the system insets are handled correctly based on your configurations.

That's it! You have successfully integrated the **capacitor-plugin-android-insets** package into your Capacitor project on Android. Happy coding!