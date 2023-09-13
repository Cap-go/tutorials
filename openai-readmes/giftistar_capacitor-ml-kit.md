# capacitor-ml-kit

mlkit

## Install

```bash
npm install capacitor-ml-kit
npx cap sync
```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`ocr(...)`](#ocr)
- [`barcode(...)`](#barcode)

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

### ocr(...)

```typescript
ocr(image_uri: { value: string; }) => Promise<{ value: string; }>
```

| Param           | Type                            |
| --------------- | ------------------------------- |
| **`image_uri`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### barcode(...)

```typescript
barcode(image_uri: { value: string; }) => Promise<{ value: string; }>
```

| Param           | Type                            |
| --------------- | ------------------------------- |
| **`image_uri`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

</docgen-api>
