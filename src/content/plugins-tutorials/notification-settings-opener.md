---
"title": "Using @developerswarehouse/notification-settings-opener Package",
"description": "Markdown tutorial on how to use the @developerswarehouse/notification-settings-opener package in an Ionic Capacitor project.",
"created_at": "2023-10-08",
"published": true,
"slug": "notification-settings-opener"
---

## Getting Started with @developerswarehouse/notification-settings-opener

In this tutorial, we will guide you on how to integrate and use the `@developerswarehouse/notification-settings-opener` package in an Ionic Capacitor project. This package allows you to open the device's native notification settings for the app.

### Installation

To get started, you need to install the `@developerswarehouse/notification-settings-opener` package in your Ionic Capacitor project. Run the following commands in your terminal:

```bash
npm install @developerswarehouse/notification-settings-opener
ionic cap sync android
```

### Adding to a Component

#### Ionic + VueJS

```vue
<script setup>
import { NotificationSettingsOpener } from '@developerswarehouse/notification-settings-opener';

// Open native notification settings
const openAppNotificationSettings = () => {
  NotificationSettingsOpener.openNotificationSettings().then(() => {
    console.log('Notification settings opened');
  });
}
</script>

<template>
  <ion-page>
    <ion-content>
      <h1>Push Notifications</h1>

      <ion-note class="ion-margin-top">
        <p>You can manage your notifications under app settings.</p>
      </ion-note>

      <ion-button @click="openAppNotificationSettings" class="ion-margin-vertical">Open App Notification Settings</ion-button>
    </ion-content>
  </ion-page>
</template>
```

### API

The package provides the following method:

#### `openNotificationSettings()`

This method opens the device's native notification settings for the app.

Feel free to explore more configurations and features based on your project requirements.