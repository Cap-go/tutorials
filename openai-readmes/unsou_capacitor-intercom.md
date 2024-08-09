<h2 align="center">Capacitor Intercom plugin</h2>
<p align="center"><strong><code>@unsou/capacitor-intercom</code></strong></p>
<p align="center">
  Capacitor plugin for enabling Intercom capabilities based on the Capacitor community plugin
</p>

<p align="center">
  <img src="https://img.shields.io/maintenance/yes/2023?style=flat-square" />
  <a href="https://www.npmjs.com/package/@unsou/capacitor-intercom"><img src="https://img.shields.io/npm/l/@unsou/capacitor-intercom?style=flat-square" /></a>
<br>
  <a href="https://www.npmjs.com/package/@unsou/capacitor-intercom"><img src="https://img.shields.io/npm/dw/@unsou/capacitor-intercom?style=flat-square" /></a>
  <a href="https://www.npmjs.com/package/@unsou/capacitor-intercom"><img src="https://img.shields.io/npm/v/@unsou/capacitor-intercom?style=flat-square" /></a>
  <!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
<a href="#contributors"><img src="https://img.shields.io/badge/all%20contributors-14-orange?style=flat-square" /></a>
<!-- ALL-CONTRIBUTORS-BADGE:END -->
</p>

## Notice 🚀

