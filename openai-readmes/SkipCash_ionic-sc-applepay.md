# sc-applepay

SkipCash ApplePay Ionic Plugin; The plugin facilitates SkipCash Apple Pay integration within your ionic app.

## Install

```bash
npm install sc-applepay
npx cap sync ios
```

# Example (capacitor)
LINK -> https://github.com/SkipCash/ionic-sc-applepay/blob/main/example/src/js/capacitor-welcome.js

## API

<docgen-index>

* [`initiatePayment(...)`](#initiatepayment)
* [`isWalletHasCards()`](#iswallethascards)
* [`setupNewCard()`](#setupnewcard)
* [`loadSCPGW(...)`](#loadscpgw)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initiatePayment(...)

```typescript
initiatePayment(options: { paymentData: string; }) => void
```

| Param         | Type                                  |
| ------------- | ------------------------------------- |
| **`options`** | <code>{ paymentData: string; }</code> |

--------------------


### isWalletHasCards()

```typescript
isWalletHasCards() => Promise<{ value: boolean; }>
```

**Returns:** <code>Promise&lt;{ value: boolean; }&gt;</code>

--------------------


### setupNewCard()

```typescript
setupNewCard() => void
```

--------------------


### loadSCPGW(...)

```typescript
loadSCPGW(options: { payUrl: string; paymentTitle: string; returnURL: string; }) => void
```

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code>{ payUrl: string; paymentTitle: string; returnURL: string; }</code> |

--------------------

</docgen-api>
