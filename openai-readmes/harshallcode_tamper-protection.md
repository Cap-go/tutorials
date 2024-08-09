# @harshallcode/tamper-protection

Plugin to enable tampering protection by enabling Play Store signature verification

## Install

```bash
npm install @harshallcode/tamper-protection
npx cap sync
```

## API

<docgen-index>

* [`verifySignatures(...)`](#verifysignatures)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### verifySignatures(...)

```typescript
verifySignatures(options: { playStoreMd5: string; }) => Promise<{ isSigned: boolean; }>
```

Verify package signatures

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ playStoreMd5: string; }</code> |

**Returns:** <code>Promise&lt;{ isSigned: boolean; }&gt;</code>

**Since:** 1.0.0

--------------------

</docgen-api>
