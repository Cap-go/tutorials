# capacitor-simple-sim

A capacitor plugin to access device sim cards pertinant informations easily.

## Install

```bash
npm install capacitor-simple-sim
npx cap sync
```

## API

<docgen-index>

- [`getSims()`](#getsims)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getSims()

```typescript
getSims() => Promise<{ result: { id: number; name: string; displayName: string; mnc: number; mcc: number; }[]; }>
```

**Returns:** <code>Promise&lt;{ result: { id: number; name: string; displayName: string; mnc: number; mcc: number; }[]; }&gt;</code>

---

</docgen-api>
