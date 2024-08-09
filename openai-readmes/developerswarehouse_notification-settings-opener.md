# @developerswarehouse/notification-settings-opener

An Ionic Capacitor plugin to open an apps native notificaiton settings.

Currently only supports Android.

_Resourced and built with our trusty friend [ChatGPT](https://chat.openai.com/)._

TODO

1. Add support for iOS

## Install

```bash
npm install @developerswarehouse/notification-settings-opener
ionic cap sync android
```

## Add to a component

### Ionic+VueJS

```vue
<script setup>
import { NotificationSettingsOpener } from '@developerswarehouse/notification-settings-opener';

// Open native notification settings
const openAppNotificationSettings = () => {
  NotificationSettingsOpener.openNotificationSettings().then(() => {
    console.log('Notification settings opened');
  });
}

// Or...
// const openAppNotificationSettings = async () => {
//  await NotificationSettingsOpener.openNotificationSettings();
// }
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


## API

<docgen-index>

* [`openNotificationSettings()`](#opennotificationsettings)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### openNotificationSettings()

```typescript
openNotificationSettings() => Promise<void>
```

This method opens the device's native notification settings for the app.

--------------------

</docgen-api>
