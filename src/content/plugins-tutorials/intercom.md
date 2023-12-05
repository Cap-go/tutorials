---
title: "Using the @capacitor-community/intercom package"
description: "A tutorial on how to use the @capacitor-community/intercom package in your Capacitor project."
created_at: "2023-03-15"
published: true
slug: intercom
---

# Using the @capacitor-community/intercom package

In this tutorial, you will learn how to integrate the @capacitor-community/intercom package into your Capacitor project. The @capacitor-community/intercom package allows you to add Intercom messaging and support functionality to your iOS and Android apps.

## Prerequisites

Before you begin, make sure you have the following installed:

- Capacitor CLI
- Node.js
- Intercom account

## Step 1: Create a new Capacitor project

Start by creating a new Capacitor project using the following command:

```bash
ionic start my-cap-app --capacitor
cd my-cap-app
```

## Step 2: Install the @capacitor-community/intercom package

Install the @capacitor-community/intercom package in your project using npm or yarn:

```bash
npm install --save @capacitor-community/intercom
```

## Step 3: Configure the package

### iOS setup

1. Create a `www` directory and an `index.html` file inside it:

```bash
mkdir www && touch www/index.html
```

2. Add the Intercom SDK keys to your Capacitor's configuration file (`capacitor.config.json`):

```json
{
  "plugins": {
    "Intercom": {
      "iosApiKey": "ios_sdk-xxx",
      "iosAppId": "yyy"
    }
  }
}
```

3. Open your iOS project in Xcode:

```bash
npx cap open ios
```

4. Sign your app in Xcode (General tab).

### Android setup

1. Create a `www` directory and an `index.html` file inside it:

```bash
mkdir www && touch www/index.html
```

2. Add the Intercom SDK keys to your Capacitor's configuration file (`capacitor.config.json`):

```json
{
  "plugins": {
    "Intercom": {
      "androidApiKey": "android_sdk-xxx",
      "androidAppId": "yyy"
    }
  }
}
```

3. Open your Android project in Android Studio:

```bash
npx cap open android
```

## Step 4: Run the app

Now you are ready to run your app with Intercom integration. Start your app using the following command:

```bash
ionic cap run android --livereload
```

If you made any changes to the native code, make sure to clean the cache before running the app again.

That's it! You have successfully integrated the @capacitor-community/intercom package into your Capacitor project. You can now use Intercom's messaging and support functionality in your iOS and Android apps.

Remember to check the official documentation of the @capacitor-community/intercom package for more advanced usage and customization options. Happy coding!