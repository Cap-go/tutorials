# capacitor-nearby

Uses Bluetooth LE to scan and advertise for nearby devices

## Install

```bash
npm install capacitor-nearby
npx cap sync
```

## API

<docgen-index>

- [`initialize(...)`](#initialize)
- [`reset()`](#reset)
- [`publish(...)`](#publish)
- [`unpublish()`](#unpublish)
- [`subscribe(...)`](#subscribe)
- [`unsubscribe()`](#unsubscribe)
- [`status()`](#status)
- [`addListener('onPermissionChanged', ...)`](#addlisteneronpermissionchanged-)
- [`addListener('onBluetoothStateChanged', ...)`](#addlisteneronbluetoothstatechanged-)
- [`addListener('onFound', ...)`](#addlisteneronfound-)
- [`addListener('onLost', ...)`](#addlisteneronlost-)
- [`addListener('onPublishExpired', ...)`](#addlisteneronpublishexpired-)
- [`addListener('onSubscribeExpired', ...)`](#addlisteneronsubscribeexpired-)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: { options?: InitializeOptions; }) => Promise<void>
```

Initializes Bluetooth LE for advertising and scanning of nearby tokens.

| Param         | Type                                                                           |
| ------------- | ------------------------------------------------------------------------------ |
| **`options`** | <code>{ options?: <a href="#initializeoptions">InitializeOptions</a>; }</code> |

**Since:** 1.0.0

---

### reset()

```typescript
reset() => Promise<void>
```

Stops and resets advertising and scanning of nearby tokens.

**Since:** 1.0.0

---

### publish(...)

```typescript
publish(options: { message: Message; options?: PublishOptions; }) => Promise<void>
```

Start publishing nearby token.

| Param         | Type                                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ message: <a href="#message">Message</a>; options?: <a href="#publishoptions">PublishOptions</a>; }</code> |

**Since:** 1.0.0

---

### unpublish()

```typescript
unpublish() => Promise<void>
```

Stop publishing nearby token.

**Since:** 1.0.0

---

### subscribe(...)

```typescript
subscribe(options: { options?: SubscribeOptions; }) => Promise<void>
```

Start listening to nearby tokens.

| Param         | Type                                                                         |
| ------------- | ---------------------------------------------------------------------------- |
| **`options`** | <code>{ options?: <a href="#subscribeoptions">SubscribeOptions</a>; }</code> |

**Since:** 1.0.0

---

### unsubscribe()

```typescript
unsubscribe() => Promise<void>
```

Stop listening to nearby tokens.

**Since:** 1.0.0

---

### status()

```typescript
status() => Promise<Status>
```

Returns status of operations and found tokens.

**Returns:** <code>Promise&lt;<a href="#status">Status</a>&gt;</code>

**Since:** 1.0.0

---

### addListener('onPermissionChanged', ...)

```typescript
addListener(eventName: 'onPermissionChanged', listenerFunc: (permissionGranted: boolean) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when permission is granted or revoked for this app to use Nearby.

| Param              | Type                                                 |
| ------------------ | ---------------------------------------------------- |
| **`eventName`**    | <code>'onPermissionChanged'</code>                   |
| **`listenerFunc`** | <code>(permissionGranted: boolean) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('onBluetoothStateChanged', ...)

```typescript
addListener(eventName: 'onBluetoothStateChanged', listenerFunc: (state: BluetoothState) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when state of Bluetooth has changed.

| Param              | Type                                                                          |
| ------------------ | ----------------------------------------------------------------------------- |
| **`eventName`**    | <code>'onBluetoothStateChanged'</code>                                        |
| **`listenerFunc`** | <code>(state: <a href="#bluetoothstate">BluetoothState</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('onFound', ...)

```typescript
addListener(eventName: 'onFound', listenerFunc: (uuid: UUID, content?: string | undefined) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when messages are found.

| Param              | Type                                                     |
| ------------------ | -------------------------------------------------------- |
| **`eventName`**    | <code>'onFound'</code>                                   |
| **`listenerFunc`** | <code>(uuid: string, content?: string) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('onLost', ...)

```typescript
addListener(eventName: 'onLost', listenerFunc: (uuid: UUID, content?: string | undefined) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when a message is no longer detectable nearby.

| Param              | Type                                                     |
| ------------------ | -------------------------------------------------------- |
| **`eventName`**    | <code>'onLost'</code>                                    |
| **`listenerFunc`** | <code>(uuid: string, content?: string) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('onPublishExpired', ...)

```typescript
addListener(eventName: 'onPublishExpired', listenerFunc: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

The published token has expired.

| Param              | Type                            |
| ------------------ | ------------------------------- |
| **`eventName`**    | <code>'onPublishExpired'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>      |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### addListener('onSubscribeExpired', ...)

```typescript
addListener(eventName: 'onSubscribeExpired', listenerFunc: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

The subscription has expired.

| Param              | Type                              |
| ------------------ | --------------------------------- |
| **`eventName`**    | <code>'onSubscribeExpired'</code> |
| **`listenerFunc`** | <code>() =&gt; void</code>        |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

**Since:** 1.0.0

---

### Interfaces

#### InitializeOptions

| Prop                | Type                                                    | Description                                                                                         | Default                                | Since |
| ------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------- | ----- |
| **`serviceUUID`**   | <code><a href="#uuid">UUID</a></code>                   | Sets the service <a href="#uuid">UUID</a> for the nearby token.                                     |                                        | 1.0.0 |
| **`scanMode`**      | <code><a href="#scanmode">ScanMode</a></code>           | Sets the scan mode. Default: Perform Bluetooth LE scan in balanced power mode.                      | <code>ScanMode.BALANCED</code>         | 1.0.0 |
| **`advertiseMode`** | <code><a href="#advertisemode">AdvertiseMode</a></code> | Sets the advertise mode. Default: Perform Bluetooth LE advertising in low latency, high power mode. | <code>AdvertiseMode.LOW_LATENCY</code> | 1.0.0 |
| **`txPowerLevel`**  | <code><a href="#txpowerlevel">TxPowerLevel</a></code>   | Sets the TX power level for advertising. Default: Advertise using high TX power level.              | <code>TxPowerLevel.HIGH</code>         | 1.0.0 |

#### Message

| Prop          | Type                                  | Description                                  | Since |
| ------------- | ------------------------------------- | -------------------------------------------- | ----- |
| **`uuid`**    | <code><a href="#uuid">UUID</a></code> | The <a href="#uuid">UUID</a> of the message. | 1.0.0 |
| **`content`** | <code>string</code>                   | The raw bytes content of the message.        | 1.0.0 |

#### PublishOptions

| Prop             | Type                                              | Description                                                 | Since |
| ---------------- | ------------------------------------------------- | ----------------------------------------------------------- | ----- |
| **`ttlSeconds`** | <code><a href="#ttlseconds">TTLSeconds</a></code> | Sets the time to live in seconds for the publish operation. | 1.0.0 |

#### SubscribeOptions

| Prop             | Type                                              | Description                                                   | Since |
| ---------------- | ------------------------------------------------- | ------------------------------------------------------------- | ----- |
| **`ttlSeconds`** | <code><a href="#ttlseconds">TTLSeconds</a></code> | Sets the time to live in seconds for the subscribe operation. | 1.0.0 |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

### Type Aliases

#### UUID

<code>string</code>

#### Status

<code>{ isPublishing: boolean; isSubscribing: boolean; uuids: UUID[]; }</code>

### Enums

#### ScanMode

| Members             | Value           |
| ------------------- | --------------- |
| **`LOW_POWER`**     | <code>0</code>  |
| **`BALANCED`**      | <code>1</code>  |
| **`LOW_LATENCY`**   | <code>2</code>  |
| **`OPPORTUNISTIC`** | <code>-1</code> |

#### AdvertiseMode

| Members           | Value          |
| ----------------- | -------------- |
| **`LOW_POWER`**   | <code>0</code> |
| **`BALANCED`**    | <code>1</code> |
| **`LOW_LATENCY`** | <code>2</code> |

#### TxPowerLevel

| Members         | Value          |
| --------------- | -------------- |
| **`ULTRA_LOW`** | <code>0</code> |
| **`LOW`**       | <code>1</code> |
| **`MEDIUM`**    | <code>2</code> |
| **`HIGH`**      | <code>3</code> |

#### TTLSeconds

| Members                    | Value                   |
| -------------------------- | ----------------------- |
| **`TTL_SECONDS_DEFAULT`**  | <code>300</code>        |
| **`TTL_SECONDS_MAX`**      | <code>86400</code>      |
| **`TTL_SECONDS_INFINITE`** | <code>2147483647</code> |

#### BluetoothState

| Members            | Value                       |
| ------------------ | --------------------------- |
| **`UNKNOWN`**      | <code>'unknown'</code>      |
| **`RESETTING`**    | <code>'resetting'</code>    |
| **`UNSUPPORTED`**  | <code>'unsupported'</code>  |
| **`UNAUTHORIZED`** | <code>'unauthorized'</code> |
| **`POWERED_OFF`**  | <code>'poweredOff'</code>   |
| **`POWERED_ON`**   | <code>'poweredOn'</code>    |

</docgen-api>
