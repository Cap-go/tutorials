---
title: "Using capacitor-nfc-launch"
description: "This tutorial will guide you through the process of using the capacitor-nfc-launch package in your Capacitor app."
created_at: "2022-10-12"
published: true
slug: "capacitor-nfc-launch"
---

# Using capacitor-nfc-launch

In this tutorial, we will learn how to integrate the `capacitor-nfc-launch` package into our Capacitor app. This package allows us to handle Near Field Communication (NFC) capabilities in our app.

## Prerequisites

Before we begin, make sure you have the following installed:

1. Capacitor - This tutorial assumes you already have a Capacitor app set up. If you don't, you can follow the official Capacitor [documentation](https://capacitorjs.com/docs/getting-started) on how to get started.

2. NFC-enabled Device - You will need an NFC-enabled device to test the NFC functionalities.

## Installation

To add the `capacitor-nfc-launch` package to your Capacitor app, follow these steps:

1. Open your project's root directory in a terminal.

2. Run the following command to install the package:

```bash
npm install capacitor-nfc-launch
```

3. Next, we need to sync the iOS and Android native project files by running the following command:

```bash
npx cap sync
```

4. Open your `capacitor.config.json` file and add the following entry under the `plugins` section:

```json
{
  "name": "capacitor-nfc-launch",
  "enabled": true
}
```

5. Sync the iOS and Android native project files again:

```bash
npx cap sync
```

## Usage

Now that we have installed the `capacitor-nfc-launch` package, let's see how we can use it in our app.

### Registering NFC Capabilities

In order to use NFC functionalities, we need to register the NFC capabilities in our app. Open your `MainActivity.java` (for Android) and `AppDelegate.swift` (for iOS) files and add the following code:

```java
// MainActivity.java (Android)

import com.getcapacitor.plugin.nfc.NFCPlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    // ...
    registerPlugin(NFCPlugin.class);
    // ...
  }
}

```

```swift
// AppDelegate.swift (iOS)

import Capacitor
import Foundation
import CoreNFC

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {
  override init() {
    super.init()
    // ...
    addPlugin(NFCPlugin.self)
    // ...
  }
}

```

### Handling NFC Events

Now that we have registered the NFC capabilities, let's see how we can handle NFC events in our app. In your desired component or page, add the following code:

```typescript
import { Plugins } from '@capacitor/core';

const { NFCPlugin } = Plugins;

// Listen for NFC tags
NFCPlugin.addListener('tagDetected', (data) => {
  const tagId = data.tagId;
  console.log(`NFC Tag Detected: ${tagId}`);
});

// Launch app when NFC tag is scanned
NFCPlugin.addListener('tagScanned', () => {
  console.log('NFC Tag Scanned');
});
```

In the above code, we import the `NFCPlugin` from `@capacitor/core` and listen for events like `tagDetected` and `tagScanned`. You can perform your desired actions based on these events.

### Testing on NFC-enabled Device

Now that we have implemented the NFC functionalities in our app, let's test it on an NFC-enabled device.

1. Build and run your app on an NFC-enabled Android or iOS device.

2. Approach an NFC tag with the device. The listener event `tagDetected` should be triggered and the tag ID should be logged in the console.

3. You can also test the `tagScanned` event by launching your app and then scanning an NFC tag. The event should be triggered, and you should see the corresponding message in the console.

Congratulations! You have successfully integrated the `capacitor-nfc-launch` package into your Capacitor app and implemented NFC functionalities.

## Conclusion

In this tutorial, we learned how to use the `capacitor-nfc-launch` package to handle NFC capabilities in our Capacitor app. We covered the installation process, registering NFC capabilities, handling NFC events, and testing on an NFC-enabled device. Now you can leverage the power of NFC in your app and create unique experiences for your users.