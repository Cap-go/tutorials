---
title: "Using the capacitor-nowplaying Package"
description: "In this tutorial, you will learn how to use the capacitor-nowplaying package to implement now playing functionality in your Capacitor app."
created_at: "2022-05-30"
published: true
slug: "capacitor-nowplaying"
---

# Using the capacitor-nowplaying Package

The capacitor-nowplaying package is a powerful tool that allows you to add now playing functionality to your Capacitor app. With this package, you can easily integrate music playback controls, track information, and media metadata in your app.

In this tutorial, we will guide you through the process of integrating the capacitor-nowplaying package into your Capacitor app and using its features to provide a seamless music playback experience for your users.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Capacitor CLI
- Node.js

You can install Capacitor CLI by running the following command:

```bash
npm install -g @capacitor/cli
```

## Step 1: Create a new Capacitor project

To start, let's create a new Capacitor project. Open your terminal and execute the following commands:

```bash
npx @capacitor/create-app
cd my-app
```

## Step 2: Install the capacitor-nowplaying package

Next, we need to install the capacitor-nowplaying package. In your project directory, run the following command:

```bash
npm install capacitor-nowplaying
```

## Step 3: Add the necessary platform

Now, let's add a platform to your Capacitor project. Run the following command to add the iOS platform:

```bash
npx cap add ios
```

If you want to add the Android platform, you can run the following command instead:

```bash
npx cap add android
```

## Step 4: Configure the capacitor-nowplaying package

To configure the capacitor-nowplaying package, open the `capacitor.config.json` file in your project directory and add the following code:

```json
"plugins": {
  "CapacitorNowPlaying": {
    "displayControls": true
  }
}
```

This configuration enables the display of music playback controls in the notification center or lock screen, depending on the platform.

## Step 5: Implement now playing functionality

Finally, let's implement the now playing functionality in your app. Open the `src/App.tsx` file in your project directory and add the following code:

```tsx
import { CapacitorNowPlaying } from 'capacitor-nowplaying';

CapacitorNowPlaying.addListener('playbackStateChange', (state) => {
  // Handle the playback state change event here
});

CapacitorNowPlaying.addListener('metadataChange', (metadata) => {
  // Handle the metadata change event here
});
```

These event listeners allow you to handle the playback state change and metadata change events triggered by the capacitor-nowplaying package.

## Step 6: Build and run your app

Congratulations! You have successfully integrated the capacitor-nowplaying package into your Capacitor app. Now, let's build and run your app on the platform you added earlier.

For iOS, run the following commands:

```bash
npx cap sync
npx cap open ios
```

For Android, run the following commands:

```bash
npx cap sync
npx cap open android
```

## Conclusion

In this tutorial, you learned how to use the capacitor-nowplaying package to implement now playing functionality in your Capacitor app. With this package, you can easily add music playback controls, track information, and media metadata to enhance the user experience of your app.

Feel free to explore the capacitor-nowplaying package documentation for more advanced features and customization options. Happy coding!