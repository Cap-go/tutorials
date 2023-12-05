---
title: "Using capacitor-plugin-appcenter-distribute"
description: "A tutorial on how to use the capacitor-plugin-appcenter-distribute package to distribute your mobile apps using App Center"
created_at: "2023-01-15"
published: true
slug: "capacitor-plugin-appcenter-distribute"
---

# Using capacitor-plugin-appcenter-distribute

In this tutorial, we will learn how to use the `capacitor-plugin-appcenter-distribute` package to distribute your mobile apps using App Center.

## Step 1: Install the package

To begin, make sure you have Capacitor installed in your project. If not, you can install it by running the following command:

```shell
npm install @capacitor/cli
```

Once Capacitor is installed, you can install the `capacitor-plugin-appcenter-distribute` package by running the following command:

```shell
npm install capacitor-plugin-appcenter-distribute
```

## Step 2: Configure App Center

Before using the package, you need to configure App Center for your project. Visit the App Center website (https://appcenter.ms/) and create a new account if you haven't already.

Create a new app in App Center for each platform (iOS and Android) you want to distribute your app to. Take note of the App Secret for each app as you will need it later.

## Step 3: Add the plugin to your project

To use the `capacitor-plugin-appcenter-distribute` package, you need to add it to your Capacitor project. Open your `capacitor.config.json` file and add the following lines under the `"plugins"` section:

```json
{
  "plugins": {
    "AppCenterDistribute": {
      "appId": {
        "android": "YOUR_ANDROID_APP_ID",
        "ios": "YOUR_IOS_APP_ID"
      },
      "token": "YOUR_APP_SECRET"
    }
  }
}
```

Replace `YOUR_ANDROID_APP_ID` and `YOUR_IOS_APP_ID` with the App IDs you obtained from App Center. Replace `YOUR_APP_SECRET` with the App Secret obtained from App Center.

## Step 4: Distribute your app

Now that the plugin is configured, you can use it to distribute your app. Build your app using the Capacitor CLI:

```shell
npx cap build
```

Once the build process completes, run the following command to distribute your app to App Center:

```shell
npx cap appcenter-distribute
```

This command will upload your app to App Center and distribute it to the specified platforms. You can check the status of your distributions on the App Center website.

Congratulations! You have successfully used the `capacitor-plugin-appcenter-distribute` package to distribute your mobile apps using App Center.

