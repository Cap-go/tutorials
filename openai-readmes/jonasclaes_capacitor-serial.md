# capacitor-serial

Serial over OTG

## Install

```bash
npm install capacitor-serial
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`registerUsbAttachedDetachedCallback(...)`](#registerusbattacheddetachedcallback)
- [`devices()`](#devices)
- [`open(...)`](#open)
- [`close()`](#close)
- [`read()`](#read)
- [`write(...)`](#write)
- [`registerReadCallback(...)`](#registerreadcallback)
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

### registerUsbAttachedDetachedCallback(...)

```typescript
registerUsbAttachedDetachedCallback(callback: UsbAttachedDetachedCallback) => Promise<CallbackID>
```

| Param          | Type                                                                                |
| -------------- | ----------------------------------------------------------------------------------- |
| **`callback`** | <code><a href="#usbattacheddetachedcallback">UsbAttachedDetachedCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### devices()

```typescript
devices() => Promise<SerialResponse<any>>
```

**Returns:** <code>Promise&lt;<a href="#serialresponse">SerialResponse</a>&lt;any&gt;&gt;</code>

---

### open(...)

```typescript
open(options: SerialOptions) => Promise<SerialResponse<any>>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#serialoptions">SerialOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#serialresponse">SerialResponse</a>&lt;any&gt;&gt;</code>

---

### close()

```typescript
close() => Promise<SerialResponse<any>>
```

**Returns:** <code>Promise&lt;<a href="#serialresponse">SerialResponse</a>&lt;any&gt;&gt;</code>

---

### read()

```typescript
read() => Promise<SerialResponse<any>>
```

**Returns:** <code>Promise&lt;<a href="#serialresponse">SerialResponse</a>&lt;any&gt;&gt;</code>

---

### write(...)

```typescript
write(data: SerialWriteOptions) => Promise<SerialResponse<any>>
```

| Param      | Type                                                              |
| ---------- | ----------------------------------------------------------------- |
| **`data`** | <code><a href="#serialwriteoptions">SerialWriteOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#serialresponse">SerialResponse</a>&lt;any&gt;&gt;</code>

---

### registerReadCallback(...)

```typescript
registerReadCallback(callback: ReadCallback) => Promise<CallbackID>
```

| Param          | Type                                                  |
| -------------- | ----------------------------------------------------- |
| **`callback`** | <code><a href="#readcallback">ReadCallback</a></code> |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### Interfaces

#### SerialResponse

| Prop          | Type                                                |
| ------------- | --------------------------------------------------- |
| **`success`** | <code>boolean</code>                                |
| **`error`**   | <code><a href="#serialerror">SerialError</a></code> |
| **`data`**    | <code>T</code>                                      |

#### SerialError

| Prop          | Type                |
| ------------- | ------------------- |
| **`message`** | <code>string</code> |
| **`cause`**   | <code>string</code> |

#### SerialOptions

| Prop               | Type                 |
| ------------------ | -------------------- |
| **`deviceId`**     | <code>number</code>  |
| **`portNum`**      | <code>number</code>  |
| **`baudRate`**     | <code>number</code>  |
| **`dataBits`**     | <code>number</code>  |
| **`stopBits`**     | <code>number</code>  |
| **`parity`**       | <code>number</code>  |
| **`dtr`**          | <code>boolean</code> |
| **`rts`**          | <code>boolean</code> |
| **`sleepOnPause`** | <code>boolean</code> |

#### SerialWriteOptions

| Prop       | Type                |
| ---------- | ------------------- |
| **`data`** | <code>string</code> |

### Type Aliases

#### UsbAttachedDetachedCallback

<code>(data: <a href="#serialresponse">SerialResponse</a>&lt;any&gt;): void</code>

#### CallbackID

<code>string</code>

#### ReadCallback

<code>(data: <a href="#serialresponse">SerialResponse</a>&lt;any&gt;): void</code>

</docgen-api>
