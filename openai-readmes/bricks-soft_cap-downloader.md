# cap-downloader

Download files using Android Download Manager

## Install

```bash
npm install @bricks-soft/cap-downloader
npx cap sync
```

## API

<docgen-index>

- [`download(...)`](#download)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### download(...)

```typescript
download(options: Options) => Promise<{ id?: number; }>
```

| Param         | Type                                        |
| ------------- | ------------------------------------------- |
| **`options`** | <code><a href="#options">Options</a></code> |

**Returns:** <code>Promise&lt;{ id?: number; }&gt;</code>

---

### Interfaces

#### Options

| Prop           | Type                |
| -------------- | ------------------- |
| **`title`**    | <code>string</code> |
| **`url`**      | <code>string</code> |
| **`filename`** | <code>string</code> |
| **`mimetype`** | <code>string</code> |

</docgen-api>
