---
title: "Using ion-sms-retrieved Package"
description: "Learn how to use the ion-sms-retrieved package to implement Android SMS retrieval in your Ionic Capacitor app."
created_at: "2022-10-30"
published: true
slug: "ion-sms-retrieved"
---

# Using ion-sms-retrieved Package

In this tutorial, you will learn how to use the ion-sms-retrieved package to implement Android SMS retrieval in your Ionic Capacitor app. This package provides a convenient way to register an SMS receiver, retrieve OTP from SMS, and handle user consent.

## Installation

To get started, you need to install the ion-sms-retrieved package. Open your terminal and run the following command:

```bash
npm install ion-sms-retrieved
```

Next, sync your project with Capacitor:

```bash
npx cap sync
```

## Usage

### Register SMS Receiver

Before you can start retrieving OTP from SMS, you need to register the SMS receiver. In your TypeScript file, import the `AndroidSmsRetrieved` object from the `ion-sms-retrieved` package:

```javascript
import { AndroidSmsRetrieved } from 'ion-sms-retrieved';
```

Then, call the `registerSmsReceiver()` method when your screen appears:

```javascript
AndroidSmsRetrieved.registerSmsReceiver();
```

### Unregister SMS Receiver

Don't forget to unregister the SMS receiver when your screen disappears to avoid unnecessary SMS processing. Call the `unregisterSmsReceiver()` method in the appropriate lifecycle method of your component:

```javascript
AndroidSmsRetrieved.unregisterSmsReceiver();
```

### Retrieve OTP from SMS

To retrieve the OTP from the SMS, call the `startSmsUserConsent()` method. This method returns a promise that resolves to an object containing the OTP:

```javascript
AndroidSmsRetrieved.startSmsUserConsent().then(({ otp }) => {
  this.oneTimeCode = otp;
});
```

## Example

For a complete example of using the ion-sms-retrieved package, you can check out the [OTP screen](https://github.com/anhhtbk/ion-sms-retrieved/blob/main/example/src/app/home/home.page.ts) in the package's GitHub repository.

## References

- [Auto read OTP Android user consent API](https://androidwave.com/auto-read-otp-android-user-consent-api/)
- [Build Capacitor plugin](https://devdactic.com/build-capacitor-plugin)
- [Custom Native Android Code in Capacitor](https://capacitorjs.com/docs/android/custom-code)
- [Create Implementation in Plugin](https://github.com/capawesome-team/capacitor-badge/blob/cf29ce1d68628a328076d7ed34d21a11ce6eb927/android/src/main/java/dev/robingenz/capacitor/badge/BadgePlugin.java#L17)

That's it! You have learned how to use the ion-sms-retrieved package to implement Android SMS retrieval in your Ionic Capacitor app. Happy coding!