# capacitor-twilio-voice

Capacitor plugin for FCM push notifications and voice calls using Twilio Voice SDK on Android and iOS

## Install

```bash
npm install capacitor-twilio-voice
npx cap sync
```

## API

<docgen-index>

- [`registerTwilio(...)`](#registertwilio)
- [`register()`](#register)
- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions()`](#requestpermissions)
- [`addListener('registration', ...)`](#addlistenerregistration)
- [`addListener('registrationError', ...)`](#addlistenerregistrationerror)
- [`addListener('pushNotificationReceived', ...)`](#addlistenerpushnotificationreceived)
- [`addListener('pushNotificationActionPerformed', ...)`](#addlistenerpushnotificationactionperformed)
- [`addListener('twilioRegistration', ...)`](#addlistenertwilioregistration)
- [`addListener('twilioRegistration', ...)`](#addlistenertwilioregistration)
- [`addListener('twilioRegistrationError', ...)`](#addlistenertwilioregistrationerror)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### registerTwilio(...)

```typescript
registerTwilio(options: { accessToken: string; registrationToken: string; userId: string; windowToken: string; }) => Promise<void>
```

| Param         | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ accessToken: string; registrationToken: string; userId: string; windowToken: string; }</code> |

---

### register()

```typescript
register() => Promise<void>
```

Register the app to receive push notifications.

This method will trigger the `'registration'` event with the push token or
`'registrationError'` if there was a problem. It does not prompt the user for
notification permissions, use `requestPermissions()` first.

**Since:** 1.0.0

---

### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

Check permission to receive push notifications.

On Android the status is always granted because you can always
receive push notifications. If you need to check if the user allows
to display notifications, use local-notifications plugin.

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

---

### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

Request permission to receive push notifications.

On Android it doesn't prompt for permission because you can always
receive push notifications.

On iOS, the first time you use the function, it will prompt the user
for push notification permission and return granted or denied based
on the user selection. On following calls it will currect status of
the permission without prompting again.

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

---

### addListener('registration', ...)

```typescript
addListener(eventName: 'registration', listenerFunc: (token: Token) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the push notification registration finishes without problems.

Provides the push notification token.

| Param              | Type                                                        |
| ------------------ | ----------------------------------------------------------- |
| **`eventName`**    | <code>'registration'</code>                                 |
| **`listenerFunc`** | <code>(token: <a href="#token">Token</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('registrationError', ...)

```typescript
addListener(eventName: 'registrationError', listenerFunc: (error: RegistrationError) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the push notification registration finished with problems.

Provides an error with the registration problem.

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'registrationError'</code>                                                    |
| **`listenerFunc`** | <code>(error: <a href="#registrationerror">RegistrationError</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('pushNotificationReceived', ...)

```typescript
addListener(eventName: 'pushNotificationReceived', listenerFunc: (notification: PushNotificationSchema) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the device receives a push notification.

| Param              | Type                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'pushNotificationReceived'</code>                                                              |
| **`listenerFunc`** | <code>(notification: <a href="#pushnotificationschema">PushNotificationSchema</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('pushNotificationActionPerformed', ...)

```typescript
addListener(eventName: 'pushNotificationActionPerformed', listenerFunc: (notification: ActionPerformed) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when an action is performed on a push notification.

| Param              | Type                                                                                   |
| ------------------ | -------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'pushNotificationActionPerformed'</code>                                         |
| **`listenerFunc`** | <code>(notification: <a href="#actionperformed">ActionPerformed</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('twilioRegistration', ...)

```typescript
addListener(eventName: 'twilioRegistration', listenerFunc: (token: Token) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the twilio registration finishes without problems.

| Param              | Type                                                        |
| ------------------ | ----------------------------------------------------------- |
| **`eventName`**    | <code>'twilioRegistration'</code>                           |
| **`listenerFunc`** | <code>(token: <a href="#token">Token</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('twilioRegistration', ...)

```typescript
addListener(eventName: 'twilioRegistration', listenerFunc: (error: RegistrationError) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the twilio registration finishes without problems.

Provides the fcm notification token.

| Param              | Type                                                                                |
| ------------------ | ----------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'twilioRegistration'</code>                                                   |
| **`listenerFunc`** | <code>(error: <a href="#registrationerror">RegistrationError</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('twilioRegistrationError', ...)

```typescript
addListener(eventName: 'twilioRegistrationError', listenerFunc: (token: Token) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the twilio registration finishes with problems.

Provides an error with the registration problem.

| Param              | Type                                                        |
| ------------------ | ----------------------------------------------------------- |
| **`eventName`**    | <code>'twilioRegistrationError'</code>                      |
| **`listenerFunc`** | <code>(token: <a href="#token">Token</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all native listeners for this plugin.

**Since:** 1.0.0

---

### Interfaces

#### PermissionStatus

| Prop          | Type                                                        | Description                                  | Since |
| ------------- | ----------------------------------------------------------- | -------------------------------------------- | ----- |
| **`receive`** | <code><a href="#permissionstate">PermissionState</a></code> | Permission state of receiving notifications. | 1.0.0 |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### Token

| Prop        | Type                | Description                                                              | Since |
| ----------- | ------------------- | ------------------------------------------------------------------------ | ----- |
| **`value`** | <code>string</code> | On iOS it contains the APNS token. On Android it contains the FCM token. | 1.0.0 |

#### RegistrationError

| Prop        | Type                | Description                                        | Since |
| ----------- | ------------------- | -------------------------------------------------- | ----- |
| **`error`** | <code>string</code> | Error message describing the registration failure. | 4.0.0 |

#### PushNotificationSchema

| Prop               | Type                 | Description                                                                                                          | Since |
| ------------------ | -------------------- | -------------------------------------------------------------------------------------------------------------------- | ----- |
| **`title`**        | <code>string</code>  | The notification title.                                                                                              | 1.0.0 |
| **`subtitle`**     | <code>string</code>  | The notification subtitle.                                                                                           | 1.0.0 |
| **`body`**         | <code>string</code>  | The main text payload for the notification.                                                                          | 1.0.0 |
| **`id`**           | <code>string</code>  | The notification identifier.                                                                                         | 1.0.0 |
| **`tag`**          | <code>string</code>  | The notification tag. Only available on Android (from push notifications).                                           | 4.0.0 |
| **`badge`**        | <code>number</code>  | The number to display for the app icon badge.                                                                        | 1.0.0 |
| **`notification`** | <code>any</code>     | It's not being returned.                                                                                             | 1.0.0 |
| **`data`**         | <code>any</code>     | Any additional data that was included in the push notification payload.                                              | 1.0.0 |
| **`click_action`** | <code>string</code>  | The action to be performed on the user opening the notification. Only available on Android.                          | 1.0.0 |
| **`link`**         | <code>string</code>  | Deep link from the notification. Only available on Android.                                                          | 1.0.0 |
| **`group`**        | <code>string</code>  | Set the group identifier for notification grouping. Only available on Android. Works like `threadIdentifier` on iOS. | 1.0.0 |
| **`groupSummary`** | <code>boolean</code> | Designate this notification as the summary for an associated `group`. Only available on Android.                     | 1.0.0 |

#### ActionPerformed

| Prop               | Type                                                                      | Description                                                     | Since |
| ------------------ | ------------------------------------------------------------------------- | --------------------------------------------------------------- | ----- |
| **`actionId`**     | <code>string</code>                                                       | The action performed on the notification.                       | 1.0.0 |
| **`inputValue`**   | <code>string</code>                                                       | Text entered on the notification action. Only available on iOS. | 1.0.0 |
| **`notification`** | <code><a href="#pushnotificationschema">PushNotificationSchema</a></code> | The notification in which the action was performed.             | 1.0.0 |

### Type Aliases

#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
