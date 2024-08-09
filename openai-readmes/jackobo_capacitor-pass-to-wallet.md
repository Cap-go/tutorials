# @jackobo/capacitor-pass-to-wallet

Capacitor plugin for adding digital passes to Apple and Google wallets

## Install

```bash
npm install @jackobo/capacitor-pass-to-wallet
npx cap sync
```

## API

<docgen-index>

* [`addToWallet(...)`](#addtowallet)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

Capacitor plugin for adding passes to Google & Apple wallets

### addToWallet(...)

```typescript
addToWallet(options: IAddToWalletOptions) => Promise<void>
```

Adds one or more passes to the wallet

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#iaddtowalletoptions">IAddToWalletOptions</a></code> |

--------------------


### Interfaces


#### IAddToWalletOptions

addToWallet method parameters

| Prop                      | Type                  |
| ------------------------- | --------------------- |
| **`base64PassesContent`** | <code>string[]</code> |

</docgen-api>
