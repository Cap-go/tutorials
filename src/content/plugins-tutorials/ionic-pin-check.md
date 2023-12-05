---
title: "Using the @creativecookie/pin-check Package in Ionic"
description: "A tutorial on how to use the @creativecookie/pin-check package in Ionic to check if the password pin is enabled on a mobile device."
created_at: "2021-10-01"
published: true
slug: "ionic-pin-check"
---

# Using the @creativecookie/pin-check Package in Ionic

In this tutorial, we will learn how to use the `@creativecookie/pin-check` package in an Ionic application to check if the password pin is enabled on a mobile device.

## Installation

Before we begin, make sure you have Capacitor installed in your Ionic project. If not, you can install Capacitor by running the following command in your project directory:

```bash
npm install --save @capacitor/core @capacitor/cli
npx cap init
```

Next, install the `@creativecookie/pin-check` package by running the following command:

```bash
npm install @creativecookie/pin-check
npx cap sync
```

This will install the package and synchronize it with your Capacitor project.

## Usage

1. In the module page where you want to use the `@creativecookie/pin-check` package, import the `PinCheck` class:

```typescript
import { PinCheck } from '@creativecookie/pin-check';
```

2. Inside your function, `await` the `pinCheck()` method and access the `value` property to get the status of the password pin:

```typescript
async checkPin() {
  const result = await PinCheck.pinCheck();
  const isPinEnabled = result.value; // true if pin is enabled, false otherwise
}
```

That's it! You can now use the `@creativecookie/pin-check` package to check if the password pin is enabled on a mobile device in your Ionic application.

## Conclusion

In this tutorial, we learned how to install and use the `@creativecookie/pin-check` package in an Ionic application. We saw how to check if the password pin is enabled on a mobile device using the `pinCheck()` method. This can be useful in scenarios where you want to provide additional security measures or customize the user experience based on the pin status.

Remember to refer to the package's documentation for more information on additional features and options provided by the `@creativecookie/pin-check` package. Happy coding!