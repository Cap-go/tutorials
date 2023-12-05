---
title: "Using @alexanderwodarz/capacitor-ios-inapppurchase Package"
description: "A tutorial on integrating @alexanderwodarz/capacitor-ios-inapppurchase package in your Capacitor iOS app."
created_at: "2022-05-02"
published: true
slug: in-app-purchase
---

# Using @alexanderwodarz/capacitor-ios-inapppurchase Package

In this tutorial, we will learn how to integrate the @alexanderwodarz/capacitor-ios-inapppurchase package into your Capacitor iOS app. This package provides a simple and effective way to implement in-app purchases in your iOS application using Capacitor.

## Prerequisites

Before we begin, make sure you have the following installed:

- Node.js
- Capacitor CLI
- Xcode

## Step 1: Create a new Capacitor iOS app

First, let's create a new Capacitor iOS app. Open your terminal and run the following commands:

```bash
npx @capacitor/cli create my-app
cd my-app
```

## Step 2: Add the @alexanderwodarz/capacitor-ios-inapppurchase package

Next, let's add the @alexanderwodarz/capacitor-ios-inapppurchase package to our project. Run the following command in your terminal:

```bash
npm install --save @alexanderwodarz/capacitor-ios-inapppurchase
```

## Step 3: Configure the package

Once the package is installed, we need to configure it. Open your Capacitor iOS project in Xcode by running the following command:

```bash
npx cap open ios
```

In Xcode, navigate to the `AppDelegate.swift` file and add the following code at the beginning of the file:

```swift
import AppPurchase
```

Next, find the `application` method in the `AppDelegate.swift` file and add the following code inside the method:

```swift
AppPurchase.shared.start()
```

Save the file and close Xcode.

## Step 4: Initialize the package in your app

Next, we need to initialize the package in our app. Open the `index.ts` file in the `src` directory of your Capacitor iOS project and add the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { InAppPurchase } = Plugins;

InAppPurchase.initialize();
```

## Step 5: Implement in-app purchases

Now that the package is configured and initialized, we can start implementing in-app purchases in our app. Here is an example of how to implement a simple in-app purchase flow:

```typescript
import { Plugins } from '@capacitor/core';

const { InAppPurchase } = Plugins;

async function purchaseProduct(productId: string) {
  try {
    const { success } = await InAppPurchase.purchase({ productId });

    if (success) {
      // Purchase successful, handle the success flow
    } else {
      // Purchase failed, handle the failure flow
    }
  } catch (error) {
    console.error('Error purchasing product:', error);
  }
}

const productId = 'com.example.product1';
purchaseProduct(productId);
```

In the above code, we use the `InAppPurchase.purchase` method to initiate the purchase process for a specific product. The method returns an object with a `success` property indicating whether the purchase was successful or not. Based on the `success` value, you can handle the success and failure flows accordingly.

## Step 6: Handle purchase events

The @alexanderwodarz/capacitor-ios-inapppurchase package provides several event listeners to handle different purchase events. Here is an example of how to listen for the `onPurchased` event:

```typescript
import { Plugins } from '@capacitor/core';

const { InAppPurchase } = Plugins;

InAppPurchase.addListener('onPurchased', (product) => {
  // Handle the purchased product
  console.log('Product purchased:', product);
});
```

In the above code, we use the `addListener` method to listen for the `onPurchased` event. When this event is triggered, the callback function is called with the purchased product information as an argument. You can handle the purchased product in the callback function according to your app requirements.

## Step 7: Test the app

Finally, it's time to test our app with in-app purchases. Run the following command in your terminal to launch the app on the iOS simulator:

```bash
npx cap open ios
```

In Xcode, select the desired simulator device and click the "Run" button. Once the app is launched on the simulator, you can interact with it and trigger the in-app purchase flow.

## Conclusion

In this tutorial, we learned how to integrate the @alexanderwodarz/capacitor-ios-inapppurchase package into a Capacitor iOS app. We covered the steps to configure, initialize, implement, and handle in-app purchases using the package. Now you can easily add in-app purchase functionality to your iOS app using Capacitor.

Remember to refer to the package documentation for more details and advanced usage of the @alexanderwodarz/capacitor-ios-inapppurchase package.

Happy coding!

---

Please note that this tutorial assumes some basic knowledge of Capacitor and iOS development. If you are new to Capacitor or iOS development, it is recommended to refer to the official Capacitor documentation and iOS developer resources for more information.

