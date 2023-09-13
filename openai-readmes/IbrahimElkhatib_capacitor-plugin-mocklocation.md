# capacitor-plugin-mocklocation

This plugin detects mock locations in Android

This plugin get mock location in Android api < 18 AND api >= 18

## Supported Platforms

- Android

## Install

```bash
npm install capacitor-plugin-mocklocation
npx cap sync
```

## Add permissions

In android AndroidManifest.xml please add:

```bash
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
```

## API

<docgen-index>

- [`check(...)`](#check)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### check(...)

```typescript
check(options?: { whiteList: string[]; } | undefined) => Promise<{ mockDetected: boolean; mocks?: { name: string; package: string; }[]; }>
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ whiteList: string[]; }</code> |

**Returns:** <code>Promise&lt;{ mockDetected: boolean; mocks?: { name: string; package: string; }[]; }&gt;</code>

---

</docgen-api>
