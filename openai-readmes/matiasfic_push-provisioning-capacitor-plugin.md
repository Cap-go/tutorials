# @matiasfic/push-provisioning-capacitor-plugin

Push provisioning Capacitor plugin for both Google Pay and Apple Pay support

## Install

```bash
npm install @matiasfic/push-provisioning-capacitor-plugin
npx cap sync
```

## API

<docgen-index>

* [`isAvailable()`](#isavailable)
* [`isPaired(...)`](#ispaired)
* [`getCardUrl(...)`](#getcardurl)
* [`startEnroll(...)`](#startenroll)
* [`completeEnroll(...)`](#completeenroll)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### isAvailable()

```typescript
isAvailable() => Promise<{ available: boolean; }>
```

**Returns:** <code>Promise&lt;{ available: boolean; }&gt;</code>

--------------------


### isPaired(...)

```typescript
isPaired(options: { cardLastFour: string; }) => Promise<{ paired: boolean; }>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ cardLastFour: string; }</code> |

**Returns:** <code>Promise&lt;{ paired: boolean; }&gt;</code>

--------------------


### getCardUrl(...)

```typescript
getCardUrl(options: { cardLastFour: string; }) => Promise<{ url: string | null; }>
```

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ cardLastFour: string; }</code> |

**Returns:** <code>Promise&lt;{ url: string | null; }&gt;</code>

--------------------


### startEnroll(...)

```typescript
startEnroll(options: { cardHolder: string; cardLastFour: string; }) => Promise<{ certificates: string[]; nonce: string; nonceSignature: string; }>
```

| Param         | Type                                                       |
| ------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ cardHolder: string; cardLastFour: string; }</code> |

**Returns:** <code>Promise&lt;{ certificates: string[]; nonce: string; nonceSignature: string; }&gt;</code>

--------------------


### completeEnroll(...)

```typescript
completeEnroll(options: { activationData: string; encryptedPassData: string; ephemeralPublicKey: string; }) => Promise<void>
```

| Param         | Type                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ activationData: string; encryptedPassData: string; ephemeralPublicKey: string; }</code> |

--------------------

</docgen-api>
