---
title: "Using @legalmentedev/capacitor-foreground-service Package"
description: "A tutorial on how to use the @legalmentedev/capacitor-foreground-service package to create foreground services in Capacitor apps."
created_at: "2022-04-09"
published: true
slug: "capacitor-foreground-service"
---

# Using @legalmentedev/capacitor-foreground-service Package

In this tutorial, we will learn how to use the `@legalmentedev/capacitor-foreground-service` package in a Capacitor app to create foreground services. Foreground services allow apps to run certain tasks in the background even when the app is not actively used by the user. This can be useful for tasks like playing audio, tracking location, etc.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js
- Capacitor

## Step 1: Install the Package

To start using the `@legalmentedev/capacitor-foreground-service` package, we need to install it first. Open your terminal and navigate to your Capacitor app's root directory. Then, run the following command:

```bash
npm install @legalmentedev/capacitor-foreground-service
```

## Step 2: Configure the Package

After installing the package, we need to configure it in our project. Open the `capacitor.config.json` file in your project's root directory and add the following entry under the `plugins` section:

```json
{
  "plugins": {
    "ForegroundService": {
      "notificationTitle": "My App",
      "notificationIconColor": "#FF0000",
      "notificationIconName": "icon"
    }
  }
}
```

In this configuration, you can customize the `notificationTitle`, `notificationIconColor`, and `notificationIconName` according to your app's requirements.

## Step 3: Implement the Foreground Service

Now, let's implement a foreground service in our app. Create a new TypeScript file (e.g., `foreground.service.ts`) and add the following code:

```typescript
import { Plugins } from "@capacitor/core";

const { ForegroundService } = Plugins;

export class ForegroundServicePlugin {
  static async startForegroundService() {
    return await ForegroundService.start({
      channelId: "foreground_service_channel",
      channelName: "Foreground Service",
      notificationTitle: "My Foreground Service",
      notificationText: "Running in the background",
      notificationIconColor: "#FF0000",
      notificationIconName: "icon",
    });
  }

  static async stopForegroundService() {
    return await ForegroundService.stop();
  }
}
```

In this code, we import the `ForegroundService` plugin from Capacitor and define two static methods: `startForegroundService()` and `stopForegroundService()`. The `startForegroundService()` method starts the foreground service with the specified notification details, while the `stopForegroundService()` method stops the service.

## Step 4: Using the Foreground Service

Now that we have implemented the foreground service, we can use it in our app. Open the desired component (e.g., `home.page.ts`) and import the `ForegroundServicePlugin` class:

```typescript
import { ForegroundServicePlugin } from "./foreground.service";
```

To start the foreground service, add the following code to the desired method:

```typescript
ForegroundServicePlugin.startForegroundService()
  .then(() => {
    console.log("Foreground service started successfully");
  })
  .catch((error) => {
    console.error("Failed to start foreground service:", error);
  });
```

To stop the foreground service, add the following code to the desired method:

```typescript
ForegroundServicePlugin.stopForegroundService()
  .then(() => {
    console.log("Foreground service stopped successfully");
  })
  .catch((error) => {
    console.error("Failed to stop foreground service:", error);
  });
```

That's it! You have successfully implemented and used the `@legalmentedev/capacitor-foreground-service` package in your Capacitor app to create a foreground service.

## Conclusion

In this tutorial, we learned how to use the `@legalmentedev/capacitor-foreground-service` package to create foreground services in Capacitor apps. Foreground services can be used to run tasks in the background, providing a better user experience and allowing apps to perform certain tasks continuously.

You can find more details about this package in the official documentation: [link to documentation](https://example.com)

Remember to consult the plugin's documentation for any specific usage instructions or additional features.

Feel free to explore more about foreground services and customize them to fit your app's requirements!

