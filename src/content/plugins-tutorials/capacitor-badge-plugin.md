---
title: "Using capacitor-badge-plugin"
description: "A tutorial on how to use the capacitor-badge-plugin package"
created_at: "2021-10-13"
published: true
slug: "capacitor-badge-plugin"
---

# Using capacitor-badge-plugin

In this tutorial, we will learn how to use the capacitor-badge-plugin package to add badges to your Capacitor applications. The capacitor-badge-plugin allows you to easily display badges on app icons, indicating the number of unread notifications or any other relevant information.

## Installation

Before we begin, make sure you have Capacitor installed globally. If not, you can install it by running the following command:

```bash
npm install -g @capacitor/core @capacitor/cli
```

Once Capacitor is installed, you can proceed to install the capacitor-badge-plugin package.

```bash
npm install capacitor-badge-plugin
```

## Adding Platform Support

### Android

To add support for Android, open the `android/app/src/main/java/[...]/MainActivity.java` file and add the following import statement:

```java
import com.getcapacitor.community.badge.BadgePlugin;
```

Next, inside the `init()` method, add the following line of code:

```java
add(Plugin.class);
```

### iOS

For iOS support, open the `ios/App/AppDelegate.swift` file and add the following import statement:

```swift
import CapacitorCommunityBadge
```

Next, inside the `application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool` method, add the following line of code:

```swift
application.add(BadgePlugin.self)
```

## Usage

To use the capacitor-badge-plugin in your application, you need to import it and initialize it. Here's an example of how to use it:

```typescript
import { Plugins } from '@capacitor/core';

const { BadgePlugin } = Plugins;

...

BadgePlugin.setBadge({
  count: 5, // The number to display on the badge
  isVisible: true // Whether the badge should be visible or not
});
```

In the above example, we import the `BadgePlugin` from the `@capacitor/core` package. We then use the `setBadge()` method to set the count and visibility of the badge. You can customize these values according to your requirements.

That's it! You have now successfully added badges to your Capacitor application using the capacitor-badge-plugin package.

## Conclusion

In this tutorial, we learned how to use the capacitor-badge-plugin package to add badges to your Capacitor applications. We covered the installation process, adding platform support for Android and iOS, as well as the basic usage of the plugin. By following the steps outlined in this tutorial, you can easily display badges on your app icons and provide important information to your users.