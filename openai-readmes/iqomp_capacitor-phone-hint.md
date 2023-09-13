# capacitor-phone-hint

Implementation of [Android phone-hint](https://developers.google.com/identity/phone-number-hint/android) feature for capacitor project.

It only support android for now.

## Install

```bash
npm install capacitor-phone-hint
npx cap sync
```

## Example

```js
import { PhoneHint } from 'capacitor-phone-hint'

PhoneHint.requestHint().then((res) => {
  console.log(res.phone)
})
```

## API

<docgen-index>

- [`requestHint()`](#requesthint)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### requestHint()

```typescript
requestHint() => Promise<PhoneNumber>
```

Request the phone number dialog picker

**Returns:** <code>Promise&lt;<a href="#phonenumber">PhoneNumber</a>&gt;</code>

**Since:** 1.0.0

---

### Interfaces

#### PhoneNumber

| Prop        | Type                | Description         | Since |
| ----------- | ------------------- | ------------------- | ----- |
| **`phone`** | <code>string</code> | Picket phone number | 1.0.0 |

</docgen-api>
