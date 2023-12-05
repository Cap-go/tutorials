---
title: "Using capacitor-ump-consent Package"
description: "A tutorial on how to use the capacitor-ump-consent package to manage user consent in Capacitor apps."
created_at: "2021-12-01"
published: true
slug: "capacitor-ump-consent"
---

# Using capacitor-ump-consent Package

The capacitor-ump-consent package is a Capacitor plugin that provides functionality to manage user consent in Capacitor apps. This tutorial will guide you through the process of installing the package, using its methods, and integrating it into your Capacitor project.

## Installation

To install the capacitor-ump-consent package, run the following command in your project directory:

```bash
npm install capacitor-ump-consent
npx cap sync
```

This will install the package and synchronize the native project files with your Capacitor project.

## Usage

After the package has been installed, you can import the `UmpConsent` class from the `capacitor-ump-consent` module in your TypeScript file:

```ts
import { UmpConsent } from 'capacitor-ump-consent';
```

### Displaying the User Messaging Platform Banner

To display the User Messaging Platform (UMP) banner, you can use the `userMessagingPlatform` method provided by the `UmpConsent` class. This method returns a promise that resolves to an object with a `status` property.

```ts
UmpConsent.userMessagingPlatform()
  .then((value) => {
    // Show UMP banner
  })
  .catch((error) => {
    // Handle error
  });
```

### Forcing Consent Form Display

If you need to force the display of the consent form, you can use the `forceForm` method provided by the `UmpConsent` class. This method also returns a promise that resolves to an object with a `status` property.

```ts
UmpConsent.forceForm()
  .then((value) => {
    // Show consent form
  })
  .catch((error) => {
    // Handle error
  });
```

### Resetting Consent State

To reset the consent state, you can use the `reset` method provided by the `UmpConsent` class. This method does not return any value and can be called without using the promise syntax.

```ts
UmpConsent.reset();
```

## Conclusion

In this tutorial, you learned how to install and use the capacitor-ump-consent package to manage user consent in Capacitor apps. You can now integrate the package into your project and utilize its methods to display the UMP banner, force the consent form display, and reset the consent state as needed.