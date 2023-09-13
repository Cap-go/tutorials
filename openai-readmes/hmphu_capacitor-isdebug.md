# capacitor-isdebug

Detect if app is run in debug or release mode

## Install

```bash
npm install @guimapkx/capacitor-isdebug
npx cap sync
```

## API

<docgen-index>

- [`getIsDebug()`](#getisdebug)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getIsDebug()

```typescript
getIsDebug() => Promise<{ value: boolean | null; }>
```

Return if app is run on debug or release mode.
Return null if can't detect.

**Returns:** <code>Promise&lt;{ value: boolean | null; }&gt;</code>

---

</docgen-api>
