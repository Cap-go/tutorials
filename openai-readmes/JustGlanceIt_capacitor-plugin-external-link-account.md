# External Link Account Capacitor plugin

Implement External Link Account requirements

## Install

```bash
npm install @justglanceit/capacitor-plugin-external-link-account
npx cap sync
```

## API

<docgen-index>

- [`canOpen()`](#canopen)
- [`open()`](#open)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### canOpen()

```typescript
canOpen() => Promise<{ value: boolean; }>
```

Resolves with `value` === `true` if app can open interstitial modal sheet before linking out, `false` otherwise.

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

---

### open()

```typescript
open() => Promise<void>
```

Opens interstitial modal sheet before linking out if available,
throws exception if cannot link outside or modal is not available.

Modal is available for `iOS 16.0` or greater.

---

</docgen-api>
