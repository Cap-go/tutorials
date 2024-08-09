# uhf-scanner-ci-rx600

Later

## Install

```bash
npm install uhf-scanner-ci-rx600
npx cap sync
```

## API

<docgen-index>

* [`addListener('BroadcastReceiverEvent', ...)`](#addlistenerbroadcastreceiverevent)
* [`addListener('buttonClicked', ...)`](#addlistenerbuttonclicked)
* [`scanInit(...)`](#scaninit)
* [`scanDestroy()`](#scandestroy)
* [`beginScan()`](#beginscan)
* [`stopScan()`](#stopscan)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### addListener('BroadcastReceiverEvent', ...)

```typescript
addListener(eventName: 'BroadcastReceiverEvent', listenerFunc: (barcode: { result: any; }) => void) => PluginListenerHandle
```

| Param              | Type                                                |
| ------------------ | --------------------------------------------------- |
| **`eventName`**    | <code>'BroadcastReceiverEvent'</code>               |
| **`listenerFunc`** | <code>(barcode: { result: any; }) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### addListener('buttonClicked', ...)

```typescript
addListener(eventName: 'buttonClicked', listenerFunc: (keyCode: { result: string; }) => void) => PluginListenerHandle
```

| Param              | Type                                                   |
| ------------------ | ------------------------------------------------------ |
| **`eventName`**    | <code>'buttonClicked'</code>                           |
| **`listenerFunc`** | <code>(keyCode: { result: string; }) =&gt; void</code> |

**Returns:** <code><a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

--------------------


### scanInit(...)

```typescript
scanInit(options: UHFScannerOptions) => Promise<void>
```

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#uhfscanneroptions">UHFScannerOptions</a></code> |

--------------------


### scanDestroy()

```typescript
scanDestroy() => Promise<void>
```

--------------------


### beginScan()

```typescript
beginScan() => Promise<void>
```

--------------------


### stopScan()

```typescript
stopScan() => Promise<void>
```

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |


#### UHFScannerOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`readPower`** | <code>number</code> |
| **`prefix`**    | <code>string</code> |
| **`suffix`**    | <code>string</code> |
| **`start`**     | <code>number</code> |
| **`end`**       | <code>number</code> |

</docgen-api>
