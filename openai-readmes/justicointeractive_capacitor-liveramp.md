# capacitor-liveramp

LiveRamp ATS and eCST

## Install

```bash
npm install capacitor-liveramp
npx cap sync
```

## API

<docgen-index>

- [`setHasConsentForNoLegislation(...)`](#sethasconsentfornolegislation)
- [`initialize(...)`](#initialize)
- [`getEnvelope(...)`](#getenvelope)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setHasConsentForNoLegislation(...)

```typescript
setHasConsentForNoLegislation(options: { hasConsentForNoLegislation: boolean; }) => Promise<void>
```

| Param         | Type                                                  |
| ------------- | ----------------------------------------------------- |
| **`options`** | <code>{ hasConsentForNoLegislation: boolean; }</code> |

---

### initialize(...)

```typescript
initialize(options: { appId: string; isTestMode: boolean; }) => Promise<void>
```

| Param         | Type                                                 |
| ------------- | ---------------------------------------------------- |
| **`options`** | <code>{ appId: string; isTestMode: boolean; }</code> |

---

### getEnvelope(...)

```typescript
getEnvelope(options: { type: string; identifier: string; }) => Promise<{ envelope: string; }>
```

| Param         | Type                                               |
| ------------- | -------------------------------------------------- |
| **`options`** | <code>{ type: string; identifier: string; }</code> |

**Returns:** <code>Promise&lt;{ envelope: string; }&gt;</code>

---

</docgen-api>
