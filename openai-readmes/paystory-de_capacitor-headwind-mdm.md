# Capacitor Headwind MDM

Capacitor wrapper for Headwind MDM

## Install

```bash
npm install @paystory/capacitor-headwind-mdm
npx cap sync
```

## Example

```typescript
import { HeadwindMDM } from '@paystory/capacitor-headwind-mdm'

// Check if HeadwindMDM is available
if (await HeadwindMDM.isConnected()) {
  // Perfect!
}

// Getting a value from server
const value = await HeadwindMDM.get({ attr: 'hello' })

// Getting the device id
const deviceId = await HeadwindMDM.getDeviceId()
```

## API

<docgen-index>

- [`connect()`](#connect)
- [`disconnect()`](#disconnect)
- [`isConnected()`](#isconnected)
- [`getServerHost()`](#getserverhost)
- [`getSecondaryServerHost()`](#getsecondaryserverhost)
- [`getServerPath()`](#getserverpath)
- [`getServerUrl()`](#getserverurl)
- [`getSecondaryServerUrl()`](#getsecondaryserverurl)
- [`getDeviceId()`](#getdeviceid)
- [`getCustom(...)`](#getcustom)
- [`log(...)`](#log)
- [`v(...)`](#v)
- [`d(...)`](#d)
- [`i(...)`](#i)
- [`w(...)`](#w)
- [`e(...)`](#e)
- [`get(...)`](#get)
- [`set(...)`](#set)
- [`apply()`](#apply)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### connect()

```typescript
connect() => any
```

Connect to Headwind MDM service and set the event handler. This method returns true on success and false if Headwind MDM is not running.

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### disconnect()

```typescript
disconnect() => any
```

Disconnect from Headwind MDM

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### isConnected()

```typescript
isConnected() => any
```

Check the connection status. You can use the library functions if this method returns true.

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### getServerHost()

```typescript
getServerHost() => any
```

Get the host name of Headwind MDM server

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### getSecondaryServerHost()

```typescript
getSecondaryServerHost() => any
```

Get the secondary host name of Headwind MDM server

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### getServerPath()

```typescript
getServerPath() => any
```

Get the path of Headwind MDM web panel

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### getServerUrl()

```typescript
getServerUrl() => any
```

Get the URL of Headwind MDM server

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### getSecondaryServerUrl()

```typescript
getSecondaryServerUrl() => any
```

Get the secondary URL of Headwind MDM server

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### getDeviceId()

```typescript
getDeviceId() => any
```

Get the device ID (number)

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### getCustom(...)

```typescript
getCustom(options: { number: number; }) => any
```

Get the custom variable defined on the server (number can be from 1 to 3)

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ number: number; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### log(...)

```typescript
log(options: { level: ErrorLevel; tag: string; message: string; }) => any
```

Sends a log message to the server

| Param         | Type                                                                                        |
| ------------- | ------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ level: <a href="#errorlevel">ErrorLevel</a>; tag: string; message: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### v(...)

```typescript
v(options: { tag: string; message: string; }) => any
```

These methods are similar to android.util.Log. They combine writing to Android internal log (logcat) and sending the log message to the server.

| Param         | Type                                           |
| ------------- | ---------------------------------------------- |
| **`options`** | <code>{ tag: string; message: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### d(...)

```typescript
d(options: { tag: string; message: string; }) => any
```

These methods are similar to android.util.Log. They combine writing to Android internal log (logcat) and sending the log message to the server.

| Param         | Type                                           |
| ------------- | ---------------------------------------------- |
| **`options`** | <code>{ tag: string; message: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### i(...)

```typescript
i(options: { tag: string; message: string; }) => any
```

These methods are similar to android.util.Log. They combine writing to Android internal log (logcat) and sending the log message to the server.

| Param         | Type                                           |
| ------------- | ---------------------------------------------- |
| **`options`** | <code>{ tag: string; message: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### w(...)

```typescript
w(options: { tag: string; message: string; }) => any
```

These methods are similar to android.util.Log. They combine writing to Android internal log (logcat) and sending the log message to the server.

| Param         | Type                                           |
| ------------- | ---------------------------------------------- |
| **`options`** | <code>{ tag: string; message: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### e(...)

```typescript
e(options: { tag: string; message: string; }) => any
```

These methods are similar to android.util.Log. They combine writing to Android internal log (logcat) and sending the log message to the server.

| Param         | Type                                           |
| ------------- | ---------------------------------------------- |
| **`options`** | <code>{ tag: string; message: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### get(...)

```typescript
get(options: { attr: string; defValue?: string; }) => any
```

Gets an attribute defined in “Application settings” tab of the configuration.

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ attr: string; defValue?: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### set(...)

```typescript
set(options: { attr: string; value: string; }) => any
```

Sets an attribute (not yet implemented)

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code>{ attr: string; value: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### apply()

```typescript
apply() => any
```

Forces uploading the attributes to the server (not yet implemented)

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### addListener(...)

```typescript
addListener(eventName: 'onHeadwindMDMConnected', listenerFunc: OnHeadwindMDMConnectedListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the connection is established. In this method, you can retrieve your app settings from the server.

| Param              | Type                                                         |
| ------------------ | ------------------------------------------------------------ |
| **`eventName`**    | <code>"onHeadwindMDMConnected"</code>                        |
| **`listenerFunc`** | <code>(event: OnHeadwindMDMConnectedEvent) =&gt; void</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### addListener(...)

```typescript
addListener(eventName: 'onHeadwindMDMDisconnected', listenerFunc: OnHeadwindMDMDisconnectedListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the connection is interrupted. This method doesn’t require any actions and it is usually followed by onHeadwindMDMConnected() within some seconds.

| Param              | Type                                                            |
| ------------------ | --------------------------------------------------------------- |
| **`eventName`**    | <code>"onHeadwindMDMDisconnected"</code>                        |
| **`listenerFunc`** | <code>(event: OnHeadwindMDMDisconnectedEvent) =&gt; void</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### addListener(...)

```typescript
addListener(eventName: 'onHeadwindMDMConfigChanged', listenerFunc: OnHeadwindMDMConfigChangedListener) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when the application settings were changed on the server. In this method, you need to refresh your application settings.

| Param              | Type                                                             |
| ------------------ | ---------------------------------------------------------------- |
| **`eventName`**    | <code>"onHeadwindMDMConfigChanged"</code>                        |
| **`listenerFunc`** | <code>(event: OnHeadwindMDMConfigChangedEvent) =&gt; void</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### Interfaces

#### ConnectResult

| Prop            | Type                 |
| --------------- | -------------------- |
| **`connected`** | <code>boolean</code> |

#### IsConnectedResult

| Prop              | Type                 |
| ----------------- | -------------------- |
| **`isConnected`** | <code>boolean</code> |

#### GetServerHostResult

| Prop             | Type                |
| ---------------- | ------------------- |
| **`serverHost`** | <code>string</code> |

#### GetSecondaryServerHostResult

| Prop                      | Type                |
| ------------------------- | ------------------- |
| **`secondaryServerHost`** | <code>string</code> |

#### GetServerPathResult

| Prop             | Type                |
| ---------------- | ------------------- |
| **`serverPath`** | <code>string</code> |

#### GetServerUrlResult

| Prop            | Type                |
| --------------- | ------------------- |
| **`serverUrl`** | <code>string</code> |

#### GetSecondaryServerUrlResult

| Prop                     | Type                |
| ------------------------ | ------------------- |
| **`secondaryServerUrl`** | <code>string</code> |

#### GetDeviceIdResult

| Prop           | Type                |
| -------------- | ------------------- |
| **`deviceId`** | <code>string</code> |

#### GetCustomResult

| Prop         | Type                |
| ------------ | ------------------- |
| **`custom`** | <code>string</code> |

#### GetResult

| Prop        | Type                |
| ----------- | ------------------- |
| **`value`** | <code>string</code> |

#### SetResult

| Prop             | Type                 |
| ---------------- | -------------------- |
| **`successful`** | <code>boolean</code> |

#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

### Enums

#### ErrorLevel

| Members       | Value          |
| ------------- | -------------- |
| **`ERROR`**   | <code>1</code> |
| **`WARN`**    | <code>2</code> |
| **`INFO`**    | <code>3</code> |
| **`DEBUG`**   | <code>4</code> |
| **`VERBOSE`** | <code>5</code> |

</docgen-api>
