# @zuc0001/capacitor-square

Integrate with Square Payments SDK

| Package Version | Capacitor Version |
|-----------------|-------------------|
| 6.X             | 6.X               |

For older versions including Capacitor 5, please refer to:
https://github.com/dolaned/capacitor-square

## Install

Version 1.X is compatible with Capacitor 5.X
```bash
npm install @zuc0001/capacitor-square
npx cap sync
```

## Usage

App Initalisation - app.component.ts (Angular example)

```ts
import { App } from "@capacitor/app";
import { Platform } from "@ionic/angular";
import { CapacitorSquare } from "@zuc0001/capacitor-square";

export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }
  
  private void initializeApp() {
    this.platform.ready().then(() => {
      App.addListener("appUrlOpen", (data: URLOpenListenerEvent) => {
        console.log("appUrlOpen: " + data.url);

        if (data.url.toLowerCase().startsWith("app-url-scheme://callback-url")) {
          CapacitorSquare.handleIosResponse({
            url: data.url
          }).then(() => {
            console.log("handle ios callback - successful");
          }).catch(e => {
            console.error("handle ios callback - error - " + e);
          });
        }
      });
    });
  }
}
```

Payment flow
```ts
import { CapacitorSquare } from "@zuc0001/capacitor-square";

//
// Initalise the square plugin
CapacitorSquare.initApp({
  applicationId: "Some square app id"
}).then(() => {
  console.log("Square payment ready");
}).catch(error => {
  console.error(error);
});

// Listen for sucessful payments
CapacitorSquare.addListener("transactionComplete", callback => {
  console.log("clientTransactionId:" + callback.clientTransactionId);
  console.log("serverTransactionId:" + callback.serverTransactionId);
});

// Listen for failed payments
CapacitorSquare.addListener("transactionFailed", callback => {
  console.error(callback.error);
});

// Initiate a transaction
CapacitorSquare.startTransaction({
  totalAmount: 100, // amount in pennies/cents
  currencyCode: "GBP", // ISO currency code, must be support by square
  allowedPaymentMethods: ["CARD"], // Sqaure TendType: https://developer.squareup.com/docs/api/point-of-sale/android/com/squareup/sdk/pos/ChargeRequest.TenderType.html
  autoReturnTimeout: 4000, // The timeout to set in milliseconds, or AutoReturn.NoTimeout. If you specify a timeout, it must be between 3200 milliseconds and 10000 milliseconds.
  callbackUrl: "app-url-scheme://callback-url" // see iOS setup
}).then(() => {
  console.log("transaction started");
}).catch(error => {
  console.error(error);
});

```

> Note: autoReturnTimeout is only available on Android

Follow these setup steps from square to enable call back to your app: [Square Documentation](https://developer.squareup.com/docs/pos-api/build-on-ios#step-4-add-your-url-schemes).


## API

<docgen-index>

* [`initApp(...)`](#initapp)
* [`startTransaction(...)`](#starttransaction)
* [`handleIosResponse(...)`](#handleiosresponse)
* [`addListener(...)`](#addlistener)
* [`addListener(...)`](#addlistener)
* [Interfaces](#interfaces)
* [Enums](#enums)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initApp(...)

```typescript
initApp(options: { applicationId: string; }) => any
```

| Param         | Type                                    |
| ------------- | --------------------------------------- |
| **`options`** | <code>{ applicationId: string; }</code> |

**Returns:** <code>any</code>

--------------------


### startTransaction(...)

```typescript
startTransaction(options: { totalAmount: number; currencyCode: string; allowedPaymentMethods?: string[] | null; autoReturnTimeout?: number | AutoReturn.NoTimeout | null; callbackUrl?: string | null; }) => any
```

| Param         | Type                                                                                                                                                              |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`options`** | <code>{ totalAmount: number; currencyCode: string; allowedPaymentMethods?: {} \| null; autoReturnTimeout?: number \| null; callbackUrl?: string \| null; }</code> |

**Returns:** <code>any</code>

--------------------


### handleIosResponse(...)

```typescript
handleIosResponse(options: { url: string; }) => any
```

| Param         | Type                          |
| ------------- | ----------------------------- |
| **`options`** | <code>{ url: string; }</code> |

**Returns:** <code>any</code>

--------------------


### addListener(...)

```typescript
addListener(eventName: 'transactionComplete', listenerFunc: TransactionCompletedListener) => any
```

| Param              | Type                                                                                              |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| **`eventName`**    | <code>"transactionComplete"</code>                                                                |
| **`listenerFunc`** | <code>(callback: { clientTransactionId: string; serverTransactionId: string; }) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### addListener(...)

```typescript
addListener(eventName: 'transactionFailed', listenerFunc: TransactionFailedListener) => any
```

| Param              | Type                                                |
| ------------------ | --------------------------------------------------- |
| **`eventName`**    | <code>"transactionFailed"</code>                    |
| **`listenerFunc`** | <code>(callback: { error: any; }) =&gt; void</code> |

**Returns:** <code>any</code>

--------------------


### Interfaces


#### PluginListenerHandle

| Prop         | Type                      |
| ------------ | ------------------------- |
| **`remove`** | <code>() =&gt; any</code> |


### Enums


#### AutoReturn

| Members         | Value              | Description                                |
| --------------- | ------------------ | ------------------------------------------ |
| **`NoTimeout`** | <code>0</code>     | No timeout                                 |
| **`Min`**       | <code>3200</code>  | Minimum timeout value (3200 milliseconds)  |
| **`Max`**       | <code>10000</code> | Maximum timeout value (10000 milliseconds) |

</docgen-api>
