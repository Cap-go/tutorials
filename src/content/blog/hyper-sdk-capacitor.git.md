```markdown
---
"title": "Using Hyper-SDK-Capacitor Package",
"description": "This tutorial will guide you on how to use the Hyper-SDK-Capacitor package for integrating payment orchestration in your Capacitor projects.",
"created_at": "2022-01-04",
"published": true,
"slug": "hyper-sdk-capacitor.git"
---

# Using Hyper-SDK-Capacitor Package

The Hyper-SDK-Capacitor package is a wrapper over HyperSDK that allows you to orchestrate payments using different dynamic modules. This tutorial will walk you through the installation process and basic usage of the package.

## Installation

To install the Hyper-SDK-Capacitor package, you can use npm. Make sure to also synchronize the Capacitor project.

```bash
npm install hyper-sdk-capacitor
npx cap sync
```

### Android Setup

For Android, you need to add a Maven URL in the root `build.gradle` file.

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

In the root `build.gradle` file, add the clientId as an ext property. Remember to update the `hyperSDKVersion` as necessary.

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
...

### Import HyperSDK

To start using the Hyper-SDK-Capacitor package, you need to import the necessary modules.

```ts
import { Plugins } from '@capacitor/core';
import 'hyper-sdk-capacitor';

const { HyperServices } = Plugins;
```

### Prefetch

It is recommended to prefetch the SDK to ensure the latest changes are obtained.

```javascript
await HyperServices.preFetch(payload);
```

### Step-1: Create HyperServices Object

This method initializes the `HyperServices` class instance in the Capacitor Plugin. It is essential to call this method before using any other `HyperSDK` APIs.

```javascript
await HyperServices.createHyperServices(clientId, service);
```

For more detailed information and examples, please refer to the [Juspay Developer Docs](https://developer.juspay.in/v2.0/docs/introduction) and [Payment Page SDK Documentation](https://developer.juspay.in/v4.0/docs/introduction).
```
