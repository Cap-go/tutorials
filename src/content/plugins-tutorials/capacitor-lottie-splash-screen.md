---
title: "Using the @morphood/capacitor-lottie-splash-screen Package"
description: "In this tutorial, we will learn how to use the @morphood/capacitor-lottie-splash-screen package to implement a Lottie animation as a splash screen in a Capacitor app."
created_at: "2022-07-05"
published: true
slug: "capacitor-lottie-splash-screen"
---

# Using the @morphood/capacitor-lottie-splash-screen Package

In this tutorial, we will learn how to use the @morphood/capacitor-lottie-splash-screen package to implement a Lottie animation as a splash screen in a Capacitor app.

## Prerequisites

Before we begin, make sure you have the following:

- Node.js installed on your machine
- Capacitor set up in your project

## Installation

To get started, let's install the @morphood/capacitor-lottie-splash-screen package. Open your terminal and navigate to your project directory. 

```
npm install @morphood/capacitor-lottie-splash-screen
```

## Adding Lottie Animation

The first step is to add a Lottie animation to your project. You can create your own animation or use a pre-built one. Once you have your animation file in JSON format, place it in your project directory.

## Configuring Capacitor

Next, we need to configure Capacitor to use the @morphood/capacitor-lottie-splash-screen package. Open the `capacitor.config.json` file in your project and add the following code:

```json
{
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0,
      "showDuration": 0,
      "autoHide": false
    },
    "LottieSplashScreen": {
      "animationPath": "path/to/animation.json",
      "backgroundColor": "#ffffff",
      "autoHide": true,
      "fadeOutDuration": 300,
      "fadeOutMode": "custom",
      "fadeOutCustom": "animation.json"
    }
  }
}
```

Replace `"path/to/animation.json"` with the actual path to your animation file.

## Importing and Initializing the Plugin

Now, let's import and initialize the @morphood/capacitor-lottie-splash-screen plugin in your app's entry file. Usually, this is `main.ts` or `app.ts`.

```typescript
import { Capacitor } from '@capacitor/core';
import { LottieSplashScreen } from '@morphood/capacitor-lottie-splash-screen';

const app = createApp(App);

app.use(router);
app.mount('#app');

if (Capacitor.isNative) {
  LottieSplashScreen.initialize();
}
```

Make sure to import `Capacitor` and `LottieSplashScreen` from their respective packages.

## Testing the Splash Screen

You can now test the splash screen by running your app. When you launch the app, you should see the Lottie animation as the splash screen before the main app screen is displayed.

## Customizing the Splash Screen

The @morphood/capacitor-lottie-splash-screen package provides various options to customize the splash screen. You can modify the animation path, background color, fade out duration, and more. Refer to the package documentation for a complete list of available options.

## Conclusion

In this tutorial, we learned how to use the @morphood/capacitor-lottie-splash-screen package to implement a Lottie animation as a splash screen in a Capacitor app. We installed the package, configured Capacitor, imported and initialized the plugin, and tested the splash screen. We also explored some of the customization options provided by the package.

Now that you know how to use the @morphood/capacitor-lottie-splash-screen package, you can enhance your Capacitor app with a visually appealing splash screen animation. Happy coding!