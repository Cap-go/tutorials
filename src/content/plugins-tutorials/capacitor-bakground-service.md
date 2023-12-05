---
title: "Using capacitor-background-service Package"
description: "A tutorial on how to use the capacitor-background-service package for background tasks in Capacitor"
created_at: "2021-10-27"
published: true
slug: "capacitor-background-service"
---

# Using Capacitor Background Service Package

In this tutorial, we will learn how to use the `capacitor-background-service` package to perform background tasks in a Capacitor application.

## Installation

To get started, we need to install the `capacitor-background-service` package in our Capacitor project. Open your terminal and run the following command:

```bash
npm install capacitor-background-service
```

This will install the package and add it to our project's dependencies.

## Configuring Capacitor

Next, we need to configure Capacitor to use the background service. Open your project's `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "BackgroundTask": {
      "backgroundServiceEnabled": true
    }
  }
}
```

This configuration enables the background service plugin in Capacitor.

## Creating a Background Task

Now, let's create a simple background task using the `capacitor-background-service` package. Create a new file called `background-task.ts` in your project's `src` directory with the following code:

```typescript
import { BackgroundTask } from 'capacitor-background-service';

BackgroundTask.beforeExit(async () => {
  console.log('Background Task is running...');
  // Perform your background task here
});
```

In this example, we are using the `beforeExit` method to register a background task. Whenever the app is about to be closed or sent to the background, the registered task will be executed.

You can perform any background tasks within the callback function.

## Testing the Background Task

To test the background task, add the following code to your project's `app.component.ts` file:

```typescript
import { Plugins } from '@capacitor/core';

const { BackgroundTask } = Plugins;

initializeApp() {
  BackgroundTask.beforeExit(async () => {
    console.log('Background Task is running...');
    // Perform your background task here
  });
}
```

Now, whenever you close the app or send it to the background, the background task will be executed, and you will see the log message in the console.

## Conclusion

In this tutorial, we have learned how to use the `capacitor-background-service` package to perform background tasks in a Capacitor application. By following the installation and configuration steps, and creating a background task, we can efficiently perform tasks even when our app is running in the background.

Feel free to explore the `capacitor-background-service` package documentation for more advanced features and options.

Remember to handle background tasks responsibly and consider the impact on device performance and battery life.

