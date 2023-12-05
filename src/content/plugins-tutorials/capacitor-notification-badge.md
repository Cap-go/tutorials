## Using the capacitor-notification-badge package

This tutorial will guide you through the process of using the `capacitor-notification-badge` package to handle notification badges in your Capacitor app.

### Installation

To get started, you will need to install the `capacitor-notification-badge` package. Open your terminal and run the following command:

```bash
npm install capacitor-notification-badge
```

### Setup

Once you have installed the package, you need to make some configuration changes in your Capacitor project.

1. Open the `android/app/src/main/java/your/package/MainActivity.java` file and add the following import statement at the top:

   ```java
   import com.getcapacitor.notificationbadge.NotificationBadge;
   ```

2. Inside the `init` method of `MainActivity.java`, initialize the `NotificationBadge`:

   ```java
   // Inside init() method
   add(NotificationBadge.class);
   ```

3. In your `android/app/build.gradle` file, add the following dependency:

   ```groovy
   implementation project(':capacitor-notification-badge')
   ```

### Usage

With the package installed and the necessary configuration changes made, you can now start using the `capacitor-notification-badge` package in your app.

Here is a basic example of how you can set a notification badge:

```typescript
import { Plugins } from '@capacitor/core';

const { NotificationBadge } = Plugins;

// Set a badge
NotificationBadge.setBadge({
  badge: 5 // Replace with the number you want to set as the badge
});
```

And here's how you can clear the badge:

```typescript
import { Plugins } from '@capacitor/core';

const { NotificationBadge } = Plugins;

// Clear the badge
NotificationBadge.clearBadge();
```

That's it! You have successfully integrated the `capacitor-notification-badge` package into your Capacitor app.

Remember to refer to the package's documentation for more advanced usage and customization options.

---

**Frontmatter:**

```
---
title: "Using capacitor-notification-badge Package"
description: "A tutorial on how to use the capacitor-notification-badge package to handle notification badges in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: "capacitor-notification-badge"
---
```

**Note:** Replace the values in double quotes in the frontmatter with your desired values.

Now you have a markdown tutorial on using the `capacitor-notification-badge` package, along with the required frontmatter.