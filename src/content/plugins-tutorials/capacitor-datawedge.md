---
title: "Using capacitor-datawedge package"
description: "This tutorial will guide you through the process of using the capacitor-datawedge package in your Capacitor app."
created_at: "2022-08-30"
published: true
slug: capacitor-datawedge
---

# Using capacitor-datawedge package

In this tutorial, we will learn how to use the capacitor-datawedge package in your Capacitor app. The capacitor-datawedge package provides a simple way to interact with the DataWedge service on Android devices.

## Installation

To get started, first install the capacitor-datawedge package using npm:

```bash
npm install capacitor-datawedge
```

## Setup

Next, we need to configure the capacitor-datawedge package in our Capacitor app.

### Android Configuration

To use the DataWedge service on Android, we need to set up some configurations in the `MainActivity.java` file of your Android project.

Open the `MainActivity.java` file and add the following code:

```java
import com.getcapacitor.community.datawedge.DataWedgePlugin;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initializes the DataWedgePlugin
    DataWedgePlugin.register(this);
  }
}
```

### iOS Configuration

The capacitor-datawedge package currently does not support iOS devices. It is only available for Android.

## Usage

Now that we have installed and configured the capacitor-datawedge package, let's see how to use it in our app.

### Scanning Barcodes

To scan barcodes using DataWedge, we can use the `scan` method provided by the capacitor-datawedge package. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
const { DataWedge } = Plugins;

async function scanBarcode() {
  try {
    const result = await DataWedge.scan();
    console.log('Barcode scanned:', result);
  } catch (error) {
    console.error('Failed to scan barcode:', error);
  }
}
```

### Enabling/Disabling DataWedge

To enable or disable the DataWedge service, we can use the `enable` and `disable` methods respectively. Here's an example:

```javascript
import { Plugins } from '@capacitor/core';
const { DataWedge } = Plugins;

// Enable DataWedge
DataWedge.enable()
  .then(() => {
    console.log('DataWedge enabled');
  })
  .catch((error) => {
    console.error('Failed to enable DataWedge:', error);
  });

// Disable DataWedge
DataWedge.disable()
  .then(() => {
    console.log('DataWedge disabled');
  })
  .catch((error) => {
    console.error('Failed to disable DataWedge:', error);
  });
```

## Conclusion

In this tutorial, we learned how to install, configure, and use the capacitor-datawedge package in a Capacitor app. We saw how to scan barcodes using DataWedge and how to enable or disable the DataWedge service. By integrating DataWedge into your app, you can easily add barcode scanning capabilities to enhance your user experience.