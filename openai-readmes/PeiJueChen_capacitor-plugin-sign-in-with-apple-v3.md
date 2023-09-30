# capacitor-plugin-sign-in-with-apple-v3

one sign in with apple plugin on capacitor v3

## Install

```bash
npm install capacitor-plugin-sign-in-with-apple-v3
npx cap sync
```

## USE

```js
import { SignInWithApple } from 'capacitor-plugin-sign-in-with-apple-v3';

async applelogin() {
    const { value } = await SignInWithApple.getCanShowButton();
    console.log("applelogin ~ can show:", value)
    if (value) {
      const r = await SignInWithApple.login()
      console.log("applelogin", r);
    }
  }

```

## API

<docgen-index>

- [`echo(...)`](#echo)
- [`getCanShowButton()`](#getcanshowbutton)
- [`login()`](#login)
- [`checkStateWithUserID(...)`](#checkstatewithuserid)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### getCanShowButton()

```typescript
getCanShowButton() => Promise<CanShowButton>
```

**Returns:** <code>Promise&lt;<a href="#canshowbutton">CanShowButton</a>&gt;</code>

---

### login()

```typescript
login() => Promise<LoginResponse>
```

**Returns:** <code>Promise&lt;<a href="#loginresponse">LoginResponse</a>&gt;</code>

---

### checkStateWithUserID(...)

```typescript
checkStateWithUserID(options: { userId: string; }) => Promise<CheckStateResponse>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ userId: string; }</code> |

**Returns:** <code>Promise&lt;<a href="#checkstateresponse">CheckStateResponse</a>&gt;</code>

---

### Interfaces

#### CanShowButton

| Prop        | Type                 |
| ----------- | -------------------- |
| **`value`** | <code>boolean</code> |

#### LoginResponse

| Prop            | Type                                                            |
| --------------- | --------------------------------------------------------------- |
| **`"state"`**   | <code>number</code>                                             |
| **`"errCode"`** | <code>string</code>                                             |
| **`"errDesc"`** | <code>string</code>                                             |
| **`"info"`**    | <code><a href="#appleuserinfo">AppleUserInfo</a> \| null</code> |

#### AppleUserInfo

| Prop                     | Type                |
| ------------------------ | ------------------- |
| **`"state"`**            | <code>string</code> |
| **`"userIdentifier"`**   | <code>string</code> |
| **`"familyName"`**       | <code>string</code> |
| **`"givenName"`**        | <code>string</code> |
| **`"nickname"`**         | <code>string</code> |
| **`"middleName"`**       | <code>string</code> |
| **`"namePrefix"`**       | <code>string</code> |
| **`"nameSuffix"`**       | <code>string</code> |
| **`"familyName_phone"`** | <code>string</code> |
| **`"givenName_phone"`**  | <code>string</code> |
| **`"nickname_phone"`**   | <code>string</code> |
| **`"namePrefix_phone"`** | <code>string</code> |
| **`"nameSuffix_phone"`** | <code>string</code> |
| **`"middleName_phone"`** | <code>string</code> |
| **`"email"`**            | <code>string</code> |
| **`"identityToken"`**    | <code>string</code> |
| **`"authCode"`**         | <code>string</code> |
| **`"realUserStatus"`**   | <code>string</code> |

#### CheckStateResponse

| Prop            | Type                | Description                                                                                                                                                                                                                 |
| --------------- | ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`"state"`**   | <code>number</code> | ["state":1,"errDesc": "Apple ID Credential is valid"] ["state":-1, "errDesc": "Apple ID Credential revoked, handle unlink"] ["state":-2, "errDesc": "Credential not found, show login UI"] ["state":-3, "errDesc": "Other"] |
| **`"errDesc"`** | <code>string</code> |                                                                                                                                                                                                                             |

</docgen-api>
