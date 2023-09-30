# capacitor-plugin-seon

Capacitor plugin for https://github.com/seontechnologies/seon-android-sdk-public

## Install

```bash
npm install capacitor-plugin-seon
npx cap sync
```

## API

<docgen-index>

- [`getFingerprintBase64(...)`](#getfingerprintbase64)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getFingerprintBase64(...)

```typescript
getFingerprintBase64(options: { sessionId: string; }) => Promise<{ fp: string; }>
```

Get fingerprint in Base64 format.

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ sessionId: string; }</code> |

**Returns:** <code>Promise&lt;{ fp: string; }&gt;</code>

---

</docgen-api>
