# @smart-pro/smartzip

Ionic Capacitor plugin for unzip a file.

## Install

```bash
npm install @smart-pro/smartzip
npx cap sync
```

## API

<docgen-index>

- [`unzip(...)`](#unzip)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### unzip(...)

```typescript
unzip(options: UnzipOptions) => Promise<{ result: boolean; }>
```

Unzip a zipPath file to destFolder.
Event: "unzipProgress"
entry, entryNumber, total

| Param         | Type                                                  | Description       |
| ------------- | ----------------------------------------------------- | ----------------- |
| **`options`** | <code><a href="#unzipoptions">UnzipOptions</a></code> | options for unzip |

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

---

### Interfaces

#### UnzipOptions

| Prop             | Type                | Description               |
| ---------------- | ------------------- | ------------------------- |
| **`zipPath`**    | <code>string</code> | Zip file's path           |
| **`destFolder`** | <code>string</code> | Destination folder's path |

</docgen-api>
