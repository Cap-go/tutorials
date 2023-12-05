---
title: "Using Capacitor Intents for Android"
description: "A tutorial on how to use the capacitor-intents-for-android package to handle Android intents in a Capacitor application."
created_at: "2022-01-01"
published: true
slug: "capacitor-intents"
---

# Using Capacitor Intents for Android

In this tutorial, we will learn how to use the `capacitor-intents-for-android` package to handle Android intents in a Capacitor application. 

## Installation

First, let's install the `capacitor-intents-for-android` package using npm:

```bash
npm install capacitor-intents-for-android
```

## Configuration

To configure the plugin, we need to register it in the `MainActivity.java` file of our Capacitor Android app. Open the `MainActivity.java` file located at `android/app/src/main/java/com/yourdomain/yourproject/MainActivity.java` and add the following import statement:

```java
import com.capacitor.intents.CapacitorIntents;
```

Then, inside the `onCreate` method, add the following line to register the plugin:

```java
add(Plugin.class);
```

Make sure to replace `Plugin.class` with the actual class name of the `capacitor-intents-for-android` plugin.

## Usage

Once the plugin is installed and configured, we can start using it in our Capacitor application. 

### Opening an Activity with Intent

To open an Android activity using an intent, we can use the `openActivity` method provided by the plugin. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorIntents } = Plugins;

CapacitorIntents.openActivity({
  packageName: 'com.example.myapp',
  activityName: 'com.example.myapp.MainActivity'
});
```

In the above example, we use the `openActivity` method to open the `MainActivity` of package `com.example.myapp`. Make sure to replace the values accordingly in your application.

### Handling Incoming Intents

To handle incoming intents in our Capacitor application, we can use the `addListener` method provided by the plugin. Here's an example:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorIntents } = Plugins;

CapacitorIntents.addListener('appIntentReceived', (data) => {
  console.log('Received intent:', data);
});
```

In the above example, we use the `addListener` method to listen for the `appIntentReceived` event, which is triggered when the application receives an intent. The `data` parameter contains the information received from the intent.

## Conclusion

In this tutorial, we learned how to use the `capacitor-intents-for-android` package to handle Android intents in a Capacitor application. We covered installation, configuration, opening an activity with intent, and handling incoming intents. This package provides a convenient way to interact with Android intents in a Capacitor application.