To generate a markdown tutorial for using the `capacitor-motion` package, you can create a new markdown file with the following content:

```
---
title: "Using capacitor-motion Package"
description: "This tutorial will guide you on how to use the capacitor-motion package in your Capacitor app."
created_at: "2022-06-15"
published: true
slug: capacitor-motion
---

# Using capacitor-motion Package

In this tutorial, we will learn how to use the `capacitor-motion` package to add motion and animations to your Capacitor app.

## Prerequisites

Before we get started, make sure you have the following installed:

- Capacitor CLI: [Installation Guide](https://capacitorjs.com/docs/getting-started#installation)

## Step 1: Install the Package

To begin, let's start by installing the `capacitor-motion` package. Open your terminal and run the following command:

```bash
npm install capacitor-motion
```

## Step 2: Import the Package

Next, we need to import the `capacitor-motion` package in our project. Open your `capacitor.config.json` file and add the following import statement:

```json
{
  "plugins": {
    "Motion": {
      "ios": "CapacitorMotion",
      "android": "CapacitorMotion"
    }
  }
}
```

## Step 3: Initialize the Plugin

After importing the package, we need to initialize it. In your app's entry file (e.g., `app.component.ts`), import the `Motion` plugin and add the following code snippet:

```typescript
import { Plugins } from '@capacitor/core';

const { Motion } = Plugins;

Motion.initialize();
```

## Step 4: Using the Motion API

Once the plugin is initialized, we can start using the Motion API to add motion and animations to our app. Here's an example of how to detect device motion:

```typescript
import { Plugins } from '@capacitor/core';

const { Motion } = Plugins;

Motion.addListener('deviceMotion', (event: any) => {
  console.log('Device motion detected!');
  console.log('Acceleration X: ', event.acceleration.x);
  console.log('Acceleration Y: ', event.acceleration.y);
  console.log('Acceleration Z: ', event.acceleration.z);
});
```

You can explore the `capacitor-motion` documentation for more details on available methods and functionalities.

## Conclusion

In this tutorial, we learned how to use the `capacitor-motion` package to add motion and animations to a Capacitor app. We covered installation, importing the package, initializing the plugin, and using the Motion API. Now you can enhance your app with beautiful animations and motion effects.

Happy coding!
```

Make sure to save the file with a `.md` extension, such as `capacitor-motion-tutorial.md`.