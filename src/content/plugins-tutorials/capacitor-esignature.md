---
title: "Using @courierexpert/capacitor-esignature package"
description: "A tutorial on how to use the @courierexpert/capacitor-esignature package to implement native e-signature in your Capacitor app."
created_at: "2022-07-15"
published: true
slug: capacitor-esignature
---

# Using @courierexpert/capacitor-esignature package

In this tutorial, we will learn how to use the @courierexpert/capacitor-esignature package to implement native e-signature functionality in your Capacitor app. This package provides custom capacitor plugins for handling e-signature features.

## Prerequisites

Before proceeding, make sure you have the following prerequisites installed:

- Capacitor
- Node.js
- npm or yarn

## Installation

To install the @courierexpert/capacitor-esignature package, run the following command in your project directory:

```bash
npm install @courierexpert/capacitor-esignature
npx cap sync
```

This will install the package and sync the necessary files with your Capacitor project.

## API

The @courierexpert/capacitor-esignature package provides the following API methods:

### initialise()

This method initializes the e-signature functionality. It returns a Promise that resolves once the initialisation is complete.

```typescript
import { Plugins } from "@capacitor/core";

const { CourierexpertEsignature } = Plugins;

CourierexpertEsignature.initialise()
  .then(() => {
    console.log("E-signature functionality initialized");
  })
  .catch((error) => {
    console.error("Failed to initialize e-signature functionality", error);
  });
```

### clearSignature()

This method clears the currently drawn signature. It returns a Promise that resolves once the signature is cleared.

```typescript
import { Plugins } from "@capacitor/core";

const { CourierexpertEsignature } = Plugins;

CourierexpertEsignature.clearSignature()
  .then(() => {
    console.log("Signature cleared");
  })
  .catch((error) => {
    console.error("Failed to clear signature", error);
  });
```

## Conclusion

In this tutorial, we learned how to use the @courierexpert/capacitor-esignature package to implement native e-signature functionality in a Capacitor app. We covered the installation process and explored the available API methods for initializing the e-signature functionality and clearing the signature. You can now leverage this package to add e-signature capabilities to your own Capacitor projects.

Remember to reference the official documentation of the package for more detailed information and additional functionalities.

That's it! Happy coding!