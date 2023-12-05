---
title: "How to Use capacitor-launch-intent Package"
description: "A step-by-step tutorial on using the capacitor-launch-intent package in your Capacitor app"
created_at: "2021-08-25"
published: true
slug: capacitor-launch-intent
---

# How to Use capacitor-launch-intent Package

In this tutorial, we will go through the process of using the `capacitor-launch-intent` package in your Capacitor app. The `capacitor-launch-intent` plugin allows you to launch specific activities or applications on an Android device using intents. This can be useful when integrating your app with other apps or services.

## Prerequisites

Before we begin, make sure you have the following installed and set up:

- Capacitor development environment and a Capacitor app project.
- Android SDK and Android Studio.

## Installation

To install the `capacitor-launch-intent` package, use the following command:

```bash
npm install capacitor-launch-intent
```

## Register Plugin on Capacitor Android App

Open the `MainActivity.java` file located in the `android/app/src/main/java/com/yourdomain/yourproject/` directory of your Capacitor app. Add import statement for the `LaunchIntent` plugin:

```java
import com.gustavosanjose.capacitor.plugin.LaunchIntent;
```

Then, register the plugin in the `MainActivity` class by adding the following line inside the `onCreate` method:

```java
add(LaunchIntent.class);
```

## Launch an Activity

To launch an activity using `capacitor-launch-intent`, you need to define the component name of the activity you want to launch. The component name consists of the package name and the activity class name.

In your Capacitor app's JavaScript code, import the `LaunchIntent` plugin:

```javascript
import { Plugins } from '@capacitor/core';
const { LaunchIntent } = Plugins;
```

To launch an activity, use the `launchActivity` method of the `LaunchIntent` plugin:

```javascript
const launchActivity = async () => {
  const package = 'com.example.app';
  const class = 'com.example.app.MainActivity';

  try {
    await LaunchIntent.launchActivity({ package, class });
    console.log('Activity launched successfully');
  } catch (error) {
    console.error('Failed to launch activity:', error);
  }
};

launchActivity();
```

Replace `com.example.app` with the actual package name of the activity and `com.example.app.MainActivity` with the class name of the activity you want to launch.

## Launch an Application

To launch an application using `capacitor-launch-intent`, you need to define the package name of the application.

In your Capacitor app's JavaScript code, import the `LaunchIntent` plugin (if not already imported):

```javascript
import { Plugins } from '@capacitor/core';
const { LaunchIntent } = Plugins;
```

To launch an application, use the `launchApplication` method of the `LaunchIntent` plugin:

```javascript
const launchApplication = async () => {
  const package = 'com.example.app';

  try {
    await LaunchIntent.launchApplication({ package });
    console.log('Application launched successfully');
  } catch (error) {
    console.error('Failed to launch application:', error);
  }
};

launchApplication();
```

Replace `com.example.app` with the actual package name of the application you want to launch.

## Conclusion

In this tutorial, we learned how to use the `capacitor-launch-intent` package to launch activities and applications on an Android device in a Capacitor app. We covered the installation process, how to register the plugin in your Capacitor app, and how to use the `launchActivity` and `launchApplication` methods to launch specific activities and applications.

You can now integrate your Capacitor app with other apps and services by leveraging the power of intents on Android with the `capacitor-launch-intent` plugin.