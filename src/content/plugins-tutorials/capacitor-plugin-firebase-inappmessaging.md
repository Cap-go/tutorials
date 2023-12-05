---
title: "Tutorial: Using capacitor-plugin-firebase-in-app-messaging"
description: "Learn how to integrate Firebase In-App Messaging into your Ionic apps using the capacitor-plugin-firebase-in-app-messaging package."
created_at: "2021-10-20"
published: true
slug: "capacitor-plugin-firebase-inappmessaging"
---

# Tutorial: Using capacitor-plugin-firebase-in-app-messaging

In this tutorial, we will learn how to integrate Firebase In-App Messaging into your Ionic apps using the capacitor-plugin-firebase-in-app-messaging package. Firebase In-App Messaging allows you to show targeted and personalized messages to your app users to increase engagement and conversion rates.

## Installation

To begin, make sure you have Capacitor and Ionic set up in your project. Then, follow these steps to install the capacitor-plugin-firebase-in-app-messaging package:

```bash
npm install capacitor-plugin-firebase-in-app-messaging
npx cap sync
```

## Usage

1. Make sure you have already installed and initialized Firebase Core and Firebase Analytics in your Ionic app.

2. To enable in-app messaging and start receiving content from Firebase, add the following code to your app:

```typescript
import { Plugins } from '@capacitor/core';

const { FirebaseInAppMessaging } = Plugins;

FirebaseInAppMessaging.enable();
```

3. For iOS setup, follow these additional steps:

- Install Homebrew if you haven't already.
- Run `brew install cocoapods` to install Cocoapods.
- Create a new Ionic app if you haven't already: `ionic start my-cap-app --capacitor`
- Add the iOS platform to your Capacitor project: `npx cap add ios`
- Install the capacitor-plugin-firebase-in-app-messaging package: `npm install --save capacitor-plugin-firebase-in-app-messaging`
- Sync the iOS project: `npx cap sync ios`
- Open the iOS project in Xcode: `npx cap open ios`

4. For Android setup, follow these additional steps:

- Create a new Ionic app if you haven't already: `ionic start my-cap-app --capacitor`
- Add the Android platform to your Capacitor project: `npx cap add android`
- Install the capacitor-plugin-firebase-in-app-messaging package: `npm install --save capacitor-plugin-firebase-in-app-messaging`
- Sync the Android project: `npx cap sync android`
- Open the Android project in Android Studio: `npx cap open android`

5. Customize the in-app messaging experience by subscribing to event listeners. Currently, the following events are supported:

- `messageDismissed`: Triggered when a message is dismissed by the user.
- `messageClicked`: Triggered when a message is clicked by the user.
- `impressionDetected`: Triggered when a message is displayed to the user.
- `displayError`: Triggered when there is an error displaying a message.

```typescript
FirebaseInAppMessaging.addListener('messageDismissed', (message) => {
  console.log('Message dismissed:', message);
});

FirebaseInAppMessaging.addListener('messageClicked', (message) => {
  console.log('Message clicked:', message);
});

FirebaseInAppMessaging.addListener('impressionDetected', (message) => {
  console.log('Message displayed:', message);
});

FirebaseInAppMessaging.addListener('displayError', (error) => {
  console.error('Error displaying message:', error);
});
```

Whenever a message is dismissed, clicked, displayed, or encounters an error, the corresponding event listener will be triggered.

## Testing and Debugging

To enable debugging mode and use the "Test on Device" feature, follow the instructions in the [Firebase In-App Messaging documentation](https://firebase.google.com/docs/in-app-messaging/get-started?platform=ios).

## Conclusion

Congratulations! You have successfully integrated Firebase In-App Messaging into your Ionic app using the capacitor-plugin-firebase-in-app-messaging package. You can now show targeted and personalized messages to your app users and track user interactions with the messages. Customize the behavior of your app based on these events to create a more engaging user experience.

Don't forget to check out the [official example](https://github.com/capacitor-community/fcm/tree/master/example) for a complete implementation using this plugin.

Happy coding!