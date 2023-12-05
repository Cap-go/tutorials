---
title: "Using capacitor-paytm-allinonesdk package"
description: "A tutorial on how to use the capacitor-paytm-allinonesdk package for integrating Paytm payment gateway in Capacitor applications."
created_at: "2022-01-20"
published: true
slug: "paytm-allinonesdk-capacitor"
---

# Using capacitor-paytm-allinonesdk package

This tutorial will guide you through the process of integrating the Paytm payment gateway into your Capacitor application using the capacitor-paytm-allinonesdk package. 

## Prerequisites

Before you begin, make sure you have the following:
- Capacitor project set up
- Paytm merchant account
- Android Studio installed (for Android development)

## Installation

To install the capacitor-paytm-allinonesdk package, follow these steps:

1. Open the terminal and navigate to your Capacitor project's root folder.
2. Run the following command:

   ```bash
   npm i capacitor-paytm-allinonesdk
   ```

## Android Configuration

To configure the capacitor-paytm-allinonesdk package for Android, you need to make the following modifications:

1. Open the `MainActivity.java` file located at `project-root/android/app/src/main/java/your-package-name`.
2. Import the `in.zimbaroosgeeks.paytmAllinonesdk.AllInOneSDK` class.
3. Add `add(AllInOneSDK.class)` to the `init` function.

   ```java
   import in.zimbaroosgeeks.paytmAllinonesdk.AllInOneSDK;

   // ...

   public class MainActivity extends BridgeActivity {
     @Override
     public void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);

       // ...

       // Add the following line
       add(AllInOneSDK.class);

       // ...
     }
   }
   ```

3. Open the `build.gradle` file located at `project-root/android`.
4. Add the following code to the `repositories` section:

   ```groovy
   allprojects {
     repositories {
       // ...
       maven {
         url "https://artifactory.paytm.in/libs-release-local"
       }
     }
   }
   ```

5. Add the following line to the `dependencies` section:

   ```groovy
   implementation 'com.paytm.appinvokesdk:appinvokesdk:1.5.3'
   ```

6. Sync your project with Gradle.

## Usage

To use the capacitor-paytm-allinonesdk package in your Capacitor application, follow these steps:

1. Import the necessary classes and plugins.

   ```typescript
   import { Plugins } from '@capacitor/core';
   import 'capacitor-paytm-allinonesdk';
   import { PaymentIntentModel } from 'capacitor-paytm-allinonesdk';

   const { AllInOneSDK } = Plugins;
   ```

2. Use the provided functions and methods to perform payment transactions.

   ```typescript
   // Initialize the Paytm SDK
   await AllInOneSDK.initialize();

   // Create a payment intent model
   const paymentIntent: PaymentIntentModel = {
     orderId: 'your-order-id',
     amount: 'your-amount',
     isProduction: true,
     mid: 'your-merchant-id',
     /* ... */
   };

   // Start the Paytm payment
   await AllInOneSDK.startPayment(paymentIntent);
   ```

That's it! You have successfully integrated the Paytm payment gateway into your Capacitor application using the capacitor-paytm-allinonesdk package.

Remember to handle the payment response and implement any additional logic required for your application.

## Conclusion

In this tutorial, you learned how to install and use the capacitor-paytm-allinonesdk package to integrate the Paytm payment gateway into your Capacitor application. You can now accept payments through Paytm in your app. Happy coding!