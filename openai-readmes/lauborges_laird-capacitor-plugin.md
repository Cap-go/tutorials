# Laird Capacitor Plugin

This plugin is still in development and is not live on NPM yet!

A Capacitor plugin that communicates with bluetooth low energy laird devices.
Supports older devices with the BluetoothAdapter and newer devices uses the BluetoothLeScanner.

## Install

```bash
npm install laird-capacitor-plugin
npx cap sync
```

## Example

```typescript
// Import Laird and Device.
import { Laird, Device } from 'laird-capacitor-plugin'

// Initialize the listener first.
Laird.addListener('deviceFoundEvent', (device) => {
  console.log(device)
})

// Start discovering.
Laird.startDiscovering({ periodically: true })
```

## API

<docgen-index>

- [`startDiscovering(...)`](#startdiscovering)
- [`cancelDiscovering()`](#canceldiscovering)
- [`connectToDevice(...)`](#connecttodevice)
- [`disconnectFromDevice()`](#disconnectfromdevice)
- [`sendDataToDevice(...)`](#senddatatodevice)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [`addListener(...)`](#addlistener)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startDiscovering(...)

```typescript
startDiscovering(options?: { periodically: boolean; } | undefined) => any
```

Start the discovering process for finding bluetooth devices.

| Param         | Type                                    |
| ------------- | --------------------------------------- |
| **`options`** | <code>{ periodically: boolean; }</code> |

**Returns:** <code>any</code>

---

### cancelDiscovering()

```typescript
cancelDiscovering() => any
```

Cancels the discovering process for finding bluetooth devices.

**Returns:** <code>any</code>

---

### connectToDevice(...)

```typescript
connectToDevice(options: { address: string; }) => any
```

Connects to the specified device with the address.

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ address: string; }</code> |

**Returns:** <code>any</code>

---

### disconnectFromDevice()

```typescript
disconnectFromDevice() => any
```

Disconnects the current connected device.

**Returns:** <code>any</code>

---

### sendDataToDevice(...)

```typescript
sendDataToDevice(options: { data: string; }) => any
```

Sends data to the connected device.

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

**Returns:** <code>any</code>

---

### addListener(...)

```typescript
addListener(eventName: 'discoveryStartEvent', callback: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

DiscoveryStartEvent

| Param           | Type                               |
| --------------- | ---------------------------------- |
| **`eventName`** | <code>"discoveryStartEvent"</code> |
| **`callback`**  | <code>() =&gt; void</code>         |

**Returns:** <code>any</code>

---

### addListener(...)

```typescript
addListener(eventName: 'discoveryStopEvent', callback: () => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

DiscoveryStopEvent

| Param           | Type                              |
| --------------- | --------------------------------- |
| **`eventName`** | <code>"discoveryStopEvent"</code> |
| **`callback`**  | <code>() =&gt; void</code>        |

**Returns:** <code>any</code>

---

### addListener(...)

```typescript
addListener(eventName: 'deviceFoundEvent', callback: (device: Device) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

DeviceFoundListener

| Param           | Type                                                           | Description      |
| --------------- | -------------------------------------------------------------- | ---------------- |
| **`eventName`** | <code>"deviceFoundEvent"</code>                                | DeviceFoundEvent |
| **`callback`**  | <code>(device: <a href="#device">Device</a>) =&gt; void</code> | Callback         |

**Returns:** <code>any</code>

---

### addListener(...)

```typescript
addListener(eventName: 'deviceRecvDataEvent', callback: (data: DeviceData) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

DeviceRecvDataListener

| Param           | Type                                                                 | Description         |
| --------------- | -------------------------------------------------------------------- | ------------------- |
| **`eventName`** | <code>"deviceRecvDataEvent"</code>                                   | DeviceRecvDataEvent |
| **`callback`**  | <code>(data: <a href="#devicedata">DeviceData</a>) =&gt; void</code> | Callback            |

**Returns:** <code>any</code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |

#### Device

| Prop          | Type                |
| ------------- | ------------------- |
| **`name`**    | <code>string</code> |
| **`type`**    | <code>number</code> |
| **`address`** | <code>string</code> |
| **`rssi`**    | <code>number</code> |

#### DeviceData

| Prop       | Type                |
| ---------- | ------------------- |
| **`data`** | <code>string</code> |

</docgen-api>
