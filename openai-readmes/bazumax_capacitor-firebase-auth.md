# capacitor-firebase-auth

npm init @capacitor/plugin

## Install

```bash
npm install capacitor-firebase-auth
npx cap sync
```

## API

<docgen-index>

- [`getClaims()`](#getclaims)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getClaims()

```typescript
getClaims() => Promise<ClaimsResult>
```

Returns the custom claims (set by developer via Admin SDK).

**Returns:** <code>Promise&lt;<a href="#claimsresult">ClaimsResult</a>&gt;</code>

**Since:** 3.0.0

---

### Interfaces

#### ClaimsResult

| Prop         | Type                                                             |
| ------------ | ---------------------------------------------------------------- |
| **`claims`** | <code><a href="#record">Record</a>&lt;string, boolean&gt;</code> |

### Type Aliases

#### Record

Construct a type with a set of properties K of type T

<code>{
[P in K]: T;
}</code>

</docgen-api>
