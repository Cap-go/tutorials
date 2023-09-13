<p align="center"><br><img src="https://user-images.githubusercontent.com/236501/85893648-1c92e880-b7a8-11ea-926d-95355b8175c7.png" width="128" height="128" /></p>
<h3 align="center">Capacitor Intercom</h3>
<p align="center"><strong><code>@houseninja/capacitor-intercom</code></strong></p>
<p align="center">
  Capacitor plugin for enabling Intercom capabilities
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2023?style=flat-square" />
  <a href="https://www.npmjs.com/package/@houseninja/capacitor-intercom"><img src="https://img.shields.io/npm/l/@houseninja/capacitor-intercom?style=flat-square" /></a>
  <img src="https://img.shields.io/github/last-commit/houseninjadojo/capacitor-intercom?style=flat-square"></img>
<br>
  <a href="https://www.npmjs.com/package/@houseninja/capacitor-intercom"><img src="https://img.shields.io/npm/dw/@houseninja/capacitor-intercom?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@houseninja/capacitor-intercom"><img src="https://img.shields.io/npm/v/@houseninja/capacitor-intercom?style=flat-square" /></a>
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors"><img src="https://img.shields.io/github/contributors/houseninjadojo/capacitor-intercom?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Maintainers

| Maintainer      | GitHub                                              | Social                                    |
| --------------- | --------------------------------------------------- | ----------------------------------------- |
| Miles Zimmerman | [mileszim](https://github.com/mileszim)             | [@mileszim](https://twitter.com/mileszim) |
| House Ninja     | [houseninjadojo](https://github.com/houseninjadojo) |                                           |

## Installation

Using npm:

```bash
npm install @houseninja/capacitor-intercom
```

Using yarn:

```bash
yarn add @houseninjad/capacitor-intercom
```

Sync native files:

```bash
npx cap sync
```

## Usage

### Web Only

For web, you must run `boot({ appId: <app-id> })` to initialize.

```js
import { Intercom } from '@houseninja/capacitor-intercom'

Intercom.boot({
  appId: '12345',
  email: 'test@example.com', // you can set user details on boot:
  userId: '1234', // see https://developers.intercom.com/installing-intercom/docs/intercom-javascript#intercomboot-intercomsettings
})

Intercom.registerIdentifiedUser({
  email: 'test@example.com', // you can also set user details like the mobile SDKs
  userId: '1234',
})

// show intercom
Intercom.show()
```

### Web, iOS, Android

```js
import { Intercom } from '@houseninja/capacitor-intercom'
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
- `npm install —-save @houseninja/capacitor-intercom`
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
- `npm install —-save @houseninja/capacitor-intercom`
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

## API

<docgen-index>

- [Maintainers](#maintainers)
- [Installation](#installation)
- [Usage](#usage)
  - [Web Only](#web-only)
  - [Web, iOS, Android](#web-ios-android)
- [iOS setup](#ios-setup)
- [Android setup](#android-setup)
- [API](#api)
  - [boot(...)](#boot)
  - [loginUser(...)](#loginuser)
  - [registerIdentifiedUser(...)](#registeridentifieduser)
  - [loginUnidentifiedUser()](#loginunidentifieduser)
  - [registerUnidentifiedUser()](#registerunidentifieduser)
  - [updateUser(...)](#updateuser)
  - [logout()](#logout)
  - [logEvent(...)](#logevent)
  - [displayMessenger()](#displaymessenger)
  - [show()](#show)
  - [displayInbox()](#displayinbox)
  - [displayMessageComposer(...)](#displaymessagecomposer)
  - [displayHelpCenter()](#displayhelpcenter)
  - [displayArticle(...)](#displayarticle)
  - [displayCarousel(...)](#displaycarousel)
  - [displayLauncher()](#displaylauncher)
  - [enableLauncher()](#enablelauncher)
  - [displayInAppMessages()](#displayinappmessages)
  - [enableMessengerPopups()](#enablemessengerpopups)
  - [hideMessenger()](#hidemessenger)
  - [hide()](#hide)
  - [hideLauncher()](#hidelauncher)
  - [disableLauncher()](#disablelauncher)
  - [hideInAppMessages()](#hideinappmessages)
  - [disableMessengerPopups()](#disablemessengerpopups)
  - [setUserHash(...)](#setuserhash)
  - [setBottomPadding(...)](#setbottompadding)
  - [sendPushTokenToIntercom(...)](#sendpushtokentointercom)
  - [receivePush(...)](#receivepush)
  - [unreadConversationCount()](#unreadconversationcount)
  - [addListener('onUnreadCountChange', ...)](#addlisteneronunreadcountchange-)
  - [addListener('windowWillShow', ...)](#addlistenerwindowwillshow-)
  - [addListener('windowDidShow', ...)](#addlistenerwindowdidshow-)
  - [addListener('windowWillHide', ...)](#addlistenerwindowwillhide-)
  - [addListener('windowDidHide', ...)](#addlistenerwindowdidhide-)
  - [addListener('didStartNewConversation', ...)](#addlistenerdidstartnewconversation-)
  - [removeAllListeners()](#removealllisteners)
  - [Interfaces](#interfaces)
    - [IntercomSettings](#intercomsettings)
    - [Date](#date)
    - [IntercomAvatar](#intercomavatar)
    - [IntercomCompany](#intercomcompany)
    - [IntercomUserUpdateOptions](#intercomuserupdateoptions)
    - [IntercomPushNotificationData](#intercompushnotificationdata)
    - [UnreadConversationCount](#unreadconversationcount-1)
    - [PluginListenerHandle](#pluginlistenerhandle)
  - [Type Aliases](#type-aliases)
    - [UnreadCountChangeListener](#unreadcountchangelistener)
- [License](#license)
- [Example](#example)
- [Contributors ✨](#contributors-)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### boot(...)

```typescript
boot(options: IntercomSettings) => Promise<void>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#intercomsettings">IntercomSettings</a></code> |

---

### loginUser(...)

```typescript
loginUser(options: { userId?: string; email?: string; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ userId?: string; email?: string; }</code> |

---

### registerIdentifiedUser(...)

```typescript
registerIdentifiedUser(options: { userId?: string; email?: string; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ userId?: string; email?: string; }</code> |

---

### loginUnidentifiedUser()

```typescript
loginUnidentifiedUser() => Promise<void>
```

---

### registerUnidentifiedUser()

```typescript
registerUnidentifiedUser() => Promise<void>
```

---

### updateUser(...)

```typescript
updateUser(options: IntercomUserUpdateOptions) => Promise<void>
```

| Param         | Type                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#intercomuserupdateoptions">IntercomUserUpdateOptions</a></code> |

---

### logout()

```typescript
logout() => Promise<void>
```

---

### logEvent(...)

```typescript
logEvent(options: { name: string; data?: any; }) => Promise<void>
```

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ name: string; data?: any; }</code> |

---

### displayMessenger()

```typescript
displayMessenger() => Promise<void>
```

---

### show()

```typescript
show() => Promise<void>
```

---

### displayInbox()

```typescript
displayInbox() => Promise<void>
```

---

### displayMessageComposer(...)

```typescript
displayMessageComposer(options: { message: string; }) => Promise<void>
```

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ message: string; }</code> |

---

### displayHelpCenter()

```typescript
displayHelpCenter() => Promise<void>
```

---

### displayArticle(...)

```typescript
displayArticle(options: { articleId: string; }) => Promise<void>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ articleId: string; }</code> |

---

### displayCarousel(...)

```typescript
displayCarousel(options: { carouselId: string; }) => Promise<void>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ carouselId: string; }</code> |

