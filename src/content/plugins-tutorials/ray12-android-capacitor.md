---
title: "Using the ray12-android-capacitor Package"
description: "A tutorial on how to use the ray12-android-capacitor package for Android"
created_at: "2021-12-01"
published: true
slug: "ray12-android-capacitor"
---

# Using the ray12-android-capacitor Package

This tutorial will guide you through the process of using the ray12-android-capacitor package in your Android project.

## Prerequisites

Before we begin, make sure you have the following:

- Android Studio installed.
- Capacitor installed in your project.

## Installation

To install the ray12-android-capacitor package, run the following command in your project's root directory:

```bash
npm install ray12-android-capacitor
```

## Configuration

After installing the package, you need to configure it in your Android project.

1. Open your Android project in Android Studio.
2. Locate the `MainActivity.java` file in the `app/src/main/java/{your_package_name}` directory.
3. Import the `Ray12` class from the ray12-android-capacitor package:

```java
import io.ray12.capacitor.Ray12;
```

4. Inside the `onCreate` method of your `MainActivity` class, add the following line to initialize the Ray12 plugin:

```java
Ray12.initialize(this);
```

## Usage

Now that you have installed and configured the ray12-android-capacitor package, you can start using its features.

### Example 1: Initialize the SDK

To initialize the Ray12 SDK, use the following code snippet:

```java
Ray12.initializeSDK("YOUR_API_KEY");
```

Replace `YOUR_API_KEY` with your actual API key.

### Example 2: Track an Event

To track an event using Ray12, use the following code snippet:

```java
Ray12.trackEvent("event_name", { "param1": "value1", "param2": "value2" });
```

Replace `event_name` with the name of your event, and provide any additional parameters as a JSON object.

### Example 3: Send a Custom Event

To send a custom event to Ray12, use the following code snippet:

```java
Ray12.sendCustomEvent("custom_event_name", { "param1": "value1", "param2": "value2" });
```

Replace `custom_event_name` with the name of your custom event, and provide any additional parameters as a JSON object.

## Conclusion

In this tutorial, we have learned how to install, configure, and use the ray12-android-capacitor package in an Android project. We have covered initializing the SDK, tracking events, and sending custom events. Now you can start integrating Ray12 into your Android application and leverage its powerful analytics capabilities.

Remember to check out the official documentation of the ray12-android-capacitor package for more detailed instructions and advanced features. Happy coding!