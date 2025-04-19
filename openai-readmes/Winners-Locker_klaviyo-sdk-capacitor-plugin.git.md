# klaviyo-sdk-capacitor-plugin

Capacitor Plugin for Klaviyo SDK

## Install

```bash
npm install klaviyo-sdk-capacitor-plugin
npx cap sync
```

## API

<docgen-index>

* [`initSDK(...)`](#initsdk)
* [`setUser(...)`](#setuser)
* [`requestPushPermission()`](#requestpushpermission)
* [`setPushToken(...)`](#setpushtoken)
* [`resetProfile()`](#resetprofile)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initSDK(...)

```typescript
initSDK(options: { klaviyoKey: string; }) => Promise<{ result: boolean; }>
```

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ klaviyoKey: string; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

--------------------


### setUser(...)

```typescript
setUser(options: { email: string; firstName: string; lastName: string; }) => Promise<{ result: boolean; }>
```

| Param         | Type                                                                 |
| ------------- | -------------------------------------------------------------------- |
| **`options`** | <code>{ email: string; firstName: string; lastName: string; }</code> |

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

--------------------


### requestPushPermission()

```typescript
requestPushPermission() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

--------------------


### setPushToken(...)

```typescript
setPushToken(options: { token: string; }) => Promise<{ token: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ token: string; }</code> |

**Returns:** <code>Promise&lt;{ token: string; }&gt;</code>

--------------------


### resetProfile()

```typescript
resetProfile() => Promise<{ result: boolean; }>
```

**Returns:** <code>Promise&lt;{ result: boolean; }&gt;</code>

--------------------

</docgen-api>
