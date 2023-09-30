# love-alarm-ble

🔌 Bluetooth Low Energy (BLE) Plugin for Love Alarm app

## Install

```bash
npm install love-alarm-ble
npx cap sync
```

## API

<docgen-index>

- [`initialize(...)`](#initialize)
- [`isEnable()`](#isenable)
- [`enable()`](#enable)
- [`startAdvertise()`](#startadvertise)
- [`stopAdvertise()`](#stopadvertise)
- [`startScan(...)`](#startscan)
- [`stopScan()`](#stopscan)
- [`read(...)`](#read)
- [`matches(...)`](#matches)
- [`addListener(string, ...)`](#addlistenerstring)
- [`addListener('onScanResult', ...)`](#addlisteneronscanresult)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(options: InitOptions) => Promise<void>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#initoptions">InitOptions</a></code> |

---

### isEnable()

```typescript
isEnable() => Promise<BluetoothStatus>
```

**Returns:** <code>Promise&lt;<a href="#bluetoothstatus">BluetoothStatus</a>&gt;</code>

---

### enable()

```typescript
enable() => Promise<void>
```

---

### startAdvertise()

```typescript
startAdvertise() => Promise<void>
```

---

### stopAdvertise()

```typescript
stopAdvertise() => Promise<void>
```

---

### startScan(...)

```typescript
startScan(callback: (result: ScanResult) => void) => Promise<void>
```

| Param          | Type                                                                   |
| -------------- | ---------------------------------------------------------------------- |
| **`callback`** | <code>(result: <a href="#scanresult">ScanResult</a>) =&gt; void</code> |

---

### stopScan()

```typescript
stopScan() => Promise<void>
```

---

### read(...)

```typescript
read(options: ReadOptions) => Promise<ReadResult>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#readoptions">ReadOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#readresult">ReadResult</a>&gt;</code>

---

### matches(...)

```typescript
matches(options: MatchingOptions) => Promise<void>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#matchingoptions">MatchingOptions</a></code> |

---

### addListener(string, ...)

```typescript
addListener(eventName: string, listenerFunc: (event: any) => void) => PluginListenerHandle
```

| Param              | Type                                 |
| ------------------ | ------------------------------------ |
| **`eventName`**    | <code>string</code>                  |
| **`listenerFunc`** | <code>(event: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('onScanResult', ...)

```typescript
addListener(eventName: 'onScanResult', listenerFunc: (result: any) => void) => PluginListenerHandle
```

| Param              | Type                                  |
| ------------------ | ------------------------------------- |
| **`eventName`**    | <code>'onScanResult'</code>           |
| **`listenerFunc`** | <code>(result: any) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### InitOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`advertising`** | <code>string</code> |

#### BluetoothStatus

| Prop         | Type                 |
| ------------ | -------------------- |
| **`enable`** | <code>boolean</code> |

#### ScanResult

| Prop          | Type                |
| ------------- | ------------------- |
| **`address`** | <code>any</code>    |
| **`name`**    | <code>string</code> |

#### ReadResult

| Prop          | Type                |
| ------------- | ------------------- |
| **`address`** | <code>string</code> |
| **`name`**    | <code>string</code> |
| **`profile`** | <code>string</code> |

#### ReadOptions

| Prop          | Type                |
| ------------- | ------------------- |
| **`address`** | <code>string</code> |

#### MatchingOptions

| Prop           | Type                  |
| -------------- | --------------------- |
| **`profiles`** | <code>string[]</code> |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

</docgen-api>
