# @kim5257/capacitor-google-authentication

Google Authentication Capacitor Plugin

## Install

```bash
npm install @kim5257/capacitor-google-authentication
npx cap sync
```

## API

<docgen-index>

- [`initialize(...)`](#initialize)
- [`verifyPhoneNumber(...)`](#verifyphonenumber)
- [`confirmPhoneNumber(...)`](#confirmphonenumber)
- [`createUserWithEmailAndPassword(...)`](#createuserwithemailandpassword)
- [`signInWithEmailAndPassword(...)`](#signinwithemailandpassword)
- [`signInWithGoogle()`](#signinwithgoogle)
- [`signInWithCustomToken(...)`](#signinwithcustomtoken)
- [`getIdToken(...)`](#getidtoken)
- [`getCurrentUser()`](#getcurrentuser)
- [`updateProfile(...)`](#updateprofile)
- [`updateEmail(...)`](#updateemail)
- [`signOut()`](#signout)
- [`echo(...)`](#echo)
- [`addListener('google.auth.phone.verify.completed', ...)`](#addlistenergoogleauthphoneverifycompleted)
- [`addListener('google.auth.phone.code.sent', ...)`](#addlistenergoogleauthphonecodesent)
- [`addListener('google.auth.phone.verify.failed', ...)`](#addlistenergoogleauthphoneverifyfailed)
- [`addListener('google.auth.state.update', ...)`](#addlistenergoogleauthstateupdate)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initialize(...)

```typescript
initialize(config: GoogleAuthenticationOptions) => Promise<{ result: 'success' | 'error'; }>
```

| Param        | Type                                                                                |
| ------------ | ----------------------------------------------------------------------------------- |
| **`config`** | <code><a href="#googleauthenticationoptions">GoogleAuthenticationOptions</a></code> |

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; }&gt;</code>

---

### verifyPhoneNumber(...)

```typescript
verifyPhoneNumber(options: { phone: string; elem?: HTMLElement; }) => Promise<{ result: 'success' | 'error'; }>
```

| Param         | Type                                        |
| ------------- | ------------------------------------------- |
| **`options`** | <code>{ phone: string; elem?: any; }</code> |

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; }&gt;</code>

---

### confirmPhoneNumber(...)

```typescript
confirmPhoneNumber(options: { code: string; }) => Promise<{ result: 'success' | 'error'; }>
```

| Param         | Type                           |
| ------------- | ------------------------------ |
| **`options`** | <code>{ code: string; }</code> |

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; }&gt;</code>

---

### createUserWithEmailAndPassword(...)

```typescript
createUserWithEmailAndPassword(options: { email: string; password: string; }) => Promise<{ result: "success" | "error"; idToken: string; }>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ email: string; password: string; }</code> |

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; idToken: string; }&gt;</code>

---

### signInWithEmailAndPassword(...)

```typescript
signInWithEmailAndPassword(options: { email: string; password: string; }) => Promise<{ result: "success" | "error"; idToken: string; }>
```

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code>{ email: string; password: string; }</code> |

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; idToken: string; }&gt;</code>

---

### signInWithGoogle()

```typescript
signInWithGoogle() => Promise<{ result: "success" | "error"; idToken: string; }>
```

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; idToken: string; }&gt;</code>

---

### signInWithCustomToken(...)

```typescript
signInWithCustomToken({ customToken }: { customToken: string; }) => Promise<{ result: "success" | "error"; idToken: string; }>
```

| Param     | Type                                  |
| --------- | ------------------------------------- |
| **`__0`** | <code>{ customToken: string; }</code> |

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; idToken: string; }&gt;</code>

---

### getIdToken(...)

```typescript
getIdToken(options: { forceRefresh: boolean; }) => Promise<{ result: 'success' | 'error'; idToken: string; }>
```

| Param         | Type                                    |
| ------------- | --------------------------------------- |
| **`options`** | <code>{ forceRefresh: boolean; }</code> |

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; idToken: string; }&gt;</code>

---

### getCurrentUser()

```typescript
getCurrentUser() => Promise<{ result: 'success' | 'error'; user: User | null | undefined; }>
```

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; user: <a href="#user">User</a> | null; }&gt;</code>

---

### updateProfile(...)

```typescript
updateProfile(options: { displayName?: string; photoUri?: string; }) => Promise<{ result: 'success' | 'error'; }>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`options`** | <code>{ displayName?: string; photoUri?: string; }</code> |

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; }&gt;</code>

---

### updateEmail(...)

```typescript
updateEmail(options: { email: string; }) => Promise<{ result: 'success' | 'error'; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ email: string; }</code> |

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; }&gt;</code>

---

### signOut()

```typescript
signOut() => Promise<{ result: 'success' | 'error'; }>
```

**Returns:** <code>Promise&lt;{ result: 'error' | 'success'; }&gt;</code>

---

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### addListener('google.auth.phone.verify.completed', ...)

```typescript
addListener(eventName: 'google.auth.phone.verify.completed', listenerFunc: (resp: { idToken: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                 |
| ------------------ | ---------------------------------------------------- |
| **`eventName`**    | <code>'google.auth.phone.verify.completed'</code>    |
| **`listenerFunc`** | <code>(resp: { idToken: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('google.auth.phone.code.sent', ...)

```typescript
addListener(eventName: 'google.auth.phone.code.sent', listenerFunc: (resp: { verificationId: string | null; resendingToken: string | null; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                                                                |
| ------------------ | --------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'google.auth.phone.code.sent'</code>                                                          |
| **`listenerFunc`** | <code>(resp: { verificationId: string \| null; resendingToken: string \| null; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('google.auth.phone.verify.failed', ...)

```typescript
addListener(eventName: 'google.auth.phone.verify.failed', listenerFunc: (resp: { message: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                 |
| ------------------ | ---------------------------------------------------- |
| **`eventName`**    | <code>'google.auth.phone.verify.failed'</code>       |
| **`listenerFunc`** | <code>(resp: { message: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### addListener('google.auth.state.update', ...)

```typescript
addListener(eventName: 'google.auth.state.update', listenerFunc: (resp: { idToken: string; }) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

| Param              | Type                                                 |
| ------------------ | ---------------------------------------------------- |
| **`eventName`**    | <code>'google.auth.state.update'</code>              |
| **`listenerFunc`** | <code>(resp: { idToken: string; }) =&gt; void</code> |

**Returns:** <code>Promise&lt;<a href="#pluginlistenerhandle">PluginListenerHandle</a>&gt; & <a href="#pluginlistenerhandle">PluginListenerHandle</a></code>

---

### Interfaces

#### GoogleAuthenticationOptions

| Prop                 | Type                |
| -------------------- | ------------------- |
| **`googleClientId`** | <code>string</code> |

#### User

A user account.

| Prop                | Type                                                  | Description                                                                                                                                                      |
| ------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`emailVerified`** | <code>boolean</code>                                  | Whether the email has been verified with {@link sendEmailVerification} and {@link applyActionCode}.                                                              |
| **`isAnonymous`**   | <code>boolean</code>                                  | Whether the user is authenticated using the {@link ProviderId}.ANONYMOUS provider.                                                                               |
| **`metadata`**      | <code><a href="#usermetadata">UserMetadata</a></code> | Additional metadata around user creation and sign-in times.                                                                                                      |
| **`providerData`**  | <code>UserInfo[]</code>                               | Additional per provider such as displayName and profile information.                                                                                             |
| **`refreshToken`**  | <code>string</code>                                   | Refresh token used to reauthenticate the user. Avoid using this directly and prefer {@link <a href="#user">User.getIdToken</a>} to refresh the ID token instead. |
| **`tenantId`**      | <code>string \| null</code>                           | The user's tenant ID.                                                                                                                                            |

| Method               | Signature                                                                                             | Description                                                                                   |
| -------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| **delete**           | () =&gt; Promise&lt;void&gt;                                                                          | Deletes and signs out the user.                                                               |
| **getIdToken**       | (forceRefresh?: boolean \| undefined) =&gt; Promise&lt;string&gt;                                     | Returns a JSON Web Token (JWT) used to identify the user to a Firebase service.               |
| **getIdTokenResult** | (forceRefresh?: boolean \| undefined) =&gt; Promise&lt;<a href="#idtokenresult">IdTokenResult</a>&gt; | Returns a deserialized JSON Web Token (JWT) used to identitfy the user to a Firebase service. |
| **reload**           | () =&gt; Promise&lt;void&gt;                                                                          | Refreshes the user, if signed in.                                                             |
| **toJSON**           | () =&gt; object                                                                                       | Returns a JSON-serializable representation of this object.                                    |

#### IdTokenResult

Interface representing ID token result obtained from {@link <a href="#user">User.getIdTokenResult</a>}.

| Prop                     | Type                                                | Description                                                                                                                |
| ------------------------ | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| **`authTime`**           | <code>string</code>                                 | The authentication time formatted as a UTC string.                                                                         |
| **`expirationTime`**     | <code>string</code>                                 | The ID token expiration time formatted as a UTC string.                                                                    |
| **`issuedAtTime`**       | <code>string</code>                                 | The ID token issuance time formatted as a UTC string.                                                                      |
| **`signInProvider`**     | <code>string \| null</code>                         | The sign-in provider through which the ID token was obtained (anonymous, custom, phone, password, etc).                    |
| **`signInSecondFactor`** | <code>string \| null</code>                         | The type of second factor associated with this session, provided the user was multi-factor authenticated (eg. phone, etc). |
| **`token`**              | <code>string</code>                                 | The Firebase Auth ID token JWT string.                                                                                     |
| **`claims`**             | <code><a href="#parsedtoken">ParsedToken</a></code> | The entire payload claims of the ID token including the standard reserved claims as well as the custom claims.             |

#### ParsedToken

Interface representing a parsed ID token.

| Prop              | Type                                                                                                                                         | Description                                                                         |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| **`'exp'`**       | <code>string</code>                                                                                                                          | Expiration time of the token.                                                       |
| **`'sub'`**       | <code>string</code>                                                                                                                          | UID of the user.                                                                    |
| **`'auth_time'`** | <code>string</code>                                                                                                                          | Time at which authentication was performed.                                         |
| **`'iat'`**       | <code>string</code>                                                                                                                          | Issuance time of the token.                                                         |
| **`'firebase'`**  | <code>{ sign_in_provider?: string; sign_in_second_factor?: string; identities?: <a href="#record">Record</a>&lt;string, string&gt;; }</code> | Firebase specific claims, containing the provider(s) used to authenticate the user. |

#### UserMetadata

Interface representing a user's metadata.

| Prop                 | Type                | Description                   |
| -------------------- | ------------------- | ----------------------------- |
| **`creationTime`**   | <code>string</code> | Time the user was created.    |
| **`lastSignInTime`** | <code>string</code> | Time the user last signed in. |

#### UserInfo

<a href="#user">User</a> profile information, visible only to the Firebase project's apps.

| Prop              | Type                        | Description                                                                               |
| ----------------- | --------------------------- | ----------------------------------------------------------------------------------------- |
| **`displayName`** | <code>string \| null</code> | The display name of the user.                                                             |
| **`email`**       | <code>string \| null</code> | The email of the user.                                                                    |
| **`phoneNumber`** | <code>string \| null</code> | The phone number normalized based on the E.164 standard (e.g. +16505550101) for the user. |
| **`photoURL`**    | <code>string \| null</code> | The profile photo URL of the user.                                                        |
| **`providerId`**  | <code>string</code>         | The provider used to authenticate the user.                                               |
| **`uid`**         | <code>string</code>         | The user's unique ID, scoped to the project.                                              |

#### PluginListenerHandle

| Prop         | Type                                      |
| ------------ | ----------------------------------------- |
| **`remove`** | <code>() =&gt; Promise&lt;void&gt;</code> |

### Type Aliases

#### Record

Construct a type with a set of properties K of type T

<code>{
[P in K]: T;
}</code>

</docgen-api>
