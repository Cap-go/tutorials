---
title: "Using capacitor-tosspayments package"
description: "This tutorial will guide you through the process of using the capacitor-tosspayments package in your Ionic/Capacitor project."
created_at: "2021-11-12"
published: true
slug: "capacitor-tosspayments"
---

# Using capacitor-tosspayments package

The capacitor-tosspayments package is a plugin that allows you to integrate Toss Payments into your Ionic/Capacitor project. This tutorial will walk you through the installation and setup process, as well as demonstrate how to make a payment request using the package.

## Installation

To install the capacitor-tosspayments package, run the following command:

```bash
npm install capacitor-tosspayments --save
```

Next, build your app and copy the build output to the native code using the following commands:

```bash
npm run build
npx cap copy
```

## Configuration

Before you can use the capacitor-tosspayments package, you need to configure your app to open third-party payment apps. Follow the steps below based on your platform.

### Android Configuration

#### 1. Add the Plugin Module

In your `MainActivity.java` file, add the following import statement and include the `TossPaymentsPlugin` in the `init` method:

```java
import glit.capacitor.tosspayments.TossPaymentsPlugin;

public class MainActivity extends BridgeActivity {
    ...
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
        ...
        add(TossPaymentsPlugin.class);
    }});
}
```

#### 2. Add WebView Activity

In the `AndroidManifest.xml` file located at `android/app/src/main`, add the following code snippet to register the Toss Payments activity:

```html
<manifest>
  <application>
    ...
    <activity android:name="glit.capacitor.tosspayments.TossPaymentsActivity" android:label="TossPaymentsActivity"></activity>
    ...
  </application>
</manifest>
```

### iOS Configuration

#### 1. Register External App URL Schemes (info.plist)

Update your `Info.plist` file with the following code snippet to register the URL schemes for various third-party payment apps:

```html
...
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>itms-appss</string>
  <string>supertoss</string>
  <string>kb-acp</string>
  <string>liivbank</string>
  ... <!-- Add other schemes here -->
</array>
```

#### 2. Allow Arbitrary Loads in App Transport Security (info.plist)

To allow communication with insecure servers, add the following code snippet to your `Info.plist` file:

```html
...
<key>NSAppTransportSecurity</key>
<dict>
  <key>NSAllowsArbitraryLoadsInWebContent</key>
  <true />
  <key>NSAllowsArbitraryLoads</key>
  <true />
</dict>
```

## Usage

Once you have installed and configured the capacitor-tosspayments package, you can start using its functionality in your project.

### Making a Payment Request

To make a payment request, you can use the `requestPayment()` function provided by the capacitor-tosspayments package. Here is an example of how to use it:

```typescript
import { Plugins } from '@capacitor/core';

const { TossPaymentsPlugin } = Plugins;

// Payment request parameters
const paymentRequest = {
  amount: '1000', // Payment amount in KRW
  orderId: 'order_id_123', // Unique order ID
  orderName: 'My Order', // Order name
  orderDescription: 'Description of my order', // Order description
  customerName: 'John Doe', // Customer name
};

// Make payment request
TossPaymentsPlugin.requestPayment(paymentRequest).then((result) => {
  // Handle payment result
  console.log(result);
}).catch((error) => {
  // Handle payment error
  console.error(error);
});
```

This is a basic example of how to make a payment request using the capacitor-tosspayments package. You can customize the payment request parameters according to your specific requirements.

## Conclusion

In this tutorial, you learned how to install and configure the capacitor-tosspayments package in your Ionic/Capacitor project. You also saw an example of how to make a payment request using the package. You can now integrate Toss Payments into your app and start accepting payments from your users.

Remember to refer to the official documentation of the capacitor-tosspayments package for more details and advanced usage options.
