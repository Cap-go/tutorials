---
title: "Using hyper-sdk-capacitor package"
description: "A tutorial on how to use the hyper-sdk-capacitor package for payment orchestration."
created_at: "July 6, 2021"
published: true
slug: hyper-sdk-capacitor
---

# Using hyper-sdk-capacitor package

This tutorial will guide you on how to use the `hyper-sdk-capacitor` package for payment orchestration. The `hyper-sdk-capacitor` package is a Capacitor wrapper over HyperSDK, which enables payment orchestration via different dynamic modules.

## Installation

To install the `hyper-sdk-capacitor` package, follow these steps:

```bash
npm install hyper-sdk-capacitor
npx cap sync
```

### Android

Add the following Maven URL in the root `build.gradle` file:

```groovy
allprojects {
    repositories {
        ....
        ....
        maven { url "https://maven.juspay.in/jp-build-packages/hyper-sdk/" }
    }
}
```

#### Updating Client ID (3.0.0 and above)

Add the `clientId` extension property in the root `build.gradle` file:

```groovy
buildscript {
    ....
    ext {
        ....
        clientId = "<clientId shared by Juspay team>"
        hyperSDKVersion = "2.1.13"
        ....
    }
    ....
}
```

This `clientId` is the same as the one present in the `MerchantConfig.txt` file.

#### Updating Client ID (2.0.x) [Deprecated]

Place the `MerchantConfig.txt` file alongside the root `build.gradle` file. The contents of the file should be as follows:

```txt
clientId = <clientId shared by Juspay Team>
```

### iOS

Place the `MerchantConfig.txt` file inside the folder where the `Podfile` is present. This file doesn't need to be added to the project. The content of the file should be as below:

```txt
clientId = <clientId shared by Juspay Team>
```

Add the following `post_install` script in the `Podfile`:

```sh
post_install do |installer|
 fuse_path = "./Pods/HyperSDK/Fuse.rb"
 clean_assets = false # Pass true to re-download all the assets
 if File.exist?(fuse_path)
   if system("ruby", fuse_path.to_s, clean_assets.to_s)
   end
 end
end
```

Run the following command inside the `ios` folder of your project:

```sh
pod install
```

## Import HyperSDK

To use the `hyper-sdk-capacitor` package, import `HyperServices` from `@capacitor/core` and import `'hyper-sdk-capacitor'` as shown below:

```ts
import { Plugins } from '@capacitor/core';
import 'hyper-sdk-capacitor';

const { HyperServices } = Plugins;
```

## Prefetch

To keep the SDK up to date with the latest changes, it is highly recommended to call `preFetch` as early as possible. It takes a JSON object as its argument:

```javascript
await HyperServices.preFetch(payload);
```

## Step 1: Create HyperServices Object

To create an instance of the `HyperServices` class in the Capacitor Plugin, you need to call the `createHyperServices` method. This method is mandatory and must be called before any other subsequent methods from `HyperSDK`:

```javascript
await HyperServices.createHyperServices();
```

For web, you need to pass the following parameters to the `createHyperServices` method:

- `clientId`: "Client shared by Juspay"
- `service`:
  - `"in.juspay.hyperpay"` (For Payment Page)
  - `"in.juspay.hyperapi"` (For Express Checkout)

```javascript
await HyperServices.createHyperServices(clientId, service);
```

That's it! You have now successfully installed and set up the `hyper-sdk-capacitor` package for payment orchestration. You can now start using the various methods and APIs provided by the package for processing payments.

Remember to refer to the [Juspay Developer Docs](https://developer.juspay.in/v2.0/docs/introduction) for more detailed information on using the `express-checkout-sdk` and `payment-page-sdk`.