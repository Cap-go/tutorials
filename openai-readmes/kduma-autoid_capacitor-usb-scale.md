# @kduma-autoid/capacitor-usb-scale

Capacitor adapter for cheap USB scales like Dymo M10

## Install

```bash
npm install @kduma-autoid/capacitor-usb-scale
npx cap sync
```

## API

<docgen-index>

- [`enumerateDevices()`](#enumeratedevices)
- [`requestPermission(...)`](#requestpermission)
- [`open(...)`](#open)
- [`stop()`](#stop)
- [`setIncomingWeightDataCallback(...)`](#setincomingweightdatacallback)
- [`clearIncomingWeightDataCallback()`](#clearincomingweightdatacallback)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### enumerateDevices()

```typescript
enumerateDevices() => Promise<{ devices: USBDevice[]; }>
```

Get a list of all connected compatible USB scale devices

**Returns:** <code>Promise&lt;{ devices: USBDevice[]; }&gt;</code>

---

### requestPermission(...)

```typescript
requestPermission(device?: string | undefined) => Promise<{ status: boolean; }>
```

Request permission to access the USB scale device

| Param        | Type                | Description                                                                            |
| ------------ | ------------------- | -------------------------------------------------------------------------------------- |
| **`device`** | <code>string</code> | The device to request permission for. If not specified, the first device will be used. |

**Returns:** <code>Promise&lt;{ status: boolean; }&gt;</code>

---

### open(...)

```typescript
open(device?: string | undefined) => Promise<void>
```

Open the USB scale device for data reading

| Param        | Type                | Description                                                          |
| ------------ | ------------------- | -------------------------------------------------------------------- |
| **`device`** | <code>string</code> | The device to open. If not specified, the first device will be used. |

---

### stop()

```typescript
stop() => Promise<void>
```

Close the USB scale device

---

### setIncomingWeightDataCallback(...)

```typescript
setIncomingWeightDataCallback(callback: (data: ScaleRead) => void) => Promise<CallbackID>
```

Sets a callback to be called when the scale sends data.
If callback is not set, there will bi raised an `usb_scale_read` event.

| Param          | Type                                                               | Description                                          |
| -------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| **`callback`** | <code>(data: <a href="#scaleread">ScaleRead</a>) =&gt; void</code> | The callback to be called when the scale sends data. |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### clearIncomingWeightDataCallback()

```typescript
clearIncomingWeightDataCallback() => Promise<void>
```

Clears the callback set by `setIncomingWeightDataCallback`.

---

### Type Aliases

#### USBDevice

<code>{ id: string, vid: number, pid: number, serial?: string, product: { manufacturer: string, name: string } }</code>

#### ScaleRead

<code>{ data: number[], weight: number, status: <a href="#scalestatus">ScaleStatus</a> }</code>

#### ScaleStatus

<code>"Fault" | "Zero" | "InMotion" | "Stable" | "UnderZero" | "OverWeight" | "NeedCalibration" | "NeedZeroing" | "Unknown"</code>

#### CallbackID

<code>string</code>

</docgen-api>

### Events

#### usb_scale_read

```typescript
addEventListener(type: "usb_scale_read", listener: (ev: ScaleRead) => any, useCapture?: boolean): void;
```

Emitted when the scale sends data, and there is no callback set by `setIncomingWeightDataCallback`.

#### usb_scale_connected

```typescript
addEventListener(type: "usb_scale_connected", listener: (ev: { device: USBDevice }) => any, useCapture?: boolean): void;
```

Emitted when a compatible USB scale device is connected.

#### usb_scale_disconnected

```typescript
addEventListener(type: "usb_scale_disconnected", listener: (ev: { device: USBDevice }) => any, useCapture?: boolean): void;
```

Emitted when a compatible USB scale device is disconnected.
