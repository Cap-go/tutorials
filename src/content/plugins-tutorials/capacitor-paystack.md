---
title: "Using @bot101/capacitor-paystack-plugin Package in Capacitor"
description: "A tutorial on how to use the @bot101/capacitor-paystack-plugin package in Capacitor to integrate Paystack payment gateway into your mobile application."
created_at: "2022-09-30"
published: true
slug: "capacitor-paystack"
---

# Using @bot101/capacitor-paystack-plugin Package in Capacitor

In this tutorial, we will learn how to use the `@bot101/capacitor-paystack-plugin` package in Capacitor to integrate Paystack payment gateway into your mobile application.

## Prerequisites

Before we get started, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI
- Capacitor project

## Installation

1. Navigate to your Capacitor project's root folder in a terminal or command prompt.
2. Run the following command to install the `@bot101/capacitor-paystack-plugin` package:

```bash
npm install @bot101/capacitor-paystack-plugin
```

## Configuration

### Android

1. Open your Android Studio project.
2. Locate the `AndroidManifest.xml` file and add the following permissions inside the `<manifest>` tag:

```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
```

3. Depending on your target Android version, you may have to add the `android:usesCleartextTraffic` attribute to the `<application>` tag in the `AndroidManifest.xml` file:

```xml
<application
  ...
  android:usesCleartextTraffic="true">
```

4. Sync your Android project with the following command in the root folder of your Capacitor project:

```bash
npx cap sync android
```

### iOS

1. Open your Xcode project.
2. Navigate to your project settings.
3. Select your app's target.
4. Go to the "Signing & Capabilities" tab.
5. Enable the "Background Modes" capability and check the "Audio, AirPlay, and Picture in Picture" checkbox.
6. Sync your iOS project with the following command in the root folder of your Capacitor project:

```bash
npx cap sync ios
```

## Usage

To use the `@bot101/capacitor-paystack-plugin` package in your Capacitor project, follow these steps:

1. Import the `PaystackPlugin` class from the package:

```typescript
import { PaystackPlugin } from '@bot101/capacitor-paystack-plugin';
```

2. Create a new instance of the `PaystackPlugin` class:

```typescript
const paystack = new PaystackPlugin();
```

3. Initialize the SDK with your Paystack public key (obtained from your Paystack developer account dashboard):

```typescript
await paystack.initialize({ publicKey: "pk_public_key_here" });
```

4. Add customer card information using the `addCard` method:

```typescript
await paystack.addCard({
  cardNumber: "<card_number>",
  expiryMonth: "<expiry_month>",
  expiryYear: "<expiry_year>",
  cvv: "<cvv>"
});
```

5. Set the email for the charge using the `setChargeEmail` method:

```typescript
await paystack.setChargeEmail({ email: "email@address.com" });
```

6. Set the amount to charge the card (in kobo) using the `setChargeAmount` method:

```typescript
await paystack.setChargeAmount({ amount: '1000000' });
```

7. Optionally, add custom fields, metadata, and charge parameters using the respective methods (`putChargeCustomFields`, `putChargeMetadata`, and `addChargeParameters`).

8. Call the `chargeCard` method to charge the card:

```typescript
const chargeResponse = await paystack.chargeCard();
```

9. You can access the reference of the charge response using `chargeResponse.reference`.

## Additional Functionality

The `@bot101/capacitor-paystack-plugin` package also provides additional functionality, such as:

- Charging an access code
- Getting the card type

Refer to the official package documentation for more information on these features.

## Conclusion

In this tutorial, we learned how to integrate the Paystack payment gateway into a Capacitor project using the `@bot101/capacitor-paystack-plugin` package. We covered installation, configuration, and usage of the package, as well as additional functionality available. Now you can start accepting payments in your mobile application with the help of Paystack and Capacitor.

Remember to test your implementation thoroughly and refer to the official documentation for more advanced usage and customization options.

Happy coding!