Thanks for the all the authors with their work in [`@capacitor-community/intercom`](https://github.com/capacitor-community/intercom) and in [`@foodello/intercom`](https://github.com/foodello/intercom). We have noticed that the repository was left behind the newest updates and the original repository did not get updates quick enough once pull request were opened. So we decided to serve the newest Intercom capabilities under seperate org until the original repository catches the changes.

**This plugin is built for the Capacitor v4 upwards.**

## Installation

Using npm:

```bash
npm install @unsou/capacitor-intercom
```

Using yarn:

```bash
yarn add @unsou/capacitor-intercom
```

Sync native files:

```bash
npx cap sync
```

## Usage

Import Intercom plugin into your project.

```js
import { Capacitor } from '@capacitor/core';
import { Intercom } from '@unsou/capacitor-intercom';
import { PushNotifications } from '@capacitor/push-notifications';
```

Initialize Intercom plugin.

```js
/**
 * Web requires loading and initializing the script of the SDK
 * with the Intercom web config defined in IntercomWebConfig Interface.
 *
 * Only available in Web.
 * @since 4.2.0
 */
if (!Capacitor.isNativePlatform()) {
  await Intercom.load({ app_id: 'xxx' });
}

// Android and iOS does not require seperate initialization
```

## API

<docgen-index>

* [`load(...)`](#load)
* [`registerIdentifiedUser(...)`](#registeridentifieduser)
* [`loginIdentifiedUser(...)`](#loginidentifieduser)
* [`registerUnidentifiedUser()`](#registerunidentifieduser)
* [`loginUnidentifiedUser()`](#loginunidentifieduser)
* [`updateUser(...)`](#updateuser)
* [`logout()`](#logout)
* [`logEvent(...)`](#logevent)
* [`displayMessenger()`](#displaymessenger)
* [`displayMessageComposer(...)`](#displaymessagecomposer)
* [`displayHelpCenter()`](#displayhelpcenter)
* [`hideMessenger()`](#hidemessenger)
* [`displayLauncher()`](#displaylauncher)
* [`hideLauncher()`](#hidelauncher)
* [`displayInAppMessages()`](#displayinappmessages)
* [`hideInAppMessages()`](#hideinappmessages)
* [`displayCarousel(...)`](#displaycarousel)
* [`setUserHash(...)`](#setuserhash)
* [`setBottomPadding(...)`](#setbottompadding)
* [`sendPushTokenToIntercom(...)`](#sendpushtokentointercom)
* [`receivePush(...)`](#receivepush)
* [`displayArticle(...)`](#displayarticle)
* [`presentContent(...)`](#presentcontent)
* [`present(...)`](#present)
* [`setupUnreadConversationListener()`](#setupunreadconversationlistener)
* [`removeUnreadConversationListener()`](#removeunreadconversationlistener)
* [`getUnreadConversationCount()`](#getunreadconversationcount)
* [`addListener('updateUnreadCount', ...)`](#addlistenerupdateunreadcount-)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

IntercomPlugin Interface

### load(...)

```typescript
load(config: IntercomWebConfig) => Promise<void>
```

Load Intercom and set configs on Web environment.

Only available for Web

| Param        | Type                                                            |
| ------------ | --------------------------------------------------------------- |
| **`config`** | <code><a href="#intercomwebconfig">IntercomWebConfig</a></code> |

**Since:** 4.2.0

--------------------


### registerIdentifiedUser(...)

```typescript
registerIdentifiedUser(options: { userId?: string; email?: string; }) => Promise<void>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ userId?: string; email?: string; }</code> |

**Since:** 1.0.0

--------------------


### loginIdentifiedUser(...)

```typescript
loginIdentifiedUser(options: { userId?: string; email?: string; }) => Promise<void>
```

Login an identified user with Intercom.

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ userId?: string; email?: string; }</code> |

**Since:** 4.1.0

--------------------


### registerUnidentifiedUser()

```typescript
registerUnidentifiedUser() => Promise<void>
```

**Since:** 1.0.0

--------------------


### loginUnidentifiedUser()

```typescript
loginUnidentifiedUser() => Promise<void>
```

Login an unidentified user with Intercom.

**Since:** 4.1.0

--------------------


### updateUser(...)

```typescript
updateUser(options: IntercomUserUpdateOptions) => Promise<void>
```

Updates a user's attributes in Intercom.

| Param         | Type                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#intercomuserupdateoptions">IntercomUserUpdateOptions</a></code> |

**Since:** 1.0.0

--------------------


### logout()

```typescript
logout() => Promise<void>
```

Logs the user out of Intercom.

**Since:** 1.0.0

--------------------


### logEvent(...)

```typescript
logEvent(options: { name: string; data?: any; }) => Promise<void>
```

Logs an event with optional metadata in Intercom.

| Param         | Type                                       |
| ------------- | ------------------------------------------ |
| **`options`** | <code>{ name: string; data?: any; }</code> |

**Since:** 1.0.0

--------------------


### displayMessenger()

```typescript
displayMessenger() => Promise<void>
```

**Since:** 1.0.0

--------------------


### displayMessageComposer(...)

```typescript
displayMessageComposer(options: { message: string; }) => Promise<void>
```

Displays the Intercom Message Composer with an initial message.

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ message: string; }</code> |

**Since:** 1.0.0

--------------------


### displayHelpCenter()

```typescript
displayHelpCenter() => Promise<void>
```

**Since:** 1.0.0

--------------------


### hideMessenger()

```typescript
hideMessenger() => Promise<void>
```

Hides the Intercom Messenger.

**Since:** 1.0.0

--------------------


### displayLauncher()

```typescript
displayLauncher() => Promise<void>
```

Displays the default Intercom Launcher.

**Since:** 1.0.0

--------------------


### hideLauncher()

```typescript
hideLauncher() => Promise<void>
```

Hides the Intercom Launcher.

**Since:** 1.0.0

--------------------


### displayInAppMessages()

```typescript
displayInAppMessages() => Promise<void>
```

Displays Intercom In-App Messages.

**Since:** 1.0.0

--------------------


### hideInAppMessages()

```typescript
hideInAppMessages() => Promise<void>
```

Hides Intercom In-App Messages.

**Since:** 1.0.0

--------------------


### displayCarousel(...)

```typescript
displayCarousel(options: { carouselId: string; }) => Promise<void>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ carouselId: string; }</code> |

**Since:** 1.0.0

--------------------


### setUserHash(...)

```typescript
setUserHash(options: { hmac: string; }) => Promise<void>
```

Sets the HMAC user hash for Intercom Identity Verification.

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ hmac: string; }</code> |

**Since:** 1.0.0

--------------------


### setBottomPadding(...)

```typescript
setBottomPadding(options: { value: string; }) => Promise<void>
```

Sets the bottom padding for the Intercom Messenger.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Since:** 1.0.0

--------------------


### sendPushTokenToIntercom(...)

```typescript
sendPushTokenToIntercom(options: { value: string; }) => Promise<void>
```

Sends a push token to Intercom.

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Since:** 1.0.0

--------------------


### receivePush(...)

```typescript
receivePush(notification: IntercomPushNotificationData) => Promise<void>
```

Processes a received Intercom push notification.

| Param              | Type                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------- |
| **`notification`** | <code><a href="#intercompushnotificationdata">IntercomPushNotificationData</a></code> |

**Since:** 1.0.0

--------------------


### displayArticle(...)

```typescript
displayArticle(options: { articleId: string; }) => Promise<void>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ articleId: string; }</code> |

**Since:** 1.0.0

--------------------


### presentContent(...)

```typescript
presentContent(options: { contentType: IntercomContent; contentId: string; }) => Promise<void>
```

Presents an Intercom content item by its type and ID.

| Param         | Type                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ contentType: <a href="#intercomcontent">IntercomContent</a>; contentId: string; }</code> |

**Since:** 4.1.0

--------------------


### present(...)

```typescript
present(options: { space: IntercomSpace; }) => Promise<void>
```

Presents the Intercom's space.

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code>{ space: <a href="#intercomspace">IntercomSpace</a>; }</code> |

**Since:** 4.1.0

--------------------


### setupUnreadConversationListener()

```typescript
setupUnreadConversationListener() => Promise<void>
```

Setup listener for unread conversation count updates.

**Since:** 4.1.0

--------------------


### removeUnreadConversationListener()

```typescript
removeUnreadConversationListener() => Promise<void>
```

Remove listener for unread conversation count updates.

**Since:** 4.1.0

--------------------


### getUnreadConversationCount()

```typescript
getUnreadConversationCount() => Promise<{ unreadCount: number; }>
```

Get current unread conversation count.

**Returns:** <code>Promise&lt;{ unreadCount: number; }&gt;</code>

**Since:** 4.1.0

--------------------


### addListener('updateUnreadCount', ...)

```typescript
addListener(eventName: 'updateUnreadCount', listenerFunc: (data: { unreadCount: number; }) => void) => Promise<PluginListenerHandle>
```

Listen for when the unread conversation count is changed.

| Param              | Type                                                     |
| ------------------ | -------------------------------------------------------- |
| **`eventName`**    | <code>'updateUnreadCount'</code>                         |
| **`listenerFunc`** | <code>(data: { unreadCount: number; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt;</code>

**Since:** 4.1.0

--------------------


### Interfaces


#### IntercomWebConfig

<a href="#intercomwebconfig">IntercomWebConfig</a> Interface

Represent configs that are available on Intercom Web SDK.

| Prop                           | Type                                                                        | Description                                                                                                                                                                                                                                                           | Default              | Since |
| ------------------------------ | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ----- |
| **`app_id`**                   | <code>string</code>                                                         | Configure Intercom Web APP ID. The APP ID of your Intercom app which will indicate where to store any data. Only available for Web                                                                                                                                    |                      | 4.2.0 |
| **`api_base`**                 | <code><a href="#intercomregionalapibase">IntercomRegionalApiBase</a></code> | Configure Intercom's regional API baseurl. For customers who are using Regional Data Hosting for Intercom, there is an additional parameter to set, to ensure your Messenger is pointing to your Regional workspace. Only available for Web                           |                      | 4.2.0 |
| **`custom_launcher_selector`** | <code>string</code>                                                         | Configure Intercom custom launcher selector. The CSS selector of an element to trigger Intercom("show") in order to activate the messenger. To target an element by ID: "#id_of_element". To target elements by class ".classname_of_elements" Only available for Web |                      | 4.2.0 |
| **`alignment`**                | <code><a href="#intercomalignment">IntercomAlignment</a></code>             | Configure Intercom default launcher alignment. Dictate the alignment of the default launcher icon to be on the left/right. Possible values: "left" or "right" (any other value is treated as right). Only available for Web                                           | <code>"right"</code> | 4.2.0 |
| **`vertical_padding`**         | <code>number</code>                                                         | Configure Intercom default launcher icon's vertical padding. Move the default launcher icon vertically. Padding from bottom of screen. Minimum value: 20. Does not work on mobile. Only available for Web                                                             |                      | 4.2.0 |
| **`horizontal_padding`**       | <code>number</code>                                                         | Configure Intercom default launcher icon's horizontal padding. Move the default launcher icon horizontally. Padding from right side of screen Minimum value: 20. Does not work on mobile. Only available for Web                                                      |                      | 4.2.0 |
| **`hide_default_launcher`**    | <code>boolean</code>                                                        | Configure Intercom default launcher icon's visibility. Hide the default launcher icon. Setting to false will forcefully show the launcher icon. Only available for Web                                                                                                |                      | 4.2.0 |
| **`session_duration`**         | <code>number</code>                                                         | Configure Intercom session duration. Time in milliseconds for the Intercom session to be considered active. A value of 5 * 60 * 1000 would set the expiry time to be 5 minutes Only available for Web                                                                 |                      | 4.2.0 |
| **`action_color`**             | <code>string</code>                                                         | Configure action color for Intercom. Used in button links and more to highlight and emphasise. The color string can be any valid CSS Color Name HEX or RGB Only available for Web                                                                                     |                      | 4.2.0 |
| **`background_color`**         | <code>string</code>                                                         | Configure background color for Intercom. Used behind your team profile and other attributes. The color string can be any valid CSS Color Name HEX or RGB Only available for Web                                                                                       |                      | 4.2.0 |


#### IntercomUserUpdateOptions

<a href="#intercomuserupdateoptions">IntercomUserUpdateOptions</a> Interface

Represents the options for updating a user's attributes in Intercom.

Only available for iOS and Android.

| Prop                   | Type                                                         |
| ---------------------- | ------------------------------------------------------------ |
| **`userId`**           | <code>string</code>                                          |
| **`email`**            | <code>string</code>                                          |
| **`name`**             | <code>string</code>                                          |
| **`phone`**            | <code>string</code>                                          |
| **`languageOverride`** | <code>string</code>                                          |
| **`customAttributes`** | <code><a href="#record">Record</a>&lt;string, any&gt;</code> |
| **`company`**          | <code><a href="#companyoption">CompanyOption</a></code>      |
| **`companies`**        | <code>CompanyOption[]</code>                                 |


#### CompanyOption

<a href="#companyoption">CompanyOption</a> Interface.

Represents Intercom option to include company details.

| Prop                   | Type                                                         | Description                   |
| ---------------------- | ------------------------------------------------------------ | ----------------------------- |
| **`name`**             | <code>string</code>                                          | Required for Web              |
| **`companyId`**        | <code>string</code>                                          | Required for Native platforms |
| **`createdAt`**        | <code>number</code>                                          | Unix timestamp                |
| **`monthlySpend`**     | <code>number</code>                                          |                               |
| **`plan`**             | <code>string</code>                                          |                               |
| **`customAttributes`** | <code><a href="#record">Record</a>&lt;string, any&gt;</code> |                               |


#### IntercomPushNotificationData

<a href="#intercompushnotificationdata">IntercomPushNotificationData</a> Interface

Represents the structure of a received Intercom push notification.

Only available for iOS and Android.

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


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


### Type Aliases


#### Record

Construct a type with a set of properties K of type T

<code>{ [P in K]: T; }</code>


### Enums


#### IntercomRegionalApiBase

| Members  | Value                                         |
| -------- | --------------------------------------------- |
| **`Us`** | <code>'https://api-iam.intercom.io'</code>    |
| **`Eu`** | <code>'https://api-iam.eu.intercom.io'</code> |
| **`Au`** | <code>'https://api-iam.au.intercom.io'</code> |


#### IntercomAlignment

| Members     | Value                |
| ----------- | -------------------- |
| **`Left`**  | <code>'left'</code>  |
| **`Right`** | <code>'right'</code> |


#### IntercomContent

| Members         | Value                    | Description                        | Since |
| --------------- | ------------------------ | ---------------------------------- | ----- |
| **`Article`**   | <code>'article'</code>   |                                    |       |
| **`Survey`**    | <code>'survey'</code>    |                                    |       |
| **`Carousel`**  | <code>'carousel'</code>  | Only available for iOS and Android | 4.1.0 |
| **`Checklist`** | <code>'checklist'</code> | Only available for Web             | 4.2.0 |
| **`News`**      | <code>'news'</code>      | Only available for Web             | 4.2.0 |
| **`Tour`**      | <code>'tour'</code>      | Only available for Web             | 4.2.0 |


#### IntercomSpace

| Members          | Value                   | Description            | Since |
| ---------------- | ----------------------- | ---------------------- | ----- |
| **`Home`**       | <code>'home'</code>     |                        |       |
| **`Messages`**   | <code>'messages'</code> |                        |       |
| **`HelpCenter`** | <code>'help'</code>     |                        |       |
| **`News`**       | <code>'news'</code>     | Only available on web. | 4.2.0 |
| **`Tasks`**      | <code>'tasks'</code>    | Only available on web. | 4.2.0 |

</docgen-api>

## Configurations

### iOS setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install —-save @foodello/intercom`
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

### Android setup

- `ionic start my-cap-app --capacitor`
- `cd my-cap-app`
- `npm install —-save @foodello/intercom`
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

## Original repository's maintainers and sponsors

This repository is based on the wonderful work of the official `@capacitor-community/intercom` -plugin. Here we want to acknowledge the mastermind and sponsors behind that work.

### Sponsors

<table>
  <tr>
    <td align="center">
      <a href="https://intenseloop.com">
      <img src="https://static.intenseloop.com/assets/logo-512x512.png" width="40" />
      </a>
    </td>
    <td>
      <a href="https://intenseloop.com">
      Intenseloop
      </a>
    </td>
  </tr>
</table>

### Maintainers

| Maintainer   | GitHub                                  | Social                                    |
| ------------ | --------------------------------------- | ----------------------------------------- |
| Stewan Silva | [stewones](https://github.com/stewones) | [@stewones](https://twitter.com/stewones) |

## Future plans

If you have any ideas what we should include, please open a new issue for it.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/stewones"><img src="https://avatars1.githubusercontent.com/u/719763?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Stew</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=stewones" title="Code">💻</a> <a href="https://github.com/capacitor-community/intercom/commits?author=stewones" title="Documentation">📖</a></td>
    <td align="center"><a href="https://davidseek.com/"><img src="https://avatars2.githubusercontent.com/u/17073950?v=4?s=75" width="75px;" alt=""/><br /><sub><b>David Seek</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=davidseek" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/rnikitin"><img src="https://avatars3.githubusercontent.com/u/1829318?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Roman Nikitin</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=rnikitin" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/atomassoni"><img src="https://avatars1.githubusercontent.com/u/17362459?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Anne Tomassoni</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=atomassoni" title="Code">💻</a> <a href="https://github.com/capacitor-community/intercom/pulls?q=is%3Apr+reviewed-by%3Aatomassoni" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/mmodzelewski"><img src="https://avatars2.githubusercontent.com/u/7762633?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Maciej Modzelewski</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=mmodzelewski" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/spaghettiguru"><img src="https://avatars.githubusercontent.com/u/5624009?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Oleg Yuzvik</b></sub></a><br /><a href="#maintenance-spaghettiguru" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/gcorreaalves"><img src="https://avatars.githubusercontent.com/u/983426?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Gustavo Corrêa Alves</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=gcorreaalves" title="Documentation">📖</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/Jealvia"><img src="https://avatars.githubusercontent.com/u/28424830?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Jealvia</b></sub></a><br /><a href="#maintenance-Jealvia" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://adamduren.com/"><img src="https://avatars.githubusercontent.com/u/581097?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Adam Duren</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=adamduren" title="Code">💻</a> <a href="#maintenance-adamduren" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/ramikhafagi96"><img src="https://avatars.githubusercontent.com/u/38646828?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Rami Khafagi</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=ramikhafagi96" title="Code">💻</a></td>
    <td align="center"><a href="https://rdlabo.jp/"><img src="https://avatars.githubusercontent.com/u/9690024?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Masahiko Sakakibara</b></sub></a><br /><a href="#maintenance-rdlabo" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/camdjn"><img src="https://avatars.githubusercontent.com/u/7116085?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Dejardin Camille</b></sub></a><br /><a href="https://github.com/capacitor-community/intercom/commits?author=camdjn" title="Code">💻</a></td>
    <td align="center"><a href="https://scr2em.github.io/portfolio/"><img src="https://avatars.githubusercontent.com/u/4671486?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Mohamed Abdelgwad</b></sub></a><br /><a href="#maintenance-scr2em" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/shark404"><img src="https://avatars.githubusercontent.com/u/4898049?v=4?s=75" width="75px;" alt=""/><br /><sub><b>Nathan</b></sub></a><br /><a href="#maintenance-shark404" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
