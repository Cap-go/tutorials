# capacitor-plugin-ihealth

capacitor plugin to integrate ihealth sdk

## Install

```bash
npm install capacitor-plugin-ihealth
npx cap sync
```

## API

<docgen-index>

- [`authoriseiHealthSdk()`](#authoriseihealthsdk)
- [`isBluetoothEnabled()`](#isbluetoothenabled)
- [`initialiseCentralManager()`](#initialisecentralmanager)
- [`scanDiscover(...)`](#scandiscover)
- [`connectDevice(...)`](#connectdevice)
- [`getConnectedDeviceInstance(...)`](#getconnecteddeviceinstance)
- [`disconnectDevice()`](#disconnectdevice)
- [`deleteDeviceData()`](#deletedevicedata)
- [`getDeviceOfflineData()`](#getdeviceofflinedata)
- [`addListener([eventName: 'OnlineDeviceData', listenerFunc: (info: any) => void] | [eventName: 'error', listenerFunc: (info: any) => void] | [eventName: 'deviceDatafound', listenerFunc: (info: any) => void] | [eventName: 'dataNotFound', listenerFunc: (info: any) => void] | [eventName: 'deviceConnectFail', listenerFunc: (info: any) => void] | [eventName: 'deviceDisconnect', listenerFunc: (info: any) => void] | [eventName: 'deviceDiscover', listenerFunc: (info: any) => void] | [eventName: 'deviceConnect', listenerFunc: (info: any) => void], ...)`](#addlistenereventname-onlinedevicedata-listenerfunc-info-any--void--eventname-error-listenerfunc-info-any--void--eventname-devicedatafound-listenerfunc-info-any--void--eventname-datanotfound-listenerfunc-info-any--void--eventname-deviceconnectfail-listenerfunc-info-any--void--eventname-devicedisconnect-listenerfunc-info-any--void--eventname-devicediscover-listenerfunc-info-any--void--eventname-deviceconnect-listenerfunc-info-any--void)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### authoriseiHealthSdk()

```typescript
authoriseiHealthSdk() => Promise<{ value: any; }>
```

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

---

### isBluetoothEnabled()

```typescript
isBluetoothEnabled() => Promise<{ value: any; }>
```

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

---

### initialiseCentralManager()

```typescript
initialiseCentralManager() => Promise<{ value: any; }>
```

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

---

### scanDiscover(...)

```typescript
scanDiscover(options: Object) => Promise<{ value: any; }>
```

| Param         | Type                                      |
| ------------- | ----------------------------------------- |
| **`options`** | <code><a href="#object">Object</a></code> |

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

---

### connectDevice(...)

```typescript
connectDevice(options: Object) => Promise<any>
```

| Param         | Type                                      |
| ------------- | ----------------------------------------- |
| **`options`** | <code><a href="#object">Object</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getConnectedDeviceInstance(...)

```typescript
getConnectedDeviceInstance(options: Object) => Promise<{ value: any; }>
```

| Param         | Type                                      |
| ------------- | ----------------------------------------- |
| **`options`** | <code><a href="#object">Object</a></code> |

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

---

### disconnectDevice()

```typescript
disconnectDevice() => Promise<{ value: any; }>
```

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

---

### deleteDeviceData()

```typescript
deleteDeviceData() => Promise<{ value: any; }>
```

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

---

### getDeviceOfflineData()

```typescript
getDeviceOfflineData() => Promise<{ value: any; }>
```

**Returns:** <code>Promise&lt;{ value: any; }&gt;</code>

---

### addListener([eventName: 'OnlineDeviceData', listenerFunc: (info: any) => void] | [eventName: 'error', listenerFunc: (info: any) => void] | [eventName: 'deviceDatafound', listenerFunc: (info: any) => void] | [eventName: 'dataNotFound', listenerFunc: (info: any) => void] | [eventName: 'deviceConnectFail', listenerFunc: (info: any) => void] | [eventName: 'deviceDisconnect', listenerFunc: (info: any) => void] | [eventName: 'deviceDiscover', listenerFunc: (info: any) => void] | [eventName: 'deviceConnect', listenerFunc: (info: any) => void], ...)

```typescript
addListener(...args: [eventName: "OnlineDeviceData", listenerFunc: (info: any) => void] | [eventName: "error", listenerFunc: (info: any) => void] | [eventName: "deviceDatafound", listenerFunc: (info: any) => void] | [eventName: "dataNotFound", listenerFunc: (info: any) => void] | [eventName: "deviceConnectFail", listenerFunc: (info: any) => void] | [eventName: "deviceDisconnect", listenerFunc: (info: any) => void] | [eventName: "deviceDiscover", listenerFunc: (info: any) => void] | [eventName: "deviceConnect", listenerFunc: (info: any) => void]) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param      | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`args`** | <code>[eventName: 'OnlineDeviceData', listenerFunc: (info: any) =&gt; void] \| [eventName: 'error', listenerFunc: (info: any) =&gt; void] \| [eventName: 'deviceDatafound', listenerFunc: (info: any) =&gt; void] \| [eventName: 'dataNotFound', listenerFunc: (info: any) =&gt; void] \| [eventName: 'deviceConnectFail', listenerFunc: (info: any) =&gt; void] \| [eventName: 'deviceDisconnect', listenerFunc: (info: any) =&gt; void] \| [eventName: 'deviceDiscover', listenerFunc: (info: any) =&gt; void] \| [eventName: 'deviceConnect', listenerFunc: (info: any) =&gt; void]</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### Object

Provides functionality common to all JavaScript objects.

| Prop              | Type                                          | Description                                                                                                                                |
| ----------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **`constructor`** | <code><a href="#function">Function</a></code> | The initial value of <a href="#object">Object</a>.prototype.constructor is the standard built-in <a href="#object">Object</a> constructor. |

| Method                   | Signature                                                 | Description                                                              |
| ------------------------ | --------------------------------------------------------- | ------------------------------------------------------------------------ |
| **toString**             | () =&gt; string                                           | Returns a string representation of an object.                            |
| **toLocaleString**       | () =&gt; string                                           | Returns a date converted to a string using the current locale.           |
| **valueOf**              | () =&gt; <a href="#object">Object</a>                     | Returns the primitive value of the specified object.                     |
| **hasOwnProperty**       | (v: <a href="#propertykey">PropertyKey</a>) =&gt; boolean | Determines whether an object has a property with the specified name.     |
| **isPrototypeOf**        | (v: <a href="#object">Object</a>) =&gt; boolean           | Determines whether an object exists in another object's prototype chain. |
| **propertyIsEnumerable** | (v: <a href="#propertykey">PropertyKey</a>) =&gt; boolean | Determines whether a specified property is enumerable.                   |

#### Function

Creates a new function.

| Prop            | Type                                          |
| --------------- | --------------------------------------------- |
| **`prototype`** | <code>any</code>                              |
| **`length`**    | <code>number</code>                           |
| **`arguments`** | <code>any</code>                              |
| **`caller`**    | <code><a href="#function">Function</a></code> |

| Method       | Signature                                                                            | Description                                                                                                                                                                                                              |
| ------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **apply**    | (this: <a href="#function">Function</a>, thisArg: any, argArray?: any) =&gt; any     | Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.                                                                     |
| **call**     | (this: <a href="#function">Function</a>, thisArg: any, ...argArray: any[]) =&gt; any | Calls a method of an object, substituting another object for the current object.                                                                                                                                         |
| **bind**     | (this: <a href="#function">Function</a>, thisArg: any, ...argArray: any[]) =&gt; any | For a given function, creates a bound function that has the same body as the original function. The this object of the bound function is associated with the specified object, and has the specified initial parameters. |
| **toString** | () =&gt; string                                                                      | Returns a string representation of a function.                                                                                                                                                                           |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

### Type Aliases

#### PropertyKey

<code>string | number | symbol</code>

</docgen-api>
