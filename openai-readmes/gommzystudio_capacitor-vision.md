# capacitor-vision

Capacitor plugin for Apple Vision (OCR).
Use scan(base64) to extract text from an image.
It's only available on apple devices.

## Install

```bash
npm install capacitor-vision
npx cap sync
```

## API

<docgen-index>

- [`scan(...)`](#scan)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### scan(...)

```typescript
scan(options: { image: string; }) => Promise<{ text: string[]; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ image: string; }</code> |

**Returns:** <code>Promise&lt;{ text: string[]; }&gt;</code>

---

</docgen-api>
