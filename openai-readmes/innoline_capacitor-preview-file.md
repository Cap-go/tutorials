# @innoline/capacitor-preview-file

Preview any file

## Install

```bash
npm install @innoline/capacitor-preview-file
npx cap sync
```

## API

<docgen-index>

- [`previewByPath(...)`](#previewbypath)
- [`previewBase64(...)`](#previewbase64)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### previewByPath(...)

```typescript
previewByPath(options: { path: string; mimeType: string; name: string; }) => Promise<void>
```

| Param         | Type                                                           |
| ------------- | -------------------------------------------------------------- |
| **`options`** | <code>{ path: string; mimeType: string; name: string; }</code> |

---

### previewBase64(...)

```typescript
previewBase64(options: { base64: string; mimeType: string; name: string; }) => Promise<void>
```

| Param         | Type                                                             |
| ------------- | ---------------------------------------------------------------- |
| **`options`** | <code>{ base64: string; mimeType: string; name: string; }</code> |

---

</docgen-api>
