# capacitor-gray-upi

<p align="center">
    <a href="https://www.npmjs.com/package/capacitor-gray-upi">
        <img src="https://badge.fury.io/js/capacitor-gray-upi.svg" alt="npm version" />
    </a>
        <a href="https://snyk.io/test/npm/capacitor-gray-upi">
            <img src="https://snyk.io/test/npm/capacitor-gray-upi/badge.svg" alt="Known Vulnerabilities" />
        </a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-GREEN.svg" alt="License" />
    </a>
</p>

## Description

UPI Payments Plugin that uses EasyUpiPayment library.

This Plugin implements the [EasyUpiPayment](https://eupipay-docs.netlify.app/) library to initiate UPI payment and handle events.

## Supported platforms

- Android

## Android setup

- `npm i capacitor-gray-upi`
- `ionic build`
- `npx cap copy`
- `npx cap sync`
- `npx cap open android`
- `[extra step]` in android case we need to tell Capacitor to initialise the plugin:

> on your `MainActivity.java` file add `import com.grayhat.upi.GrayUPI;` and then inside the init callback `add(GrayUPI.class);`

Now you should be set to go. Try to run your client using `npx cap open android`.

> Tip: every time you change a native code you may need to clean up the cache (Build > Clean Project | Build > Rebuild Project) and then run the app again.

## Example

```js
import { Plugins } from '@capacitor/core';
import 'capacitor-gray-upi';

const { GrayUPI } = Plugins;

// ...code

//function to start payment (handle errors yourself)
startPayment = async () => {
  GrayUPI.addListener('onTransactionCompleted', (res: any) => {
    alert(JSON.stringify(res));
  });
  GrayUPI.addListener('onTransactionCancelled', (res: any) => {
    alert(JSON.stringify(res));
  });
  GrayUPI.initialise({
    transID: "**********",
    transRefID: "**********",
    amount: '1.00',
    description: 'Test Payment',
    vpa: '1234567890@service',
    name: 'Sample Name',
  })
    .then(() => {
      GrayUPI.startPayment();
    })
    .catch((err: any) => {
      alert(JSON.stringify(err));
    });
};
```

### `initialise(transaction:Transaction)`

This initialises the UPI Plugin and prepares it for `startPayment()` call.

Returns `Promise<void>`

#### `Transaction`

```js
interface Transaction {
    vpa: string;
    name: string;
    transID: string;
    transRefID: string;
    description: string;
    amount: string; // decimal format
}
```

### `startPayment()`

This starts the payment intent on Android where the user chooses an App for UPI Payment and proceeds.

Returns `Promise<void>`

### Event : `'onTransactionCompleted'`

listener : `(transaction:TransactionDetails) => void`

Transaction Completed with `"SUBMITTED"|"SUCCESS"|"FAILURE"` status

- `SUBMITTED` : Transaction is in PENDING state. Money might get deducted from user’s account but not yet deposited in payee’s account.
- `SUCCESS` : Transaction is successful.
- `FAILURE` : Transaction is failed.

#### `TransactionDetails`

```js
interface TransactionDetails {
    transID : string;
    responseCode : string;
    approvalRefNo : string;
    transactionStatus : "SUBMITTED"|"SUCCESS"|"FAILURE";
    transactionRefId : string;
    amount : string;
}
```

### Event : `'onTransactionCancelled'`

listener : `() => void`

User cancelled transaction or transaction failed

## Testing

Manually tested against the following platforms:

- Android device 10.0 (API Level 29)
