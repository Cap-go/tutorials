# capacitor-file-chunk-reader

A capacitor plugin for Android and IOS to upload BIG files in chunks to

- Dropbox
- Azure Blob Storage

## Install

```bash
npm install capacitor-file-chunk-reader
npx cap sync
```

## API

<docgen-index>

* [`readChunk(...)`](#readchunk)
* [`uploadFileChunk(...)`](#uploadfilechunk)
* [`uploadFile(...)`](#uploadfile)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### readChunk(...)

```typescript
readChunk(options: MobileOptions) => Promise<{ data: string; }>
```

| Param         | Type                                                    |
| ------------- | ------------------------------------------------------- |
| **`options`** | <code><a href="#mobileoptions">MobileOptions</a></code> |

**Returns:** <code>Promise&lt;{ data: string; }&gt;</code>

--------------------


### uploadFileChunk(...)

```typescript
uploadFileChunk(options: MobileOptions | WebOptions) => void
```

| Param         | Type                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mobileoptions">MobileOptions</a> \| <a href="#weboptions">WebOptions</a></code> |

--------------------


### uploadFile(...)

```typescript
uploadFile(options: MobileOptions | WebOptions) => void
```

| Param         | Type                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#mobileoptions">MobileOptions</a> \| <a href="#weboptions">WebOptions</a></code> |

--------------------


### Interfaces


#### MobileOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`uri`**         | <code>string</code> |
| **`accessToken`** | <code>string</code> |
| **`targetPath`**  | <code>string</code> |
| **`fileSize`**    | <code>number</code> |


#### WebOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`accessToken`** | <code>string</code> |
| **`file`**        | <code>File</code>   |
| **`targetPath`**  | <code>string</code> |

</docgen-api>
