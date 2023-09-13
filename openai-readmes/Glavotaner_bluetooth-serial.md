# bluetooth-serial

Use classic bluetooth functionality.

How this plugin is different from it's source:

#### Capacitor-based

#### Promise-based

#### Adapted for permission requirements at least from Android 5.1 upto Android 11+

#### Only supports bluetooth classic on Android, no other platform is supported

## Permissions

For things to work, you need to add certain permissions into your AndroidManifest. Refer to this for a detailed description:
https://developer.android.com/guide/topics/connectivity/bluetooth/permissions

The plugin requests/checks permissions in a granular fashion; a call that only requires the CONNECT permission will only check/request that permission. As opposed to every call that requires any permission, requesting all of them.

## Install

```bash
npm install bluetooth-serial
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`connect(...)`](#connect)
- [`connectInsecure(...)`](#connectinsecure)
- [`disconnect()`](#disconnect)
- [`read()`](#read)
- [`write(...)`](#write)
- [`available()`](#available)
- [`isEnabled()`](#isenabled)
- [`isConnected()`](#isconnected)
- [`clear()`](#clear)
- [`enable()`](#enable)
- [`settings()`](#settings)
- [`list()`](#list)
- [`discoverUnpaired()`](#discoverunpaired)
- [`cancelDiscovery()`](#canceldiscovery)
- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions(...)`](#requestpermissions)
- [`addListener('discoverUnpaired', ...)`](#addlistenerdiscoverunpaired)
- [`addListener('connectionChange', ...)`](#addlistenerconnectionchange)
- [`removeAllListeners()`](#removealllisteners)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### connect(...)

```typescript
connect(options: connectionOptions) => Promise<void>
```

Creates a secure connection (https://developer.android.com/reference/android/bluetooth/BluetoothDevice#createRfcommSocketToServiceRecord(java.util.UUID)) to the bluetooth device with the given address.
The plugin only retains one connection at a time; upon connecting to a device, while there is already an existing connection,
the previous device is disconnected. If there is already a running connect call that hasn't resolved, and a new one starts, the original will reject with "Connection interrupted".
Requires CONNECT permission on Android API &gt;= 30

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#connectionoptions">connectionOptions</a></code> |

---

### connectInsecure(...)

```typescript
connectInsecure(options: connectionOptions) => Promise<void>
```

Creates an insecure connection (https://developer.android.com/reference/android/bluetooth/BluetoothDevice#createInsecureRfcommSocketToServiceRecord(java.util.UUID)) to the bluetooth device with the given address.
The plugin only retains one connection at a time; upon connecting to a device, while there is already an existing connection,
the previous device is disconnected. If there is already a running connect call that hasn't resolved, and a new one starts, the original will reject with "Connection interrupted".
Requires CONNECT permission on Android API &gt;= 30

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#connectionoptions">connectionOptions</a></code> |

---

### disconnect()

```typescript
disconnect() => Promise<void>
```

Disconnects from the currently connected device.
This may be called while there is no connected device; in that case, the method will resolve with void.

---

### read()

```typescript
read() => Promise<{ data: string; }>
```

Returns data emitted from the currently connected device.

**Returns:** <code>Promise&lt;{ data: string; }&gt;</code>

---

### write(...)

```typescript
write(options: { data: string; }) => Promise<void>
```

Writes data to the currently connected device.

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

---

### available()

```typescript
available() => Promise<{ available: number; }>
```

Returns the length of the data that can be read by calling read().

**Returns:** <code>Promise&lt;{ available: number; }&gt;</code>

---

### isEnabled()

```typescript
isEnabled() => Promise<{ isEnabled: boolean; }>
```

Returns true or false depending on whether bluetooth is enabled.

**Returns:** <code>Promise&lt;{ isEnabled: boolean; }&gt;</code>

---

### isConnected()

```typescript
isConnected() => Promise<{ isConnected: boolean; }>
```

Returns true or false depending on whether the plugin is currently connected to a device.

**Returns:** <code>Promise&lt;{ isConnected: boolean; }&gt;</code>

---

### clear()

```typescript
clear() => Promise<void>
```

Clears the data readable by calling read().

---

### enable()

```typescript
enable() => Promise<{ isEnabled: boolean; }>
```

Displays the native prompt for enabling bluetooth. Returns true or false depending on whether the user enabled bluetooth.
Requires CONNECT permission on Android API &gt;= 30

**Returns:** <code>Promise&lt;{ isEnabled: boolean; }&gt;</code>

---

### settings()

```typescript
settings() => Promise<void>
```

Opens the native bluetooth settings activity. Resolves immediately upon being called.

---

### list()

```typescript
list() => Promise<devices>
```

Returns a list of bonded <a href="#devices">devices</a>. This includes <a href="#devices">devices</a> that were previously paired with the user's device
Requires CONNECT permission on Android API &gt;= 30

**Returns:** <code>Promise&lt;<a href="#devices">devices</a>&gt;</code>

---

### discoverUnpaired()

```typescript
discoverUnpaired() => Promise<devices>
```

Begins the discovery of nearby <a href="#devices">devices</a> and resolves with them once discovery is finished.
There may only be one discovery process at a time. If another call starts while there is a discovery in progress,
the original call will resolve with "Discovery cancelled".

On Android API &gt;= 30 requires SCAN, CONNECT and FINE_LOCATION <a href="#permissions">permissions</a>.
You can declare in your manifest that scanning for <a href="#devices">devices</a> is not used to derive the user's location. In that case, you may also
add the following into your capacitor.config.ts to indicate that the plugin should not require FINE_LOCATION:

BluetoothSerial: {
neverScanForLocation: true,
}

In that case, only SCAN and CONNECT are required.

On Android 10 and 11, only FINE_LOCATION is required.

On lower versions, only COARSE_LOCATION is required.

The versions of Android that require location <a href="#permissions">permissions</a>, also require location services to be enabled.
So this plugin will reject with "Location services not enabled" if the device requires location for scanning, but it is disabled.

https://developer.android.com/guide/topics/connectivity/bluetooth/permissions

**Returns:** <code>Promise&lt;<a href="#devices">devices</a>&gt;</code>

---

### cancelDiscovery()

```typescript
cancelDiscovery() => Promise<void>
```

Cancels current unpaired <a href="#devices">devices</a> discovery, if there is one in progress. If there is no discovery in progress, resolves with void.
Be sure to note that calling this will reject any existing discoverUnpaired() call which hasn't resolved yet.
Requires SCAN permission on Android API &gt;= 30

---

### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus[]>
```

Takes into account the fact that SCAN and CONNECT <a href="#permissions">permissions</a> only exist on Android 11+; those <a href="#permissions">permissions</a> will always resolve as GRANTED
on <a href="#devices">devices</a> below Android 11.

**Returns:** <code>Promise&lt;PermissionStatus[]&gt;</code>

---

### requestPermissions(...)

```typescript
requestPermissions(options: { permissions: permissions[]; }) => Promise<PermissionStatus[]>
```

Takes into account the fact that SCAN and CONNECT <a href="#permissions">permissions</a> only exist on Android 11+; those <a href="#permissions">permissions</a> will always resolve as GRANTED
on <a href="#devices">devices</a> below Android 11.

| Param         | Type                                                                    |
| ------------- | ----------------------------------------------------------------------- |
| **`options`** | <code>{ <a href="#permissions">permissions</a>: permissions[]; }</code> |

**Returns:** <code>Promise&lt;PermissionStatus[]&gt;</code>

---

### addListener('discoverUnpaired', ...)

```typescript
addListener(event: 'discoverUnpaired', listenerFunc: (event: devices) => any) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                           |
| ------------------ | -------------------------------------------------------------- |
| **`event`**        | <code>'discoverUnpaired'</code>                                |
| **`listenerFunc`** | <code>(event: <a href="#devices">devices</a>) =&gt; any</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('connectionChange', ...)

```typescript
addListener(event: 'connectionChange', listenerFunc: (event: { state: ConnectionState; }) => any) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------ |
| **`event`**        | <code>'connectionChange'</code>                                                            |
| **`listenerFunc`** | <code>(event: { state: <a href="#connectionstate">ConnectionState</a>; }) =&gt; any</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### removeAllListeners()

```typescript
removeAllListeners() => Promise<void>
```

---

### Interfaces

#### BluetoothDevice

The deviceClass property is a decimal representation of a given device's Bluetooth Class of Device which signifies what type of device it is.
Eg. for printers, deviceClass will be 1664.
If you need to know what deviceClass to expect for devices you're working with, you may use this website to get the binary or hexadecimal representation of a given device type: http://bluetooth-pentest.narod.ru/software/bluetooth_class_of_device-service_generator.html
Then you can use a website such as: https://www.rapidtables.com/convert/number/hex-to-decimal.html , to convert the given hexadecimal value into a decimal value, which will ultimately correspond to the deviceClass.

| Prop              | Type                |
| ----------------- | ------------------- |
| **`address`**     | <code>string</code> |
| **`name`**        | <code>string</code> |
| **`deviceClass`** | <code>number</code> |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

### Type Aliases

#### connectionOptions

<code>{ address: string }</code>

#### devices

<code>{ <a href="#devices">devices</a>: BluetoothDevice[] }</code>

#### PermissionStatus

<code>{ [permission in permissions]?: <a href="#permissionstate">PermissionState</a> }</code>

#### permissions

<code>'coarseLocation' | 'fineLocation' | 'scan' | 'connect'</code>

#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

### Enums

#### ConnectionState

| Members          |
| ---------------- |
| **`NONE`**       |
| **`CONNECTING`** |
| **`CONNECTED`**  |

</docgen-api>
