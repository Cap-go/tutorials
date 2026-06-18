```
title: "Using the @juspay-tech/capacitor-hyperswitch Package"
description: "Learn about integrating the HyperSwitch package from Juspay with Capacitor, enabling payment orchestration through different dynamic modules."
created_at: "2023-10-30"
published: true
slug: capacitor-hyperswitch.git
```

## Install

```bash
npm install @juspay-tech/capacitor-hyperswitch
npx cap sync
```

### Android Configuration

Add the following maven repository URL in the root `build.gradle` file:

```groovy
allprojects {
   repositories {
       maven { url "https://maven.juspay.in/jp-build-packages/hyper-sdk/" }
   }
}
```

#### Updating Client ID (Client ID Version 3.0.0 and above)

In the root `build.gradle` file, add the following:

```groovy
buildscript {
    ...
    ext {
        ...
        clientId = "<clientId shared by Juspay team>"
        hyperSDKVersion = "2.1.13"
        ...
    }
    ....
}
```

#### Updating Client ID (Client ID Version 2.0.x) [Deprecated]

Place the `MerchantConfig.txt` file next to the root `build.gradle` file with the contents:

```txt
clientId = <clientId shared by Juspay Team>
```

### iOS Configuration

Place the `MerchantConfig.txt` file in the same folder as the Podfile with the content:

```txt
clientId = <clientId shared by Juspay Team>
```

Add the following post_install script in the Podfile:

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

Run the following command inside the ios folder of your project:

```sh
pod install
```

### Import HyperSwitch

```typescript
import { Plugins } from '@capacitor/core';
import '@juspay-tech/capacitor-hyperswitch';

const { HyperSwitch } = Plugins;
```

### Prefetch

It is recommended to call `preFetch` early to keep the SDK updated. Pass a JSON object as the argument.

```javascript
await HyperSwitch.preFetch(payload);
```

### Step 1: Create HyperSwitch Object

Create an instance of the `HyperSwitch` class in the Capacitor Plugin to trigger all the `HyperSwitch` APIs/methods.

**Note**: This method is mandatory before calling other `HyperSwitch` methods.

```javascript
await HyperSwitch.createHyperSwitch();
```

For Web, pass the following parameters to the `createHyperSwitch` API:

- clientId: "Client shared by Juspay"
- service:
  - `"in.juspay.hyperswitch.payment"` (For Payment Page)
  - `"in.juspay.hyperswitch.expressCheckout"` (For Express Checkout)
```