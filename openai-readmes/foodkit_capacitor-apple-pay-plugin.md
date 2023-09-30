# capacitor-apple-pay-plugin

A Capacitor plugin for Apple Pay

## Install

```bash
npm install capacitor-apple-pay-plugin
npx cap sync
```

## API

<docgen-index>

- [`canMakePayments()`](#canmakepayments)
- [`canMakePayments(...)`](#canmakepayments)
- [`makePaymentRequest(...)`](#makepaymentrequest)
- [`completeLastTransaction(...)`](#completelasttransaction)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### canMakePayments()

```typescript
canMakePayments() => Promise<{ isPayment: boolean; }>
```

**Returns:** <code>Promise&lt;{ isPayment: boolean; }&gt;</code>

---

### canMakePayments(...)

```typescript
canMakePayments(options: CanMakePaymentsNetworks) => Promise<{ isPayment: boolean; }>
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#canmakepaymentsnetworks">CanMakePaymentsNetworks</a></code> |

**Returns:** <code>Promise&lt;{ isPayment: boolean; }&gt;</code>

---

### makePaymentRequest(...)

```typescript
makePaymentRequest(request: PaymentRequest) => Promise<PaymentResponse>
```

| Param         | Type                                                      |
| ------------- | --------------------------------------------------------- |
| **`request`** | <code><a href="#paymentrequest">PaymentRequest</a></code> |

**Returns:** <code>Promise&lt;<a href="#paymentresponse">PaymentResponse</a>&gt;</code>

---

### completeLastTransaction(...)

```typescript
completeLastTransaction(options: { status: string; }) => Promise<void>
```

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ status: string; }</code> |

---

### Interfaces

#### CanMakePaymentsNetworks

| Prop                | Type                              |
| ------------------- | --------------------------------- |
| **`usingNetworks`** | <code>PaymentNetwork[]</code>     |
| **`capabilities`**  | <code>MerchantCapability[]</code> |

#### PaymentResponse

| Prop        | Type                                                                                                                                                                                                                                                                                                                                                 |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`token`** | <code>{ paymentData?: string; transactionIdentifier: string; paymentMethod: { displayName?: string; secureElementPass?: { deviceAccountNumberSuffix: string; deviceAccountIdentifier: string; primaryAccountIdentifier: string; primaryAccountNumberSuffix: string; devicePassIdentifier?: string; pairedTerminalIdentifier?: string; }; }; }</code> |

#### PaymentRequest

| Prop                                | Type                                                      |
| ----------------------------------- | --------------------------------------------------------- |
| **`merchantIdentifier`**            | <code>string</code>                                       |
| **`countryCode`**                   | <code>string</code>                                       |
| **`currencyCode`**                  | <code>string</code>                                       |
| **`supportedCountries`**            | <code>string[]</code>                                     |
| **`supportedNetworks`**             | <code>PaymentNetwork[]</code>                             |
| **`paymentSummaryItems`**           | <code>PaymentSummaryItem[]</code>                         |
| **`requiredShippingContactFields`** | <code>ContactField[]</code>                               |
| **`requiredBillingContactFields`**  | <code>ContactField[]</code>                               |
| **`merchantCapabilities`**          | <code>MerchantCapability[]</code>                         |
| **`billingContact`**                | <code><a href="#paymentcontact">PaymentContact</a></code> |
| **`shippingContact`**               | <code><a href="#paymentcontact">PaymentContact</a></code> |

#### PaymentSummaryItem

| Prop         | Type                                                                      |
| ------------ | ------------------------------------------------------------------------- |
| **`label`**  | <code>string</code>                                                       |
| **`amount`** | <code>number</code>                                                       |
| **`type`**   | <code><a href="#paymentsummaryitemtype">PaymentSummaryItemType</a></code> |

#### PaymentContact

| Prop                | Type                                                                                                                                                                   |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`emailAddress`**  | <code>string</code>                                                                                                                                                    |
| **`phoneNumber`**   | <code>string</code>                                                                                                                                                    |
| **`name`**          | <code><a href="#personnamecomponents">PersonNameComponents</a></code>                                                                                                  |
| **`postalAddress`** | <code>{ street?: string; city?: string; postalCode?: string; country?: string; isoCountryCode?: string; subAdministrativeArea?: string; subLocality?: string; }</code> |

#### PersonNameComponents

| Prop                         | Type                                                                  |
| ---------------------------- | --------------------------------------------------------------------- |
| **`familyName`**             | <code>string</code>                                                   |
| **`givenName`**              | <code>string</code>                                                   |
| **`namePrefix`**             | <code>string</code>                                                   |
| **`middleName`**             | <code>string</code>                                                   |
| **`nameSuffix`**             | <code>string</code>                                                   |
| **`nickname`**               | <code>string</code>                                                   |
| **`phoneticRepresentation`** | <code><a href="#personnamecomponents">PersonNameComponents</a></code> |

### Type Aliases

#### PaymentNetwork

<code>'masterCard' | 'visa' | 'amex' | 'quicPay' | 'chinaUnionPay' | 'discover' | 'interac' | 'privateLabel'</code>

#### MerchantCapability

<code>'capability3DS' | 'capabilityCredit' | 'capabilityDebit' | 'capabilityEMV'</code>

#### PaymentSummaryItemType

<code>'pending' | 'final'</code>

#### ContactField

<code>'emailAddress' | 'name' | 'phoneNumber' | 'phoneticName' | 'postalAddress'</code>

</docgen-api>
