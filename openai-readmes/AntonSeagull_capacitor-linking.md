# capacitor-linking

The Capacitor Linking Plugin provides functionality similar to React Native’s Linking module

## Install

```bash
npm install capacitor-linking
npx cap sync
```

## API

<docgen-index>

* [`openURL(...)`](#openurl)
* [`canOpenURL(...)`](#canopenurl)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### openURL(...)

```typescript
openURL(options: { url: string; }) => Promise<void>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

--------------------


### canOpenURL(...)

```typescript
canOpenURL(options: { url: string; }) => Promise<{ canOpen: boolean; }>
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

**Returns:** <code>Promise&lt;{ canOpen: boolean; }&gt;</code>

--------------------

</docgen-api>
