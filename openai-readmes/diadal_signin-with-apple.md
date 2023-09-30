# @diadal/signin-with-apple

Sign In With Apple for Capacitor 3

## Install

```bash
npm install @diadal/signin-with-apple
npx cap sync
```

```vue
<template>
  <div class="row items-center justify-evenly">
    <button label="Test" @click="LoginApp()" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { uid } from 'quasar'
import { SigninWithApple, AppleSignResponse, AppleSignOptions } from '@diadal/signin-with-apple'

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const options: AppleSignOptions = {
      clientId: 'app.example',
      redirectURI: 'https://example.com/auth/apple/callback',
      scopes: 'email name',
      state: '********',
      nonce: '**********',
    }

    function LoginApp() {
      SigninWithApple.authorize(options)
        .then((result: AppleSignResponse) => {
          console.log('result111', result)
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) => {
          console.log('error111', error)
        })
    }

    return { LoginApp }
  },
})
</script>
```

## API

<docgen-index>

- [`authorize(...)`](#authorize)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### authorize(...)

```typescript
authorize(options?: AppleSignOptions | undefined) => Promise<AppleSignResponse>
```

| Param         | Type                                                          |
| ------------- | ------------------------------------------------------------- |
| **`options`** | <code><a href="#applesignoptions">AppleSignOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#applesignresponse">AppleSignResponse</a>&gt;</code>

---

### Interfaces

#### AppleSignResponse

| Prop           | Type                                                                                                           |
| -------------- | -------------------------------------------------------------------------------------------------------------- |
| **`response`** | <code>{ user: string[]; email: string \| null; state: string \| null; id_token: string; code: string; }</code> |

#### AppleSignOptions

| Prop              | Type                |
| ----------------- | ------------------- |
| **`clientId`**    | <code>string</code> |
| **`redirectURI`** | <code>string</code> |
| **`scopes`**      | <code>string</code> |
| **`state`**       | <code>string</code> |
| **`nonce`**       | <code>string</code> |

</docgen-api>
