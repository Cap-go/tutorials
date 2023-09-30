# @capacitor/authorizenet

Authorize.net Plugin

## Install

```bash
npm install @capacitor/authorizenet
npx cap sync
```

## API

<docgen-index>

- [`getCardToken(...)`](#getcardtoken)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### getCardToken(...)

```typescript
getCardToken(options: CardTokenOptions) => Promise<any>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#cardtokenoptions">CardTokenOptions</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### CardTokenOptions

| Prop            | Type                |
| --------------- | ------------------- |
| **`clientKey`** | <code>string</code> |
| **`loginID`**   | <code>string</code> |
| **`name`**      | <code>string</code> |
| **`number`**    | <code>string</code> |
| **`month`**     | <code>string</code> |
| **`year`**      | <code>string</code> |
| **`code`**      | <code>string</code> |

</docgen-api>
