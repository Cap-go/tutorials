```markdown
---
"title": "Using @rollershop/capacitor-emarsys-sdk Package",
"description": "Learn how to use the @rollershop/capacitor-emarsys-sdk package for integrating Emarsys SDK into your Capacitor project.",
"created_at": "2022-10-12",
"published": true,
"slug": "capacitor-emarsys-sdk.git"
---

# Using @rollershop/capacitor-emarsys-sdk Package

In this tutorial, we will walk through the steps to integrate the @rollershop/capacitor-emarsys-sdk package into your Capacitor project for using the Emarsys SDK. 

## Installation

First, install the package using npm:

```bash
npm install @rollershop/capacitor-emarsys-sdk
npx cap sync
```

## Initialization

To initialize the Emarsys SDK, you can refer to the available options provided in the documentation. Below is a typical initialization process:

```javascript
import { Plugins } from '@capacitor/core';

const { Emarsys } = Plugins;

Emarsys.initialize({
  applicationCode: 'YOUR_APPLICATION_CODE',
  merchantId: 'YOUR_MERCHANT_ID'
});
```

## Usage

Once the SDK is initialized, you can start using the various functions and methods provided by the Emarsys SDK, such as tracking events, fetching messages, handling in-app notifications, and more. Refer to the API section in the documentation for detailed information on the available methods.

## Conclusion

Integrating the Emarsys SDK using the @rollershop/capacitor-emarsys-sdk package is a seamless process and allows you to leverage the capabilities of the Emarsys platform in your Capacitor project. Experiment with the provided APIs and explore the possibilities of enhancing your app's engagement and personalization.

``` 
```