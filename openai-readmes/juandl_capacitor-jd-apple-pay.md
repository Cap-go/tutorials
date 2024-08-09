# capacitor-jd-apple-pay

This plugin serves as a wrapper for Apple Pay, facilitating the generation of an Apple Pay token and its subsequent transmission to the backend. 

Feel free to open new PRs.. :)

## Supported Platforms

- iOS

## Features

- **Wallet Availability Check**: Verify whether the Apple Wallet is available on the device. 
- **Payment Request**: Initiate a payment request through Apple Pay and retrieve the payment token. 
- **Payment Completion**: Finalize the payment process after the token has been successfully sent to the backend. 


## Todo

- [ ] Create tests.
- [ ] Add support for `ApplePayShippingContact`.
- [ ] Add support for `ApplePayShippingMethod`.

## Install

```bash
npm install capacitor-jd-apple-pay
npx cap sync
```

## API

<docgen-index>

* [`canMakePayment()`](#canmakepayment)
* [`completePayment(...)`](#completepayment)
* [`requestPayment(...)`](#requestpayment)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### canMakePayment()

```typescript
canMakePayment() => Promise<{ success: boolean; }>
```

**Returns:** <code>Promise&lt;{ success: boolean; }&gt;</code>

--------------------


### completePayment(...)

```typescript
completePayment(params: ApplePayCompleteRequest) => Promise<void>
```

| Param        | Type                                                                        |
| ------------ | --------------------------------------------------------------------------- |
| **`params`** | <code><a href="#applepaycompleterequest">ApplePayCompleteRequest</a></code> |

--------------------


### requestPayment(...)

```typescript
requestPayment(params: ApplePayPaymentRequest) => Promise<ApplePayResponseRequest>
```

| Param        | Type                                                                      |
| ------------ | ------------------------------------------------------------------------- |
| **`params`** | <code><a href="#applepaypaymentrequest">ApplePayPaymentRequest</a></code> |

**Returns:** <code>Promise&lt;<a href="#applepayresponserequest">ApplePayResponseRequest</a>&gt;</code>

--------------------


### Interfaces


#### ApplePayCompleteRequest

| Prop         | Type                                |
| ------------ | ----------------------------------- |
| **`status`** | <code>'success' \| 'failure'</code> |


#### ApplePayResponseRequest

| Prop                        | Type                |
| --------------------------- | ------------------- |
| **`paymentData`**           | <code>string</code> |
| **`transactionIdentifier`** | <code>string</code> |


#### ApplePayPaymentRequest

| Prop                       | Type                                                          |
| -------------------------- | ------------------------------------------------------------- |
| **`merchantIdentifier`**   | <code>string</code>                                           |
| **`merchantCapabilities`** | <code>ApplePayMerchantCapability[]</code>                     |
| **`supportedNetworks`**    | <code>ApplePaySupportedNetworks[]</code>                      |
| **`total`**                | <code><a href="#applepaylineitem">ApplePayLineItem</a></code> |
| **`countryCode`**          | <code>string</code>                                           |
| **`currencyCode`**         | <code>string</code>                                           |


### Type Aliases


#### ApplePayMerchantCapability

<code>'supports3DS' | 'supportsCredit' | 'supportsDebit'</code>


#### ApplePaySupportedNetworks

<code>'amex' | 'discover' | 'JCB' | 'masterCard' | 'visa'</code>


#### ApplePayLineItem

<code>{ amount: string; label: string; }</code>

</docgen-api>


## Author

- **Juan David** - *Initial work* - [juandl](https://github.com/juandl)
