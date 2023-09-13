# Capacitor 3 plugin to implement payment function via Apple Pay

The plugin is under development!

## Install

```bash
npm i capacitor-3-apple-pay

npx cap sync ios
```

```ts
import { ApplePay, PaymentRequest } from 'capacitor-3-apple-pay'
```

## Can make payments

```ts
const { isPayment } = await ApplePay.canMakePayments();

// OR

const { isPayment } = await ApplePay.canMakePayments({
  usingNetworks: [ ... ];
  capabilities: [ ... ];
});

if (isPayment) {
    // ... Request payment
}
```

## Make payment request

See docs: https://developer.apple.com/documentation/passkit/pkpaymentrequest

```ts
const paymentRequest: PaymentRequest = {
  // Requiered
  merchantIdentifier: 'com.apple.testing',
  paymentSummaryItems: [
    {
      label: 'order #1001',
      amount: 120.57,
      // type: 'pending' // or default: final
    },
    // ...
  ],

  // Outher
  countryCode: 'US',
  currencyCode: 'USD',

  supportedNetworks: ['mastercard', 'visa', 'amex', 'quicPay', 'chinaUnionPay', 'discover', 'interac', 'privateLabel'],

  merchantCapabilities: ['capability3DS', 'capabilityCredit', 'capabilityDebit', 'capabilityEMV'],

  requiredShippingContactFields: ['emailAddress', 'name', 'phoneNumber', 'phoneticName', 'postalAddress'],

  requiredBillingContactFields: ['emailAddress', 'name', 'phoneNumber', 'phoneticName', 'postalAddress'],

  // supportedCountries: [ ... ],
  // billingContact: PaymentContact,
  // shippingContact: PaymentContact,
}

try {
  // See: https://developer.apple.com/documentation/passkit/pkpaymenttoken
  const { token } = await ApplePay.makePaymentRequest(paymentRequest)

  try {
    // INFO: Check and completion of the payment by your processing center
    await MyPaymentProvider.authorize(token.paymentData)

    ApplePay.completeLastTransaction({ status: 'success' })
  } catch {
    ApplePay.completeLastTransaction({ status: 'error' })
  }
} catch (e) {
  if (e.message === 'canceled') {
    // Payment widget was closed by user
  }
}
```
