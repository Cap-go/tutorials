# @gif-games/capacitor-samsung-iap

Capacitor plugin for Samsung IAP Android SDK

## Install

```bash
npm install @gif-games/capacitor-samsung-iap
npx cap sync
```

### Include sub dependencies

Add this to your app's `settings.gradle`

```gradle
include ':IAP6Helper'
project(':IAP6Helper').projectDir = new File('../node_modules/@gif-games/capacitor-samsung-iap/android/IAP6Helper')
```

## API

<docgen-index>

- [`setOperationMode(...)`](#setoperationmode)
- [`getOwnedList(...)`](#getownedlist)
- [`getProductsDetails(...)`](#getproductsdetails)
- [`startPayment(...)`](#startpayment)
- [`consumePurchasedItems(...)`](#consumepurchaseditems)
- [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### setOperationMode(...)

```typescript
setOperationMode(options: SetOperationModeOptions) => Promise<void>
```

IAP supports three operational modes. One is for enabling billing for item purchases and the other two are for testing IAP functions without billing app users for item purchases.

| Param         | Type                                                                        |
| ------------- | --------------------------------------------------------------------------- |
| **`options`** | <code><a href="#setoperationmodeoptions">SetOperationModeOptions</a></code> |

---

### getOwnedList(...)

```typescript
getOwnedList(options: GetOwnedListOptions) => Promise<OwnedList>
```

returns a list of in-app items that the app user currently has from previous purchases:

- Consumable items that have not yet been used and not yet reported as consumed
- Non-consumable items
- Subscription items currently in a free trial or an active subscription period (this includes canceled subscription items until their active subscription period has ended)

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#getownedlistoptions">GetOwnedListOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#ownedlist">OwnedList</a>&gt;</code>

---

### getProductsDetails(...)

```typescript
getProductsDetails(options: GetProductsDetailsOptions) => Promise<ProductList>
```

returns information for one, more, or all in-app items registered to the app.

| Param         | Type                                                                            |
| ------------- | ------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#getproductsdetailsoptions">GetProductsDetailsOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#productlist">ProductList</a>&gt;</code>

---

### startPayment(...)

```typescript
startPayment(options: StartPaymentOptions) => Promise<PurchaseVo>
```

initiates the purchase and payment transaction of the specified in-app item and can notify the end user if the purchase succeeded or failed.

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#startpaymentoptions">StartPaymentOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#purchasevo">PurchaseVo</a>&gt;</code>

---

### consumePurchasedItems(...)

```typescript
consumePurchasedItems(options: ConsumePurchasedItemsOptions) => Promise<ConsumeList>
```

reports one or more purchased consumable items as consumed, which makes the items available for another purchase.

| Param         | Type                                                                                  |
| ------------- | ------------------------------------------------------------------------------------- |
| **`options`** | <code><a href="#consumepurchaseditemsoptions">ConsumePurchasedItemsOptions</a></code> |

**Returns:** <code>Promise&lt;<a href="#consumelist">ConsumeList</a>&gt;</code>

---

### Interfaces

#### SetOperationModeOptions

| Prop       | Type                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---------- | -------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`mode`** | <code>'production' \| 'test' \| 'test_fail'</code> | - `production` : startPayment() requests are processed as specified, financial transactions do occur for successful requests, and actual results are returned (successful or failed). Note: For all other IAP Helper requests: Only items purchased in OPERATION_MODE_PRODUCTION mode are considered owned items. - `test` : startPayment() requests are processed as specified, except financial transactions do not occur (licensed testers are not billed for item purchases), and successful results are always returned. For details of the payment window shown in OPERATION_MODE_TEST mode, see below. Note: For all other IAP Helper requests: - Only items purchased in OPERATION_MODE_TEST mode are considered owned items. - In order to purchase in-app items, testers must be registered as a License Tester in the seller's Seller Portal profile. In this mode, licensed testers always get your in-app items for free. All other users see an error message if they try to purchase an in-app item. - `test_fail` : All IAP Helper requests fail. It is meant to be a negative testing to ensure that your app can handle errors such as improper input and user actions. |

#### OwnedList

| Prop       | Type                          |
| ---------- | ----------------------------- |
| **`data`** | <code>OwnedProductVo[]</code> |

#### OwnedProductVo

| Prop                       | Type                |
| -------------------------- | ------------------- |
| **`mPaymentId`**           | <code>string</code> |
| **`mPurchaseId`**          | <code>string</code> |
| **`mPurchaseDate`**        | <code>string</code> |
| **`mPassThroughParam`**    | <code>string</code> |
| **`mSubscriptionEndDate`** | <code>string</code> |

#### GetOwnedListOptions

| Prop              | Type                                           | Description                                                                                                                                                                                                                          |
| ----------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **`productType`** | <code>'item' \| 'subscription' \| 'all'</code> | (Required) Type of in-app items to be returned: - `item` : Both consumable and non-consumable items - `subscription` : Auto-recurring subscription items - `all` : Consumable, non-consumable, and auto-recurring subscription items |

#### ProductList

| Prop       | Type                     |
| ---------- | ------------------------ |
| **`data`** | <code>ProductVo[]</code> |

#### ProductVo

| Prop                                        | Type                |
| ------------------------------------------- | ------------------- |
| **`mItemImageUrl`**                         | <code>string</code> |
| **`mItemDownloadUrl`**                      | <code>string</code> |
| **`mReserved1`**                            | <code>string</code> |
| **`mReserved2`**                            | <code>string</code> |
| **`mFreeTrialPeriod`**                      | <code>string</code> |
| **`mSubscriptionDurationUnit`**             | <code>string</code> |
| **`mSubscriptionDurationMultiplier`**       | <code>string</code> |
| **`mTieredSubscriptionYN`**                 | <code>string</code> |
| **`mTieredPrice`**                          | <code>string</code> |
| **`mTieredPriceString`**                    | <code>string</code> |
| **`mTieredSubscriptionCount`**              | <code>string</code> |
| **`mTieredSubscriptionDurationMultiplier`** | <code>string</code> |
| **`mTieredSubscriptionDurationUnit`**       | <code>string</code> |
| **`mShowStartDate`**                        | <code>number</code> |
| **`mShowEndDate`**                          | <code>number</code> |

#### GetProductsDetailsOptions

| Prop             | Type                  | Description                                                                                                                                                                                                                                                                            |
| ---------------- | --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`productIds`** | <code>string[]</code> | (Required) One or more in-app item IDs specified by either: Empty array [] that designates all in-app items or One or more unique in-app item ID values You can get the IDs from Seller Portal (Applications page &gt; Click status of the app &gt; In App Purchase tab &gt; Item ID). |

#### PurchaseVo

| Prop                    | Type                |
| ----------------------- | ------------------- |
| **`mPaymentId`**        | <code>string</code> |
| **`mPurchaseId`**       | <code>string</code> |
| **`mPurchaseDate`**     | <code>string</code> |
| **`mVerifyUrl`**        | <code>string</code> |
| **`mPassThroughParam`** | <code>string</code> |
| **`mItemImageUrl`**     | <code>string</code> |
| **`mItemDownloadUrl`**  | <code>string</code> |
| **`mReserved1`**        | <code>string</code> |
| **`mReserved2`**        | <code>string</code> |
| **`mOrderId`**          | <code>string</code> |
| **`mUdpSignature`**     | <code>string</code> |

#### StartPaymentOptions

| Prop                   | Type                | Description                                                                                                                                                                                                                                                                                                                                        |
| ---------------------- | ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`itemId`**           | <code>string</code> | (Required) Unique identifier value of the in-app item to be purchased.                                                                                                                                                                                                                                                                             |
| **`passThroughParam`** | <code>string</code> | Optional Unique identifier (maximum: 255 bytes) assigned by your Android app to the purchase and payment transaction. When specified, the value will be returned by OnPaymentListener interface. When the iap/v6/receipt is called from the Samsung IAP Server API to verify a purchase, the value will be returned by the pathThroughParam field. |

#### ConsumeList

| Prop       | Type                     |
| ---------- | ------------------------ |
| **`data`** | <code>ConsumeVo[]</code> |

#### ConsumeVo

| Prop                | Type                |
| ------------------- | ------------------- |
| **`mPurchaseId`**   | <code>string</code> |
| **`mStatusString`** | <code>string</code> |
| **`mStatusCode`**   | <code>number</code> |

#### ConsumePurchasedItemsOptions

| Prop              | Type                  | Description                                                                                                                                             |
| ----------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`purchaseIds`** | <code>string[]</code> | (Required) One or more unique identifier values of the purchase and payment transactions of consumable in-app items that are to be reported as consumed |

</docgen-api>
