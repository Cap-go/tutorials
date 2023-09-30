# lpapi-plugin

LPAPI

## Install

```bash
npm install lpapi-plugin
npx cap sync
```

## API

<docgen-index>

- [`getPairedPrinters()`](#getpairedprinters)
- [`connectPrinter(...)`](#connectprinter)
- [`disconnectPrinter()`](#disconnectprinter)
- [`printText(...)`](#printtext)
- [`printText1DBarcode(...)`](#printtext1dbarcode)
- [`getPrinterState()`](#getprinterstate)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getPairedPrinters()

```typescript
getPairedPrinters() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### connectPrinter(...)

```typescript
connectPrinter(options: PrinterAddress) => Promise<any>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#printeraddress">PrinterAddress</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### disconnectPrinter()

```typescript
disconnectPrinter() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### printText(...)

```typescript
printText(options: PrinterOptions) => Promise<any>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#printeroptions">PrinterOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### printText1DBarcode(...)

```typescript
printText1DBarcode(options: PrinterOptions) => Promise<any>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#printeroptions">PrinterOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### getPrinterState()

```typescript
getPrinterState() => Promise<any>
```

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### PrinterAddress

| Prop          | Type                |
| ------------- | ------------------- |
| **`name`**    | <code>string</code> |
| **`address`** | <code>string</code> |

#### PrinterOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`text`**        | <code>string</code> |
| **`x`**           | <code>number</code> |
| **`y`**           | <code>number</code> |
| **`width`**       | <code>number</code> |
| **`height`**      | <code>number</code> |
| **`textHeight`**  | <code>number</code> |
| **`labelWidth`**  | <code>number</code> |
| **`labelHeight`** | <code>number</code> |

</docgen-api>
