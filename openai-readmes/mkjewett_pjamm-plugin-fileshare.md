# pjamm-plugin-fileshare

PJAMM FileShare Plugin

## Install

```bash
npm install pjamm-plugin-fileshare
npx cap sync
```

## API

<docgen-index>

- [`downloadFile(...)`](#downloadfile)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### downloadFile(...)

```typescript
downloadFile(options: DownloadOptions) => Promise<any>
```

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#downloadoptions">DownloadOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### DownloadOptions

| Prop           | Type                |
| -------------- | ------------------- |
| **`data`**     | <code>string</code> |
| **`filename`** | <code>string</code> |

</docgen-api>
