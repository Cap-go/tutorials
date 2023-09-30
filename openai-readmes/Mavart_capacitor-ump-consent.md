# capacitor-ump-consent

Capacitor Plugin for UMP Consent

## Install

```bash
npm install capacitor-ump-consent
npx cap sync
```

## Usage

```ts
import { UmpConsent } from 'capacitor-ump-consent'

UmpConsent.userMessagingPlatform()
  .then((value) => {
    //show banner
  })
  .catch((error) => {
    // Handle error
  })
```

## API

<docgen-index>

- [`userMessagingPlatform()`](#usermessagingplatform)
- [`forceForm()`](#forceform)
- [`reset()`](#reset)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### userMessagingPlatform()

```typescript
userMessagingPlatform() => Promise<{ status: string; }>
```

**Returns:** <code>Promise&lt;{ status: string; }&gt;</code>

---

### forceForm()

```typescript
forceForm() => Promise<{ status: string; }>
```

**Returns:** <code>Promise&lt;{ status: string; }&gt;</code>

---

### reset()

```typescript
reset() => Promise<void>
```

---

</docgen-api>
