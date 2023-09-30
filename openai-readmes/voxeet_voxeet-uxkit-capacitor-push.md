# capacitor-plugin-voxeet-push

Provide compatibility with Capactor's MessagingService for Android.
iOS does not show any compatibility issues regarding Capacitor's.

_WIP npmjs.com release is coming soon, please use the github integration until then_

## Install

### From github repository

```bash
npm install https://github.com/voxeet/voxeet-uxkit-capacitor-push
npx cap sync
```

### From npmjs.com

```bash
npm install capacitor-plugin-voxeet-push
npx cap sync
```

## Plugin functionnalities

The plugin provides an out-of-the-box integration which will automatically registers into your AndroidManifest.xml a `CapacitorVoxeetPushMessagingService` with a priority of 800.

This is targetting the issue where only 1 service can be registered to receive FCM Messages on Android. It then cut down that message and tries to send it to Voxeet's notification center or finally to Capacitor's
