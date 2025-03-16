# capacitor-barcode-scanner-fragment

This plugin appends Android fragment to the Main Activity of CapacitorJs app and allow barcode scanning functionality.

## Install

```bash
npm install capacitor-barcode-scanner-fragment
npx cap sync
```

## API

<docgen-index>

* [`toggleScanner()`](#togglescanner)
* [`startScanner()`](#startscanner)
* [`stopScanner()`](#stopscanner)
* [`isScanning()`](#isscanning)
* [`setIsTorchEnabled(...)`](#setistorchenabled)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### toggleScanner()

```typescript
toggleScanner() => Promise<void>
```

--------------------


### startScanner()

```typescript
startScanner() => Promise<void>
```

--------------------


### stopScanner()

```typescript
stopScanner() => Promise<void>
```

--------------------


### isScanning()

```typescript
isScanning() => Promise<{ isScanning: boolean; }>
```

**Returns:** <code>Promise&lt;{ isScanning: boolean; }&gt;</code>

--------------------


### setIsTorchEnabled(...)

```typescript
setIsTorchEnabled(args: { enabled: boolean; }) => Promise<{ isEnabled: boolean; }>
```

| Param      | Type                               |
| ---------- | ---------------------------------- |
| **`args`** | <code>{ enabled: boolean; }</code> |

**Returns:** <code>Promise&lt;{ isEnabled: boolean; }&gt;</code>

--------------------

</docgen-api>
