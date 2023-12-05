---
title: "Using capacitor-phone-call-notification Package"
description: "In this tutorial, we will learn how to use the @anuradev/capacitor-phone-call-notification package to handle phone call notifications in a Capacitor app."
created_at: "2021-07-30"
published: true
slug: capacitor-phone-call-notification
---

# Using capacitor-phone-call-notification Package

In this tutorial, we will learn how to use the `@anuradev/capacitor-phone-call-notification` package to handle phone call notifications in a Capacitor app.

## Installation

To get started, we need to install the `@anuradev/capacitor-phone-call-notification` package. You can install it using npm or yarn.

```bash
npm install @anuradev/capacitor-phone-call-notification
```

or

```bash
yarn add @anuradev/capacitor-phone-call-notification
```

Next, we need to sync our changes with Capacitor.

```bash
npx cap sync
```

## Usage

Now that we have installed the package, we can start using it in our application. Here is an example of how to use the package:

```typescript
import { CallNotification } from '@anuradev/capacitor-phone-call-notification';

async function registerCallNotification() {
  // Register the call notification plugin
  await CallNotification.register();

  // Listen for incoming calls
  CallNotification.addListener('incomingCall', (data) => {
    console.log('Incoming call:', data);
    // Handle the incoming call notification
  });

  // Listen for call answered events
  CallNotification.addListener('callAnswered', (data) => {
    console.log('Call answered:', data);
    // Handle the call answered event
  });

  // Listen for call ended events
  CallNotification.addListener('callEnded', (data) => {
    console.log('Call ended:', data);
    // Handle the call ended event
  });
}

registerCallNotification();
```

In the above example, we first import the `CallNotification` class from the `@anuradev/capacitor-phone-call-notification` package. We then register the call notification plugin using the `register` method. After that, we add event listeners for incoming calls, call answered events, and call ended events. Inside the event listeners, we can handle the respective events by performing the necessary actions.

That's it! Now you have learned how to use the `@anuradev/capacitor-phone-call-notification` package to handle phone call notifications in a Capacitor app.

Remember to check the package documentation for more in-depth information on its usage and available methods.

Happy coding!