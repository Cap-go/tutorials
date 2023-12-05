---
title: "Using capacitor-plugin-kommunicate Package"
description: "A tutorial on how to use the capacitor-plugin-kommunicate package for live chat and customer support in Ionic apps"
created_at: "2023-10-18"
published: true
slug: kommunicate-capacitor-plugin
---

# Using capacitor-plugin-kommunicate Package

In this tutorial, we will learn how to use the `capacitor-plugin-kommunicate` package to add live chat and customer support functionality to your Ionic apps. This package allows you to integrate Kommunicate's open-source live chat SDK with your app, enabling real-time messaging and bot integration for seamless customer support.

## Prerequisites

Before we begin, make sure you have the following:

- An Ionic app set up and running on your development machine.
- Node.js and npm installed.
- Access to the [Kommunicate Dashboard](https://dashboard.kommunicate.io/signup) to obtain your Application ID.

## Installation

To get started, install the `capacitor-plugin-kommunicate` package by running the following command in your terminal:

```
npm install capacitor-plugin-kommunicate
```

Next, since this plugin utilizes native modules for Android and iOS, add them to your project using the following commands:

```
npx cap add android
npx cap add ios
```

If the Android and iOS modules already exist in your project, you can ignore these commands.

### Android Setup

Open the Android module in Android Studio by running the following command:

```
npx cap open android
```

In your `android/app/java/<App-Package>/MainActivity.java` file, register the plugin by adding the following code:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

  registerPlugin(KommunicateCapacitorPlugin.class);
}
```

### iOS Setup

Navigate to the `<Your-Project>/ios/App` directory and run the following command:

```
pod install
```

Open the iOS project in Xcode:

```
npx cap open iOS
```

## Importing the Plugin

Import the `KommunicateCapacitorPlugin` from the `capacitor-plugin-kommunicate` package in the file where you want to call the Kommunicate functions. Add the following import statement:

```js
import {KommunicateCapacitorPlugin} from 'capacitor-plugin-kommunicate';
```

With the plugin imported, you can now start calling the functions from `KommunicateCapacitorPlugin` to implement live chat and customer support in your Ionic app.

> Note: After making any code changes in your project's TypeScript or JavaScript files, run the following commands:

```
npm run build
npx cap sync
```

For Android and iOS, run the project from Android Studio and Xcode respectively. For web, use the command `ionic serve`.

## Launching a Conversation

Kommunicate provides a `conversationBuilder` function that simplifies the process of creating and launching a conversation. This function allows you to customize the conversation based on your requirements.

To launch a conversation, create a conversation object and pass it to the `buildConversation` function. The conversation object specifies the parameters and settings for the conversation.

### Launching a Conversation for a Visitor

If you want to launch a conversation directly without the visiting user entering any details, use the following method:

```js
let conversationObject = {
  appId: '<Your-App-Id>'
};

KommunicateCapacitorPlugin.buildConversation(conversationObject)
  .then((res) => {
    console.log('Conversation builder success: ' + JSON.stringify(res));
  })
  .catch((error) => {
    console.log('Conversation builder error: ' + error);
  });
```

Replace `<Your-App-Id>` with the Application ID obtained from the Kommunicate Dashboard.

### Launching a Conversation for a Visitor with Lead Collection

...

This markdown tutorial provides a step-by-step guide on how to use the `capacitor-plugin-kommunicate` package in your Ionic app. It covers the installation process, setup for Android and iOS, importing the plugin, and launching a conversation. Following these steps will enable you to integrate live chat and customer support functionality into your application.

Feel free to explore the [Kommunicate Documentation](https://docs.kommunicate.io/) for more advanced features and customization options.