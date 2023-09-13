# capacitor-launch-navigation

CapacitorJS plugin for opening geo uri in the supported by the device navigation apps.

## Install

```bash
npm install capacitor-launch-navigation
npx cap sync
```

## API

<docgen-index>

- [`openMap(...)`](#openmap)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### openMap(...)

```typescript
openMap(options: OpenMapOptions) => Promise<OpenMapResult>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code><a href="#openmapoptions">OpenMapOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#openmapresult">OpenMapResult</a>&gt;</code>

---

### Type Aliases

#### OpenMapResult

<code>{ uri?: string }</code>

#### OpenMapOptions

<code>{ longitude: string | number latitude: string | number address?: string | number customer?: string | number }</code>

</docgen-api>
