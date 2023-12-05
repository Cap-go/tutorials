---
title: "Using @mytiki/capture-receipt-capacitor Package"
description: "In this tutorial, we will learn how to use the @mytiki/capture-receipt-capacitor package to extract receipt data from photos, email inboxes, and retailer accounts."
created_at: "2021-10-20"
published: true
slug: tiki-capture-receipt-capacitor
---

# Using @mytiki/capture-receipt-capacitor Package

In this tutorial, we will learn how to use the `@mytiki/capture-receipt-capacitor` package to extract receipt data from photos, email inboxes, and retailer accounts. This package wraps the native iOS and Android SDKs provided by Microblink and simplifies the integration with Capacitor applications.

## Installation

To get started, we need to install the `@mytiki/capture-receipt-capacitor` package and sync the project with Capacitor.

```shell
npm install @mytiki/capture-receipt-capacitor
npx cap sync
```

## Initialization

Before using the package, we need to initialize it with a valid Microblink BlinkReceipt license key and product intelligence key. You can obtain these keys by reaching out to Microblink.

```javascript
import { instance } from '@mytiki/capture-receipt-capacitor'

instance.initialize('<LICENSE KEY>', '<PRODUCT KEY>').then((rsp) => {
  console.log(`Initialized`);
});
```

Note that the `initialize` method returns a promise.

## Extract Receipt Data

Once the package is initialized, we can use it to capture and extract receipt data. The `extractData` method is used for this purpose.

```javascript
import { instance } from '@mytiki/capture-receipt-capacitor'

instance.extractData().then((result) => {
  // Handle the extracted receipt data
  console.log(result);
});
```

The `extractData` method returns a promise that resolves with the extracted data.

## Error Handling

If an error occurs during the extraction process, the promise will be rejected with an error object. You can use try-catch blocks to handle errors gracefully.

```javascript
import { instance } from '@mytiki/capture-receipt-capacitor'

try {
  const result = await instance.extractData();
  // Handle the extracted receipt data
  console.log(result);
} catch (error) {
  // Handle the error
  console.error(error);
}
```

## Conclusion

In this tutorial, we learned how to use the `@mytiki/capture-receipt-capacitor` package to extract receipt data from various sources using OCR technology. We covered the installation process, initialization with license and product keys, extracting receipt data, and error handling.

Now you can leverage the power of the TIKI Capture Receipt Plugin in your Capacitor applications to simplify and automate receipt data extraction.

For more information and detailed API documentation, visit the [official documentation](https://tiki-capture-receipt-capacitor.mytiki.com).