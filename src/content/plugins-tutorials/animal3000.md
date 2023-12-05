---
title: "Using animal-3000-push-notification package"
description: "This tutorial will guide you on how to use the animal-3000-push-notification package to implement push notifications in your Capacitor app."
created_at: "2021-10-15"
published: true
slug: animal3000
---

# Using animal-3000-push-notification package

The animal-3000-push-notification package is a Capacitor plugin that allows you to easily implement push notifications in your mobile app. In this tutorial, we will guide you through the process of installing and using this package in your Capacitor project.

## Installation

To install the animal-3000-push-notification package, run the following command in your project directory:

```bash
npm install animal-3000-push-notification
npx cap sync
```

This will install the package and synchronize it with your Capacitor project.

## Usage

Once the package is installed, you can start using the push notification functionality in your app. The package provides two main methods: `echo` and `showNotification`.


### echo

The `echo` method allows you to send a test message to the plugin and receive a response. Here is an example of how to use it:

```typescript
import { Plugins } from '@capacitor/core';

const { Animal3000PushNotification } = Plugins;

const test = async () => {
  const response = await Animal3000PushNotification.echo({ value: "Hello" });
  console.log(response.value); // Output: Hello
};

test();
```

### showNotification

The `showNotification` method allows you to display a push notification with custom content. Here is an example of how to use it:

```typescript
import { Plugins } from '@capacitor/core';

const { Animal3000PushNotification } = Plugins;

const showCustomNotification = async () => {
  const options = {
    urlImg: "https://example.com/image.png",
    Color: "blue",
    Text: "New message received",
    urlImagePartenaire: "https://example.com/partner.png",
  };

  const response = await Animal3000PushNotification.showNotification(options);
  console.log(response.value); // Output: Notification displayed successfully
};

showCustomNotification();
```

In the `showNotification` method, you need to provide the following options:
- `urlImg`: The URL of the image to be displayed in the notification.
- `Color`: The color of the notification.
- `Text`: The text content of the notification.
- `urlImagePartenaire`: The URL of the partner logo image.

## Conclusion

In this tutorial, we have learned how to install and use the animal-3000-push-notification package to implement push notifications in a Capacitor app. You can now leverage this package to enhance your app's engagement and user experience by sending push notifications to your users.

Remember to follow the package documentation for more advanced usage and customization options. Happy coding!