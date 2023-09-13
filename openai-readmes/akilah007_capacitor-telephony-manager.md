# Capacitor Telephony Manager

Telephony Manager for VOIP Apps

## Install

```bash
npm install capacitor-telephony-manager
npx cap sync
```

## API

<docgen-index>

- [`addListener('notificationActionPerformed', ...)`](#addlistenernotificationactionperformed)
- [`outGoingCallNotification(...)`](#outgoingcallnotification)
- [`updateOutgoingNotification(...)`](#updateoutgoingnotification)
- [`updateOutgoingNotificationAction(...)`](#updateoutgoingnotificationaction)
- [`removeOutgoingNotification()`](#removeoutgoingnotification)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('notificationActionPerformed', ...)

```typescript
addListener(eventName: 'notificationActionPerformed', listenerFunc: (notificationAction: any) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                              |
| ------------------ | ------------------------------------------------- |
| **`eventName`**    | <code>'notificationActionPerformed'</code>        |
| **`listenerFunc`** | <code>(notificationAction: any) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### outGoingCallNotification(...)

```typescript
outGoingCallNotification(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### updateOutgoingNotification(...)

```typescript
updateOutgoingNotification(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### updateOutgoingNotificationAction(...)

```typescript
updateOutgoingNotificationAction(options: { isSpeaker: boolean; }) => Promise<{ isSpeaker: boolean; }>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ isSpeaker: boolean; }</code> |

**Returns:** <code>Promise&lt;{ isSpeaker: boolean; }&gt;</code>

---

### removeOutgoingNotification()

```typescript
removeOutgoingNotification() => Promise<boolean>
```

**Returns:** <code>Promise&lt;boolean&gt;</code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
