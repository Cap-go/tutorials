# capacitor-rfid-plugin-ox

rfid read-write

## Install

```bash
npm install capacitor-rfid-plugin-ox
npx cap sync
```

## API

<docgen-index>

* [`isConnected()`](#isconnected)
* [`startScan()`](#startscan)
* [`stopScan()`](#stopscan)
* [`clearData()`](#cleardata)
* [`getScanData()`](#getscandata)
* [`getOutputPower()`](#getoutputpower)
* [`setOutputPower(...)`](#setoutputpower)
* [`getRange()`](#getrange)
* [`setRange(...)`](#setrange)
* [`getQueryMode()`](#getquerymode)
* [`setQueryMode(...)`](#setquerymode)
* [`getReaderType()`](#getreadertype)
* [`getFirmwareVersion()`](#getfirmwareversion)
* [`writeEpc(...)`](#writeepc)
* [`writeEpcString(...)`](#writeepcstring)
* [`startSearch(...)`](#startsearch)
* [`stopSearch()`](#stopsearch)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isConnected()

```typescript
isConnected() => Promise<{ connected: boolean; }>
```

**Returns:** <code>Promise&lt;{ connected: boolean; }&gt;</code>

--------------------


### startScan()

```typescript
startScan() => Promise<void>
```

--------------------


### stopScan()

```typescript
stopScan() => Promise<void>
```

--------------------


### clearData()

```typescript
clearData() => Promise<void>
```

--------------------


### getScanData()

```typescript
getScanData() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

--------------------


### getOutputPower()

```typescript
getOutputPower() => Promise<{ value: number; }>
```

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

--------------------


### setOutputPower(...)

```typescript
setOutputPower(options: { power: number; }) => Promise<{ value: number; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ power: number; }</code> |

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

--------------------


### getRange()

```typescript
getRange() => Promise<{ value: number; }>
```

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

--------------------


### setRange(...)

```typescript
setRange(options: { range: number; }) => Promise<{ value: number; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ range: number; }</code> |

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

--------------------


### getQueryMode()

```typescript
getQueryMode() => Promise<{ value: 0 | 1 | 2 | 3; }>
```

**Returns:** <code>Promise&lt;{ value: 0 | 1 | 2 | 3; }&gt;</code>

--------------------


### setQueryMode(...)

```typescript
setQueryMode(options: { queryMode: 0 | 1 | 2 | 3; }) => Promise<{ value: number; }>
```

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code>{ queryMode: 0 \| 1 \| 2 \| 3; }</code> |

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

--------------------


### getReaderType()

```typescript
getReaderType() => Promise<{ value: number; }>
```

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

--------------------


### getFirmwareVersion()

```typescript
getFirmwareVersion() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------


### writeEpc(...)

```typescript
writeEpc(options: { epc: string; password?: string; }) => Promise<{ value: number; }>
```

| Param         | Type                                             |
| ------------- | ------------------------------------------------ |
| **`options`** | <code>{ epc: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

--------------------


### writeEpcString(...)

```typescript
writeEpcString(options: { epc: string; password?: string; }) => Promise<{ value: number; }>
```

| Param         | Type                                             |
| ------------- | ------------------------------------------------ |
| **`options`** | <code>{ epc: string; password?: string; }</code> |

**Returns:** <code>Promise&lt;{ value: number; }&gt;</code>

--------------------


### startSearch(...)

```typescript
startSearch(options: { searchableTags: string[]; playSound: boolean; }) => Promise<void>
```

| Param         | Type                                                           |
| ------------- | -------------------------------------------------------------- |
| **`options`** | <code>{ searchableTags: string[]; playSound: boolean; }</code> |

--------------------


### stopSearch()

```typescript
stopSearch() => Promise<void>
```

--------------------

</docgen-api>
