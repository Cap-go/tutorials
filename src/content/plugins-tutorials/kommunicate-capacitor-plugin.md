---
title: "Using Capacitor-Plugin-Kommunicate Package"
description: "A tutorial on using the Capacitor-Plugin-Kommunicate package for adding live chat functionality to your Ionic apps."
created_at: "2021-10-21"
published: true
slug: "kommunicate-capacitor-plugin"
---

# Using Capacitor-Plugin-Kommunicate Package

In this tutorial, we will learn how to use the Capacitor-Plugin-Kommunicate package to add live chat functionality to your Ionic apps. With Kommunicate, you can integrate real-time chat, in-app messaging, and bot integration into your mobile applications and website for customer support.

To get started, make sure you have signed up for a Kommunicate account at https://dashboard.kommunicate.io/signup. This will give you the Application ID that you'll need to use the plugin.

## Installation

To install the Capacitor-Plugin-Kommunicate package, use the following command in your project directory:

```bash
npm install capacitor-plugin-kommunicate
```

Next, add the Android and iOS platforms if they haven't been added yet:

```bash
npx cap add android
npx cap add ios
```

For Android, open the Android module in Android Studio:

```bash
npx cap open android
```

Then, register the plugin in your `MainActivity.java` file:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
  super.onCreate(savedInstanceState);

  registerPlugin(KommunicateCapacitorPlugin.class);
}
```

For iOS, navigate to the `ios/App` directory in your project and run the following command:

```bash
pod install
```

Then, open the iOS project in Xcode:

```bash
npx cap open iOS
```

## Importing the Plugin

In the file where you want to use the Kommunicate functions, import the plugin using the following code:

```js
import { KommunicateCapacitorPlugin } from 'capacitor-plugin-kommunicate';
```

You can now start calling the functions from `KommunicateCapacitorPlugin`.

## Launching a Conversation

Kommunicate provides a `conversationBuilder` function to create and launch conversations. This function allows you to customize the conversation based on your requirements.

To launch a conversation for a visitor without them entering any details, use the following method:

```js
let conversationObject = {
  appId: '<Your-App-Id>',
};

KommunicateCapacitorPlugin.buildConversation(conversationObject)
  .then((res) => {
    console.log("Conversation builder success: " + JSON.stringify(res));
  })
  .catch((error) => {
    console.log("Conversation builder error: " + error);
  });
```

Replace `<Your-App-Id>` with your actual Application ID obtained from the Kommunicate dashboard.

## Conclusion

In this tutorial, you learned how to install and use the Capacitor-Plugin-Kommunicate package to add live chat functionality to your Ionic apps. You can now provide real-time support and engage with your app users through chat.

Remember to check out the official documentation for more details and additional features available in the Capacitor-Plugin-Kommunicate package. Happy coding!