# fractel-push-notifications

Custom Capacitor Plugin for Incoming call and regular push notifications with Firebase

## Install

```bash
npm install fractel-push-notifications
npx cap sync
```

## API

<docgen-index>

- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions()`](#requestpermissions)
- [`register()`](#register)
- [`unregister()`](#unregister)
- [`getBadgeNumber()`](#getbadgenumber)
- [`setBadgeNumber(...)`](#setbadgenumber)
- [`getDeliveredNotifications()`](#getdeliverednotifications)
- [`removeDeliveredNotifications(...)`](#removedeliverednotifications)
- [`removeAllDeliveredNotifications()`](#removealldeliverednotifications)
- [`addListener('token', ...)`](#addlistenertoken)
- [`addListener('message', ...)`](#addlistenermessage)
- [`removeAllListeners()`](#removealllisteners)
- [`hasStorage()`](#hasstorage)
- [`deleteStorage()`](#deletestorage)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

Check permission to receive push notifications.

Will always return "granted" on Android

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

---

### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

Request permission to receive push notifications.

Will always return "granted" on Android

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

**Since:** 1.0.0

---

### register()

```typescript
register() => Promise<void>
```

Register the app to receive push notifications.

**Since:** 1.0.0

---

### unregister()

```typescript
unregister() => Promise<void>
```

Should be called to unregister the Firebase Instance. For example if a User logs out.

**Since:** 1.1.0

---

### getBadgeNumber()

```typescript
getBadgeNumber() => Promise<BadgeCount>
```

Get icon badge Value

Only available on iOS

**Returns:** <code>Promise&lt;<a href="#badgecount">BadgeCount</a>&gt;</code>

**Since:** 1.2.0

---

### setBadgeNumber(...)

```typescript
setBadgeNumber(options: BadgeCount) => Promise<void>
```

Set icon badge Value

Only available on iOS

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#badgecount">BadgeCount</a></code> |

**Since:** 1.2.0

---

### getDeliveredNotifications()

```typescript
getDeliveredNotifications() => Promise<NotificationsResult>
```

Get notifications in Notification Center

**Returns:** <code>Promise&lt;<a href="#notificationsresult">NotificationsResult</a>&gt;</code>

**Since:** 1.2.0

---

### removeDeliveredNotifications(...)

```typescript
removeDeliveredNotifications(options: NotificationsIds) => Promise<void>
```

Remove notifications from the notifications screen based on the id

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#notificationsids">NotificationsIds</a></code> |

**Since:** 1.2.0

---

### removeAllDeliveredNotifications()

```typescript
removeAllDeliveredNotifications() => Promise<void>
```

Remove all notifications from the notifications screen

**Since:** 1.2.0

---

### addListener('token', ...)

```typescript
addListener(eventName: 'token', listenerFunc: (result: TokenResult) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when a new fcm token is created

| Param              | Type                                                                     |
| ------------------ | ------------------------------------------------------------------------ |
| **`eventName`**    | <code>'token'</code>                                                     |
| **`listenerFunc`** | <code>(result: <a href="#tokenresult">TokenResult</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('message', ...)

```typescript
addListener(eventName: 'message', listenerFunc: (message: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when a new message is received

| Param              | Type                                   |
| ------------------ | -------------------------------------- |
| **`eventName`**    | <code>'message'</code>                 |
| **`listenerFunc`** | <code>(message: any) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

Remove all native listeners for this plugin.

**Since:** 1.0.0

---

### hasStorage()

```typescript
hasStorage() => Promise<HasStorage>
```

Check if app storage has data

**Returns:** <code>Promise&lt;<a href="#hasstorage">HasStorage</a>&gt;</code>

**Since:** 1.2.0

---

### deleteStorage()

```typescript
deleteStorage() => Promise<void>
```

Remove all native storage for this plugin.

**Since:** 1.2.0

---

### Interfaces

#### PermissionStatus

| Prop          | Type                                                        | Since |
| ------------- | ----------------------------------------------------------- | ----- |
| **`receive`** | <code><a href="#permissionstate">PermissionState</a></code> | 1.0.0 |

#### BadgeCount

| Prop        | Type                | Since |
| ----------- | ------------------- | ----- |
| **`count`** | <code>number</code> | 1.2.0 |

#### NotificationsResult

| Prop                | Type               | Since |
| ------------------- | ------------------ | ----- |
| **`notifications`** | <code>any[]</code> | 1.2.0 |

#### NotificationsIds

| Prop      | Type                  | Since |
| --------- | --------------------- | ----- |
| **`ids`** | <code>string[]</code> | 1.2.0 |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### TokenResult

| Prop        | Type                |
| ----------- | ------------------- |
| **`token`** | <code>string</code> |

#### HasStorage

| Prop        | Type                 | Description                                        | Since |
| ----------- | -------------------- | -------------------------------------------------- | ----- |
| **`value`** | <code>boolean</code> | Whether or not the device has data in app storage. | 1.2.0 |

### Type Aliases

#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

</docgen-api>
