# square-reader-capacitor-plugin

Capacitor.js plugin for using the Square Card Reader SDK

## Install

```bash
npm install square-capacitor-plugin
npx cap sync
```

In your iOS project, add the SquareReaderSDK from these docs: https://developer.squareup.com/docs/reader-sdk/build-on-ios

Make sure to add the initialization line to the application delegate: https://developer.squareup.com/docs/reader-sdk/build-on-ios#step-6-add-code-to-initialize-the-reader-sdk

## API

<docgen-index>

- [`pluginTest()`](#plugintest)
- [`isAuthorized()`](#isauthorized)
- [`authorizeReaderSdk(...)`](#authorizereadersdk)
- [`startCheckout(...)`](#startcheckout)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### pluginTest()

```typescript
pluginTest() => Promise<{ value: string; }>
```

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

---

### isAuthorized()

```typescript
isAuthorized() => Promise<{ authorized: boolean; }>
```

**Returns:** <code>Promise&lt;{ authorized: boolean; }&gt;</code>

---

### authorizeReaderSdk(...)

```typescript
authorizeReaderSdk(options: { auth_code: string; }) => Promise<{ success: boolean; }>
```

| Param         | Type                                |
| ------------- | ----------------------------------- |
| **`options`** | <code>{ auth_code: string; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

---

### startCheckout(...)

```typescript
startCheckout(options: { amount: number; }) => Promise<{ success: boolean; }>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ amount: number; }</code> |

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

---

</docgen-api>
