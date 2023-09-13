# @kokotree-inc/capacitor-plugin-apple-storekit-external-link-account

Capacitor plugin for Apple platforms that provides external link account functionality using StoreKit.

## Install

```bash
npm install @kokotree-inc/capacitor-plugin-apple-storekit-external-link-account
npx cap sync
```

## API

<docgen-index>

- [`canOpen()`](#canopen)
- [`open()`](#open)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Defines the methods that can be used to interact with the external link account functionality using StoreKit on Apple platforms.

### canOpen()

```typescript
canOpen() => Promise<{ value: boolean; }>
```

Determines if the app can open the external link account functionality.
Resolves with `value` === `true` if the functionality is available, `false` otherwise.

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

---

### open()

```typescript
open() => Promise<void>
```

Presents a continuation sheet that enables people to choose whether to open your app’s link to an external website for account creation or management.
Throws an exception if the external link account functionality is not available or if the continuation sheet is not available.

---

</docgen-api>
