# capacitor-installed-via-altstore

A simple plugin to know if Capacitor.js App was installed via AltStore

It checks URL Types which begins with `altstore-`. If found then `isAltStoreInstallation()` returns `{ isAltStored: true }`.

If you know of Properties which are added in by AltStore or AltServer in `Bundle.main.infoDictionary`, please make an issue!

## Install

```bash
npm install capacitor-installed-via-altstore
npx cap sync
```

## API

<docgen-index>

- [`isAltStoreInstallation()`](#isaltstoreinstallation)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isAltStoreInstallation()

```typescript
isAltStoreInstallation() => Promise<{ isAltStored: boolean; }>
```

**Returns:** <code>Promise&lt;{ isAltStored: boolean; }&gt;</code>

---

</docgen-api>
