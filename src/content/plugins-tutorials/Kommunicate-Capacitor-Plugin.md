---
title: "Using Capacitor Plugin Kommunicate"
description: "A tutorial on how to use the capacitor-plugin-kommunicate package."
created_at: "2021-08-25"
published: true
slug: "kommunicate-capacitor-plugin"
---

# Using Capacitor Plugin Kommunicate

In this tutorial, we will learn how to use the capacitor-plugin-kommunicate package to add real-time live chat, in-app messaging, and bot integration to your Ionic apps using Capacitor.

## Installation

To install the capacitor-plugin-kommunicate package, open your command line interface and navigate to the root directory of your Ionic app. Run the following command:

```
npm install capacitor-plugin-kommunicate
```

Next, add the necessary Android and iOS modules by running the following commands:

```
npx cap add android
npx cap add ios
```

For Android, open the Android module in Android Studio using the following command:

```
npx cap open android
```

And then register the plugin in your `MainActivity.java` file:

```java
@Override
public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    registerPlugin(KommunicateCapacitorPlugin.class);
}
```

For iOS, navigate to the `/ios/App` directory in your project and run the following command:

```
pod install
```

Then, open the iOS project in Xcode using the following command:

```
npx cap open ios
```

## Importing the Plugin

To use the Kommunicate functions in your app, you need to import the plugin. Open the file where you want to call the Kommunicate functions and add the following line:

```js
import {KommunicateCapacitorPlugin} from 'capacitor-plugin-kommunicate';
```

Now you can start calling the functions from `KommunicateCapacitorPlugin`.

## Launching a Conversation

Kommunicate provides a `conversationBuilder` function to create and launch a conversation directly without the need for extra steps. To launch a conversation, you need to create a conversation object and pass it to the `buildConversation` function.

Here's an example of launching a conversation for a visitor:

```js
let conversationObject = {
    appId: '<Your-App-Id>'
};

KommunicateCapacitorPlugin.buildConversation(conversationObject).then((res) => {
    console.log("Conversation builder success: " + JSON.stringify(res));
}).catch((error) => {
    console.log("Conversation builder error: " + error);
});
```

Replace `<Your-App-Id>` with your actual Application ID obtained from the Kommunicate dashboard.

## Conclusion

In this tutorial, we learned how to install and use the capacitor-plugin-kommunicate package to add live chat and messaging capabilities to Ionic apps using Capacitor. We covered the installation process, importing the plugin, and launching a conversation. You can now integrate Kommunicate into your app and provide real-time customer support.

Note: Make sure to follow the official documentation of the plugin for any updates or additional features.

Happy coding!

