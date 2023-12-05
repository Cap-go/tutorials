---
title: "Using the Ionic Capacitor Tenjin Plugin"
description: "A tutorial on how to integrate and use the ionic-capacitor-tenjin package for tracking events and installs in Ionic apps."
created_at: "2022-09-26"
published: true
slug: "tenjin-ionic-sdk"
---

# Using the Ionic Capacitor Tenjin Plugin

Tenjin's SDK allows users to track events and installs in their iOS and Android apps. In this tutorial, we will learn how to integrate and use the `ionic-capacitor-tenjin` package to track events and installs in an Ionic app. 

## Prerequisites

Before getting started, make sure you have the following:

- Ionic Framework installed
- Capacitor installed
- A Tenjin account (sign up at [https://www.tenjin.com](https://www.tenjin.com))

## Installation

To install the `ionic-capacitor-tenjin` package, open your terminal and run the following command:

```bash
npm install ionic-capacitor-tenjin
npx cap sync
```

## Initialization

To start using the Tenjin plugin, you need to initialize it with your SDK key. This key can be found in your Tenjin account dashboard. Open your `app.component.ts` file and import the `Tenjin` class from the `ionic-capacitor-tenjin` package:

```javascript
import Tenjin from 'ionic-capacitor-tenjin';
```

Next, call the `initialize` method with your SDK key:

```javascript
Tenjin.initialize('YOUR_SDK_KEY');
```

Replace `'YOUR_SDK_KEY'` with the actual SDK key provided by Tenjin.

## Basic Usage

Once the plugin is initialized, you can start tracking events and installs in your Ionic app.

### Tracking Events

To track an event, use the `eventWithName` method. Call this method with the name of the event as a string:

```javascript
Tenjin.eventWithName('EVENT_NAME');
```

Replace `'EVENT_NAME'` with the actual name of the event you want to track.

### Tracking Installs

To track app installs, use the `connect` method:

```javascript
Tenjin.connect();
```

This method should be called when the app is first launched or when a user logs in.

### Advanced Usage

#### Opting In and Opting Out

The Tenjin plugin allows users to opt in or opt out of event tracking. To opt in, use the `optIn` method:

```javascript
Tenjin.optIn();
```

To opt out, use the `optOut` method:

```javascript
Tenjin.optOut();
```

#### Registering Transactions

If your app involves in-app purchases, you can register transactions using the `transaction` method:

```javascript
Tenjin.transaction('PRODUCT_NAME', 'CURRENCY_CODE', quantity, unitPrice);
```

Replace `'PRODUCT_NAME'`, `'CURRENCY_CODE'`, `quantity`, and `unitPrice` with the actual values for your transaction.

### Appendix: Attribution Info

Tenjin supports retrieving attributes, such as analytics installation id, which can be used when there is no advertising id. To retrieve the analytics installation id, use the `getAttributionInfo` method:

```javascript
import { Plugins } from '@capacitor/core';

const { TenjinPlugin } = Plugins;

TenjinPlugin.getAttributionInfo().then((info) => {
  console.log(info);
}).catch((error) => {
  console.error(error);
});
```

Replace `'APP_ID'` with the actual app ID for your Tenjin app.

## Conclusion

In this tutorial, we learned how to integrate and use the `ionic-capacitor-tenjin` package to track events and installs in Ionic apps. We covered basic usage, advanced features like opting in/out and registering transactions, as well as retrieving attribution info. Now you can easily track events and installs in your Ionic app using Tenjin.

If you have any further questions or need assistance, feel free to visit the [Tenjin documentation](https://github.com/tenjin/tenjin-ios-sdk) or contact Tenjin support. Happy tracking!