<h3 align="center">😻 In-App Subscriptions Made Easy 😻</h3>

[![License](https://img.shields.io/github/license/RevenueCat/purchases-capacitor.svg?style=flat)](https://github.com/RevenueCat/purchases-capacitor/blob/main/LICENSE)
[![Release](https://img.shields.io/github/release/RevenueCat/purchases-capacitor.svg?style=flat)](https://github.com/RevenueCat/purchases-capacitor/releases)

RevenueCat is a powerful, reliable, and free to use in-app purchase server with cross-platform support. Our open-source framework provides a backend and a wrapper around StoreKit and Google Play Billing to make implementing in-app purchases and subscriptions easy.

Whether you are building a new app or already have millions of customers, you can use RevenueCat to:

- Fetch products, make purchases, and check subscription status with our [native SDKs](https://docs.revenuecat.com/docs/installation).
- Host and [configure products](https://docs.revenuecat.com/docs/entitlements) remotely from our dashboard.
- Analyze the most important metrics for your app business [in one place](https://docs.revenuecat.com/docs/charts).
- See customer transaction histories, chart lifetime value, and [grant promotional subscriptions](https://docs.revenuecat.com/docs/customers).
- Get notified of real-time events through [webhooks](https://docs.revenuecat.com/docs/webhooks).
- Send enriched purchase events to analytics and attribution tools with our easy integrations.

Sign up to [get started for free](https://app.revenuecat.com/signup).

## @revenucat/purchases-capacitor

_@revenuecat/purchases-capacitor_ is the client for the [RevenueCat](https://www.revenuecat.com/) subscription and purchase tracking system. It is an open source framework that provides a wrapper around StoreKit, Google Play Billing and the RevenueCat backend to make implementing in-app purchases in Capacitor easy.

## RevenueCat SDK Features

|     | RevenueCat                                                                                                                                                   |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ✅  | Server-side receipt validation                                                                                                                               |
| ➡️  | [Webhooks](https://docs.revenuecat.com/docs/webhooks) - enhanced server-to-server communication with events for purchases, renewals, cancellations, and more |
| 🎯  | Subscription status tracking - know whether a user is subscribed whether they're on iOS, Android or web                                                      |
| 📊  | Analytics - automatic calculation of metrics like conversion, mrr, and churn                                                                                 |
| 📝  | [Online documentation](https://docs.revenuecat.com/docs) up to date                                                                                          |
| 🔀  | [Integrations](https://www.revenuecat.com/integrations) - over a dozen integrations to easily send purchase data where you need it                           |
| 💯  | Well maintained - [frequent releases](https://github.com/RevenueCat/purchases-capacitor/releases)                                                            |
| 📮  | Great support - [Help Center](https://revenuecat.zendesk.com)                                                                                                |

## Getting Started

For more detailed information, you can view our complete documentation at [docs.revenuecat.com](https://docs.revenuecat.com/docs).

Please follow the [Quickstart Guide](https://docs.revenuecat.com/docs/) for more information on how to install the SDK.

```bash
npm install @revenuecat/purchases-capacitor
npx cap sync
```

## Contributing

Contributions are always welcome! To learn how you can contribute, please see the [Contributing Guide](./CONTRIBUTING.md).

## Acknowledgment

This plugin is based on [CapGo's Capacitor plugin](https://www.npmjs.com/package/@capgo/capacitor-purchases). The plugin was transferred to RevenueCat to become an officially supported plugin.

## API

<docgen-index>

- [`configure(...)`](#configure)
- [`setMockWebResults(...)`](#setmockwebresults)
- [`setFinishTransactions(...)`](#setfinishtransactions)
- [`setSimulatesAskToBuyInSandbox(...)`](#setsimulatesasktobuyinsandbox)
- [`addCustomerInfoUpdateListener(...)`](#addcustomerinfoupdatelistener)
- [`removeCustomerInfoUpdateListener(...)`](#removecustomerinfoupdatelistener)
- [`getOfferings()`](#getofferings)
- [`getProducts(...)`](#getproducts)
- [`purchaseStoreProduct(...)`](#purchasestoreproduct)
- [`purchaseDiscountedProduct(...)`](#purchasediscountedproduct)
- [`purchasePackage(...)`](#purchasepackage)
- [`purchaseSubscriptionOption(...)`](#purchasesubscriptionoption)
- [`purchaseDiscountedPackage(...)`](#purchasediscountedpackage)
- [`restorePurchases()`](#restorepurchases)
- [`getAppUserID()`](#getappuserid)
- [`logIn(...)`](#login)
- [`logOut()`](#logout)
- [`setLogLevel(...)`](#setloglevel)
- [`setLogHandler(...)`](#setloghandler)
- [`getCustomerInfo()`](#getcustomerinfo)
- [`syncPurchases()`](#syncpurchases)
- [`syncObserverModeAmazonPurchase(...)`](#syncobservermodeamazonpurchase)
- [`enableAdServicesAttributionTokenCollection()`](#enableadservicesattributiontokencollection)
- [`isAnonymous()`](#isanonymous)
- [`checkTrialOrIntroductoryPriceEligibility(...)`](#checktrialorintroductorypriceeligibility)
- [`getPromotionalOffer(...)`](#getpromotionaloffer)
- [`invalidateCustomerInfoCache()`](#invalidatecustomerinfocache)
- [`presentCodeRedemptionSheet()`](#presentcoderedemptionsheet)
- [`setAttributes(...)`](#setattributes)
- [`setEmail(...)`](#setemail)
- [`setPhoneNumber(...)`](#setphonenumber)
- [`setDisplayName(...)`](#setdisplayname)
- [`setPushToken(...)`](#setpushtoken)
- [`setProxyURL(...)`](#setproxyurl)
- [`collectDeviceIdentifiers()`](#collectdeviceidentifiers)
- [`setAdjustID(...)`](#setadjustid)
- [`setAppsflyerID(...)`](#setappsflyerid)
- [`setFBAnonymousID(...)`](#setfbanonymousid)
- [`setMparticleID(...)`](#setmparticleid)
- [`setCleverTapID(...)`](#setclevertapid)
- [`setMixpanelDistinctID(...)`](#setmixpaneldistinctid)
- [`setFirebaseAppInstanceID(...)`](#setfirebaseappinstanceid)
- [`setOnesignalID(...)`](#setonesignalid)
- [`setAirshipChannelID(...)`](#setairshipchannelid)
- [`setMediaSource(...)`](#setmediasource)
- [`setCampaign(...)`](#setcampaign)
- [`setAdGroup(...)`](#setadgroup)
- [`setAd(...)`](#setad)
- [`setKeyword(...)`](#setkeyword)
- [`setCreative(...)`](#setcreative)
- [`canMakePayments(...)`](#canmakepayments)
- [`beginRefundRequestForActiveEntitlement()`](#beginrefundrequestforactiveentitlement)
- [`beginRefundRequestForEntitlement(...)`](#beginrefundrequestforentitlement)
- [`beginRefundRequestForProduct(...)`](#beginrefundrequestforproduct)
- [`isConfigured()`](#isconfigured)
- [Interfaces](#interfaces)
- [Type Aliases](#type-aliases)
- [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### configure(...)

```typescript
configure(configuration: PurchasesConfiguration) => Promise<void>
```

Sets up Purchases with your API key and an app user id.

| Param               | Type                                                                      | Description                                                                                                                                                   |
| ------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`configuration`** | <code><a href="#purchasesconfiguration">PurchasesConfiguration</a></code> | RevenueCat configuration object including the API key and other optional parameters. See {@link <a href="#purchasesconfiguration">PurchasesConfiguration</a>} |

---

### setMockWebResults(...)

```typescript
setMockWebResults(options: { shouldMockWebResults: boolean; }) => Promise<void>
```

Sets whether the SDK should return mocked results in the web version.
This won't affect the iOS and Android versions of the implementation.
Default is false

| Param         | Type                                            | Description                                                                             |
| ------------- | ----------------------------------------------- | --------------------------------------------------------------------------------------- |
| **`options`** | <code>{ shouldMockWebResults: boolean; }</code> | Set shouldMockWebResults to true if you want the plugin methods to return mocked values |

---

### setFinishTransactions(...)

```typescript
setFinishTransactions(options: { finishTransactions: boolean; }) => Promise<void>
```

| Param         | Type                                          | Description                                                                            |
| ------------- | --------------------------------------------- | -------------------------------------------------------------------------------------- |
| **`options`** | <code>{ finishTransactions: boolean; }</code> | Set finishTransactions to false if you aren't using Purchases SDK to make the purchase |

---

### setSimulatesAskToBuyInSandbox(...)

```typescript
setSimulatesAskToBuyInSandbox(options: { simulatesAskToBuyInSandbox: boolean; }) => Promise<void>
```

iOS only.

| Param         | Type                                                  | Description                                                                                                                           |
| ------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ simulatesAskToBuyInSandbox: boolean; }</code> | Set this property to true _only_ when testing the ask-to-buy / SCA purchases flow. More information: http://errors.rev.cat/ask-to-buy |

---

### addCustomerInfoUpdateListener(...)

```typescript
addCustomerInfoUpdateListener(customerInfoUpdateListener: CustomerInfoUpdateListener) => Promise<PurchasesCallbackId>
```

Sets a function to be called on updated customer info

| Param                            | Type                                                                              | Description                                              |
| -------------------------------- | --------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **`customerInfoUpdateListener`** | <code><a href="#customerinfoupdatelistener">CustomerInfoUpdateListener</a></code> | <a href="#customerinfo">CustomerInfo</a> update listener |

**Returns:** <code>Promise&lt;string&gt;</code>

---

### removeCustomerInfoUpdateListener(...)

```typescript
removeCustomerInfoUpdateListener(listenerToRemove: PurchasesCallbackId) => Promise<{ wasRemoved: boolean; }>
```

Removes a given <a href="#customerinfoupdatelistener">CustomerInfoUpdateListener</a>

| Param                  | Type                | Description                                                                                              |
| ---------------------- | ------------------- | -------------------------------------------------------------------------------------------------------- |
| **`listenerToRemove`** | <code>string</code> | <a href="#customerinfoupdatelistener">CustomerInfoUpdateListener</a> reference of the listener to remove |

**Returns:** <code>Promise&lt;{ wasRemoved: boolean; }&gt;</code>

---

### getOfferings()

```typescript
getOfferings() => Promise<PurchasesOfferings>
```

Gets the map of entitlements -&gt; offerings -&gt; products

**Returns:** <code>Promise&lt;<a href="#purchasesofferings">PurchasesOfferings</a>&gt;</code>

---

### getProducts(...)

```typescript
getProducts(options: GetProductOptions) => Promise<{ products: PurchasesStoreProduct[]; }>
```

Fetch the product info

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#getproductoptions">GetProductOptions</a></code> |

**Returns:** <code>Promise&lt;{ products: PurchasesStoreProduct[]; }&gt;</code>

---

### purchaseStoreProduct(...)

```typescript
purchaseStoreProduct(options: PurchaseStoreProductOptions) => Promise<MakePurchaseResult>
```

Make a purchase

| Param         | Type                                                                                |
| ------------- | ----------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#purchasestoreproductoptions">PurchaseStoreProductOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#makepurchaseresult">MakePurchaseResult</a>&gt;</code>

---

### purchaseDiscountedProduct(...)

```typescript
purchaseDiscountedProduct(options: PurchaseDiscountedProductOptions) => Promise<MakePurchaseResult>
```

iOS only. Purchase a product applying a given discount.

| Param         | Type                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#purchasediscountedproductoptions">PurchaseDiscountedProductOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#makepurchaseresult">MakePurchaseResult</a>&gt;</code>

---

### purchasePackage(...)

```typescript
purchasePackage(options: PurchasePackageOptions) => Promise<MakePurchaseResult>
```

Make a purchase

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#purchasepackageoptions">PurchasePackageOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#makepurchaseresult">MakePurchaseResult</a>&gt;</code>

---

### purchaseSubscriptionOption(...)

```typescript
purchaseSubscriptionOption(options: PurchaseSubscriptionOptionOptions) => Promise<MakePurchaseResult>
```

Google only. Make a purchase of a subscriptionOption

| Param         | Type                                                                                            |
| ------------- | ----------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#purchasesubscriptionoptionoptions">PurchaseSubscriptionOptionOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#makepurchaseresult">MakePurchaseResult</a>&gt;</code>

---

### purchaseDiscountedPackage(...)

```typescript
purchaseDiscountedPackage(options: PurchaseDiscountedPackageOptions) => Promise<MakePurchaseResult>
```

iOS only. Purchase a package applying a given discount.

| Param         | Type                                                                                          |
| ------------- | --------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#purchasediscountedpackageoptions">PurchaseDiscountedPackageOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#makepurchaseresult">MakePurchaseResult</a>&gt;</code>

---

### restorePurchases()

```typescript
restorePurchases() => Promise<{ customerInfo: CustomerInfo; }>
```

Restores a user's previous purchases and links their appUserIDs to any user's also using those purchases.

**Returns:** <code>Promise&lt;{ customerInfo: <a href="#customerinfo">CustomerInfo</a>; }&gt;</code>

---

### getAppUserID()

```typescript
getAppUserID() => Promise<{ appUserID: string; }>
```

Get the appUserID

**Returns:** <code>Promise&lt;{ appUserID: string; }&gt;</code>

---

### logIn(...)

```typescript
logIn(options: { appUserID: string; }) => Promise<LogInResult>
```

This function will log in the current user with an appUserID. Typically, this would be used after a log in
to identify a user without calling configure.

| Param         | Type                                | Description                                             |
| ------------- | ----------------------------------- | ------------------------------------------------------- |
| **`options`** | <code>{ appUserID: string; }</code> | The appUserID that should be linked to the current user |

**Returns:** <code>Promise&lt;<a href="#loginresult">LogInResult</a>&gt;</code>

---

### logOut()

```typescript
logOut() => Promise<{ customerInfo: CustomerInfo; }>
```

Logs out the Purchases client clearing the saved appUserID. This will generate a random user id and save it in the cache.

**Returns:** <code>Promise&lt;{ customerInfo: <a href="#customerinfo">CustomerInfo</a>; }&gt;</code>

---

### setLogLevel(...)

```typescript
setLogLevel(options: { level: LOG_LEVEL; }) => Promise<void>
```

Used to set the log level. Useful for debugging issues with the lovely team @RevenueCat.
The default is {<a href="#log_level">LOG_LEVEL.INFO</a>} in release builds and {<a href="#log_level">LOG_LEVEL.DEBUG</a>} in debug builds.

| Param         | Type                                                        | Description                       |
| ------------- | ----------------------------------------------------------- | --------------------------------- |
| **`options`** | <code>{ level: <a href="#log_level">LOG_LEVEL</a>; }</code> | Log level to use to display logs. |

---

### setLogHandler(...)

```typescript
setLogHandler(logHandler: LogHandler) => Promise<void>
```

Set a custom log handler for redirecting logs to your own logging system.
By default, this sends info, warning, and error messages.
If you wish to receive Debug level messages, see [setLogLevel].

| Param            | Type                                              | Description                                                                                             |
| ---------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **`logHandler`** | <code><a href="#loghandler">LogHandler</a></code> | It will get called for each log event. Use this function to redirect the log to your own logging system |

---

### getCustomerInfo()

```typescript
getCustomerInfo() => Promise<{ customerInfo: CustomerInfo; }>
```

Gets current customer info

**Returns:** <code>Promise&lt;{ customerInfo: <a href="#customerinfo">CustomerInfo</a>; }&gt;</code>

---

### syncPurchases()

```typescript
syncPurchases() => Promise<void>
```

This method will send all the purchases to the RevenueCat backend. Call this when using your own implementation
for subscriptions anytime a sync is needed, like after a successful purchase.

---

### syncObserverModeAmazonPurchase(...)

```typescript
syncObserverModeAmazonPurchase(options: SyncObserverModeAmazonPurchaseOptions) => Promise<void>
```

This method will send a purchase to the RevenueCat backend. This function should only be called if you are
in Amazon observer mode or performing a client side migration of your current users to RevenueCat.

The receipt IDs are cached if successfully posted, so they are not posted more than once.

| Param         | Type                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#syncobservermodeamazonpurchaseoptions">SyncObserverModeAmazonPurchaseOptions</a></code> |

---

### enableAdServicesAttributionTokenCollection()

```typescript
enableAdServicesAttributionTokenCollection() => Promise<void>
```

Enable automatic collection of Apple Search Ad attribution on iOS. Disabled by default. Supported in iOS 14.3+ only

---

### isAnonymous()

```typescript
isAnonymous() => Promise<{ isAnonymous: boolean; }>
```

**Returns:** <code>Promise&lt;{ isAnonymous: boolean; }&gt;</code>

---

### checkTrialOrIntroductoryPriceEligibility(...)

```typescript
checkTrialOrIntroductoryPriceEligibility(options: { productIdentifiers: string[]; }) => Promise<{ [productId: string]: IntroEligibility; }>
```

iOS only. Computes whether a user is eligible for the introductory pricing period of a given product.
You should use this method to determine whether you show the user the normal product price or the
introductory price. This also applies to trials (trials are considered a type of introductory pricing).

| Param         | Type                                           | Description                                                            |
| ------------- | ---------------------------------------------- | ---------------------------------------------------------------------- |
| **`options`** | <code>{ productIdentifiers: string[]; }</code> | Array of product identifiers for which you want to compute eligibility |

**Returns:** <code>Promise&lt;{ [productId: string]: <a href="#introeligibility">IntroEligibility</a>; }&gt;</code>

---

### getPromotionalOffer(...)

```typescript
getPromotionalOffer(options: GetPromotionalOfferOptions) => Promise<PurchasesPromotionalOffer | undefined>
```

iOS only. Use this function to retrieve the <a href="#purchasespromotionaloffer">`PurchasesPromotionalOffer`</a> for a given <a href="#purchasespackage">`PurchasesPackage`</a>.

| Param         | Type                                                                              |
| ------------- | --------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#getpromotionalofferoptions">GetPromotionalOfferOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#purchasespromotionaloffer">PurchasesPromotionalOffer</a>&gt;</code>

---

### invalidateCustomerInfoCache()

```typescript
invalidateCustomerInfoCache() => Promise<void>
```

Invalidates the cache for customer information.

Most apps will not need to use this method; invalidating the cache can leave your app in an invalid state.
Refer to https://docs.revenuecat.com/docs/customer-info#section-get-user-information for more information on
using the cache properly.

This is useful for cases where customer information might have been updated outside the app, like if a
promotional subscription is granted through the RevenueCat dashboard.

---

### presentCodeRedemptionSheet()

```typescript
presentCodeRedemptionSheet() => Promise<void>
```

iOS 14.0+ only. Presents a code redemption sheet, useful for redeeming offer codes
Refer to https://docs.revenuecat.com/docs/ios-subscription-offers#offer-codes for more information on how
to configure and use offer codes

---

### setAttributes(...)

```typescript
setAttributes(attributes: { [key: string]: string | null; }) => Promise<void>
```

Subscriber attributes are useful for storing additional, structured information on a user.
Since attributes are writable using a public key they should not be used for
managing secure or sensitive information such as subscription status, coins, etc.

Key names starting with "$" are reserved names used by RevenueCat. For a full list of key
restrictions refer to our guide: https://docs.revenuecat.com/docs/subscriber-attributes

| Param            | Type                                            | Description                                                                        |
| ---------------- | ----------------------------------------------- | ---------------------------------------------------------------------------------- |
| **`attributes`** | <code>{ [key: string]: string \| null; }</code> | Map of attributes by key. Set the value as an empty string to delete an attribute. |

---

### setEmail(...)

```typescript
setEmail(options: { email: string | null; }) => Promise<void>
```

Subscriber attribute associated with the email address for the user

| Param         | Type                                    | Description                                                |
| ------------- | --------------------------------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ email: string \| null; }</code> | Empty String or null will delete the subscriber attribute. |

---

### setPhoneNumber(...)

```typescript
setPhoneNumber(options: { phoneNumber: string | null; }) => Promise<void>
```

Subscriber attribute associated with the phone number for the user

| Param         | Type                                          | Description                                                |
| ------------- | --------------------------------------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ phoneNumber: string \| null; }</code> | Empty String or null will delete the subscriber attribute. |

---

### setDisplayName(...)

```typescript
setDisplayName(options: { displayName: string | null; }) => Promise<void>
```

Subscriber attribute associated with the display name for the user

| Param         | Type                                          | Description                                                |
| ------------- | --------------------------------------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ displayName: string \| null; }</code> | Empty String or null will delete the subscriber attribute. |

---

### setPushToken(...)

```typescript
setPushToken(options: { pushToken: string | null; }) => Promise<void>
```

Subscriber attribute associated with the push token for the user

| Param         | Type                                        | Description                                |
| ------------- | ------------------------------------------- | ------------------------------------------ |
| **`options`** | <code>{ pushToken: string \| null; }</code> | null will delete the subscriber attribute. |

---

### setProxyURL(...)

```typescript
setProxyURL(options: { url: string; }) => Promise<void>
```

Set this property to your proxy URL before configuring Purchases _only_ if you've received a proxy key value
from your RevenueCat contact.

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

---

### collectDeviceIdentifiers()

```typescript
collectDeviceIdentifiers() => Promise<void>
```

Automatically collect subscriber attributes associated with the device identifiers.
$idfa, $idfv, $ip on iOS
$gpsAdId, $androidId, $ip on Android

---

### setAdjustID(...)

```typescript
setAdjustID(options: { adjustID: string | null; }) => Promise<void>
```

Subscriber attribute associated with the Adjust ID for the user
Required for the RevenueCat Adjust integration

| Param         | Type                                       | Description                                                                                        |
| ------------- | ------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ adjustID: string \| null; }</code> | Adjust ID to use in Adjust integration. Empty String or null will delete the subscriber attribute. |

---

### setAppsflyerID(...)

```typescript
setAppsflyerID(options: { appsflyerID: string | null; }) => Promise<void>
```

Subscriber attribute associated with the AppsFlyer ID for the user
Required for the RevenueCat AppsFlyer integration

| Param         | Type                                          | Description                                                                                              |
| ------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ appsflyerID: string \| null; }</code> | Appsflyer ID to use in Appsflyer integration. Empty String or null will delete the subscriber attribute. |

---

### setFBAnonymousID(...)

```typescript
setFBAnonymousID(options: { fbAnonymousID: string | null; }) => Promise<void>
```

Subscriber attribute associated with the Facebook SDK Anonymous ID for the user
Recommended for the RevenueCat Facebook integration

| Param         | Type                                            | Description                                                                                                       |
| ------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ fbAnonymousID: string \| null; }</code> | Facebook Anonymous ID to use in Mparticle integration. Empty String or null will delete the subscriber attribute. |

---

### setMparticleID(...)

```typescript
setMparticleID(options: { mparticleID: string | null; }) => Promise<void>
```

Subscriber attribute associated with the mParticle ID for the user
Recommended for the RevenueCat mParticle integration

| Param         | Type                                          | Description                                                                                              |
| ------------- | --------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ mparticleID: string \| null; }</code> | Mparticle ID to use in Mparticle integration. Empty String or null will delete the subscriber attribute. |

---

### setCleverTapID(...)

```typescript
setCleverTapID(options: { cleverTapID: string | null; }) => Promise<void>
```

Subscriber attribute associated with the CleverTap ID for the user
Required for the RevenueCat CleverTap integration

| Param         | Type                                          | Description                                                                                                   |
| ------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ cleverTapID: string \| null; }</code> | CleverTap user ID to use in CleverTap integration. Empty String or null will delete the subscriber attribute. |

---

### setMixpanelDistinctID(...)

```typescript
setMixpanelDistinctID(options: { mixpanelDistinctID: string | null; }) => Promise<void>
```

Subscriber attribute associated with the Mixpanel Distinct ID for the user
Required for the RevenueCat Mixpanel integration

| Param         | Type                                                 | Description                                                                                                     |
| ------------- | ---------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ mixpanelDistinctID: string \| null; }</code> | Mixpanel Distinct ID to use in Mixpanel integration. Empty String or null will delete the subscriber attribute. |

---

### setFirebaseAppInstanceID(...)

```typescript
setFirebaseAppInstanceID(options: { firebaseAppInstanceID: string | null; }) => Promise<void>
```

Subscriber attribute associated with the Firebase App Instance ID for the user
Required for the RevenueCat Firebase integration

| Param         | Type                                                    | Description                                                                                                         |
| ------------- | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ firebaseAppInstanceID: string \| null; }</code> | Firebase App Instance ID to use in Firebase integration. Empty String or null will delete the subscriber attribute. |

---

### setOnesignalID(...)

```typescript
setOnesignalID(options: { onesignalID: string | null; }) => Promise<void>
```

Subscriber attribute associated with the OneSignal Player ID for the user
Required for the RevenueCat OneSignal integration

| Param         | Type                                          | Description                                                                                                     |
| ------------- | --------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ onesignalID: string \| null; }</code> | OneSignal Player ID to use in OneSignal integration. Empty String or null will delete the subscriber attribute. |

---

### setAirshipChannelID(...)

```typescript
setAirshipChannelID(options: { airshipChannelID: string | null; }) => Promise<void>
```

Subscriber attribute associated with the Airship Channel ID for the user
Required for the RevenueCat Airship integration

| Param         | Type                                               | Description                                                                                                  |
| ------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| **`options`** | <code>{ airshipChannelID: string \| null; }</code> | Airship Channel ID to use in Airship integration. Empty String or null will delete the subscriber attribute. |

---

### setMediaSource(...)

```typescript
setMediaSource(options: { mediaSource: string | null; }) => Promise<void>
```

Subscriber attribute associated with the install media source for the user

| Param         | Type                                          | Description                                                |
| ------------- | --------------------------------------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ mediaSource: string \| null; }</code> | Empty String or null will delete the subscriber attribute. |

---

### setCampaign(...)

```typescript
setCampaign(options: { campaign: string | null; }) => Promise<void>
```

Subscriber attribute associated with the install campaign for the user

| Param         | Type                                       | Description                                                |
| ------------- | ------------------------------------------ | ---------------------------------------------------------- |
| **`options`** | <code>{ campaign: string \| null; }</code> | Empty String or null will delete the subscriber attribute. |

---

### setAdGroup(...)

```typescript
setAdGroup(options: { adGroup: string | null; }) => Promise<void>
```

Subscriber attribute associated with the install ad group for the user

| Param         | Type                                      | Description                                                |
| ------------- | ----------------------------------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ adGroup: string \| null; }</code> | Empty String or null will delete the subscriber attribute. |

---

### setAd(...)

```typescript
setAd(options: { ad: string | null; }) => Promise<void>
```

Subscriber attribute associated with the install ad for the user

| Param         | Type                                 | Description                                                |
| ------------- | ------------------------------------ | ---------------------------------------------------------- |
| **`options`** | <code>{ ad: string \| null; }</code> | Empty String or null will delete the subscriber attribute. |

---

### setKeyword(...)

```typescript
setKeyword(options: { keyword: string | null; }) => Promise<void>
```

Subscriber attribute associated with the install keyword for the user

| Param         | Type                                      | Description                                                |
| ------------- | ----------------------------------------- | ---------------------------------------------------------- |
| **`options`** | <code>{ keyword: string \| null; }</code> | Empty String or null will delete the subscriber attribute. |

---

### setCreative(...)

```typescript
setCreative(options: { creative: string | null; }) => Promise<void>
```

Subscriber attribute associated with the install ad creative for the user

| Param         | Type                                       | Description                                                |
| ------------- | ------------------------------------------ | ---------------------------------------------------------- |
| **`options`** | <code>{ creative: string \| null; }</code> | Empty String or null will delete the subscriber attribute. |

---

### canMakePayments(...)

```typescript
canMakePayments(options?: { features?: BILLING_FEATURE[] | undefined; } | undefined) => Promise<{ canMakePayments: boolean; }>
```

Check if billing is supported for the current user (meaning IN-APP purchases are supported)
and optionally, whether a list of specified feature types are supported.

Note: Billing features are only relevant to Google Play Android users.
For other stores and platforms, billing features won't be checked.

| Param         | Type                                           | Description                                                                                                                                                                   |
| ------------- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ features?: BILLING_FEATURE[]; }</code> | An array of feature types to check for support. Feature types must be one of [BILLING_FEATURE]. By default, is an empty list and no specific feature support will be checked. |

**Returns:** <code>Promise&lt;{ canMakePayments: boolean; }&gt;</code>

---

### beginRefundRequestForActiveEntitlement()

```typescript
beginRefundRequestForActiveEntitlement() => Promise<{ refundRequestStatus: REFUND_REQUEST_STATUS; }>
```

iOS 15+ only. Presents a refund request sheet in the current window scene for
the latest transaction associated with the active entitlement.

If the request was unsuccessful, no active entitlements could be found for
the user, or multiple active entitlements were found for the user,
the promise will return an error.
If called in an unsupported platform (Android or iOS &lt; 15), an `UnsupportedPlatformException` will be thrown.

Important: This method should only be used if your user can only have a single active entitlement at a given time.
If a user could have more than one entitlement at a time, use `beginRefundRequestForEntitlement` instead.

**Returns:** <code>Promise&lt;{ refundRequestStatus: <a href="#refund_request_status">REFUND_REQUEST_STATUS</a>; }&gt;</code>

---

### beginRefundRequestForEntitlement(...)

```typescript
beginRefundRequestForEntitlement(options: { entitlementInfo: PurchasesEntitlementInfo; }) => Promise<{ refundRequestStatus: REFUND_REQUEST_STATUS; }>
```

iOS 15+ only. Presents a refund request sheet in the current window scene for
the latest transaction associated with the `entitlement`.

If the request was unsuccessful, the promise will return an error.
If called in an unsupported platform (Android or iOS &lt; 15), an `UnsupportedPlatformException` will be thrown.

| Param         | Type                                                                                                | Description                                    |
| ------------- | --------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| **`options`** | <code>{ entitlementInfo: <a href="#purchasesentitlementinfo">PurchasesEntitlementInfo</a>; }</code> | The entitlement to begin a refund request for. |

**Returns:** <code>Promise&lt;{ refundRequestStatus: <a href="#refund_request_status">REFUND_REQUEST_STATUS</a>; }&gt;</code>

---

### beginRefundRequestForProduct(...)

```typescript
beginRefundRequestForProduct(options: { storeProduct: PurchasesStoreProduct; }) => Promise<{ refundRequestStatus: REFUND_REQUEST_STATUS; }>
```

iOS 15+ only. Presents a refund request sheet in the current window scene for
the latest transaction associated with the `product`.

If the request was unsuccessful, the promise will return an error.
If called in an unsupported platform (Android or iOS &lt; 15), an `UnsupportedPlatformException` will be thrown.

| Param         | Type                                                                                       | Description                                     |
| ------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| **`options`** | <code>{ storeProduct: <a href="#purchasesstoreproduct">PurchasesStoreProduct</a>; }</code> | The StoreProduct to begin a refund request for. |

**Returns:** <code>Promise&lt;{ refundRequestStatus: <a href="#refund_request_status">REFUND_REQUEST_STATUS</a>; }&gt;</code>

---

### isConfigured()

```typescript
isConfigured() => Promise<{ isConfigured: boolean; }>
```

Check if configure has finished and Purchases has been configured.

**Returns:** <code>Promise&lt;{ isConfigured: boolean; }&gt;</code>

---

### Interfaces

#### PurchasesConfiguration

Holds parameters to initialize the SDK.

| Prop                           | Type                        | Description                                                                                                                                                                                                                                                                           |
| ------------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`apiKey`**                   | <code>string</code>         | RevenueCat API Key. Needs to be a string                                                                                                                                                                                                                                              |
| **`appUserID`**                | <code>string \| null</code> | A unique id for identifying the user                                                                                                                                                                                                                                                  |
| **`observerMode`**             | <code>boolean</code>        | An optional boolean. Set this to TRUE if you have your own IAP implementation and want to use only RevenueCat's backend. Default is FALSE. If you are on Android and setting this to ON, you will have to acknowledge the purchases yourself.                                         |
| **`userDefaultsSuiteName`**    | <code>string</code>         | An optional string. iOS-only, will be ignored for Android. Set this if you would like the RevenueCat SDK to store its preferences in a different NSUserDefaults suite, otherwise it will use standardUserDefaults. Default is null, which will make the SDK use standardUserDefaults. |
| **`usesStoreKit2IfAvailable`** | <code>boolean</code>        | iOS-only, will be ignored for Android. Set this to TRUE to enable StoreKit2. Default is FALSE.                                                                                                                                                                                        |
| **`useAmazon`**                | <code>boolean</code>        | An optional boolean. Android only. Required to configure the plugin to be used in the Amazon Appstore.                                                                                                                                                                                |

#### CustomerInfo

| Prop                                 | Type                                                                            | Description                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`entitlements`**                   | <code><a href="#purchasesentitlementinfos">PurchasesEntitlementInfos</a></code> | Entitlements attached to this customer info                                                                                                                                                                                                                                                                                                      |
| **`activeSubscriptions`**            | <code>string[]</code>                                                           | Set of active subscription skus                                                                                                                                                                                                                                                                                                                  |
| **`allPurchasedProductIdentifiers`** | <code>string[]</code>                                                           | Set of purchased skus, active and inactive                                                                                                                                                                                                                                                                                                       |
| **`latestExpirationDate`**           | <code>string \| null</code>                                                     | The latest expiration date of all purchased skus                                                                                                                                                                                                                                                                                                 |
| **`firstSeen`**                      | <code>string</code>                                                             | The date this user was first seen in RevenueCat.                                                                                                                                                                                                                                                                                                 |
| **`originalAppUserId`**              | <code>string</code>                                                             | The original App User Id recorded for this user.                                                                                                                                                                                                                                                                                                 |
| **`requestDate`**                    | <code>string</code>                                                             | Date when this info was requested                                                                                                                                                                                                                                                                                                                |
| **`allExpirationDates`**             | <code>{ [key: string]: string \| null; }</code>                                 | Map of skus to expiration dates                                                                                                                                                                                                                                                                                                                  |
| **`allPurchaseDates`**               | <code>{ [key: string]: string \| null; }</code>                                 | Map of skus to purchase dates                                                                                                                                                                                                                                                                                                                    |
| **`originalApplicationVersion`**     | <code>string \| null</code>                                                     | Returns the version number for the version of the application when the user bought the app. Use this for grandfathering users when migrating to subscriptions. This corresponds to the value of CFBundleVersion (in iOS) in the Info.plist file when the purchase was originally made. This is always null in Android                            |
| **`originalPurchaseDate`**           | <code>string \| null</code>                                                     | Returns the purchase date for the version of the application when the user bought the app. Use this for grandfathering users when migrating to subscriptions.                                                                                                                                                                                    |
| **`managementURL`**                  | <code>string \| null</code>                                                     | URL to manage the active subscription of the user. If this user has an active iOS subscription, this will point to the App Store, if the user has an active Play Store subscription it will point there. If there are no active subscriptions it will be null. If there are multiple for different platforms, it will point to the device store. |
| **`nonSubscriptionTransactions`**    | <code>PurchasesStoreTransaction[]</code>                                        |                                                                                                                                                                                                                                                                                                                                                  |

#### PurchasesEntitlementInfos

Contains all the entitlements associated to the user.

| Prop         | Type                                                                                              | Description                                                                                                                                                    |
| ------------ | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`all`**    | <code>{ [key: string]: <a href="#purchasesentitlementinfo">PurchasesEntitlementInfo</a>; }</code> | Map of all EntitlementInfo (<a href="#purchasesentitlementinfo">`PurchasesEntitlementInfo`</a>) objects (active and inactive) keyed by entitlement identifier. |
| **`active`** | <code>{ [key: string]: <a href="#purchasesentitlementinfo">PurchasesEntitlementInfo</a>; }</code> | Map of active EntitlementInfo (<a href="#purchasesentitlementinfo">`PurchasesEntitlementInfo`</a>) objects keyed by entitlement identifier.                    |

#### PurchasesEntitlementInfo

The EntitlementInfo object gives you access to all of the information about the status of a user entitlement.

| Prop                               | Type                                                                                                                    | Description                                                                                                                                                                                                                                         |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`identifier`**                   | <code>string</code>                                                                                                     | The entitlement identifier configured in the RevenueCat dashboard                                                                                                                                                                                   |
| **`isActive`**                     | <code>boolean</code>                                                                                                    | True if the user has access to this entitlement                                                                                                                                                                                                     |
| **`willRenew`**                    | <code>boolean</code>                                                                                                    | True if the underlying subscription is set to renew at the end of the billing period (expirationDate).                                                                                                                                              |
| **`periodType`**                   | <code>string</code>                                                                                                     | The last period type this entitlement was in. Either: NORMAL, INTRO, TRIAL.                                                                                                                                                                         |
| **`latestPurchaseDate`**           | <code>string</code>                                                                                                     | The latest purchase or renewal date for the entitlement in ISO8601 format.                                                                                                                                                                          |
| **`latestPurchaseDateMillis`**     | <code>number</code>                                                                                                     | The latest purchase or renewal date for the entitlement in milliseconds.                                                                                                                                                                            |
| **`originalPurchaseDate`**         | <code>string</code>                                                                                                     | The first date this entitlement was purchased in ISO8601 format.                                                                                                                                                                                    |
| **`originalPurchaseDateMillis`**   | <code>number</code>                                                                                                     | The first date this entitlement was purchased in milliseconds.                                                                                                                                                                                      |
| **`expirationDate`**               | <code>string \| null</code>                                                                                             | The expiration date for the entitlement in ISO8601, can be `null` for lifetime access. If the `periodType` is `trial`, this is the trial expiration date.                                                                                           |
| **`expirationDateMillis`**         | <code>number \| null</code>                                                                                             | The expiration date for the entitlement in milliseconds, can be `null` for lifetime access. If the `periodType` is `trial`, this is the trial expiration date.                                                                                      |
| **`store`**                        | <code>'PLAY_STORE' \| 'APP_STORE' \| 'STRIPE' \| 'MAC_APP_STORE' \| 'PROMOTIONAL' \| 'AMAZON' \| 'UNKNOWN_STORE'</code> | The store where this entitlement was unlocked from.                                                                                                                                                                                                 |
| **`productIdentifier`**            | <code>string</code>                                                                                                     | The product identifier that unlocked this entitlement                                                                                                                                                                                               |
| **`isSandbox`**                    | <code>boolean</code>                                                                                                    | False if this entitlement is unlocked via a production purchase                                                                                                                                                                                     |
| **`unsubscribeDetectedAt`**        | <code>string \| null</code>                                                                                             | The date an unsubscribe was detected in ISO8601 format. Can be `null`.                                                                                                                                                                              |
| **`unsubscribeDetectedAtMillis`**  | <code>number \| null</code>                                                                                             | The date an unsubscribe was detected in milliseconds. Can be `null`.                                                                                                                                                                                |
| **`billingIssueDetectedAt`**       | <code>string \| null</code>                                                                                             | The date a billing issue was detected in ISO8601 format. Can be `null` if there is no billing issue or an issue has been resolved                                                                                                                   |
| **`billingIssueDetectedAtMillis`** | <code>number \| null</code>                                                                                             | The date a billing issue was detected in milliseconds. Can be `null` if there is no billing issue or an issue has been resolved                                                                                                                     |
| **`ownershipType`**                | <code>'FAMILY_SHARED' \| 'PURCHASED' \| 'UNKNOWN'</code>                                                                | Supported ownership types for an entitlement. PURCHASED if the purchase was made directly by this user. FAMILY_SHARED if the purchase has been shared to this user by a family member. UNKNOWN if the purchase has no or an unknown ownership type. |

#### PurchasesStoreTransaction

List of all non subscription transactions. Use this to fetch the history of
non-subscription purchases

| Prop                        | Type                | Description                                          |
| --------------------------- | ------------------- | ---------------------------------------------------- |
| **`transactionIdentifier`** | <code>string</code> | Id of the transaction.                               |
| **`productIdentifier`**     | <code>string</code> | Product Id associated with the transaction.          |
| **`purchaseDate`**          | <code>string</code> | Purchase date of the transaction in ISO 8601 format. |

#### PurchasesOfferings

Contains all the offerings configured in RevenueCat dashboard.
For more info see https://docs.revenuecat.com/docs/entitlements

| Prop          | Type                                                                                | Description                                                                 |
| ------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **`all`**     | <code>{ [key: string]: <a href="#purchasesoffering">PurchasesOffering</a>; }</code> | Map of all Offerings [PurchasesOffering] objects keyed by their identifier. |
| **`current`** | <code><a href="#purchasesoffering">PurchasesOffering</a> \| null</code>             | Current offering configured in the RevenueCat dashboard.                    |

#### PurchasesOffering

An offering is a collection of Packages (<a href="#purchasespackage">`PurchasesPackage`</a>) available for the user to purchase.
For more info see https://docs.revenuecat.com/docs/entitlements

| Prop                    | Type                                                                  | Description                                                                                                                                                                                                                                                                                                |
| ----------------------- | --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`identifier`**        | <code>string</code>                                                   | Unique identifier defined in RevenueCat dashboard.                                                                                                                                                                                                                                                         |
| **`serverDescription`** | <code>string</code>                                                   | Offering description defined in RevenueCat dashboard.                                                                                                                                                                                                                                                      |
| **`metadata`**          | <code>{ [key: string]: unknown; }</code>                              | Offering metadata defined in RevenueCat dashboard. To access values, you need to check the type beforehand. For example: const my_unknown_value: unknown = offering.metadata['my_key']; const my_string_value: string \| undefined = typeof(my_unknown_value) === 'string' ? my_unknown_value : undefined; |
| **`availablePackages`** | <code>PurchasesPackage[]</code>                                       | Array of `Package` objects available for purchase.                                                                                                                                                                                                                                                         |
| **`lifetime`**          | <code><a href="#purchasespackage">PurchasesPackage</a> \| null</code> | Lifetime package type configured in the RevenueCat dashboard, if available.                                                                                                                                                                                                                                |
| **`annual`**            | <code><a href="#purchasespackage">PurchasesPackage</a> \| null</code> | Annual package type configured in the RevenueCat dashboard, if available.                                                                                                                                                                                                                                  |
| **`sixMonth`**          | <code><a href="#purchasespackage">PurchasesPackage</a> \| null</code> | Six month package type configured in the RevenueCat dashboard, if available.                                                                                                                                                                                                                               |
| **`threeMonth`**        | <code><a href="#purchasespackage">PurchasesPackage</a> \| null</code> | Three month package type configured in the RevenueCat dashboard, if available.                                                                                                                                                                                                                             |
| **`twoMonth`**          | <code><a href="#purchasespackage">PurchasesPackage</a> \| null</code> | Two month package type configured in the RevenueCat dashboard, if available.                                                                                                                                                                                                                               |
| **`monthly`**           | <code><a href="#purchasespackage">PurchasesPackage</a> \| null</code> | Monthly package type configured in the RevenueCat dashboard, if available.                                                                                                                                                                                                                                 |
| **`weekly`**            | <code><a href="#purchasespackage">PurchasesPackage</a> \| null</code> | Weekly package type configured in the RevenueCat dashboard, if available.                                                                                                                                                                                                                                  |

#### PurchasesPackage

Contains information about the product available for the user to purchase.
For more info see https://docs.revenuecat.com/docs/entitlements

| Prop                     | Type                                                                    | Description                                                                               |
| ------------------------ | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **`identifier`**         | <code>string</code>                                                     | Unique identifier for this package. Can be one a predefined package type or a custom one. |
| **`packageType`**        | <code><a href="#package_type">PACKAGE_TYPE</a></code>                   | Package type for the product. Will be one of [PACKAGE_TYPE].                              |
| **`product`**            | <code><a href="#purchasesstoreproduct">PurchasesStoreProduct</a></code> | Product assigned to this package.                                                         |
| **`offeringIdentifier`** | <code>string</code>                                                     | Offering this package belongs to.                                                         |

#### PurchasesStoreProduct

| Prop                              | Type                                                                        | Description                                                                                                                                                                                                                             |
| --------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`identifier`**                  | <code>string</code>                                                         | Product Id.                                                                                                                                                                                                                             |
| **`description`**                 | <code>string</code>                                                         | Description of the product.                                                                                                                                                                                                             |
| **`title`**                       | <code>string</code>                                                         | Title of the product.                                                                                                                                                                                                                   |
| **`price`**                       | <code>number</code>                                                         | <a href="#price">Price</a> of the product in the local currency. Contains the price value of defaultOption for Google Play.                                                                                                             |
| **`priceString`**                 | <code>string</code>                                                         | Formatted price of the item, including its currency sign. Contains the formatted price value of defaultOption for Google Play.                                                                                                          |
| **`currencyCode`**                | <code>string</code>                                                         | Currency code for price and original price. Contains the currency code value of defaultOption for Google Play.                                                                                                                          |
| **`introPrice`**                  | <code><a href="#purchasesintroprice">PurchasesIntroPrice</a> \| null</code> | Introductory price.                                                                                                                                                                                                                     |
| **`discounts`**                   | <code>PurchasesStoreProductDiscount[] \| null</code>                        | Collection of discount offers for a product. Null for Android.                                                                                                                                                                          |
| **`productCategory`**             | <code><a href="#product_category">PRODUCT_CATEGORY</a> \| null</code>       | Product category.                                                                                                                                                                                                                       |
| **`subscriptionPeriod`**          | <code>string \| null</code>                                                 | Subscription period, specified in ISO 8601 format. For example, P1W equates to one week, P1M equates to one month, P3M equates to three months, P6M equates to six months, and P1Y equates to one year. Note: Not available for Amazon. |
| **`defaultOption`**               | <code><a href="#subscriptionoption">SubscriptionOption</a> \| null</code>   | Default subscription option for a product. Google Play only.                                                                                                                                                                            |
| **`subscriptionOptions`**         | <code>SubscriptionOption[] \| null</code>                                   | Collection of subscription options for a product. Google Play only.                                                                                                                                                                     |
| **`presentedOfferingIdentifier`** | <code>string \| null</code>                                                 | Offering identifier the store product was presented from. Null if not using offerings or if fetched directly from store via getProducts.                                                                                                |

#### PurchasesIntroPrice

| Prop                      | Type                | Description                                                                                      |
| ------------------------- | ------------------- | ------------------------------------------------------------------------------------------------ |
| **`price`**               | <code>number</code> | <a href="#price">Price</a> in the local currency.                                                |
| **`priceString`**         | <code>string</code> | Formatted price, including its currency sign, such as €3.99.                                     |
| **`cycles`**              | <code>number</code> | Number of subscription billing periods for which the user will be given the discount, such as 3. |
| **`period`**              | <code>string</code> | Billing period of the discount, specified in ISO 8601 format.                                    |
| **`periodUnit`**          | <code>string</code> | Unit for the billing period of the discount, can be DAY, WEEK, MONTH or YEAR.                    |
| **`periodNumberOfUnits`** | <code>number</code> | Number of units for the billing period of the discount.                                          |

#### PurchasesStoreProductDiscount

| Prop                      | Type                | Description                                                                                      |
| ------------------------- | ------------------- | ------------------------------------------------------------------------------------------------ |
| **`identifier`**          | <code>string</code> | Identifier of the discount.                                                                      |
| **`price`**               | <code>number</code> | <a href="#price">Price</a> in the local currency.                                                |
| **`priceString`**         | <code>string</code> | Formatted price, including its currency sign, such as €3.99.                                     |
| **`cycles`**              | <code>number</code> | Number of subscription billing periods for which the user will be given the discount, such as 3. |
| **`period`**              | <code>string</code> | Billing period of the discount, specified in ISO 8601 format.                                    |
| **`periodUnit`**          | <code>string</code> | Unit for the billing period of the discount, can be DAY, WEEK, MONTH or YEAR.                    |
| **`periodNumberOfUnits`** | <code>number</code> | Number of units for the billing period of the discount.                                          |

#### SubscriptionOption

Contains all details associated with a SubscriptionOption
Used only for Google

| Prop                              | Type                                                          | Description                                                                                                                                                                                                                                                                                                                                |
| --------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`id`**                          | <code>string</code>                                           | Identifier of the subscription option If this <a href="#subscriptionoption">SubscriptionOption</a> represents a base plan, this will be the basePlanId. If it represents an offer, it will be {basePlanId}:{offerId}                                                                                                                       |
| **`storeProductId`**              | <code>string</code>                                           | Identifier of the StoreProduct associated with this SubscriptionOption This will be {subId}:{basePlanId}                                                                                                                                                                                                                                   |
| **`productId`**                   | <code>string</code>                                           | Identifer of the subscription associated with this SubscriptionOption This will be {subId}                                                                                                                                                                                                                                                 |
| **`pricingPhases`**               | <code>PricingPhase[]</code>                                   | Pricing phases defining a user's payment plan for the product over time.                                                                                                                                                                                                                                                                   |
| **`tags`**                        | <code>string[]</code>                                         | Tags defined on the base plan or offer. Empty for Amazon.                                                                                                                                                                                                                                                                                  |
| **`isBasePlan`**                  | <code>boolean</code>                                          | True if this <a href="#subscriptionoption">SubscriptionOption</a> represents a subscription base plan (rather than an offer).                                                                                                                                                                                                              |
| **`billingPeriod`**               | <code><a href="#period">Period</a> \| null</code>             | The subscription period of fullPricePhase (after free and intro trials).                                                                                                                                                                                                                                                                   |
| **`isPrepaid`**                   | <code>boolean</code>                                          | True if the subscription is pre-paid.                                                                                                                                                                                                                                                                                                      |
| **`fullPricePhase`**              | <code><a href="#pricingphase">PricingPhase</a> \| null</code> | The full price <a href="#pricingphase">PricingPhase</a> of the subscription. Looks for the last price phase of the <a href="#subscriptionoption">SubscriptionOption</a>.                                                                                                                                                                   |
| **`freePhase`**                   | <code><a href="#pricingphase">PricingPhase</a> \| null</code> | The free trial <a href="#pricingphase">PricingPhase</a> of the subscription. Looks for the first pricing phase of the <a href="#subscriptionoption">SubscriptionOption</a> where amountMicros is 0. There can be a freeTrialPhase and an introductoryPhase in the same <a href="#subscriptionoption">SubscriptionOption</a>.               |
| **`introPhase`**                  | <code><a href="#pricingphase">PricingPhase</a> \| null</code> | The intro trial <a href="#pricingphase">PricingPhase</a> of the subscription. Looks for the first pricing phase of the <a href="#subscriptionoption">SubscriptionOption</a> where amountMicros is greater than 0. There can be a freeTrialPhase and an introductoryPhase in the same <a href="#subscriptionoption">SubscriptionOption</a>. |
| **`presentedOfferingIdentifier`** | <code>string \| null</code>                                   | Offering identifier the subscription option was presented from                                                                                                                                                                                                                                                                             |

#### PricingPhase

Contains all the details associated with a <a href="#pricingphase">PricingPhase</a>

| Prop                    | Type                                                                      | Description                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **`billingPeriod`**     | <code><a href="#period">Period</a></code>                                 | Billing period for which the <a href="#pricingphase">PricingPhase</a> applies                                         |
| **`recurrenceMode`**    | <code><a href="#recurrence_mode">RECURRENCE_MODE</a> \| null</code>       | Recurrence mode of the <a href="#pricingphase">PricingPhase</a>                                                       |
| **`billingCycleCount`** | <code>number \| null</code>                                               | Number of cycles for which the pricing phase applies. Null for infiniteRecurring or finiteRecurring recurrence modes. |
| **`price`**             | <code><a href="#price">Price</a></code>                                   | <a href="#price">Price</a> of the <a href="#pricingphase">PricingPhase</a>                                            |
| **`offerPaymentMode`**  | <code><a href="#offer_payment_mode">OFFER_PAYMENT_MODE</a> \| null</code> | Indicates how the pricing phase is charged for finiteRecurring pricing phases                                         |

#### Period

Contains all the details associated with a <a href="#period">Period</a>

| Prop          | Type                                                | Description                                                                                                                                                                       |
| ------------- | --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`unit`**    | <code><a href="#period_unit">PERIOD_UNIT</a></code> | The number of period units: day, week, month, year, unknown                                                                                                                       |
| **`value`**   | <code>number</code>                                 | The increment of time that a subscription period is specified in                                                                                                                  |
| **`iso8601`** | <code>string</code>                                 | Specified in ISO 8601 format. For example, P1W equates to one week, P1M equates to one month, P3M equates to three months, P6M equates to six months, and P1Y equates to one year |

#### Price

Contains all the details associated with a <a href="#price">Price</a>

| Prop               | Type                | Description                                                                                                                                                                                                                                              |
| ------------------ | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`formatted`**    | <code>string</code> | Formatted price of the item, including its currency sign. For example $3.00                                                                                                                                                                              |
| **`amountMicros`** | <code>number</code> | <a href="#price">Price</a> in micro-units, where 1,000,000 micro-units equal one unit of the currency. For example, if price is "€7.99", price_amount_micros is 7,990,000. This value represents the localized, rounded price for a particular currency. |
| **`currencyCode`** | <code>string</code> | Returns ISO 4217 currency code for price and original price. For example, if price is specified in British pounds sterling, price_currency_code is "GBP". If currency code cannot be determined, currency symbol is returned.                            |

#### GetProductOptions

| Prop                     | Type                                                          | Description                                                                                                           |
| ------------------------ | ------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **`productIdentifiers`** | <code>string[]</code>                                         | Array of product identifiers to obtain                                                                                |
| **`type`**               | <code><a href="#product_category">PRODUCT_CATEGORY</a></code> | Optional type of products to fetch, can be SUBSCRIPTION or NON_SUBSCRIPTION. SUBSCRIPTION by default. Ignored in iOS. |

#### PurchaseStoreProductOptions

| Prop                            | Type                                                                                | Description                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`product`**                   | <code><a href="#purchasesstoreproduct">PurchasesStoreProduct</a></code>             | The product you want to purchase                                                                                                                                                                                                                                                                                                                      |
| **`googleProductChangeInfo`**   | <code><a href="#googleproductchangeinfo">GoogleProductChangeInfo</a> \| null</code> | Android only. Optional <a href="#googleproductchangeinfo">GoogleProductChangeInfo</a> you wish to upgrade from containing the oldProductIdentifier and the optional prorationMode.                                                                                                                                                                    |
| **`googleIsPersonalizedPrice`** | <code>boolean \| null</code>                                                        | Android and Google only. Optional boolean indicates personalized pricing on products available for purchase in the EU. For compliance with EU regulations. User will see "This price has been customized for you" in the purchase dialog when true. See https://developer.android.com/google/play/billing/integrate#personalized-price for more info. |

#### GoogleProductChangeInfo

Holds the information used when upgrading from another sku. For Android use only.

| Prop                       | Type                                                      | Description                                                  |
| -------------------------- | --------------------------------------------------------- | ------------------------------------------------------------ |
| **`oldProductIdentifier`** | <code>string</code>                                       | The old product identifier to upgrade from.                  |
| **`prorationMode`**        | <code><a href="#proration_mode">PRORATION_MODE</a></code> | The [PRORATION_MODE] to use when upgrading the given oldSKU. |

#### PurchaseDiscountedProductOptions

| Prop           | Type                                                                            | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **`product`**  | <code><a href="#purchasesstoreproduct">PurchasesStoreProduct</a></code>         | The product you want to purchase                                                     |
| **`discount`** | <code><a href="#purchasespromotionaloffer">PurchasesPromotionalOffer</a></code> | Discount to apply to this package. Retrieve this discount using getPromotionalOffer. |

#### PurchasesPromotionalOffer

| Prop                | Type                |
| ------------------- | ------------------- |
| **`identifier`**    | <code>string</code> |
| **`keyIdentifier`** | <code>string</code> |
| **`nonce`**         | <code>string</code> |
| **`signature`**     | <code>string</code> |
| **`timestamp`**     | <code>number</code> |

#### PurchasePackageOptions

| Prop                            | Type                                                                                | Description                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`aPackage`**                  | <code><a href="#purchasespackage">PurchasesPackage</a></code>                       | The Package you wish to purchase. You can get the Packages by calling getOfferings                                                                                                                                                                                                                                                                    |
| **`googleProductChangeInfo`**   | <code><a href="#googleproductchangeinfo">GoogleProductChangeInfo</a> \| null</code> | Android only. Optional <a href="#googleproductchangeinfo">GoogleProductChangeInfo</a> you wish to upgrade from containing the oldProductIdentifier and the optional prorationMode.                                                                                                                                                                    |
| **`googleIsPersonalizedPrice`** | <code>boolean \| null</code>                                                        | Android and Google only. Optional boolean indicates personalized pricing on products available for purchase in the EU. For compliance with EU regulations. User will see "This price has been customized for you" in the purchase dialog when true. See https://developer.android.com/google/play/billing/integrate#personalized-price for more info. |

#### PurchaseSubscriptionOptionOptions

| Prop                            | Type                                                                                | Description                                                                                                                                                                                                                                                                                                                                           |
| ------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`subscriptionOption`**        | <code><a href="#subscriptionoption">SubscriptionOption</a></code>                   | The <a href="#subscriptionoption">SubscriptionOption</a> you wish to purchase. You can get the <a href="#subscriptionoption">SubscriptionOption</a> from StoreProducts by calling getOfferings                                                                                                                                                        |
| **`googleProductChangeInfo`**   | <code><a href="#googleproductchangeinfo">GoogleProductChangeInfo</a> \| null</code> | Android only. Optional <a href="#googleproductchangeinfo">GoogleProductChangeInfo</a> you wish to upgrade from containing the oldProductIdentifier and the optional prorationMode.                                                                                                                                                                    |
| **`googleIsPersonalizedPrice`** | <code>boolean \| null</code>                                                        | Android and Google only. Optional boolean indicates personalized pricing on products available for purchase in the EU. For compliance with EU regulations. User will see "This price has been customized for you" in the purchase dialog when true. See https://developer.android.com/google/play/billing/integrate#personalized-price for more info. |

#### PurchaseDiscountedPackageOptions

| Prop           | Type                                                                            | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| **`aPackage`** | <code><a href="#purchasespackage">PurchasesPackage</a></code>                   | The Package you wish to purchase. You can get the Packages by calling getOfferings   |
| **`discount`** | <code><a href="#purchasespromotionaloffer">PurchasesPromotionalOffer</a></code> | Discount to apply to this package. Retrieve this discount using getPromotionalOffer. |

#### LogInResult

Holds the logIn result

| Prop               | Type                                                  | Description                                                                        |
| ------------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------- |
| **`customerInfo`** | <code><a href="#customerinfo">CustomerInfo</a></code> | The Customer Info for the user.                                                    |
| **`created`**      | <code>boolean</code>                                  | True if the call resulted in a new user getting created in the RevenueCat backend. |

#### SyncObserverModeAmazonPurchaseOptions

| Prop                  | Type                        | Description                                                                     |
| --------------------- | --------------------------- | ------------------------------------------------------------------------------- |
| **`productID`**       | <code>string</code>         | Product ID associated to the purchase.                                          |
| **`receiptID`**       | <code>string</code>         | ReceiptId that represents the Amazon purchase.                                  |
| **`amazonUserID`**    | <code>string</code>         | Amazon's userID. This parameter will be ignored when syncing a Google purchase. |
| **`isoCurrencyCode`** | <code>string \| null</code> | Product's currency code in ISO 4217 format.                                     |
| **`price`**           | <code>number \| null</code> | Product's price.                                                                |

#### IntroEligibility

Holds the introductory price status

| Prop              | Type                                                                          | Description                               |
| ----------------- | ----------------------------------------------------------------------------- | ----------------------------------------- |
| **`status`**      | <code><a href="#intro_eligibility_status">INTRO_ELIGIBILITY_STATUS</a></code> | The introductory price eligibility status |
| **`description`** | <code>string</code>                                                           | Description of the status                 |

#### GetPromotionalOfferOptions

| Prop           | Type                                                                                    | Description                                                                                               |
| -------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| **`product`**  | <code><a href="#purchasesstoreproduct">PurchasesStoreProduct</a></code>                 | The <a href="#purchasesstoreproduct">`PurchasesStoreProduct`</a> the user intends to purchase.            |
| **`discount`** | <code><a href="#purchasesstoreproductdiscount">PurchasesStoreProductDiscount</a></code> | The <a href="#purchasesstoreproductdiscount">`PurchasesStoreProductDiscount`</a> to apply to the product. |

### Type Aliases

#### CustomerInfoUpdateListener

Listener used on updated customer info

<code>(customerInfo: <a href="#customerinfo">CustomerInfo</a>): void</code>

#### PurchasesCallbackId

<code>string</code>

#### MakePurchaseResult

<code>{ productIdentifier: string; customerInfo: <a href="#customerinfo">CustomerInfo</a>; }</code>

#### LogHandler

<code>(logLevel: <a href="#log_level">LOG_LEVEL</a>, message: string): void</code>

### Enums

#### PACKAGE_TYPE

| Members           | Value                      | Description                                                      |
| ----------------- | -------------------------- | ---------------------------------------------------------------- |
| **`UNKNOWN`**     | <code>"UNKNOWN"</code>     | A package that was defined with a custom identifier.             |
| **`CUSTOM`**      | <code>"CUSTOM"</code>      | A package that was defined with a custom identifier.             |
| **`LIFETIME`**    | <code>"LIFETIME"</code>    | A package configured with the predefined lifetime identifier.    |
| **`ANNUAL`**      | <code>"ANNUAL"</code>      | A package configured with the predefined annual identifier.      |
| **`SIX_MONTH`**   | <code>"SIX_MONTH"</code>   | A package configured with the predefined six month identifier.   |
| **`THREE_MONTH`** | <code>"THREE_MONTH"</code> | A package configured with the predefined three month identifier. |
| **`TWO_MONTH`**   | <code>"TWO_MONTH"</code>   | A package configured with the predefined two month identifier.   |
| **`MONTHLY`**     | <code>"MONTHLY"</code>     | A package configured with the predefined monthly identifier.     |
| **`WEEKLY`**      | <code>"WEEKLY"</code>      | A package configured with the predefined weekly identifier.      |

#### PRODUCT_CATEGORY

| Members                | Value                           | Description                             |
| ---------------------- | ------------------------------- | --------------------------------------- |
| **`NON_SUBSCRIPTION`** | <code>"NON_SUBSCRIPTION"</code> | A type of product for non-subscription. |
| **`SUBSCRIPTION`**     | <code>"SUBSCRIPTION"</code>     | A type of product for subscriptions.    |
| **`UNKNOWN`**          | <code>"UNKNOWN"</code>          | A type of product for unknowns.         |

#### PERIOD_UNIT

| Members       | Value                  |
| ------------- | ---------------------- |
| **`DAY`**     | <code>"DAY"</code>     |
| **`WEEK`**    | <code>"WEEK"</code>    |
| **`MONTH`**   | <code>"MONTH"</code>   |
| **`YEAR`**    | <code>"YEAR"</code>    |
| **`UNKNOWN`** | <code>"UNKNOWN"</code> |

#### RECURRENCE_MODE

| Members                  | Value          | Description                                                 |
| ------------------------ | -------------- | ----------------------------------------------------------- |
| **`INFINITE_RECURRING`** | <code>1</code> | Pricing phase repeats infinitely until cancellation         |
| **`FINITE_RECURRING`**   | <code>2</code> | Pricing phase repeats for a fixed number of billing periods |
| **`NON_RECURRING`**      | <code>3</code> | Pricing phase does not repeat                               |

#### OFFER_PAYMENT_MODE

| Members                            | Value                                       | Description                                                           |
| ---------------------------------- | ------------------------------------------- | --------------------------------------------------------------------- |
| **`FREE_TRIAL`**                   | <code>"FREE_TRIAL"</code>                   | Subscribers don't pay until the specified period ends                 |
| **`SINGLE_PAYMENT`**               | <code>"SINGLE_PAYMENT"</code>               | Subscribers pay up front for a specified period                       |
| **`DISCOUNTED_RECURRING_PAYMENT`** | <code>"DISCOUNTED_RECURRING_PAYMENT"</code> | Subscribers pay a discounted amount for a specified number of periods |

#### PRORATION_MODE

| Members                                             | Value          | Description                                                                                                                                                                               |
| --------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`UNKNOWN_SUBSCRIPTION_UPGRADE_DOWNGRADE_POLICY`** | <code>0</code> |                                                                                                                                                                                           |
| **`IMMEDIATE_WITH_TIME_PRORATION`**                 | <code>1</code> | Replacement takes effect immediately, and the remaining time will be prorated and credited to the user. This is the current default behavior.                                             |
| **`IMMEDIATE_AND_CHARGE_PRORATED_PRICE`**           | <code>2</code> | Replacement takes effect immediately, and the billing cycle remains the same. The price for the remaining period will be charged. This option is only available for subscription upgrade. |
| **`IMMEDIATE_WITHOUT_PRORATION`**                   | <code>3</code> | Replacement takes effect immediately, and the new price will be charged on next recurrence time. The billing cycle stays the same.                                                        |
| **`DEFERRED`**                                      | <code>4</code> | Replacement takes effect when the old plan expires, and the new price will be charged at the same time.                                                                                   |
| **`IMMEDIATE_AND_CHARGE_FULL_PRICE`**               | <code>5</code> | Replacement takes effect immediately, and the user is charged full price of new plan and is given a full billing cycle of subscription, plus remaining prorated time from the old plan.   |

#### LOG_LEVEL

| Members       | Value                  |
| ------------- | ---------------------- |
| **`VERBOSE`** | <code>"VERBOSE"</code> |
| **`DEBUG`**   | <code>"DEBUG"</code>   |
| **`INFO`**    | <code>"INFO"</code>    |
| **`WARN`**    | <code>"WARN"</code>    |
| **`ERROR`**   | <code>"ERROR"</code>   |

#### INTRO_ELIGIBILITY_STATUS

| Members                                              | Value          | Description                                                                  |
| ---------------------------------------------------- | -------------- | ---------------------------------------------------------------------------- |
| **`INTRO_ELIGIBILITY_STATUS_UNKNOWN`**               | <code>0</code> | RevenueCat doesn't have enough information to determine eligibility.         |
| **`INTRO_ELIGIBILITY_STATUS_INELIGIBLE`**            | <code>1</code> | The user is not eligible for a free trial or intro pricing for this product. |
| **`INTRO_ELIGIBILITY_STATUS_ELIGIBLE`**              | <code>2</code> | The user is eligible for a free trial or intro pricing for this product.     |
| **`INTRO_ELIGIBILITY_STATUS_NO_INTRO_OFFER_EXISTS`** | <code>3</code> | There is no free trial or intro pricing for this product.                    |

#### BILLING_FEATURE

| Members                         | Value          | Description                              |
| ------------------------------- | -------------- | ---------------------------------------- |
| **`SUBSCRIPTIONS`**             | <code>0</code> | Purchase/query for subscriptions.        |
| **`SUBSCRIPTIONS_UPDATE`**      | <code>1</code> | Subscriptions update/replace.            |
| **`IN_APP_ITEMS_ON_VR`**        | <code>2</code> | Purchase/query for in-app items on VR.   |
| **`SUBSCRIPTIONS_ON_VR`**       | <code>3</code> | Purchase/query for subscriptions on VR.  |
| **`PRICE_CHANGE_CONFIRMATION`** | <code>4</code> | Launch a price change confirmation flow. |

#### REFUND_REQUEST_STATUS

| Members              | Value          | Description                                                        |
| -------------------- | -------------- | ------------------------------------------------------------------ |
| **`SUCCESS`**        | <code>0</code> | Apple has received the refund request.                             |
| **`USER_CANCELLED`** | <code>1</code> | User canceled submission of the refund request.                    |
| **`ERROR`**          | <code>2</code> | There was an error with the request. See message for more details. |

</docgen-api>
