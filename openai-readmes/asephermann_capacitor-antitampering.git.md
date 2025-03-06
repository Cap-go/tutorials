# capacitor-antitampering

Capacitor plugin to verifies the integrity of the static assets of your application, cheking if the files have changed since the original build.

## Install

```bash
npm install capacitor-antitampering
npx cap sync
```

## API

<docgen-index>

* [`verify()`](#verify)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### verify()

```typescript
verify() => Promise<AntiTamperingResult>
```

**Returns:** <code>Promise&lt;<a href="#antitamperingresult">AntiTamperingResult</a>&gt;</code>

--------------------


### Interfaces


#### AntiTamperingResult

| Prop              | Type                |
| ----------------- | ------------------- |
| **`status`**      | <code>string</code> |
| **`assetsCount`** | <code>number</code> |
| **`messages`**    | <code>string</code> |

</docgen-api>
