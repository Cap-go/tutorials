# paytabs-ionic-native

![Version](https://img.shields.io/badge/PayTabs%20Ionic%20Native-v1.0.0-green)

PayTabs Ionic Native library is a wrapper for the native PayTabs Android and iOS SDKs, It helps you integrate with PayTabs seamlessly.

Library Support:

- [x] iOS
- [x] Android

## Install

```bash
npm install paytabs-ionic-native@latest --save --force
npx cap sync
```

### Follow the below steps to complete the installation

- iOS
  - Navigate to the iOS folder and run the following command:
  ```
  pod install
  ```

## Usage

- Import

```
import 'paytabs-ionic-native';
import { PaymentSDKBillingDetails, PaymentSDKShippingDetails, PaymentSDKConfiguration, PayTabsIonic } from 'paytabs-ionic-native';
```

### Pay with Card

1. Configure the billing & shipping info, the shipping info is optional

```javascript

  let billingDetails: PaymentSDKBillingDetails = {
          name: 'John Smith',
          email: 'email@domain.com',
          phone: '+201111111111',
          addressLine: 'Address line',
          city: 'Dubai',
          state: 'Dubai',
          countryCode: 'AE',
          zip: '1234'
  };

  const shippingDetails: PaymentSDKShippingDetails = {
          name: 'John Smith',
          email: 'email@domain.com',
          phone: '+201111111111',
          addressLine: 'Address line',
          city: 'Dubai',
          state: 'Dubai',
          countryCode: 'AE',
          zip: '1234'
  };
```

2. Create object of `PaymentSDKConfiguration` and fill it with your credentials and payment details.

```javascript
  let configuration: PaymentSDKConfiguration = {
          profileID: '*profile ID*',
          serverKey: '*server key*',
          clientKey: '*client key*',
          cartID: '12345',
          currency: 'USD',
          cartDescription: 'Flowers',
          merchantCountryCode: 'ae',
          merchantName: 'Flowers Store',
          amount: 20,
          screenTitle:'Pay with Card',
          billingDetails,
          shippingDetails,
  };

```

Options to show billing and shipping info

```javascript
configuration.showBillingInfo = true
configuration.showShippingInfo = true
```

3. Start payment by calling `startCardPayment` method and handle the transaction details

```javascript
const result = await PayTabsIonic.startCardPayment(configuration)
```

then you can handle the result like that:

```javascript
      this.handleResult(result);
      handleResult(result: any) {
          if (result.status == 'success') {
            // Handle transaction details here.
            const transactionDetails = result.data;
            console.log('responseCode: ' + transactionDetails.paymentResult.responseCode);
            console.log('transactionTime: ' + transactionDetails.paymentResult.transactionTime);
            console.log('responseMessage: ' + transactionDetails.paymentResult.responseMessage);
            console.log('transactionReference: ' + transactionDetails.transactionReference);
            console.log('token: ' + transactionDetails.token);
          } else if (result.status == 'error') {
            // Handle error here the code and message.
          } else if (result.status == 'event') {
            // Handle events here.
          }
        }
```

### Pay with Apple Pay

1. Follow the guide [Steps to configure Apple Pay][applepayguide] to learn how to configure ApplePay with PayTabs.

2. Do the steps 1 and 2 from **Pay with Card** although you can ignore Billing & Shipping details and Apple Pay will handle it, also you must pass the **merchant name** and **merchant identifier**.

```javascript
let configuration: PaymentSDKConfiguration = {
          profileID: '*your profile id*',
          serverKey: '*server key*',
          clientKey: '*client key*',
          cartID: '12345',
          currency: 'USD',
          cartDescription: 'Flowers',
          merchantCountryCode: 'ae',
          merchantName: 'Flowers Store',
          amount: 20,
          screenTitle:'Pay with Card',
          merchantName: 'Flowers Store'
          merchantIdentifier = 'merchant.com.bundleID'
  };
```

3. To simplify ApplePay validation on all user's billing info, pass **simplifyApplePayValidation** parameter in the configuration with **true**.

```javascript
configuration.simplifyApplePayValidation = true
```

4. Call `startApplePayPayment` to start payment

```javascript
const result = await PayTabsIonic.startApplePayPayment(configuration)
this.handleResult(result)
```

### Pay with Samsung Pay

Pass Samsung Pay token to the configuration and call `startCardPayment`

```javascript
configuration.samsungToken = 'token'
```

### Pay with Alternative Payment Methods

It becomes easy to integrate with other payment methods in your region like STCPay, OmanNet, KNet, Valu, Fawry, UnionPay, and Meeza, to serve a large sector of customers.

1. Do the steps 1 and 2 from **Pay with Card**.

2. Choose one or more of the payment methods you want to support.

```javascript
configuration.alternativePaymentMethods = [PaymentSDKConstants.AlternativePaymentMethod.stcPay]
```

3. Start payment by calling `startAlternativePaymentMethod` method and handle the transaction details

```javascript
const result = await PayTabsIonic.startAlternativePaymentMethod(configuration)
this.handleResult(result)
```

## Enums

Those enums will help you in customizing your configuration.

- Tokenise types

The default type is none

```javascript
exports.TokeniseType = Object.freeze({
  none: 'none', // tokenise is off
  merchantMandatory: 'merchantMandatory', // tokenise is forced
  userMandatory: 'userMandatory', // tokenise is forced as per user approval
  userOptinoal: 'userOptional', // tokenise if optional as per user approval
})
```

```javascript
configuration.tokeniseType = cordova.plugins.CordovaPaymentPlugin.TokeniseType.userOptinoal
```

- Token formats

The default format is hex32

```javascript
exports.TokeniseFromat = Object.freeze({ none: '1', hex32: '2', alphaNum20: '3', digit22: '3', digit16: '5', alphaNum32: '6' })
```

```javascript
configuration.tokeniseFormat = cordova.plugins.CordovaPaymentPlugin.TokeniseFromat.hex32
```

- Transaction types

The default type is sale

```javascript
const TransactionType = Object.freeze({ sale: 'sale', authorize: 'auth' })
```

```javascript
configuration.transactionType = cordova.plugins.CordovaPaymentPlugin.TransactionType.sale
```

- Alternative payment methods

```javascript
AlternativePaymentMethod = Object.freeze({
  unionPay: 'unionpay',
  stcPay: 'stcpay',
  valu: 'valu',
  meezaQR: 'meezaqr',
  omannet: 'omannet',
  knetCredit: 'knetcredit',
  knetDebit: 'knetdebit',
  fawry: 'fawry',
})
```

```javascript
configuration.alternativePaymentMethods = [cordova.plugins.CordovaPaymentPlugin.AlternativePaymentMethod.stcPay, ...]
```

## API

<docgen-index>

- [`startCardPayment(...)`](#startcardpayment)
- [`startTokenizedCardPayment(...)`](#starttokenizedcardpayment)
- [`start3DSecureTokenizedCardPayment(...)`](#start3dsecuretokenizedcardpayment)
- [`startPaymentWithSavedCards(...)`](#startpaymentwithsavedcards)
- [`startApplePayPayment(...)`](#startapplepaypayment)
- [`queryTransaction(...)`](#querytransaction)
- [`startAlternativePaymentMethod(...)`](#startalternativepaymentmethod)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### startCardPayment(...)

```typescript
startCardPayment(options: PaymentSDKConfiguration) => Promise<any>
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### startTokenizedCardPayment(...)

```typescript
startTokenizedCardPayment(options: PaymentSDKTokenizationArgument) => Promise<any>
```

| Param         | Type                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#paymentsdktokenizationargument">PaymentSDKTokenizationArgument</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### start3DSecureTokenizedCardPayment(...)

```typescript
start3DSecureTokenizedCardPayment(options: PaymentSDKConfiguration, savedCardInfo: PaymentSDKSavedCardInfo, token: string) => Promise<any>
```

| Param               | Type                                                                        |
| ------------------- | --------------------------------------------------------------------------- |
| **`options`**       | <code><a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a></code> |
| **`savedCardInfo`** | <code><a href="#paymentsdksavedcardinfo">PaymentSDKSavedCardInfo</a></code> |
| **`token`**         | <code>string</code>                                                         |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### startPaymentWithSavedCards(...)

```typescript
startPaymentWithSavedCards(options: PaymentSDKConfiguration, support3ds: boolean) => Promise<any>
```

| Param            | Type                                                                        |
| ---------------- | --------------------------------------------------------------------------- |
| **`options`**    | <code><a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a></code> |
| **`support3ds`** | <code>boolean</code>                                                        |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### startApplePayPayment(...)

```typescript
startApplePayPayment(options: PaymentSDKConfiguration) => Promise<any>
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### queryTransaction(...)

```typescript
queryTransaction(options: PaymentSDKQueryConfiguration) => Promise<any>
```

| Param         | Type                                                                                  |
| ------------- | ------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#paymentsdkqueryconfiguration">PaymentSDKQueryConfiguration</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### startAlternativePaymentMethod(...)

```typescript
startAlternativePaymentMethod(options: PaymentSDKConfiguration) => Promise<any>
```

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a></code> |

**Returns:** <code>Promise&lt;any&gt;</code>

---

### Interfaces

#### PaymentSDKConfiguration

<a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a>: payment request configuration

| Prop                             | Type                                                                            | Description                                                   |
| -------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| **`profileID`**                  | <code>string</code>                                                             | merchant profile id                                           |
| **`serverKey`**                  | <code>string</code>                                                             | merchant server key                                           |
| **`clientKey`**                  | <code>string</code>                                                             | merchant client key                                           |
| **`transactionType`**            | <code>string</code>                                                             | transaction type: refer to TransactionType enum               |
| **`transactionClass`**           | <code>string</code>                                                             | transaction class: refer to TransactionClass enum             |
| **`cartID`**                     | <code>string</code>                                                             | order or cart id                                              |
| **`currency`**                   | <code>string</code>                                                             | payment currency                                              |
| **`amount`**                     | <code>number</code>                                                             | amount                                                        |
| **`cartDescription`**            | <code>string</code>                                                             | order or cart description                                     |
| **`languageCode`**               | <code>string</code>                                                             | user interface language code(en, ar, ..)                      |
| **`forceShippingInfo`**          | <code>boolean</code>                                                            | validate shipping info                                        |
| **`showBillingInfo`**            | <code>boolean</code>                                                            | validate billing info                                         |
| **`showShippingInfo`**           | <code>boolean</code>                                                            | handle missing shipping info by showing shipping info section |
| **`billingDetails`**             | <code><a href="#paymentsdkbillingdetails">PaymentSDKBillingDetails</a></code>   | configured billing details                                    |
| **`shippingDetails`**            | <code><a href="#paymentsdkshippingdetails">PaymentSDKShippingDetails</a></code> | configured shipping details                                   |
| **`merchantCountryCode`**        | <code>string</code>                                                             | merchant country code                                         |
| **`screenTitle`**                | <code>string</code>                                                             | title of the screen                                           |
| **`merchantName`**               | <code>string</code>                                                             | merchant name                                                 |
| **`serverIP`**                   | <code>string</code>                                                             | server ip                                                     |
| **`tokeniseType`**               | <code>string</code>                                                             | tokenise type: refer to TokeiseType enum                      |
| **`tokenFormat`**                | <code>string</code>                                                             | token format: refer to TokeiseFormat enum                     |
| **`hideCardScanner`**            | <code>string</code>                                                             | option to hide or show card scanner button                    |
| **`merchantApplePayIdentifier`** | <code>string</code>                                                             | merchant apple pay bundle id                                  |
| **`simplifyApplePayValidation`** | <code>string</code>                                                             | minize the vlaidation on apple pay billing and shipping info  |
| **`supportedApplePayNetworks`**  | <code>[string]</code>                                                           | supported apple pay networks                                  |
| **`token`**                      | <code>string</code>                                                             | returned token                                                |
| **`transactionReference`**       | <code>string</code>                                                             | returned transaction reference                                |
| **`samsungToken`**               | <code>string</code>                                                             | samsung Token                                                 |
| **`theme`**                      | <code><a href="#paymentsdktheme">PaymentSDKTheme</a></code>                     | customized theme                                              |
| **`alternativePaymentMethods`**  | <code>[string]</code>                                                           | list of alternative payment methods                           |

#### PaymentSDKBillingDetails

<a href="#paymentsdkbillingdetails">PaymentSDKBillingDetails</a>

| Prop              | Type                | Description                    |
| ----------------- | ------------------- | ------------------------------ |
| **`name`**        | <code>string</code> | billing: customer name         |
| **`email`**       | <code>string</code> | billing: customer email        |
| **`phone`**       | <code>string</code> | billing: customer phone        |
| **`addressLine`** | <code>string</code> | billing: customer address line |
| **`city`**        | <code>string</code> | billing: customer city         |
| **`state`**       | <code>string</code> | billing: customer state        |
| **`countryCode`** | <code>string</code> | billing: customer country code |
| **`zip`**         | <code>string</code> | billing: customer zip code     |

#### PaymentSDKShippingDetails

<a href="#paymentsdkshippingdetails">PaymentSDKShippingDetails</a>

| Prop              | Type                | Description                     |
| ----------------- | ------------------- | ------------------------------- |
| **`name`**        | <code>string</code> | shipping: customer name         |
| **`email`**       | <code>string</code> | shipping: customer email        |
| **`phone`**       | <code>string</code> | shipping: customer phone        |
| **`addressLine`** | <code>string</code> | shipping: customer address line |
| **`city`**        | <code>string</code> | shipping: customer city         |
| **`state`**       | <code>string</code> | shipping: customer state        |
| **`countryCode`** | <code>string</code> | shipping: customer country code |
| **`zip`**         | <code>string</code> | shipping: customer zip code     |

#### PaymentSDKTheme

<a href="#paymentsdktheme">PaymentSDKTheme</a>

| Prop                     | Type                | Description                 |
| ------------------------ | ------------------- | --------------------------- |
| **`primaryColor`**       | <code>string</code> | theme: primary color        |
| **`primaryFontColor`**   | <code>string</code> | theme: primary font color   |
| **`primaryFont`**        | <code>string</code> | theme: primary font         |
| **`secondaryColor`**     | <code>string</code> | theme: secondary color      |
| **`secondaryFontColor`** | <code>string</code> | theme: secondary font color |
| **`secondaryFont`**      | <code>string</code> | theme: secondary font       |
| **`strokeColor`**        | <code>string</code> | theme: stroke color         |
| **`strokeThinckness`**   | <code>number</code> | theme: primary color        |
| **`inputsCornerRadius`** | <code>number</code> | theme: input corner radius  |
| **`buttonColor`**        | <code>string</code> | theme: button color         |
| **`buttonFontColor`**    | <code>string</code> | theme: button font color    |
| **`buttonFont`**         | <code>string</code> | theme: button font          |
| **`titleFontColor`**     | <code>string</code> | theme: title font color     |
| **`titleFont`**          | <code>string</code> | theme: title font           |
| **`backgroundColor`**    | <code>string</code> | theme: background color     |
| **`placeholderColor`**   | <code>string</code> | theme: placeholder color    |
| **`logoImage`**          | <code>string</code> | theme: logo                 |

#### PaymentSDKTokenizationArgument

<a href="#paymentsdktokenizationargument">PaymentSDKTokenizationArgument</a>: tokenization configuration

| Prop                       | Type                                                                        | Description            |
| -------------------------- | --------------------------------------------------------------------------- | ---------------------- |
| **`configurations`**       | <code><a href="#paymentsdkconfiguration">PaymentSDKConfiguration</a></code> | payment configurations |
| **`token`**                | <code>string</code>                                                         | trx token              |
| **`transactionReference`** | <code>string</code>                                                         | transaction reference  |

#### PaymentSDKSavedCardInfo

<a href="#paymentsdksavedcardinfo">PaymentSDKSavedCardInfo</a>

| Prop             | Type                | Description                       |
| ---------------- | ------------------- | --------------------------------- |
| **`maskedCard`** | <code>string</code> | maskedCard: Card mask             |
| **`cardType`**   | <code>string</code> | cardType: card type (visa, mc...) |

#### PaymentSDKQueryConfiguration

<a href="#paymentsdkqueryconfiguration">PaymentSDKQueryConfiguration</a>: query request configuration

| Prop                       | Type                | Description                    |
| -------------------------- | ------------------- | ------------------------------ |
| **`serverKey`**            | <code>string</code> | merchant server key            |
| **`clientKey`**            | <code>string</code> | merchant client key            |
| **`merchantCountryCode`**  | <code>string</code> | merchant country code          |
| **`profileID`**            | <code>string</code> | merchant profile id            |
| **`transactionReference`** | <code>string</code> | returned transaction reference |

</docgen-api>

## Demo application

Check our complete [example][example].

<img src="https://user-images.githubusercontent.com/13621658/109432386-905e5280-7a13-11eb-847c-63f2c554e2d1.png" width="370">

## PayTabs

[Support][1] | [Terms of Use][2] | [Privacy Policy][3]

[1]: https://www.paytabs.com/en/support/
[2]: https://www.paytabs.com/en/terms-of-use/
[3]: https://www.paytabs.com/en/privacy-policy/
[license]: https://github.com/paytabscom/paytabs-cordova/blob/master/LICENSE
[applepayguide]: https://github.com/paytabscom/paytabs-cordova/blob/master/ApplePayConfiguration.md
[sample]: https://github.com/paytabscom/paytabs-cordova/tree/master/sample
