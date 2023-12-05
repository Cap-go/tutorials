---
title: "Using the capacitor-intercom-plugin Package"
description: "A tutorial on how to use the capacitor-intercom-plugin package in your Ionic Capacitor app."
created_at: "2022-05-06"
published: true
slug: capacitor-intercom-plugin
---

# Using the capacitor-intercom-plugin Package

In this tutorial, we will learn how to integrate the `capacitor-intercom-plugin` package into your Ionic Capacitor app. The `capacitor-intercom-plugin` provides a simple way to add Intercom functionality to your mobile app, allowing you to engage and communicate with your users.

## Prerequisites

Before getting started, make sure you have the following:

- An Ionic Capacitor app set up and configured.
- Node.js installed on your machine.
- A valid Intercom account with an API key and app ID.

## Step 1: Install the Package

To begin, navigate to your Ionic Capacitor app's root directory and install the `capacitor-intercom-plugin` package using npm:

```
npm install --save @foodello/intercom
```

## Step 2: Configure Capacitor

Next, create a new directory named `www` in your app's root directory:

```
mkdir www
```

Inside the `www` directory, create a new file called `index.html`:

```
touch www/index.html
```

Now, open your app's `capacitor.config.json` file and add the Intercom API keys under the `plugins.Intercom` section. Replace `ios_sdk-xxx` with your iOS API key and `yyy` with your iOS app ID. Similarly, replace `android_sdk-xxx` with your Android API key and `yyy` with your Android app ID. 

```
{
  "plugins": {
    "Intercom": {
      "iosApiKey": "ios_sdk-xxx",
      "iosAppId": "yyy",
      "androidApiKey": "android_sdk-xxx",
      "androidAppId": "yyy"
    }
  }
}
```

## Step 3: Add Platforms

To use the Intercom plugin, you need to add the iOS and Android platforms to your project. Run the following commands:

For iOS:

```
npx cap add ios
```

For Android:

```
npx cap add android
```

## Step 4: Open the Native IDE

To make any changes to the native code, you need to open the respective IDEs.

For iOS:

```
npx cap open ios
```

For Android:

```
npx cap open android
```

## Step 5: Build and Run

With the plugin installed and configured, you can now build and run your app. Run the following commands:

For iOS:

```
ionic cap run ios
```

For Android:

```
ionic cap run android
```

## Conclusion

Congratulations! You have successfully integrated the `capacitor-intercom-plugin` package into your Ionic Capacitor app. You can now use the Intercom functionality to engage and communicate with your users. Remember to refer to the plugin's documentation for more advanced usage and customization options.

