---
title: "Using Capacitor Intent Plugin"
description: "A tutorial on how to use the Capacitor Intent Plugin"
created_at: "2021-10-25"
published: true
slug: "capacitor-intent"
---

# Using Capacitor Intent Plugin

In this tutorial, we will learn how to use the Capacitor Intent Plugin to receive data from other Android applications via the share menu or share sheet. The plugin allows your Capacitor application to handle shared data and provides a listener to capture the incoming data.

## Installation

To install the Capacitor Intent Plugin, use the following command:

```bash
npm i capacitor-plugin-send-intent
```

## Configuration

### Register Plugin on Capacitor Android App

First, you need to register the plugin in your Android capacitor app. Open the `MainActivity.java` file located at `your-project-name/android/app/src/main/java/com/yourdomain/yourproject/MainActivity.java`. Import the `SendIntent` class:

```java
import com.gustavosanjose.sendintentplugin.SendIntent;
```

Next, add the `SendIntent` plugin to the `MainActivity` class:

```java
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // ...
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Add this line to register the SendIntent plugin
      add(SendIntent.class);
    }});
  }
}
```

## Usage

After installing and configuring the plugin, you can start using it in your Capacitor application. The plugin exposes an event called `appSendActionIntent` that receives a `data` object containing the information received from the native intent.

To listen for incoming intents, add the following code in your JavaScript file:

```typescript
import { Plugins } from '@capacitor/core';

const { SendIntent } = Plugins;

SendIntent.addListener('appSendActionIntent', (data) => {
  // Handle the received data
  console.log('Received data:', data);
});
```

The `data` object contains the received information from the native intent. The keys in the `data` object correspond to Android intent extras, such as `android.intent.extra.TEXT`. These keys are named according to Android's constants for better compatibility.

## Example

Here is an example of how to handle a shared text intent in your Capacitor application:

```typescript
SendIntent.addListener('appSendActionIntent', (data) => {
  if (data.extraType === 'android.intent.extra.TEXT') {
    const sharedText = data.extras[data.extraType];
    // Do something with the shared text
    console.log('Shared text:', sharedText);
  }
});
```

In this example, we first check if the received data corresponds to a shared text intent (`android.intent.extra.TEXT`). If it does, we extract the shared text from the `extras` object and perform some action with it.

## Summary

In this tutorial, we learned how to use the Capacitor Intent Plugin to receive data from other Android applications. We covered the installation and configuration steps, as well as the usage of the plugin to listen for incoming intents. We also provided an example of handling a shared text intent in a Capacitor application.

Now you can leverage the Capacitor Intent Plugin to enable your application to interact with other apps through the Android share functionality.