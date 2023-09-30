# capacitor-native-downloader

native file downloader

## Install

```bash
npm install capacitor-native-downloader
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`add(...)`](#add)
- [`start(...)`](#start)
- [`pause(...)`](#pause)
- [`resume(...)`](#resume)
- [`cancel(...)`](#cancel)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => any
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>any</code>

---

### add(...)

```typescript
add(options: { params: IAddDownloadRequest; }) => any
```

| Param         | Type                                                                             |
| ------------- | -------------------------------------------------------------------------------- |
| **`options`** | <code>{ params: <a href="#iadddownloadrequest">IAddDownloadRequest</a>; }</code> |

**Returns:** <code>any</code>

---

### start(...)

```typescript
start(options: { params: IStartDownloadRequest; }) => any
```

| Param         | Type                                                                                 |
| ------------- | ------------------------------------------------------------------------------------ |
| **`options`** | <code>{ params: <a href="#istartdownloadrequest">IStartDownloadRequest</a>; }</code> |

**Returns:** <code>any</code>

---

### pause(...)

```typescript
pause(options: { params: IPauseDownloadRequest; }) => any
```

| Param         | Type                                                                                 |
| ------------- | ------------------------------------------------------------------------------------ |
| **`options`** | <code>{ params: <a href="#ipausedownloadrequest">IPauseDownloadRequest</a>; }</code> |

**Returns:** <code>any</code>

---

### resume(...)

```typescript
resume(options: { params: IResumeDownloadRequest; }) => any
```

| Param         | Type                                                                                   |
| ------------- | -------------------------------------------------------------------------------------- |
| **`options`** | <code>{ params: <a href="#iresumedownloadrequest">IResumeDownloadRequest</a>; }</code> |

**Returns:** <code>any</code>

---

### cancel(...)

```typescript
cancel(options: { params: ICancelDownloadRequest; }) => any
```

| Param         | Type                                                                                   |
| ------------- | -------------------------------------------------------------------------------------- |
| **`options`** | <code>{ params: <a href="#icanceldownloadrequest">ICancelDownloadRequest</a>; }</code> |

**Returns:** <code>any</code>

---

### Interfaces

#### IAddDownloadRequest

| Prop              | Type                                    |
| ----------------- | --------------------------------------- |
| **`id`**          | <code>string</code>                     |
| **`url`**         | <code>string</code>                     |
| **`size`**        | <code>number</code>                     |
| **`filePath`**    | <code>string</code>                     |
| **`fileName`**    | <code>string</code>                     |
| **`displayName`** | <code>string</code>                     |
| **`headers`**     | <code>{ authorization: string; }</code> |

#### IAddDownloadResponse

| Prop               | Type                |
| ------------------ | ------------------- |
| **`id`**           | <code>string</code> |
| **`fileName`**     | <code>string</code> |
| **`absolutePath`** | <code>string</code> |

#### IStartDownloadRequest

| Prop     | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |

#### IStartDownloadResponse

| Prop               | Type                |
| ------------------ | ------------------- |
| **`id`**           | <code>string</code> |
| **`filename`**     | <code>string</code> |
| **`absolutePath`** | <code>string</code> |

#### IPauseDownloadRequest

| Prop     | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |

#### IPauseDownloadResponse

| Prop               | Type                |
| ------------------ | ------------------- |
| **`id`**           | <code>string</code> |
| **`filename`**     | <code>string</code> |
| **`absolutePath`** | <code>string</code> |

#### IResumeDownloadRequest

| Prop     | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |

#### IResumeDownloadResponse

| Prop               | Type                |
| ------------------ | ------------------- |
| **`id`**           | <code>string</code> |
| **`filename`**     | <code>string</code> |
| **`absolutePath`** | <code>string</code> |

#### ICancelDownloadRequest

| Prop     | Type                |
| -------- | ------------------- |
| **`id`** | <code>string</code> |

#### ICancelDownloadResponse

| Prop               | Type                |
| ------------------ | ------------------- |
| **`id`**           | <code>string</code> |
| **`filename`**     | <code>string</code> |
| **`absolutePath`** | <code>string</code> |

</docgen-api>
