# capacitor-pwa-firebase-msg

Enable push notifications for Capacitor progressive web apps (PWA) using Firebase as a cloud messaging service

This is a Capacitor Web plugin that enables Push Notifications for Web apps. Read the [guide to set up Push Notifications with Firebase](https://capacitor.ionicframework.com/docs/guides/push-notifications-firebase/) first, then proceed with the setup instructions.

## Requirements

**Capacitor Minimum Version:** currently waiting on [pull request in Capacitor project](https://github.com/ionic-team/capacitor/pull/1892). If you can't wait, the parts of setup instructions below that ask for `npx cap copy web`, you can manually run the npm script for this plugin by doing `npm explore capacitor-pwa-firebase-msg -- npm run precapcopyweb` in the command line in the root directory of your Capacitor project. Then you will have to integrate the generated service-worker capacitor-pwa-firebase-msg-sw.js that is written to the www folder on your own.

## Setup Instructions

Go to **Project Settings** in the Firebase console. In the **General** section, copy the web app's Firebase config from **Firebase SDK snippet** and paste it as `plugins.PWAFirebaseMsg` in capacitor.config.json. Under the **Cloud Messaging** section, generate a new VAPID **Key Pair** under **Web configuration**, and provide the value to `plugins.PWAFirebaseMsg.vapidKey`. See example capacitor.config.json below:

```json
{
  "appId": "app.capacitor.my",
  "appName": "My Capacitor App",
  "serviceWorker": {
    "name": "capacitor-sw.js",
    "combineWorkers": ["capacitor-pwa-firebase-msg-sw.js", "ngsw-worker.js"]
  },
  "plugins": {
    "PWAFirebaseMsg": {
      "apiKey": "ABC123def456-GHI789jkl012-MNO345pqr678",
      "authDomain": "mycapacitorapp-abc123.firebaseapp.com",
      "databaseURL": "https://mycapacitorapp-abc123.firebaseio.com",
      "projectId": "mycapacitorapp-abc123",
      "storageBucket": "mycapacitorapp-abc123.appspot.com",
      "messagingSenderId": "1234567890",
      "appId": "1:1234567890:web:abcdef123456",
      "vapidKey": "ABC123def456-GHI789jkl012-MNO345pqr678"
    }
  },
  "npmClient": "npm",
  "webDir": "www"
}
```

Add `capacitor-pwa-firebase-msg-sw.js` to Capacitor's aggregate service worker. If the app uses other service workers, provide their locations (relative to `webDir`, that is the "www" folder) to `serviceWorker.combineWorkers` in capacitor.config.json.

**Important**: If you are using the Angular service worker, make sure `capacitor-pwa-firebase-msg-sw.js` precedes `ngsw-worker.js` in the aggregate service worker `capacitor-sw.js`. If Angular's service worker handles notifications first, this plugin won't work. See above example for appropriate configuration of `serviceWorker.combineWorkers`.

After production builds of the app, run `npx cap copy web` from the command line. This will copy Capacitor's aggregate service worker to the `webDir`. `npx cap copy web` will also copy all the supporting files to `webDir` (very specifically, firebase.config.json, firebase-messaging.js, firebase-app.js and capacitor-pwa-firebase-msg-sw.js will be copied to the `webDir`).

Ensure that your app uses `capacitor-sw.js` as its service worker. The service worker filename generated by `npx cap copy web` can be overridden with `serviceWorker.name` in `capacitor.config.json`. See above example again.

In an Angular PWA, for example, the following code in `app.module.ts` will use `capacitor-sw.js` as a service worker:

```ts
import { ServiceWorkerModule } from '@angular/service-worker';

/* ... */

@NgModule({
  imports: [
    ServiceWorkerModule.register('capacitor-sw.js', { enabled: true })
    /* ... */
```

### Usage

After setup, in your app code, import the plugin so that it can register itself with Capacitor:

```ts
import 'capacitor-pwa-firebase-msg'
```

Now you can use it using the same `PushNotification` Capacitor plugin name. You may already have code for this if you already handled push notifications for Android or iOS platforms using Capacitor's built-in [PushNotification API](https://capacitor.ionicframework.com/docs/apis/push-notifications):

```ts
import { Plugins } from '@capacitor/core';

const { PushNotifications } = Plugins;

PushNotifications.register();

PushNotifications.addListener('registration', /* ... */);

PushNotifications.addListener('pushNotificationReceived', /* ... */);

PushNotifications.addListener('pushNotificationActionPerformed', , /* ... */);
```

### A note on Firebase notification payloads for PWAs

This plugin is currently using v6.4 of the Firebase libraries (check [package.json](https://github.com/CFT-Chris/capacitor-pwa-firebase-msg/blob/master/package.json) if this has changed without the README being changed). For Firebase messages received in background, it is necessary to populate the `notification` in the payload with `click_action`, where `click_action` is the absolute URL to the PWA page expected to be open when `pushNotificationActionPerformed` is handled. Even though the [Firebase spec](https://firebase.google.com/docs/reference/fcm/rest/v1/projects.messages) implies that we could override `click_action` via `webpush` in the payload instead, in my experience I could never get background push notifications to work properly (i.e. restoring the PWA from background on click or spawning a new instance if not running) using `webpush`. This means that on the back-end, the push payloads need to know whether it is pushing to PWA or Android or iOS so that the `click_action` is tailored to the correct platform.
