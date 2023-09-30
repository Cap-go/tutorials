# capacitor-paxstore-sdk

Communicate with Paxstore SDK, to receive data from POS treminals.

## Install

```bash
npm install capacitor-paxstore-sdk
npx cap sync
```

## API

<docgen-index>

- [`init(...)`](#init)
- [`checkInit()`](#checkinit)
- [`startSale(...)`](#startsale)
- [`startReversal(...)`](#startreversal)
- [`startRefund(...)`](#startrefund)
- [`startPrintTrans(...)`](#startprinttrans)
- [`startPrintTransTotal(...)`](#startprinttranstotal)
- [`findPrinters()`](#findprinters)
- [`setPrinter(...)`](#setprinter)
- [`printBill(...)`](#printbill)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### init(...)

```typescript
init(options: InitOptions) => any
```

Initialize sdk.

| Param         | Type                                                | Description                                                                                  |
| ------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#initoptions">InitOptions</a></code> | : {appKey: string, appSecret: string, packageName: 'com.pax.psp_3rd_app'}` Get from offsite. |

**Returns:** <code>any</code>

**Since:** 1.0.0

---

### checkInit()

```typescript
checkInit() => any
```

Check Initialization.

**Returns:** <code>any</code>

**Since:** 1.0.8

---

### startSale(...)

```typescript
startSale(options: SaleOptions) => any
```

Start Sale
API to start payment

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#saleoptions">SaleOptions</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.9

---

### startReversal(...)

```typescript
startReversal(options: ReversalOptions) => any
```

Start Reversal
API to start reversal

| Param         | Type                                                        | Description      |
| ------------- | ----------------------------------------------------------- | ---------------- |
| **`options`** | <code><a href="#reversaloptions">ReversalOptions</a></code> | : {rrn: string}` |

**Returns:** <code>any</code>

**Since:** 1.0.20

---

### startRefund(...)

```typescript
startRefund(options: RefundOptions) => any
```

Start Refund
API to start reversal

| Param         | Type                                                    | Description                      |
| ------------- | ------------------------------------------------------- | -------------------------------- |
| **`options`** | <code><a href="#refundoptions">RefundOptions</a></code> | : {amount: string, rrn: string}` |

**Returns:** <code>any</code>

**Since:** 1.0.20

---

### startPrintTrans(...)

```typescript
startPrintTrans(options: PrintTransOptions) => any
```

Start Print Transaction
API to start Print Transaction

| Param         | Type                                                            | Description              |
| ------------- | --------------------------------------------------------------- | ------------------------ |
| **`options`** | <code><a href="#printtransoptions">PrintTransOptions</a></code> | : {etVoucherNo: string}` |

**Returns:** <code>any</code>

**Since:** 1.0.20

---

### startPrintTransTotal(...)

```typescript
startPrintTransTotal(options: PrintTransTotalOptions) => any
```

Start Print Transaction Total
API to start Print Transaction Total

| Param         | Type                                                                      | Description              |
| ------------- | ------------------------------------------------------------------------- | ------------------------ |
| **`options`** | <code><a href="#printtranstotaloptions">PrintTransTotalOptions</a></code> | : {etPrintType: string}` |

**Returns:** <code>any</code>

**Since:** 1.0.20

---

### findPrinters()

```typescript
findPrinters() => any
```

Find printers
API to List all connected printers

**Returns:** <code>any</code>

**Since:** 1.0.25

---

### setPrinter(...)

```typescript
setPrinter(options: { address: string; }) => any
```

Select Printer
API to select printer and init it

| Param         | Type                              |
| ------------- | --------------------------------- |
| **`options`** | <code>{ address: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.25

---

### printBill(...)

```typescript
printBill(options: { value: string; }) => any
```

Print Bill
API to Print bill

| Param         | Type                            | Description        |
| ------------- | ------------------------------- | ------------------ |
| **`options`** | <code>{ value: string; }</code> | : {value: string}` |

**Returns:** <code>any</code>

**Since:** 1.0.21

---

### Interfaces

#### InitOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`appKey`**      | <code>string</code> |
| **`appSecret`**   | <code>string</code> |
| **`packageName`** | <code>string</code> |

#### SaleOptions

| Prop         | Type                |
| ------------ | ------------------- |
| **`amount`** | <code>string</code> |

#### ReversalOptions

| Prop      | Type                |
| --------- | ------------------- |
| **`rrn`** | <code>string</code> |

#### RefundOptions

| Prop         | Type                |
| ------------ | ------------------- |
| **`amount`** | <code>string</code> |
| **`rrn`**    | <code>string</code> |

#### PrintTransOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`etVoucherNo`** | <code>string</code> |

#### PrintTransTotalOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`etPrintType`** | <code>string</code> |

#### Printer

| Prop          | Type                |
| ------------- | ------------------- |
| **`address`** | <code>string</code> |
| **`name`**    | <code>string</code> |
| **`class`**   | <code>string</code> |

</docgen-api>
