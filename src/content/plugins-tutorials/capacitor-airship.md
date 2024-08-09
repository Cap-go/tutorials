```markdown
---
title: "Using @ua/capacitor-airship package for Capacitor Apps"
description: "Step-by-step guide on integrating the @ua/capacitor-airship package in your Capacitor application."
created_at: "2022-01-20"
published: true
slug: capacitor-airship
---

# Tutorial: Using @ua/capacitor-airship Package

In this tutorial, we will explore how to integrate the '@ua/capacitor-airship' package into your Capacitor applications to leverage Airship's powerful features for push notifications. 

## Prerequisites

Before we begin, make sure you have a Capacitor project set up and ready to go.

## Installation

First, install the '@ua/capacitor-airship' package using npm or yarn.

```bash
npm install @ua/capacitor-airship
```

or

```bash
yarn add @ua/capacitor-airship
```

## Configuration

### Android

For Android, follow these steps to configure the '@ua/capacitor-airship' package:
1. Update the AndroidManifest.xml file to include your Airship credentials.
2. Modify the MainActivity to initialize the Airship package.

### iOS

For iOS, configure the Info.plist file with your Airship configuration information.

## Usage

Now that you have installed and configured the package, you can start using the '@ua/capacitor-airship' features in your Capacitor project.

### Handling Push Notifications

To handle push notifications in your app, set up the necessary listeners and handlers.

```typescript
import { PushNotifications, PushNotificationSchema } from '@ua/capacitor-airship';

PushNotifications.addListener('pushNotificationReceived', (notification: PushNotificationSchema) => {
  // Handle incoming push notifications
  console.log('Received push notification: ', notification);
});
```

## Conclusion

In this tutorial, we covered the installation, configuration, and usage of the '@ua/capacitor-airship' package in Capacitor apps. You can now take advantage of Airship's push notification services to engage with your users effectively.

Happy coding!
```
```