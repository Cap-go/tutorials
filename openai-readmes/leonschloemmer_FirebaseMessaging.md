# FirebaseMessaging

A little plugin for Capacitor (iOS only!) that registers the device to the Firebase Cloud Messaging Service and returns the correct device token.
It is made to work along with the PushNotifications Plugin by Capacitor. For this, see: [Push Notification Tutorial](https://capacitor.ionicframework.com/docs/apis/push-notifications)

## Installation

In your Capacitor Project, execute: `npm install ls-firebase-messaging@latest`
Then `npx cap sync`

## Usage (Ionic 4 / Angular)

You will probably want to use this Plugin in one of your services.
Import:

```typescript
import { Plugins } from '@capacitor/core'
import { LSFirebaseMessagingPlugin } from 'ls-firebase-messaging'

const { LSFirebaseMessagingPlugin } = Plugins
```

You can get the token following way (Assuming you injected Platform in the constructor):

```typescript
if (this.platform.is('ios')) {
  const token = await LSFirebaseMessagingPlugin.getLatestToken().value
}
```

If the platform is not ios, get the token like in the Capacitor tutorial.
