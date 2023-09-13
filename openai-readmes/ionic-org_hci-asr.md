# hci-asr

capacitor plugin for hci-asr

## Install

```bash
npm install hci-asr
npx cap sync
```

## API

<docgen-index>

- [`checkPermissions()`](#checkpermissions)
- [`requestPermissions()`](#requestpermissions)
- [`sdkInit(...)`](#sdkinit)
- [`createRecorder(...)`](#createrecorder)
- [`startRecord()`](#startrecord)
- [`stopRecord(...)`](#stoprecord)
- [`startRecognize(...)`](#startrecognize)
- [`cancelRecognize()`](#cancelrecognize)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkPermissions()

```typescript
checkPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

---

### requestPermissions()

```typescript
requestPermissions() => Promise<PermissionStatus>
```

**Returns:** <code>Promise&lt;<a href="#permissionstatus">PermissionStatus</a>&gt;</code>

---

### sdkInit(...)

```typescript
sdkInit(options: InitOptions) => Promise<PromiseResult>
```

| Param         | Type                                                |
| ------------- | --------------------------------------------------- |
| **`options`** | <code><a href="#initoptions">InitOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#promiseresult">PromiseResult</a>&gt;</code>

**Since:** 0.0.1

---

### createRecorder(...)

```typescript
createRecorder(second: number) => Promise<PromiseResult>
```

| Param        | Type                |
| ------------ | ------------------- |
| **`second`** | <code>number</code> |

**Returns:** <code>Promise&lt;<a href="#promiseresult">PromiseResult</a>&gt;</code>

---

### startRecord()

```typescript
startRecord() => Promise<{ success: boolean; }>
```

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

---

### stopRecord(...)

```typescript
stopRecord(cancel: boolean) => Promise<PromiseResult>
```

| Param        | Type                 |
| ------------ | -------------------- |
| **`cancel`** | <code>boolean</code> |

**Returns:** <code>Promise&lt;<a href="#promiseresult">PromiseResult</a>&gt;</code>

---

### startRecognize(...)

```typescript
startRecognize(language: RecognizeLanguage) => Promise<PromiseResult>
```

| Param          | Type                                                            |
| -------------- | --------------------------------------------------------------- |
| **`language`** | <code><a href="#recognizelanguage">RecognizeLanguage</a></code> |

**Returns:** <code>Promise&lt;<a href="#promiseresult">PromiseResult</a>&gt;</code>

---

### cancelRecognize()

```typescript
cancelRecognize() => Promise<PromiseResult>
```

**Returns:** <code>Promise&lt;<a href="#promiseresult">PromiseResult</a>&gt;</code>

---

### Interfaces

#### PermissionStatus

| Prop                       | Type                                                        |
| -------------------------- | ----------------------------------------------------------- |
| **`access_network_state`** | <code><a href="#permissionstate">PermissionState</a></code> |
| **`internet`**             | <code><a href="#permissionstate">PermissionState</a></code> |
| **`microphone`**           | <code><a href="#permissionstate">PermissionState</a></code> |
| **`storage`**              | <code><a href="#permissionstate">PermissionState</a></code> |

#### PromiseResult

| Prop          | Type                 |
| ------------- | -------------------- |
| **`success`** | <code>boolean</code> |
| **`message`** | <code>string</code>  |
| **`result`**  | <code>any</code>     |

#### InitOptions

| Prop         | Type                |
| ------------ | ------------------- |
| **`appKey`** | <code>string</code> |
| **`secret`** | <code>string</code> |
| **`sysUrl`** | <code>string</code> |
| **`capUrl`** | <code>string</code> |

### Type Aliases

#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>

### Enums

#### RecognizeLanguage

| Members        | Value                                |
| -------------- | ------------------------------------ |
| **`chinese`**  | <code>'cn_16k_common'</code>         |
| **`shanghai`** | <code>'x-shanghai_16k_common'</code> |

</docgen-api>
