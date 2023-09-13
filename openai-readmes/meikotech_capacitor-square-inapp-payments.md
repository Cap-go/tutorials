# @MeikoTech/capacitor-square-inapp-payments

Integrate with Square Payments SDK

| Package Version | Capacitor Version |
| --------------- | ----------------- |
| 5.X             | 5.X               |

## Install

Version 5.X is compatible with Capacitor 5.X

```bash
npm install capacitor-square-inapp-payments
npx cap sync
```

IOS
You'll need to add your Square Application ID to your AppDelegate [Square Documentation](https://developer.squareup.com/docs/in-app-payments-sdk/build-on-ios).

ANDROID
Open the plugins AndroidManifest.xml and update the Square Application ID

## Usage

Card details response flow - React.js example

```js
import { CapacitorSquareInappPayments } from '@MeikoTech/capacitor-square-inapp-payments'

const Home = () => {
  const startCardEntry = async () => {
    await CapacitorSquareInappPayments.startCardPayment()
  }

  const startGooglePay = async () => {
    await CapacitorSquareInappPayments.startGooglePay({
      chargeAmount: '5.12',
      currencyCode: 'CAD',
    })
  }

  const startApplePay = async () => {
    await CapacitorSquareInappPayments.startApplePay({
      chargeAmount: '5.12',
      countryCode: 'CA',
      currencyCode: 'CAD',
      merchantId: 'YOUR APPLE MERCHANT ID',
    })
  }
}
```

## API

<docgen-index>

- [`echo(...)`](#echo)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startCardEntry(...)

```javascript
startCardEntry() => any
```

**Returns:** <code>any</code>

---

### startGooglePay(...)

```javascript
startGooglePay({ chargeAmount, currencyCode }) => any
```

| Param         | Type                                                         |
| ------------- | ------------------------------------------------------------ |
| **`options`** | <code>{ chargeAmount: string; currencyCode: string; }</code> |

**Returns:** <code>any</code>

---

### startApplePay(...)

```javascript
startApplePay({ chargeAmount, currencyCode, countryCode, merchantId }) => any
```

| Param         | Type                                                                                                  |
| ------------- | ----------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ chargeAmount: string; currencyCode: string; countryCode: string; merchantId: string; }</code> |

**Returns:** <code>any</code>

---

### addListener(...)

```javascript
addListener(eventName: 'cardDetailsSuccess', (cardDetails) => Promise
```

| Param              | Type                                                                            |
| ------------------ | ------------------------------------------------------------------------------- |
| **`eventName`**    | <code>"cardDetailsSuccess"</code>                                               |
| **`listenerFunc`** | <code>({ paymentMethod, cardNonce, cardBrand, cardLastFour }) =&gt; void</code> |

**Returns:** <code>any</code>

---

### Interfaces

#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |
