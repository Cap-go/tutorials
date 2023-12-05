---
title: "Using the capacitor-google-play-services-checker package"
description: "A tutorial on how to use the capacitor-google-play-services-checker package to check for Google Play Services availability in Capacitor applications."
created_at: "2022-10-18"
published: true
slug: "capacitor-google-play-services-checker"
---

# Using the capacitor-google-play-services-checker package

In this tutorial, we will explore how to use the capacitor-google-play-services-checker package to check for Google Play Services availability in Capacitor applications. This package is helpful in ensuring that all necessary Google Play Services are installed on the user's device before using any related functionality.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

1. Capacitor installed in your project.
2. An existing Capacitor application.

## Installation

To get started, install the capacitor-google-play-services-checker package in your Capacitor project by running the following command:

```bash
npm install capacitor-google-play-services-checker
```

## Android Setup

The capacitor-google-play-services-checker package requires some setup on the Android side. Follow these steps to complete the setup:

1. Open your Android project in Android Studio.
2. Open the `MainActivity.java` file located in `app/src/main/java/{your-package-name}`.
3. Import the `com.capacitorgoogleplayservices.GooglePlayServicesCheckerPlugin` package at the top of the file.
4. Add the plugin to the `init` method of your MainActivity class by calling `add(GooglePlayServicesCheckerPlugin.class);`.

Your `MainActivity.java` file should now look like this:

```java
package com.example.myapp;

import android.os.Bundle;
import com.capacitorgoogleplayservices.GooglePlayServicesCheckerPlugin;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      add(GooglePlayServicesCheckerPlugin.class); // Add this line
    }});
  }
}
```

## Checking Google Play Services Availability

Now that the setup is complete, you can start using the capacitor-google-play-services-checker package to check the availability of Google Play Services. Here's an example of how to use it:

```typescript
import { Plugins } from "@capacitor/core";

const { GooglePlayServicesChecker } = Plugins;

async function checkPlayServices() {
  try {
    const result = await GooglePlayServicesChecker.checkPlayServices();
    console.log("Play Services Availability:", result.isAvailable);
    console.log("Play Services Version:", result.versionCode);
  } catch (error) {
    console.error("Error checking Play Services:", error);
  }
}

checkPlayServices();
```

The `checkPlayServices` function uses the `checkPlayServices` method from the `GooglePlayServicesChecker` plugin to check the availability of Google Play Services. The result object contains two properties: `isAvailable` (a boolean indicating if Google Play Services is available) and `versionCode` (the version code of Google Play Services).

## Conclusion

In this tutorial, we learned how to use the capacitor-google-play-services-checker package to check for Google Play Services availability in Capacitor applications. This package is essential to ensure a smooth user experience when using Google Play Services-related features in your app.

By following the installation steps and using the provided code examples, you can easily integrate Google Play Services checking into your Capacitor project.