# capacitor-plugin-serialprinter

Printer Plugin for Citaq H10

This plugin is used to print text, barcode, qrcode, image on Citaq H10 printer. It may also work on other printers that support ESC/POS commands.
<br>
<br>
You can specify the port to connect to the printer. If you don't specify the port, the plugin will try to connect to /dev/ttyS1.
<br>
<br>
Please bare in mind that this plugin may be unstable. There are a few unhandled exceptions that may cause the app to crash.
<br>
I will try to fix them in the future. For best stability, please follow the typescript definitions.
<br>
<br>
This will only work on Android. It was not developed for iOS or the web as these platforms do not support serial ports.

## Install

```bash
npm install capacitor-plugin-printer
npx cap sync
```

## API

<docgen-index>

- [`connectPrinter(...)`](#connectprinter)
- [`printText(...)`](#printtext)
- [`setAlignment(...)`](#setalignment)
- [`newLine()`](#newline)
- [`setFontSize(...)`](#setfontsize)
- [`setZoom(...)`](#setzoom)
- [`printGBK(...)`](#printgbk)
- [`printUTF8(...)`](#printutf8)
- [`setCursorPosition(...)`](#setcursorposition)
- [`setBold(...)`](#setbold)
- [`cutPaper()`](#cutpaper)
- [`openCashDrawer()`](#opencashdrawer)
- [`printBarcode(...)`](#printbarcode)
- [`printQRCode(...)`](#printqrcode)
- [`printImage(...)`](#printimage)
- [`disconnectPrinter()`](#disconnectprinter)
- [`addListener('printerStatusChanged', ...)`](#addlistenerprinterstatuschanged)
- [Interfaces](#interfaces)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### connectPrinter(...)

```typescript
connectPrinter(options?: { port: string; } | undefined) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ port: string; }</code> |

---

### printText(...)

```typescript
printText(options: { data: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

---

### setAlignment(...)

```typescript
setAlignment(options: { align: PrinterAlignment | number; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ align: number; }</code> |

---

### newLine()

```typescript
newLine() => Promise<void>
```

---

### setFontSize(...)

```typescript
setFontSize(options: { size: FontSize | number; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ size: number; }</code> |

---

### setZoom(...)

```typescript
setZoom(options: { zoom: number; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ zoom: number; }</code> |

---

### printGBK(...)

```typescript
printGBK(options: { data: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

---

### printUTF8(...)

```typescript
printUTF8(options: { data: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

---

### setCursorPosition(...)

```typescript
setCursorPosition(options: { position: number; }) => Promise<void>
```

| Param         | Type                               |
| ------------- | ---------------------------------- |
| **`options`** | <code>{ position: number; }</code> |

---

### setBold(...)

```typescript
setBold(options: { bold: boolean; }) => Promise<void>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ bold: boolean; }</code> |

---

### cutPaper()

```typescript
cutPaper() => Promise<void>
```

---

### openCashDrawer()

```typescript
openCashDrawer() => Promise<void>
```

---

### printBarcode(...)

```typescript
printBarcode(options: { data: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

---

### printQRCode(...)

```typescript
printQRCode(options: { data: string; size: number | QRCodeSize; }) => Promise<void>
```

| Param         | Type                                         |
| ------------- | -------------------------------------------- |
| **`options`** | <code>{ data: string; size: number; }</code> |

---

### printImage(...)

```typescript
printImage(options: { data: string; }) => Promise<void>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ data: string; }</code> |

---

### disconnectPrinter()

```typescript
disconnectPrinter() => Promise<void>
```

---

### addListener('printerStatusChanged', ...)

```typescript
addListener(eventName: 'printerStatusChanged', listenerFunc: (status: PrinterStatus) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                         |
| ------------------ | ---------------------------------------------------------------------------- |
| **`eventName`**    | <code>'printerStatusChanged'</code>                                          |
| **`listenerFunc`** | <code>(status: <a href="#printerstatus">PrinterStatus</a>) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

#### PrinterStatus

| Prop            | Type                 |
| --------------- | -------------------- |
| **`connected`** | <code>boolean</code> |

### Enums

#### PrinterAlignment

| Members      | Value          |
| ------------ | -------------- |
| **`LEFT`**   | <code>1</code> |
| **`CENTER`** | <code>2</code> |
| **`RIGHT`**  | <code>3</code> |

#### FontSize

| Members      | Value          |
| ------------ | -------------- |
| **`XSMALL`** | <code>1</code> |
| **`SMALL`**  | <code>2</code> |
| **`MEDIUM`** | <code>3</code> |
| **`LARGE`**  | <code>4</code> |

#### QRCodeSize

| Members      | Value            |
| ------------ | ---------------- |
| **`XSMALL`** | <code>100</code> |
| **`SMALL`**  | <code>200</code> |
| **`MEDIUM`** | <code>300</code> |
| **`LARGE`**  | <code>400</code> |
| **`XLARGE`** | <code>500</code> |

</docgen-api>
