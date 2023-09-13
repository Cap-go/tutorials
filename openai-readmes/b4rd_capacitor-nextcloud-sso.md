# capacitor-nextcloud-sso

Single sign-on for Nextcloud

## Install

```bash
npm install capacitor-nextcloud-sso
npx cap sync
```

## API

<docgen-index>

- [`chooseAccount()`](#chooseaccount)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### chooseAccount()

```typescript
chooseAccount() => Promise<SingleSignOnAccount>
```

**Returns:** <code>Promise&lt;<a href="#singlesignonaccount">SingleSignOnAccount</a>&gt;</code>

---

### Interfaces

#### SingleSignOnAccount

| Prop         | Type                |
| ------------ | ------------------- |
| **`name`**   | <code>string</code> |
| **`userId`** | <code>string</code> |
| **`token`**  | <code>string</code> |
| **`url`**    | <code>string</code> |
| **`type`**   | <code>string</code> |

</docgen-api>