---

### displayLauncher()

```typescript
displayLauncher() => Promise<void>
```

---

### enableLauncher()

```typescript
enableLauncher() => Promise<void>
```

---

### displayInAppMessages()

```typescript
displayInAppMessages() => Promise<void>
```

---

### enableMessengerPopups()

```typescript
enableMessengerPopups() => Promise<void>
```

---

### hideMessenger()

```typescript
hideMessenger() => Promise<void>
```

---

### hide()

```typescript
hide() => Promise<void>
```

---

### hideLauncher()

```typescript
hideLauncher() => Promise<void>
```

---

### disableLauncher()

```typescript
disableLauncher() => Promise<void>
```

---

### hideInAppMessages()

```typescript
hideInAppMessages() => Promise<void>
```

---

### disableMessengerPopups()

```typescript
disableMessengerPopups() => Promise<void>
```

---

### setUserHash(...)

```typescript
setUserHash(options: { hmac: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ hmac: string; }</code> |

---

### setBottomPadding(...)

```typescript
setBottomPadding(options: { value: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

---

### sendPushTokenToIntercom(...)

```typescript
sendPushTokenToIntercom(options: { value: string; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

---

### receivePush(...)

```typescript
receivePush(notification: IntercomPushNotificationData) => Promise<void>
```

| Param              | Type                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------- |
| **`notification`** | <code><a href="#intercompushnotificationdata">IntercomPushNotificationData</a></code> |

---

### unreadConversationCount()

```typescript
unreadConversationCount() => Promise<UnreadConversationCount>
```

**Returns:** <code>Promise&lt;<a href="#unreadconversationcount">UnreadConversationCount</a>&gt;</code>

---

### addListener('onUnreadCountChange', ...)

```typescript
addListener(eventName: 'onUnreadCountChange', listenerFunc: UnreadCountChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                            |
| ------------------ | ------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'onUnreadCountChange'</code>                                              |
| **`listenerFunc`** | <code><a href="#unreadcountchangelistener">UnreadCountChangeListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('windowWillShow', ...)

```typescript
addListener(eventName: 'windowWillShow', listenerFunc: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                          |
| ------------------ | ----------------------------- |
| **`eventName`**    | <code>'windowWillShow'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>    |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('windowDidShow', ...)

```typescript
addListener(eventName: 'windowDidShow', listenerFunc: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                         |
| ------------------ | ---------------------------- |
| **`eventName`**    | <code>'windowDidShow'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>   |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('windowWillHide', ...)

```typescript
addListener(eventName: 'windowWillHide', listenerFunc: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                          |
| ------------------ | ----------------------------- |
| **`eventName`**    | <code>'windowWillHide'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>    |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('windowDidHide', ...)

```typescript
addListener(eventName: 'windowDidHide', listenerFunc: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                         |
| ------------------ | ---------------------------- |
| **`eventName`**    | <code>'windowDidHide'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>   |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('didStartNewConversation', ...)

```typescript
addListener(eventName: 'didStartNewConversation', listenerFunc: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                   |
| ------------------ | -------------------------------------- |
| **`eventName`**    | <code>'didStartNewConversation'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>             |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

---

### Interfaces

#### IntercomSettings

| Prop                           | Type                                                        |
| ------------------------------ | ----------------------------------------------------------- |
| **`app_id`**                   | <code>string</code>                                         |
| **`custom_launcher_selector`** | <code>string</code>                                         |
| **`alignment`**                | <code>string</code>                                         |
| **`vertical_padding`**         | <code>number</code>                                         |
| **`horizontal_padding`**       | <code>number</code>                                         |
| **`hide_default_launcher`**    | <code>boolean</code>                                        |
| **`session_duration`**         | <code>number</code>                                         |
| **`action_color`**             | <code>string</code>                                         |
| **`background_color`**         | <code>string</code>                                         |
| **`email`**                    | <code>string</code>                                         |
| **`user_id`**                  | <code>string</code>                                         |
| **`created_at`**               | <code><a href="#date">Date</a></code>                       |
| **`name`**                     | <code>string</code>                                         |
| **`phone`**                    | <code>string</code>                                         |
| **`last_request_at`**          | <code><a href="#date">Date</a></code>                       |
| **`unsubscribed_from_emails`** | <code>boolean</code>                                        |
| **`language_override`**        | <code>string</code>                                         |
| **`utm_campaign`**             | <code>string</code>                                         |
| **`utm_content`**              | <code>string</code>                                         |
| **`utm_source`**               | <code>string</code>                                         |
| **`utm_term`**                 | <code>string</code>                                         |
| **`avatar`**                   | <code><a href="#intercomavatar">IntercomAvatar</a></code>   |
| **`user_hash`**                | <code>string</code>                                         |
| **`company`**                  | <code><a href="#intercomcompany">IntercomCompany</a></code> |
| **`companies`**                | <code>IntercomCompany[]</code>                              |

#### Date

Enables basic storage and retrieval of dates and times.

| Method                 | Signature                                                                                                    | Description                                                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| **toString**           | () =&gt; string                                                                                              | Returns a string representation of a date. The format of the string depends on the locale.                                              |
| **toDateString**       | () =&gt; string                                                                                              | Returns a date as a string value.                                                                                                       |
| **toTimeString**       | () =&gt; string                                                                                              | Returns a time as a string value.                                                                                                       |
| **toLocaleString**     | () =&gt; string                                                                                              | Returns a value as a string value appropriate to the host environment's current locale.                                                 |
| **toLocaleDateString** | () =&gt; string                                                                                              | Returns a date as a string value appropriate to the host environment's current locale.                                                  |
| **toLocaleTimeString** | () =&gt; string                                                                                              | Returns a time as a string value appropriate to the host environment's current locale.                                                  |
| **valueOf**            | () =&gt; number                                                                                              | Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.                                                      |
| **getTime**            | () =&gt; number                                                                                              | Gets the time value in milliseconds.                                                                                                    |
| **getFullYear**        | () =&gt; number                                                                                              | Gets the year, using local time.                                                                                                        |
| **getUTCFullYear**     | () =&gt; number                                                                                              | Gets the year using Universal Coordinated Time (UTC).                                                                                   |
| **getMonth**           | () =&gt; number                                                                                              | Gets the month, using local time.                                                                                                       |
| **getUTCMonth**        | () =&gt; number                                                                                              | Gets the month of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                             |
| **getDate**            | () =&gt; number                                                                                              | Gets the day-of-the-month, using local time.                                                                                            |
| **getUTCDate**         | () =&gt; number                                                                                              | Gets the day-of-the-month, using Universal Coordinated Time (UTC).                                                                      |
| **getDay**             | () =&gt; number                                                                                              | Gets the day of the week, using local time.                                                                                             |
| **getUTCDay**          | () =&gt; number                                                                                              | Gets the day of the week using Universal Coordinated Time (UTC).                                                                        |
| **getHours**           | () =&gt; number                                                                                              | Gets the hours in a date, using local time.                                                                                             |
| **getUTCHours**        | () =&gt; number                                                                                              | Gets the hours value in a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                       |
| **getMinutes**         | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object, using local time.                                                                |
| **getUTCMinutes**      | () =&gt; number                                                                                              | Gets the minutes of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                           |
| **getSeconds**         | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object, using local time.                                                                |
| **getUTCSeconds**      | () =&gt; number                                                                                              | Gets the seconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                           |
| **getMilliseconds**    | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a>, using local time.                                                                  |
| **getUTCMilliseconds** | () =&gt; number                                                                                              | Gets the milliseconds of a <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                      |
| **getTimezoneOffset**  | () =&gt; number                                                                                              | Gets the difference in minutes between the time on the local computer and Universal Coordinated Time (UTC).                             |
| **setTime**            | (time: number) =&gt; number                                                                                  | Sets the date and time value in the <a href="#date">Date</a> object.                                                                    |
| **setMilliseconds**    | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using local time.                                                    |
| **setUTCMilliseconds** | (ms: number) =&gt; number                                                                                    | Sets the milliseconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                              |
| **setSeconds**         | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using local time.                                                         |
| **setUTCSeconds**      | (sec: number, ms?: number \| undefined) =&gt; number                                                         | Sets the seconds value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                   |
| **setMinutes**         | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using local time.                                                         |
| **setUTCMinutes**      | (min: number, sec?: number \| undefined, ms?: number \| undefined) =&gt; number                              | Sets the minutes value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                   |
| **setHours**           | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hour value in the <a href="#date">Date</a> object using local time.                                                            |
| **setUTCHours**        | (hours: number, min?: number \| undefined, sec?: number \| undefined, ms?: number \| undefined) =&gt; number | Sets the hours value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                     |
| **setDate**            | (date: number) =&gt; number                                                                                  | Sets the numeric day-of-the-month value of the <a href="#date">Date</a> object using local time.                                        |
| **setUTCDate**         | (date: number) =&gt; number                                                                                  | Sets the numeric day of the month in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                        |
| **setMonth**           | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using local time.                                                           |
| **setUTCMonth**        | (month: number, date?: number \| undefined) =&gt; number                                                     | Sets the month value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                     |
| **setFullYear**        | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year of the <a href="#date">Date</a> object using local time.                                                                  |
| **setUTCFullYear**     | (year: number, month?: number \| undefined, date?: number \| undefined) =&gt; number                         | Sets the year value in the <a href="#date">Date</a> object using Universal Coordinated Time (UTC).                                      |
| **toUTCString**        | () =&gt; string                                                                                              | Returns a date converted to a string using Universal Coordinated Time (UTC).                                                            |
| **toISOString**        | () =&gt; string                                                                                              | Returns a date as a string value in ISO format.                                                                                         |
| **toJSON**             | (key?: any) =&gt; string                                                                                     | Used by the JSON.stringify method to enable the transformation of an object's data for JavaScript Object Notation (JSON) serialization. |

#### IntercomAvatar

| Prop            | Type                |
| --------------- | ------------------- |
| **`type`**      | <code>string</code> |
| **`image_url`** | <code>string</code> |

#### IntercomCompany

| Prop                    | Type                                  |
| ----------------------- | ------------------------------------- |
| **`company_id`**        | <code>string</code>                   |
| **`name`**              | <code>string</code>                   |
| **`created_at`**        | <code><a href="#date">Date</a></code> |
| **`remote_created_at`** | <code><a href="#date">Date</a></code> |
| **`plan`**              | <code>string</code>                   |
| **`monthly_spend`**     | <code>number</code>                   |
| **`user_count`**        | <code>number</code>                   |
| **`size`**              | <code>number</code>                   |
| **`website`**           | <code>string</code>                   |
| **`industry`**          | <code>string</code>                   |

#### IntercomUserUpdateOptions

| Prop                   | Type                                 |
| ---------------------- | ------------------------------------ |
| **`userId`**           | <code>string</code>                  |
| **`email`**            | <code>string</code>                  |
| **`name`**             | <code>string</code>                  |
| **`phone`**            | <code>string</code>                  |
| **`languageOverride`** | <code>string</code>                  |
| **`customAttributes`** | <code>{ [key: string]: any; }</code> |

#### IntercomPushNotificationData

| Prop                            | Type                |
| ------------------------------- | ------------------- |
| **`conversation_id`**           | <code>string</code> |
| **`message`**                   | <code>string</code> |
| **`body`**                      | <code>string</code> |
| **`author_name`**               | <code>string</code> |
| **`image_url`**                 | <code>string</code> |
| **`app_name`**                  | <code>string</code> |
| **`receiver`**                  | <code>string</code> |
| **`conversation_part_type`**    | <code>string</code> |
| **`intercom_push_type`**        | <code>string</code> |
| **`uri`**                       | <code>string</code> |
| **`push_only_conversation_id`** | <code>string</code> |
| **`instance_id`**               | <code>string</code> |
| **`title`**                     | <code>string</code> |
| **`priority`**                  | <code>number</code> |

#### UnreadConversationCount

| Prop        | Type                |
| ----------- | ------------------- |
| **`value`** | <code>string</code> |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

### Type Aliases

#### UnreadCountChangeListener

<code>(state: <a href="#unreadconversationcount">UnreadConversationCount</a>): void</code>

</docgen-api>

## License

MIT

## Example

- <https://github.com/@houseninja/capacitor-intercom/blob/master/example>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://twitter.com/stewones"><img src="https://avatars1.githubusercontent.com/u/719763?v=4?s=75" width="75px;" alt="Stew"/><br /><sub><b>Stew</b></sub></a><br /><a href="https://github.com/houseninjadojo/capacitor-intercom/commits?author=stewones" title="Code">💻</a> <a href="https://github.com/houseninjadojo/capacitor-intercom/commits?author=stewones" title="Documentation">📖</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://davidseek.com/"><img src="https://avatars2.githubusercontent.com/u/17073950?v=4?s=75" width="75px;" alt="David Seek"/><br /><sub><b>David Seek</b></sub></a><br /><a href="https://github.com/houseninjadojo/capacitor-intercom/commits?author=davidseek" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/rnikitin"><img src="https://avatars3.githubusercontent.com/u/1829318?v=4?s=75" width="75px;" alt="Roman Nikitin"/><br /><sub><b>Roman Nikitin</b></sub></a><br /><a href="https://github.com/houseninjadojo/capacitor-intercom/commits?author=rnikitin" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/atomassoni"><img src="https://avatars1.githubusercontent.com/u/17362459?v=4?s=75" width="75px;" alt="Anne Tomassoni"/><br /><sub><b>Anne Tomassoni</b></sub></a><br /><a href="https://github.com/houseninjadojo/capacitor-intercom/commits?author=atomassoni" title="Code">💻</a> <a href="https://github.com/houseninjadojo/capacitor-intercom/pulls?q=is%3Apr+reviewed-by%3Aatomassoni" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mmodzelewski"><img src="https://avatars2.githubusercontent.com/u/7762633?v=4?s=75" width="75px;" alt="Maciej Modzelewski"/><br /><sub><b>Maciej Modzelewski</b></sub></a><br /><a href="https://github.com/houseninjadojo/capacitor-intercom/commits?author=mmodzelewski" title="Code">💻</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/spaghettiguru"><img src="https://avatars.githubusercontent.com/u/5624009?v=4?s=75" width="75px;" alt="Oleg Yuzvik"/><br /><sub><b>Oleg Yuzvik</b></sub></a><br /><a href="#maintenance-spaghettiguru" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/gcorreaalves"><img src="https://avatars.githubusercontent.com/u/983426?v=4?s=75" width="75px;" alt="Gustavo Corrêa Alves"/><br /><sub><b>Gustavo Corrêa Alves</b></sub></a><br /><a href="https://github.com/houseninjadojo/capacitor-intercom/commits?author=gcorreaalves" title="Documentation">📖</a></td>
    </tr>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Jealvia"><img src="https://avatars.githubusercontent.com/u/28424830?v=4?s=75" width="75px;" alt="Jealvia"/><br /><sub><b>Jealvia</b></sub></a><br /><a href="#maintenance-Jealvia" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://adamduren.com/"><img src="https://avatars.githubusercontent.com/u/581097?v=4?s=75" width="75px;" alt="Adam Duren"/><br /><sub><b>Adam Duren</b></sub></a><br /><a href="https://github.com/houseninjadojo/capacitor-intercom/commits?author=adamduren" title="Code">💻</a> <a href="#maintenance-adamduren" title="Maintenance">🚧</a></td>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/mileszim"><img src="https://avatars.githubusercontent.com/u/1849508?v=4?s=75" width="75px;" alt="Miles Zimmerman"/><br /><sub><b>Miles Zimmerman</b></sub></a><br /><a href="https://github.com/houseninjadojo/capacitor-intercom/commits?author=mileszim" title="Code">💻</a> <a href="https://github.com/houseninjadojo/capacitor-intercom/commits?author=mileszim" title="Documentation">📖</a> <a href="#maintenance-mileszim" title="Maintenance">🚧</a> <a href="#example-mileszim" title="Examples">💡</a> <a href="#platform-mileszim" title="Packaging/porting to new platform">📦</a> <a href="#plugin-mileszim" title="Plugin/utility libraries">🔌</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
