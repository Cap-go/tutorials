# Capacitor Emarsys SDK

![Maintenance](https://img.shields.io/maintenance/yes/2024)
[![npm](https://img.shields.io/npm/v/@rollershop/capacitor-emarsys-sdk)](https://www.npmjs.com/package/@rollershop/capacitor-emarsys-sdk)

This Plugin is used as a wrapper for the [Emarsys SDK](https://help.emarsys.com/hc/en-us).

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Content**

- [Helpful Links](#helpful-links)
- [SDK Versions](#sdk-versions)
- [Install](#install)
- [Setup](#setup)
  - [Initialize SDK](#initialize-sdk)
  - [Examples](#examples)
  - [iOS](#ios)
  - [Android](#android)
- [Flow](#flow)
- [In-App](#in-app)
- [Predict](#predict)
- [DeepLink](#deeplink)
- [API](#api)
  - [checkPermissions()](#checkpermissions)
  - [requestPermissions()](#requestpermissions)
  - [register()](#register)
  - [setContact(...)](#setcontact)
  - [setAuthenticatedContact(...)](#setauthenticatedcontact)
  - [clearContact()](#clearcontact)
  - [getPushToken()](#getpushtoken)
  - [clearPushToken()](#clearpushtoken)
  - [pauseInApp()](#pauseinapp)
  - [isInAppPaused()](#isinapppaused)
  - [resumeInApp()](#resumeinapp)
  - [trackItem(...)](#trackitem)
  - [trackCategory(...)](#trackcategory)
  - [trackSearch(...)](#tracksearch)
  - [trackTag(...)](#tracktag)
  - [trackCard(...)](#trackcard)
  - [trackPurchase(...)](#trackpurchase)
  - [trackCustomEvent(...)](#trackcustomevent)
  - [recommendProducts(...)](#recommendproducts)
  - [trackRecommendationClick(...)](#trackrecommendationclick)
  - [fetchMessages()](#fetchmessages)
  - [addTag(...)](#addtag)
  - [removeTag(...)](#removetag)
  - [getApplicationCode()](#getapplicationcode)
  - [setApplicationCode(...)](#setapplicationcode)
  - [getMerchantId()](#getmerchantid)
  - [setMerchantId(...)](#setmerchantid)
  - [getContactFieldId()](#getcontactfieldid)
  - [getHardwareId()](#gethardwareid)
  - [getLanguageCode()](#getlanguagecode)
  - [getSdkVersion()](#getsdkversion)
  - [addListener('pushMessageEvent', ...)](#addlistenerpushmessageevent-)
  - [addListener('silentPushMessageInformation', ...)](#addlistenersilentpushmessageinformation-)
  - [removeAllListeners()](#removealllisteners)
  - [Interfaces](#interfaces)
  - [Type Aliases](#type-aliases)
- [Changelog](#changelog)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Helpful Links

- [iOS Library](https://github.com/emartech/ios-emarsys-sdk/wiki)
- [Emarsys Platform](https://suite56.emarsys.net/)

## SDK Versions

- iOS: [`3.8.0`](https://github.com/emartech/ios-emarsys-sdk/releases/tag/3.8.0)
- Android: Not implemented

## Install

```bash
npm install @rollershop/capacitor-emarsys-sdk
npx cap sync
```

## Setup

### Initialize SDK

<docgen-config>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

The following options are available to initialize the SDK:

| Prop                              | Type                | Description                                                                                                                                                                           | Since |
| --------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`mobileEngageApplicationCode`** | <code>string</code> | Emarsys App code, which is generated when the app is added to the account.                                                                                                            | 1.0.0 |
| **`merchantId`**                  | <code>string</code> | Emarsys Predict Merchant ID (If the Predict feature is enabled on the Emarsys account).                                                                                               | 1.0.0 |
| **`consoleLogLevels`**            | <code>{}</code>     | The default console logging is only showing logs when you call an unallowed method. You are able to modify the allowed loglevels for console logging, by setting it during the setup. | 1.0.0 |

### Examples

In `capacitor.config.json`:

```json
{
  "plugins": {
    "Emarsys": {
      "mobileEngageApplicationCode": 'yourApplicationCode',
      "merchantId": 'yourMerchantId',
      "consoleLogLevels": ['info', 'debug', '...']
    }
  }
}
```

In `capacitor.config.ts`:

```ts
/// <reference types="@rollershop/capacitor-emarsys-sdk" />

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  plugins: {
    Emarsys: {
      mobileEngageApplicationCode: 'yourApplicationCode',
      merchantId: 'yourMerchantId',
      consoleLogLevels: ['info', 'debug', '...'],
    },
  },
};

export default config;
```

</docgen-config>

### iOS

The following changes needs to be done in `AppDelegate.swift`:

1. Add import: `import RollershopCapacitorEmarsysSdk`
2. Extend the base class:

```swift
class AppDelegate: EmarsysDelegate {
...
```

#### Rich Push Notifications

Push notification could show media content and action buttons besides the title and body. Push notifications with these types of contents are called Rich Notifications.

**Setup**:

1. Add a new Notification Service Extension target to your project
   - [Guide](https://developer.apple.com/documentation/usernotifications/modifying_content_in_newly_delivered_notifications)
   - Name: `NotificationService`
   - Language: `swift`
   - If Xcode ask's you tu change the scheme, deny it
2. Navigate to your App's main `Podfile` and add at the bottom of the file:
```
target "NotificationService" do
  pod 'EmarsysNotificationService'
end
```
3. You may need to run `pod install` after it
4. Open the `NotificationService.swift` and replace the content with:
```swift
import EmarsysNotificationService

class NotificationService: EMSNotificationService {
}
```

### Android

Android is not supported at the moment...

## Flow

You need to call `register` on **every** app start! This is required, because it could be that the push token has changed and because of the implemented queue. Stacked Messages are send after the `register` completes to make sure we receive events that were emitted while the app was killed.

Before the `register` call the listeners should be added.

Example of a `PushService.ts`:

```ts
import { Emarsys } from '@rollershop/capacitor-emarsys-sdk';

public init() {
  Emarsys.addListener('pushMessageEvent', message => {
    // do something
  });
  // add other listeners
  
  Emarsys.register().then(response => {
    // do something with the token (if required)
  });
}
```

This `init()` function needs to be called on every app start. Remember that `requestPermissions()` also needs to be called (if not granted yet), so call that in a good moment as well.

## In-App

Because this Plugin is for Capacitor, Inline In-App Messages can't work.

They work by being loaded into a specific view by an id. Because Capacitor works by only having one view with the webview which contains the sources of the inner "website", there are no views where a Inline In-App message could be load into.

## Predict

To use the Predict functionality, you have to setup your merchantId during the initialization of the SDK.

At the current time Predict does not support authenticating users with Open ID Connect, identifying a contact with setAuthenticatedContact will disable the usage of Predict features!

## DeepLink

In order to track email link clicks that open the application directly with the Emarsys SDK, read [here](https://github.com/emartech/ios-emarsys-sdk/wiki#5-deeplink).

## API

<docgen-index>

* [`checkPermissions()`](#checkpermissions)
* [`requestPermissions()`](#requestpermissions)
* [`register()`](#register)
* [`setContact(...)`](#setcontact)
* [`setAuthenticatedContact(...)`](#setauthenticatedcontact)
* [`clearContact()`](#clearcontact)
* [`getPushToken()`](#getpushtoken)
* [`clearPushToken()`](#clearpushtoken)
* [`pauseInApp()`](#pauseinapp)
* [`isInAppPaused()`](#isinapppaused)
* [`resumeInApp()`](#resumeinapp)
* [`trackItem(...)`](#trackitem)
* [`trackCategory(...)`](#trackcategory)
* [`trackSearch(...)`](#tracksearch)
* [`trackTag(...)`](#tracktag)
* [`trackCard(...)`](#trackcard)
* [`trackPurchase(...)`](#trackpurchase)
* [`trackCustomEvent(...)`](#trackcustomevent)
* [`recommendProducts(...)`](#recommendproducts)
* [`trackRecommendationClick(...)`](#trackrecommendationclick)
* [`fetchMessages()`](#fetchmessages)
* [`addTag(...)`](#addtag)
* [`removeTag(...)`](#removetag)
* [`getApplicationCode()`](#getapplicationcode)
* [`setApplicationCode(...)`](#setapplicationcode)
* [`getMerchantId()`](#getmerchantid)
* [`setMerchantId(...)`](#setmerchantid)
* [`getContactFieldId()`](#getcontactfieldid)
* [`getHardwareId()`](#gethardwareid)
* [`getLanguageCode()`](#getlanguagecode)
* [`getSdkVersion()`](#getsdkversion)
* [`addListener('pushMessageEvent', ...)`](#addlistenerpushmessageevent-)
* [`addListener('silentPushMessageInformation', ...)`](#addlistenersilentpushmessageinformation-)
* [`removeAllListeners()`](#removealllisteners)
* [Interfaces](#interfaces)
* [Type Aliases](#type-aliases)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### checkPermissions()

```typescript
checkPermissions() => any
```

Check permission to receive push notifications.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### requestPermissions()

```typescript
requestPermissions() => any
```

Request permission to receive push notifications.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### register()

```typescript
register() => any
```

Register the app to receive push notifications.

This method will resolve with the push token or reject if there was a problem. It does not prompt the user for notification permissions, use `requestPermissions()` first.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### setContact(...)

```typescript
setContact(options: SetContactOptions) => any
```

After application setup is finished, you can use this method to identify the user with `contactFieldValue`.

Without contact identification all tracked events will be linked to an anonymous contact in Mobile Engage and will rely on visitor cookies in case of Predict.

| Param         | Type                                                            |
| ------------- | --------------------------------------------------------------- |
| **`options`** | <code><a href="#setcontactoptions">SetContactOptions</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### setAuthenticatedContact(...)

```typescript
setAuthenticatedContact(options: SetAuthenticatedContactOptions) => any
```

After the application setup is finished, you can use this method to identify the user with an `openIdToken`.

Without contact identification all tracked events will be linked to an anonymous contact in Mobile Engage and will rely on visitor cookies in case of Predict.

| Param         | Type                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#setauthenticatedcontactoptions">SetAuthenticatedContactOptions</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### clearContact()

```typescript
clearContact() => any
```

When the user signs out, this method should be used.

You only need to call `clearContact` when you explicitly want to sign out the contact from Emarsys even if the user isn’t logged in into your application.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### getPushToken()

```typescript
getPushToken() => any
```

Use this method to get the current push token.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### clearPushToken()

```typescript
clearPushToken() => any
```

Use this method to remove the push token of the contact.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### pauseInApp()

```typescript
pauseInApp() => any
```

When a critical activity starts and should not be interrupted by In-App, pause In-App messages.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### isInAppPaused()

```typescript
isInAppPaused() => any
```

Use this method to check if in app messages are paused.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### resumeInApp()

```typescript
resumeInApp() => any
```

In order to show In-App messages after being paused, use the resume method.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### trackItem(...)

```typescript
trackItem(options: { itemId: string; }) => any
```

If an item was viewed use the `trackItemView` method with an itemId.

| Param         | Type                             |
| ------------- | -------------------------------- |
| **`options`** | <code>{ itemId: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### trackCategory(...)

```typescript
trackCategory(options: { categoryPath: string; }) => any
```

When the user navigates between the categories you should call `trackCategoryView` in every navigation. Be aware to send `categoryPath` in the required format. Please visit [Predict's documentation](https://dev.emarsys.com/v2/web-extend-command-reference) for more information.

| Param         | Type                                   |
| ------------- | -------------------------------------- |
| **`options`** | <code>{ categoryPath: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### trackSearch(...)

```typescript
trackSearch(options: { searchTerm: string; }) => any
```

To report search terms entered by the contact use `trackSearchTerm` method.

| Param         | Type                                 |
| ------------- | ------------------------------------ |
| **`options`** | <code>{ searchTerm: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### trackTag(...)

```typescript
trackTag(options: { tag: string; }) => any
```

To report search terms entered by the contact use `trackSearchTerm` method.

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ tag: string; }</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### trackCard(...)

```typescript
trackCard(options: CardItems) => any
```

When you want to track the cart items in the basket you can call this method with a list of CartItems.

| Param         | Type                                            |
| ------------- | ----------------------------------------------- |
| **`options`** | <code><a href="#carditems">CardItems</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### trackPurchase(...)

```typescript
trackPurchase(options: Purchase) => any
```

To report a purchase event you should call this method with the items purchased and with an `orderId`.

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code><a href="#purchase">Purchase</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### trackCustomEvent(...)

```typescript
trackCustomEvent(event: CustomEvent) => any
```

| Param       | Type                                                |
| ----------- | --------------------------------------------------- |
| **`event`** | <code><a href="#customevent">CustomEvent</a></code> |

**Returns:** <code>any</code>

--------------------


### recommendProducts(...)

```typescript
recommendProducts(options: RecommendedProductOptions) => any
```

With the Emarsys SDK you can ask for product recommendations based on different recommendation logics.

This method is also going to track the value attached to the logic on the backend, so no additional tracking needed when using recommendations!

| Param         | Type                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#recommendedproductoptions">RecommendedProductOptions</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### trackRecommendationClick(...)

```typescript
trackRecommendationClick(product: Product) => any
```

The Emarsys SDK doesn't track automatically recommendationClicks, so you have to call manually `trackRecommendationClick` when an interaction happens with any of the recommended `products`.

| Param         | Type                                        |
| ------------- | ------------------------------------------- |
| **`product`** | <code><a href="#product">Product</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### fetchMessages()

```typescript
fetchMessages() => any
```

In order to receive the messageInbox content, you can use this method.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### addTag(...)

```typescript
addTag(options: InboxTag) => any
```

To label a message with a tag, you can use this method. (for example: "READ", "SEEN" etc)

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code><a href="#inboxtag">InboxTag</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### removeTag(...)

```typescript
removeTag(options: InboxTag) => any
```

To remove a label from a message, you can use this method.

| Param         | Type                                          |
| ------------- | --------------------------------------------- |
| **`options`** | <code><a href="#inboxtag">InboxTag</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### getApplicationCode()

```typescript
getApplicationCode() => any
```

Provides what is the actual `applicationCode` set in the SDK.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### setApplicationCode(...)

```typescript
setApplicationCode(options: ApplicationCode) => any
```

If any error occurs during the change process, the Mobile Engage feature will be turned off.

| Param         | Type                                                        |
| ------------- | ----------------------------------------------------------- |
| **`options`** | <code><a href="#applicationcode">ApplicationCode</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### getMerchantId()

```typescript
getMerchantId() => any
```

Provides what is the actual `merchantId` set in the SDK.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### setMerchantId(...)

```typescript
setMerchantId(options: MerchantId) => any
```

Change the actual `merchantId` that is set in the SDK.

| Param         | Type                                              |
| ------------- | ------------------------------------------------- |
| **`options`** | <code><a href="#merchantid">MerchantId</a></code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### getContactFieldId()

```typescript
getContactFieldId() => any
```

Provides what is the actual `contactFieldId` set in the SDK.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### getHardwareId()

```typescript
getHardwareId() => any
```

Provides what is the actual `hardwareId` set in the SDK.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### getLanguageCode()

```typescript
getLanguageCode() => any
```

Provides what is the actual language of the application.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### getSdkVersion()

```typescript
getSdkVersion() => any
```

Provides the actual `sdkVersion`

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### addListener('pushMessageEvent', ...)

```typescript
addListener(eventName: 'pushMessageEvent', listenerFunc: (event: PushMessageEvent) => void) => Promise<PluginListenerHandle> & PluginListenerHandle
```

Called when a event is received

| Param              | Type                                                                              |
| ------------------ | --------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'pushMessageEvent'</code>                                                   |
| **`listenerFunc`** | <code>(event: <a href="#pushmessageevent">PushMessageEvent</a>) =&gt; void</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### addListener('silentPushMessageInformation', ...)

```typescript
addListener(eventName: 'silentPushMessageInformation', listenerFunc: (information: SilentPushMessageInformation) => void) => any
```

Called when a silent push message is received

| Param              | Type                                                                                                            |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>'silentPushMessageInformation'</code>                                                                     |
| **`listenerFunc`** | <code>(information: <a href="#silentpushmessageinformation">SilentPushMessageInformation</a>) =&gt; void</code> |

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### removeAllListeners()

```typescript
removeAllListeners() => any
```

Remove all native listeners for this plugin.

**Returns:** <code>any</code>

**Since:** 1.0.0

--------------------


### Interfaces


#### PermissionStatus

| Prop          | Type                                                        | Since |
| ------------- | ----------------------------------------------------------- | ----- |
| **`receive`** | <code><a href="#permissionstate">PermissionState</a></code> | 1.0.0 |


#### TokenResult

| Prop        | Type                | Since |
| ----------- | ------------------- | ----- |
| **`token`** | <code>string</code> | 1.0.0 |


#### SetContactOptions

| Prop                    | Type                | Since |
| ----------------------- | ------------------- | ----- |
| **`contactFieldValue`** | <code>string</code> | 1.0.0 |


#### SetAuthenticatedContactOptions

| Prop              | Type                | Since |
| ----------------- | ------------------- | ----- |
| **`openIdToken`** | <code>string</code> | 1.0.0 |


#### CardItems

| Prop        | Type            |
| ----------- | --------------- |
| **`items`** | <code>{}</code> |


#### CardItem

| Prop           | Type                | Since |
| -------------- | ------------------- | ----- |
| **`itemId`**   | <code>string</code> | 1.0.0 |
| **`price`**    | <code>number</code> | 1.0.0 |
| **`quantity`** | <code>number</code> | 1.0.0 |


#### Purchase

| Prop          | Type                | Since |
| ------------- | ------------------- | ----- |
| **`orderId`** | <code>string</code> | 1.0.0 |


#### CustomEvent

| Prop             | Type                                    | Description          | Since |
| ---------------- | --------------------------------------- | -------------------- | ----- |
| **`name`**       | <code>string</code>                     | The eventName        | 1.0.0 |
| **`attributes`** | <code>{ [key: string]: string; }</code> | The event attributes | 1.0.0 |


#### RecommendedProductOptions

| Prop                   | Type                                                                        | Description                                                                                                                                                                                                                                            | Default        | Since |
| ---------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------- | ----- |
| **`logic`**            | <code><a href="#recommendedproductlogic">RecommendedProductLogic</a></code> | The logic that should be used.                                                                                                                                                                                                                         |                | 1.0.0 |
| **`filter`**           | <code>{}</code>                                                             | You can filter product recommendations with the SDK. There are two types of filters: `Exclude` or `Include`. In every case there are four types of comparators you can use to compare your chosen field to the `value`. This is an optional parameter. |                | 1.0.0 |
| **`limit`**            | <code>number</code>                                                         | You can limit the number of recommended products received by defining a `limit`.                                                                                                                                                                       | <code>5</code> | 1.0.0 |
| **`availabilityZone`** | <code>string</code>                                                         | You can personalize the recommendation further by setting the `availabilityZones` parameter of the recommendation, to only recommend the locally available products. This is an optional parameter.                                                    |                | 1.0.0 |


#### RecommendedProductSearchLogic

Based on `searchTerm`

| Prop        | Type                  | Since |
| ----------- | --------------------- | ----- |
| **`type`**  | <code>'search'</code> | 1.0.0 |
| **`value`** | <code>string</code>   | 1.0.0 |


#### RecommendedProductCartLogic

Based on `cartItems`

| Prop        | Type                | Since |
| ----------- | ------------------- | ----- |
| **`type`**  | <code>'cart'</code> | 1.0.0 |
| **`value`** | <code>{}</code>     | 1.0.0 |


#### RecommendedProductRelatedLogic

Based on `itemViewId`

| Prop        | Type                   | Since |
| ----------- | ---------------------- | ----- |
| **`type`**  | <code>'related'</code> | 1.0.0 |
| **`value`** | <code>string</code>    | 1.0.0 |


#### RecommendedProductCategoryLogic

Based on `categoryPath`

| Prop        | Type                    | Since |
| ----------- | ----------------------- | ----- |
| **`type`**  | <code>'category'</code> | 1.0.0 |
| **`value`** | <code>string</code>     | 1.0.0 |


#### RecommendedProductAlsoBoughtLogic

Based on `itemViewId`

| Prop        | Type                       | Since |
| ----------- | -------------------------- | ----- |
| **`type`**  | <code>'also_bought'</code> | 1.0.0 |
| **`value`** | <code>string</code>        | 1.0.0 |


#### RecommendedProductPopularLogic

Based on `categoryPath`

| Prop        | Type                   | Since |
| ----------- | ---------------------- | ----- |
| **`type`**  | <code>'popular'</code> | 1.0.0 |
| **`value`** | <code>string</code>    | 1.0.0 |


#### RecommendedProductPersonalLogic

Based on based on current browsing and activity

Optionally based on the variants

| Prop        | Type                    | Since |
| ----------- | ----------------------- | ----- |
| **`type`**  | <code>'personal'</code> | 1.0.0 |
| **`value`** | <code>{}</code>         | 1.0.0 |


#### RecommendedProductHomeLogic

Based on most recent browsing behaviour

Optionally based on the variants

| Prop        | Type                | Since |
| ----------- | ------------------- | ----- |
| **`type`**  | <code>'home'</code> | 1.0.0 |
| **`value`** | <code>{}</code>     | 1.0.0 |


#### RecommendedProductValueFilter

| Prop                 | Type                                                                                                                | Description                                                                                                                                                                              | Since |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`filterType`**     | <code><a href="#recommendedproductfiltertype">RecommendedProductFilterType</a></code>                               |                                                                                                                                                                                          | 1.0.0 |
| **`comparatorType`** | <code><a href="#recommendedproductvaluefiltercomparatortype">RecommendedProductValueFilterComparatorType</a></code> | `isValue`: checking if the `field` is matching the `value`, `hasValue`: One of the `field` values is equal to `expectation value` (applicable only to fields containing multiple values) | 1.0.0 |
| **`field`**          | <code>string</code>                                                                                                 |                                                                                                                                                                                          | 1.0.0 |
| **`value`**          | <code>string</code>                                                                                                 |                                                                                                                                                                                          | 1.0.0 |


#### RecommendedProductArrayFilter

| Prop                 | Type                                                                                                                | Description                                                                                                                                                                                                | Since |
| -------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
| **`filterType`**     | <code><a href="#recommendedproductfiltertype">RecommendedProductFilterType</a></code>                               |                                                                                                                                                                                                            | 1.0.0 |
| **`comparatorType`** | <code><a href="#recommendedproductarrayfiltercomparatortype">RecommendedProductArrayFilterComparatorType</a></code> | `inValues`: any of the `values` has a match with the `field`, `overlapsValues`: One or more of the `field` values are found in `expectation values` (applicable only to fields containing multiple values) | 1.0.0 |
| **`field`**          | <code>string</code>                                                                                                 |                                                                                                                                                                                                            | 1.0.0 |
| **`value`**          | <code>{}</code>                                                                                                     |                                                                                                                                                                                                            | 1.0.0 |


#### RecommendedProducts

| Prop           | Type            | Since |
| -------------- | --------------- | ----- |
| **`products`** | <code>{}</code> | 1.0.0 |


#### Product

| Prop                     | Type                                 | Since |
| ------------------------ | ------------------------------------ | ----- |
| **`productId`**          | <code>string</code>                  | 1.0.0 |
| **`title`**              | <code>string</code>                  | 1.0.0 |
| **`linkUrl`**            | <code>string</code>                  | 1.0.0 |
| **`customFields`**       | <code>{ [key: string]: any; }</code> | 1.0.0 |
| **`feature`**            | <code>string</code>                  | 1.0.0 |
| **`cohort`**             | <code>string</code>                  | 1.0.0 |
| **`imageUrl`**           | <code>string</code>                  | 1.0.0 |
| **`zoomImageUrl`**       | <code>string</code>                  | 1.0.0 |
| **`categoryPath`**       | <code>string</code>                  | 1.0.0 |
| **`available`**          | <code>number</code>                  | 1.0.0 |
| **`productDescription`** | <code>string</code>                  | 1.0.0 |
| **`price`**              | <code>number</code>                  | 1.0.0 |
| **`msrp`**               | <code>number</code>                  | 1.0.0 |
| **`album`**              | <code>string</code>                  | 1.0.0 |
| **`actor`**              | <code>string</code>                  | 1.0.0 |
| **`artist`**             | <code>string</code>                  | 1.0.0 |
| **`author`**             | <code>string</code>                  | 1.0.0 |
| **`brand`**              | <code>string</code>                  | 1.0.0 |
| **`year`**               | <code>number</code>                  | 1.0.0 |


#### InboxTag

| Prop            | Type                | Since |
| --------------- | ------------------- | ----- |
| **`tag`**       | <code>string</code> | 1.0.0 |
| **`messageId`** | <code>string</code> | 1.0.0 |


#### ApplicationCode

| Prop                  | Type                | Since |
| --------------------- | ------------------- | ----- |
| **`applicationCode`** | <code>string</code> | 1.0.0 |


#### MerchantId

| Prop             | Type                | Since |
| ---------------- | ------------------- | ----- |
| **`merchantId`** | <code>string</code> | 1.0.0 |


#### ContactFieldId

| Prop                 | Type                | Since |
| -------------------- | ------------------- | ----- |
| **`contactFieldId`** | <code>number</code> | 1.0.0 |


#### PushMessageEvent

| Prop            | Type                | Since |
| --------------- | ------------------- | ----- |
| **`eventName`** | <code>string</code> | 1.0.0 |
| **`data`**      | <code>{}</code>     | 1.0.0 |


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |


#### SilentPushMessageInformation

| Prop             | Type                | Since |
| ---------------- | ------------------- | ----- |
| **`campaignId`** | <code>string</code> | 1.0.0 |


### Type Aliases


#### PermissionState

<code>'prompt' | 'prompt-with-rationale' | 'granted' | 'denied'</code>


#### RecommendedProductLogic

<code><a href="#recommendedproductsearchlogic">RecommendedProductSearchLogic</a> | <a href="#recommendedproductcartlogic">RecommendedProductCartLogic</a> | <a href="#recommendedproductrelatedlogic">RecommendedProductRelatedLogic</a> | <a href="#recommendedproductcategorylogic">RecommendedProductCategoryLogic</a> | <a href="#recommendedproductalsoboughtlogic">RecommendedProductAlsoBoughtLogic</a> | <a href="#recommendedproductpopularlogic">RecommendedProductPopularLogic</a> | <a href="#recommendedproductpersonallogic">RecommendedProductPersonalLogic</a> | <a href="#recommendedproducthomelogic">RecommendedProductHomeLogic</a></code>


#### RecommendedProductFilter

<code><a href="#recommendedproductvaluefilter">RecommendedProductValueFilter</a> | <a href="#recommendedproductarrayfilter">RecommendedProductArrayFilter</a></code>


#### RecommendedProductFilterType

<code>'include' | 'exclude'</code>


#### RecommendedProductValueFilterComparatorType

<code>'isValue' | 'hasValue'</code>


#### RecommendedProductArrayFilterComparatorType

<code>'inValues' | 'overlapsValues'</code>

</docgen-api>

## Changelog

The full Changelog is available [here](CHANGELOG.md)
