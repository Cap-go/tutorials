---
"title": "Using @moovenda/capacitor-braintree Package",
"description": "This tutorial provides a step-by-step guide on how to use the @moovenda/capacitor-braintree package for implementing 3D Secure-enabled payments using Capacitor.",
"created_at": "2021-09-27",
"published": true,
"slug": "capacitor-braintree"
---

# Using @moovenda/capacitor-braintree Package Tutorial

This tutorial will guide you through the process of integrating the @moovenda/capacitor-braintree package into your Capacitor project to enable 3D Secure payments. 

## Installation

1. Install the package by running `npm install @moovenda/capacitor-braintree`
2. Sync the changes by running `npx cap sync`

## iOS Setup

### Register a URL Scheme

1. In Xcode, go to **App Target > Info > URL Types**
2. Click **[+]** to add a new URL type
3. Enter a unique URL scheme dedicated to Braintree app switch returns (e.g., `com.your-company.your-app.payments`)

For detailed instructions, refer to the [official Braintree documentation](https://developers.braintreepayments.com/guides/client-sdk/setup/ios/v4).

### Add Listener to AppDelegate.swift

1. Open `ios/App/App/AppDelegate.swift`
2. Import Braintree with `import Braintree`
3. Add the following snippet above the `return` statement in the `func application(_ app: UIApplication, open url: URL, options: [UIApplication.OpenURLOptionsKey: Any] = [:]) -> Bool` function:

```swift
if url.scheme?.localizedCaseInsensitiveCompare("com.your-company.your-app.payments") == .orderedSame {
  BTAppSwitch.handleOpen(url, options: options)
}
```

## Android Setup

### Browser Switch Configuration

1. Edit `android/app/src/main/AndroidManifest.xml`
2. Add the following snippet within the `<application>` tag:

```xml
<activity android:name="com.braintreepayments.api.BraintreeBrowserSwitchActivity"
    android:launchMode="singleTask">
    <intent-filter>
        <action android:name="android.intent.action.VIEW" />
        <category android:name="android.intent.category.DEFAULT" />
        <category android:name="android.intent.category.BROWSABLE" />
        <data android:scheme="${applicationId}.braintree" />
    </intent-filter>
</activity>
```

3. Add the CardinalCommerce repository to the application's `build.gradle`.

## Usage Example

```javascript
import { Braintree } from '@moovenda/capacitor-braintree'

let payment

try {
  await Braintree.setToken({
    token: CLIENT_TOKEN_FROM_SERVER,
  })

  payment = await Braintree.showDropIn({
    amount: '0.00',
    disabled: ['venmo', 'applePay', 'googlePay'],
    givenName: customerDetails.firstName,
    surname: customerDetails.lastName,
    email: customerDetails.email,
    phoneNumber: customerDetails.phone,
    streetAddress: customerDetails.streetAddress,
    postalCode: customerDetails.zipcode,
    locality: customerDetails.city,
    countryCodeAlpha2: customerDetails.CountryAlphaCode,
  })
} catch (e) {
  console.error(e)
}
```

This tutorial has covered the installation process, iOS and Android setup, and provided a basic usage example for implementing 3D Secure-enabled payments using the @moovenda/capacitor-braintree package in Capacitor.