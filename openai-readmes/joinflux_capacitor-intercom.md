<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Capacitor Intercom</h3>
<p align="center"><strong><code>@joinflux/capacitor-intercom</code></strong></p>
<p align="center">
  Capacitor plugin for enabling Intercom capabilities
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2021?style=flat-square" />
  <a href="https://www.npmjs.com/package/@joinflux/capacitor-intercom"><img src="https://img.shields.io/npm/l/@joinflux/capacitor-intercom?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@joinflux/capacitor-intercom"><img src="https://img.shields.io/npm/dw/@joinflux/capacitor-intercom?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@joinflux/capacitor-intercom"><img src="https://img.shields.io/npm/v/@joinflux/capacitor-intercom?style=flat-square" /></a>
</p>

## Installation

### Capacitor 3 vs Capacitor 4

- Use version 1.0.3 or lower for Capacitor 3
- Version >2.0.0 will target Capacitor 4

Using npm:

```bash
npm install @joinflux/capacitor-intercom
```

Using yarn:

```bash
yarn add @joinflux/capacitor-intercom
```

Sync native files:

```bash
npx cap sync
```

## API

- boot
- registerIdentifiedUser
- registerUnidentifiedUser
- updateUser
- logout
- logEvent
- displayMessenger
- displayMessageComposer
- displayHelpCenter
- hideMessenger
- displayLauncher
- hideLauncher
- displayInAppMessages
- hideInAppMessages
- displayCarousel
- setUserHash
- setBottomPadding
- unreadConversationCount

## Usage

### Web Only

For web, you must run `boot({ appId: <app-id> })` to initialize.

```js
import { Intercom } from '@joinflux/capacitor-intercom'

Intercom.boot({
  appId: '12345',
  email: 'test@example.com', // you can set user details on boot:
  userId: '1234', // see https://developers.intercom.com/installing-intercom/docs/capacitor-intercom-javascript#intercomboot-intercomsettings
})

Intercom.registerIdentifiedUser({
  email: 'test@example.com', // you can also set user details like the mobile SDKs
  userId: '1234',
})

// show intercom
Intercom.displayMessenger()
```

### Web, iOS, Android

```js
import { Intercom } from '@joinflux/capacitor-intercom'
import { PushNotifications } from '@capacitor/push-notifications'

// Register for push notifications from Intercom
await PushNotifications.register()

// Register an indetified user
await Intercom.registerIdentifiedUser({ userId: 123456 }) // or email or both

// Register a log event
await Intercom.logEvent({ name: 'my-event', data: { pi: 3.14 } })

// Display the message composer
await Intercom.displayMessageComposer({ message: 'Hello there!' })

// Identity Verification
// https://developers.intercom.com/installing-intercom/docs/ios-identity-verification
await Intercom.setUserHash({ hmac: 'xyz' })

// Get Unread Conversation Count
await Intercom.unreadConversationCount()

// Listen for unread conversation count to change
Intercom.addListener('onUnreadCountChange', ({ value }) => {
  console.log('conversation count is: ', value)
})
```

## iOS setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install —-save @joinflux/capacitor-intercom`
- `mkdir www && touch www/index.html`
- `npx cap add ios`
- add intercom keys to capacitor's configuration file

```
{
 …
  "plugins": {
   "Intercom": {
      "iosApiKey": "ios_sdk-xxx",
      "iosAppId": "yyy"
    }
  }
…
}
```

- `npx cap open ios`
- sign your app at xcode (general tab)

> Tip: every time you change a native code you may need to clean up the cache (Product > Clean build folder) and then run the app again.

## Android setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install —-save @joinflux/capacitor-intercom`
- `mkdir www && touch www/index.html`
- `npx cap add android`
- add intercom keys to capacitor's configuration file

```
{
 …
  "plugins": {
   "Intercom": {
      "androidApiKey": "android_sdk-xxx",
      "androidAppId": "yyy"
    }
  }
…
}
```

- `npx cap open android`

Now you should be set to go. Try to run your client using `ionic cap run android --livereload`.

> Tip: every time you change a native code you may need to clean up the cache (Build > Clean Project | Build > Rebuild Project) and then run the app again.

## License

MIT

## Example

- https://github.com/joinflux/capacitor-intercom/blob/master/example
