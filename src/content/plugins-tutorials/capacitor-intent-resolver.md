---
title: "Using capacitor-intent-resolver package"
description: "A tutorial on how to use the capacitor-intent-resolver package in your Capacitor app"
created_at: "2022-01-10"
published: true
slug: capacitor-intent-resolver
---

# Using the capacitor-intent-resolver package

The `capacitor-intent-resolver` package provides a way to run external apps within a Capacitor app. This can be useful when you need to integrate with other apps on the user's device. In this tutorial, we will walk through the installation process and show you how to use the `capacitor-intent-resolver` package in your Capacitor app.

## Installation

To install the `capacitor-intent-resolver` package, use either npm or yarn. Open your terminal and run the following command:

```bash
$ npm i capacitor-intent-resolver
```

or

```bash
$ yarn add capacitor-intent-resolver
```

After the installation is complete, make sure to run the following command to sync the Capacitor plugins:

```bash
$ npx cap sync
```

## Android Setup

For Android, additional plugin settings are required in the `MainActivity.java` file of your Capacitor app. Open the `MainActivity.java` file and import the `CapacitorIntentResolver` plugin:

```java
package com.test.app;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;

import java.util.ArrayList;

// import CapacitorIntentResolver plugin
import com.capacitor.intent.resolver.CapacitorIntentResolver;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      // Ex: add(TotallyAwesomePlugin.class);

      add(CapacitorIntentResolver.class); // add CapacitorIntentResolver plugin
    }});
  }
}
```

With these installation and setup steps complete, you are now ready to use the `capacitor-intent-resolver` package in your Capacitor app.

## Example Usage

To use the `capacitor-intent-resolver` package, you can call its methods in your Capacitor app. Here's an example of how to launch an external app using the package:

```typescript
import { Plugins } from '@capacitor/core';

const { CapacitorIntentResolver } = Plugins;

// Launch an app with a specific package name
CapacitorIntentResolver.startActivity({
  packageName: 'com.example.app',
  action: 'android.intent.action.VIEW',
  uri: 'https://www.example.com',
});

// Start a specific activity within an app
CapacitorIntentResolver.startActivity({
  packageName: 'com.example.app',
  activityName: 'com.example.app.MainActivity',
});

// Check if an app is installed
CapacitorIntentResolver.isAppInstalled({
  packageName: 'com.example.app',
}).then((result) => {
  if (result.value === true) {
    console.log('App is installed');
  } else {
    console.log('App is not installed');
  }
});
```

In this example, we are using the `startActivity` method to launch an external app with a specific package name or activity name. We can also use the `isAppInstalled` method to check if an app is installed.

With this example, you should now have a better understanding of how to use the `capacitor-intent-resolver` package in your Capacitor app.

## Conclusion

The `capacitor-intent-resolver` package provides a convenient way to run external apps within your Capacitor app. By following the installation and setup steps outlined in this tutorial, you can easily integrate with other apps on the user's device. Experiment with the package and explore the various methods available to enhance the functionality of your app.