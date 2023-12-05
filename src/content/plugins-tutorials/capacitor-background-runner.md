# Using @capacitor/background-runner Package

## Introduction

In this tutorial, we will learn how to use the `@capacitor/background-runner` package in Capacitor to run background tasks in your mobile app. The `@capacitor/background-runner` package allows you to perform tasks in the background even when your app is not in the foreground. This can be useful for tasks such as fetching data, syncing data with a server, or updating the UI based on push notifications.

## Prerequisites

Before we begin, make sure you have the following installed:

- Capacitor CLI: `npm install -g @capacitor/cli`
- Capacitor Core: `npm install @capacitor/core`
- @capacitor/background-runner: `npm install @capacitor/background-runner`

## Step 1: Add the Plugin

To use the `@capacitor/background-runner` package in your app, you need to add it as a plugin in your Capacitor project. Open your terminal or command prompt and navigate to your project's root directory. Run the following command to add the plugin:

```bash
npx cap add @capacitor/background-runner
```

This will add the necessary iOS and Android files to your project.

## Step 2: Register the Plugin

Next, you need to register the `@capacitor/background-runner` plugin in your app. Open the `capacitor.config.json` file in your project's root directory and add the following code under the `plugins` section:

```json
{
  "plugins": {
    "BackgroundRunner": {
      "appId": "your.app.id",
      "mode": "background"
    }
  }
}
```

Make sure to replace `"your.app.id"` with your app's ID.

## Step 3: Define Background Tasks

Now, let's define the background tasks that you want to run. Create a new file named `background.ts` in your project's `src` directory. Add the following code to define a simple background task:

```typescript
import { Plugins } from '@capacitor/core';

const { BackgroundRunner } = Plugins;

export class BackgroundTasks {
  static async startTask() {
    await BackgroundRunner.start({
      taskName: 'myBackgroundTask',
      taskIdentifiers: ['backgroundTask'],
      taskData: {
        message: 'Hello from background task!'
      },
      timeout: 60000
    });
  }
}
```

In this code, we import the `BackgroundRunner` plugin from `@capacitor/core` and define a static method `startTask()` that starts a background task named `myBackgroundTask`. We also specify a task identifier, provide task data, and set a timeout of 60 seconds.

## Step 4: Trigger Background Tasks

To trigger the background task, you can call the `startTask()` method from anywhere in your app. For example, you can add a button in your UI and call the method when the button is clicked. Here's an example using Ionic React:

```tsx
import React from 'react';
import { IonButton } from '@ionic/react';
import { BackgroundTasks } from '../background';

const Home: React.FC = () => {
  const onClickStartTask = async () => {
    await BackgroundTasks.startTask();
  }

  return (
    <IonButton onClick={onClickStartTask}>
      Start Background Task
    </IonButton>
  );
}

export default Home;
```

In this example, we import the `BackgroundTasks` class from our `background.ts` file and call the `startTask()` method when the button is clicked.

## Conclusion

In this tutorial, we have learned how to use the `@capacitor/background-runner` package to run background tasks in your Capacitor app. We have covered how to add the plugin, register it in your project, define background tasks, and trigger them from your app. With this knowledge, you can now implement background tasks in your own Capacitor apps.

---

---
title: "Using @capacitor/background-runner Package in Capacitor"
description: "Learn how to use the @capacitor/background-runner package in Capacitor to run background tasks in your mobile app."
created_at: "YYYY-MM-DD"
published: true
slug: capacitor-background-runner