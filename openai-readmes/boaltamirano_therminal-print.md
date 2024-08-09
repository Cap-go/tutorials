# thermal-printer

A plugin to print using thermal printers

## Install

```bash
npm install thermal-printer
npx cap sync
```

## API

<docgen-index>

* [`printFormattedText(...)`](#printformattedtext)
* [`requestPermissions(...)`](#requestpermissions)
* [`listPrinters()`](#listprinters)
* [`launchIntent(...)`](#launchintent)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### printFormattedText(...)

```typescript
printFormattedText(data: PrintFormattedText) => Promise<void>
```

| Param      | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| **`data`** | <code><a href="#printformattedtext">PrintFormattedText</a></code> |

--------------------


### requestPermissions(...)

```typescript
requestPermissions(data: PrinterToUse) => Promise<void>
```

| Param      | Type                                                  |
| ---------- | ----------------------------------------------------- |
| **`data`** | <code><a href="#printertouse">PrinterToUse</a></code> |

--------------------


### listPrinters()

```typescript
listPrinters() => Promise<{ printers: any[]; }>
```

**Returns:** <code>Promise&lt;{ printers: any[]; }&gt;</code>

--------------------


### launchIntent(...)

```typescript
launchIntent(data: Intent) => Promise<void>
```

| Param      | Type                                      |
| ---------- | ----------------------------------------- |
| **`data`** | <code><a href="#intent">Intent</a></code> |

--------------------


### Interfaces


#### PrintFormattedText

| Prop       | Type                |
| ---------- | ------------------- |
| **`text`** | <code>string</code> |


#### PrinterToUse

| Prop     | Type                          |
| -------- | ----------------------------- |
| **`id`** | <code>string \| number</code> |


#### Intent

| Prop        | Type                |
| ----------- | ------------------- |
| **`param`** | <code>string</code> |

</docgen-api>
