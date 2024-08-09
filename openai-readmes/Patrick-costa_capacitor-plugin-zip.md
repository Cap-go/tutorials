# capacitor-file-zip

Generate Zip File

## Install

```bash
npm install capacitor-file-zip
npx cap sync
```

## API

<docgen-index>

* [`zip(...)`](#zip)
* [`unZip(...)`](#unzip)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### zip(...)

```typescript
zip(options: ZipOptions) => void
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#zipoptions">ZipOptions</a></code> |

--------------------


### unZip(...)

```typescript
unZip(options: UnZipOptions) => void
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code><a href="#unzipoptions">UnZipOptions</a></code> |

--------------------


### Interfaces


#### ZipOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`source`**      | <code>string</code> |
| **`destination`** | <code>string</code> |


#### UnZipOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`source`**      | <code>string</code> |
| **`destination`** | <code>string</code> |

</docgen-api>
