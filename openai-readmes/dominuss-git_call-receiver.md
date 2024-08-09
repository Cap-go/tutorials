# call-receiver

.

## Install

```bash
npm install call-receiver
npx cap sync
```

## API

<docgen-index>

* [`addListener('telephonyStatusChange', ...)`](#addlistenertelephonystatuschange)
* [`removeAllListeners()`](#removealllisteners)
* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions()`](#requestpermissions)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('telephonyStatusChange', ...)

```typescript
addListener(eventName: 'telephonyStatusChange', listenerFunc: TelephonyStatusChangeListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                    |
| ------------------ | --------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'telephonyStatusChange'</code>                                                    |
| **`listenerFunc`** | <code><a href="#telephonystatuschangelistener">TelephonyStatusChangeListener</a></code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

--------------------


### checkPermissions()

```typescript
checkPermissions() => Promise<{ telephony: PermissionState; }>
```

**Returns:** <code>Promise&lt;{ telephony: <a href="#permissionstate">PermissionState</a>; }&gt;</code>

--------------------


### requestPermissions()

```typescript
requestPermissions() => Promise<{ telephony: PermissionState; }>
```

**Returns:** <code>Promise&lt;{ telephony: <a href="#permissionstate">PermissionState</a>; }&gt;</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### TelephonyStateIdle

| Prop              | Type                                                             |
| ----------------- | ---------------------------------------------------------------- |
| **`phoneNumber`** | <code>string \| null</code>                                      |
| **`state`**       | <code><a href="#telephonystatus">TelephonyStatus.IDLE</a></code> |


#### TelephonyStateRinging

| Prop              | Type                                                                |
| ----------------- | ------------------------------------------------------------------- |
| **`phoneNumber`** | <code>string</code>                                                 |
| **`state`**       | <code><a href="#telephonystatus">TelephonyStatus.RINGING</a></code> |


### Type Aliases


#### TelephonyStatusChangeListener

<code>(status: <a href="#telephonystate">TelephonyState</a>): void</code>


#### TelephonyState

<code><a href="#telephonystateidle">TelephonyStateIdle</a> | <a href="#telephonystateringing">TelephonyStateRinging</a></code>


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>


### Enums


#### TelephonyStatus

| Members       | Value                  |
| ------------- | ---------------------- |
| **`RINGING`** | <code>'ringing'</code> |
| **`IDLE`**    | <code>'idle'</code>    |

</docgen-api>
