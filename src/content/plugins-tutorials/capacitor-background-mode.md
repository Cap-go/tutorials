---
title: "Using @anuradev/capacitor-background-mode Package"
description: "In this tutorial, we will learn how to use the @anuradev/capacitor-background-mode package in Capacitor to enable background mode in our mobile apps."
created_at: "2021-11-22"
published: true
slug: "capacitor-background-mode"
---

# Using @anuradev/capacitor-background-mode Package

In this tutorial, we will learn how to use the @anuradev/capacitor-background-mode package in Capacitor to enable background mode in our mobile apps.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor

## Step 1: Create a Capacitor Project

If you don't have a Capacitor project set up, you can create one using the following command:

```bash
npx @capacitor/cli create
```

Follow the prompts to set up your project.

## Step 2: Install the @anuradev/capacitor-background-mode Package

Once your Capacitor project is set up, you can install the @anuradev/capacitor-background-mode package using npm:

```bash
npm install @anuradev/capacitor-background-mode
```

## Step 3: Configure the Background Mode Plugin

After installing the package, you need to configure it in your Capacitor project. Open the `capacitor.config.json` file and add the following entry in the `plugins` section:

```json
{
  "plugins": {
    "BackgroundMode": {
      "ios": {
        "batteryMonitoringEnabled": true,
        "preventSuspend": true
      },
      "android": {
        "notificationTitle": "App is running in background",
        "notificationText": "Tap to open the app"
      }
    }
  }
}
```

## Step 4: Import and Initialize the Background Mode Plugin

In your `index.ts` file, import the plugin from the @anuradev/capacitor-background-mode package:

```typescript
import '@anuradev/capacitor-background-mode';

const { BackgroundMode } = Capacitor.Plugins;
```

Next, initialize the background mode plugin in your app's initialization code:

```typescript
BackgroundMode.initialize();
```

## Step 5: Enable Background Mode

To enable background mode, you can use the `enable` method:

```typescript
BackgroundMode.enable();
```

## Step 6: Handle Background Mode Events

You can listen for background mode events by using the `on` method. For example, you can listen for the `activate` event:

```typescript
BackgroundMode.on('activate').subscribe(() => {
  // Perform background tasks
});
```

## Step 7: Disable Background Mode

To disable background mode, you can use the `disable` method:

```typescript
BackgroundMode.disable();
```

## Conclusion

In this tutorial, we have learned how to use the @anuradev/capacitor-background-mode package to enable background mode in our Capacitor apps. We covered the installation, configuration, initialization, enabling, handling of events, and disabling of background mode.

By enabling background mode, you can add features such as playing audio, tracking location, or performing periodic tasks in the background, even when the app is not active.

Happy coding!