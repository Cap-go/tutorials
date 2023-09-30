# pin-check

A capicator plugin to check on iOS / Android devices if the password pin is enabled or not on the mobile device.

## Install

```bash
npm install @creativecookie/pin-check
npx cap sync
```

## USAGE IN IONIC 5/6

1. After installing include in the module page that you want to use with the import below
2. import { PinCheck } from '@creativecookie/pin-check';
3. in your function, (await PinCheck.pinCheck()).value will return either true or false

## API

<docgen-index>

- [`pinCheck()`](#pincheck)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### pinCheck()

```typescript
pinCheck() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

</docgen-api>
