# coop-nfc

Plugin for reading card numbers

## Install

```bash
npm install coop-nfc
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`waitNFC()`](#waitnfc)
- [`startNfcListening()`](#startnfclistening)
- [`handleOnNewIntent()`](#handleonnewintent)
- [`startScan()`](#startscan)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### waitNFC()

```typescript
waitNFC() => Promise<void>
```

---

### startNfcListening()

```typescript
startNfcListening() => Promise<void>
```

---

### handleOnNewIntent()

```typescript
handleOnNewIntent() => Promise<void>
```

---

### startScan()

```typescript
startScan() => Promise<ScanResult>
```

**Returns:** <code>Promise&lt;<a href="#scanresult">ScanResult</a>&gt;</code>

---

### Interfaces

#### IScanResultWithContent

| Prop             | Type                | Description                                                                                                                                                                                                         | Since |
| ---------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`hasContent`** | <code>true</code>   | This indicates whether or not the scan resulted in readable content. When stopping the scan with `resolveScan` set to `true`, for example, this parameter is set to `false`, because no actual content was scanned. | 1.0.0 |
| **`content`**    | <code>string</code> | This holds the content of the nfc if available.                                                                                                                                                                     | 1.0.0 |
| **`cardType`**   | <code>string</code> | This holds the card type detected.                                                                                                                                                                                  | 1.0.0 |
| **`cardNumber`** | <code>string</code> | This holds the card number detected.                                                                                                                                                                                | 1.0.0 |
| **`expiryDate`** | <code>string</code> | This holds the expiry date of the card detected.                                                                                                                                                                    | 1.0.0 |
| **`format`**     | <code>string</code> | This returns format of scan result.                                                                                                                                                                                 | 2.1.0 |

#### IScanResultWithoutContent

| Prop             | Type               | Description                                                                                                                                                                                                         | Since |
| ---------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`hasContent`** | <code>false</code> | This indicates whether or not the scan resulted in readable content. When stopping the scan with `resolveScan` set to `true`, for example, this parameter is set to `false`, because no actual content was scanned. | 1.0.0 |
| **`content`**    |                    | This holds the content of the nfc if available.                                                                                                                                                                     | 1.0.0 |
| **`format`**     |                    | This returns format of scan result.                                                                                                                                                                                 | 2.1.0 |

### Type Aliases

#### ScanResult

<code><a href="#iscanresultwithcontent">IScanResultWithContent</a> | <a href="#iscanresultwithoutcontent">IScanResultWithoutContent</a></code>

</docgen-api>
