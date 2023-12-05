---
title: "Using the uhfscanner-plugin-c72 Package"
description: "Learn how to use the uhfscanner-plugin-c72 package to integrate UHF scanning functionality into your Ionic Capacitor app."
created_at: "2022-08-18"
published: true
slug: "uhfscanner-plugin-c72"
---

# Using the uhfscanner-plugin-c72 Package

The uhfscanner-plugin-c72 package is a powerful Ionic Capacitor plugin that allows you to integrate UHF scanning functionality into your Ionic Capacitor app. With this package, you can easily scan UHF tags and retrieve data from them. This tutorial will guide you through the process of using the uhfscanner-plugin-c72 package in your Ionic Capacitor app.

## Installation

To install the uhfscanner-plugin-c72 package, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to your Ionic Capacitor app project directory.
3. Run the following command to install the package:

```
npm install uhfscanner-plugin-c72
```

4. After the installation is complete, run the following command to sync the Capacitor project:

```
npx cap sync
```

## API Usage

The uhfscanner-plugin-c72 package provides the following API methods:

### echo

Use the `echo` method to test the plugin by echoing back a value. Here's how you can use it:

```javascript
import { Plugins } from '@capacitor/core';

const { UHFScannerPluginC72 } = Plugins;

async function testEcho() {
  const echoResult = await UHFScannerPluginC72.echo({ value: 'Hello, Capacitor!' });
  console.log(echoResult.value);
}

testEcho();
```

### execute

The `execute` method is used to perform actions with the UHF scanner, such as starting or stopping scanning. Here's an example of how to use it:

```javascript
import { Plugins } from '@capacitor/core';

const { UHFScannerPluginC72 } = Plugins;

const callbackFn = (value, result, err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Value:', value);
  console.log('Result:', result);
};

async function testExecute() {
  const action = 'start'; // Can be 'start' or 'stop'
  const power = 10; // Power level between 0 and 25

  const callbackId = await UHFScannerPluginC72.execute({ action, power }, callbackFn);
  console.log('Callback ID:', callbackId);
}

testExecute();
```

## Conclusion

In this tutorial, you learned how to use the uhfscanner-plugin-c72 package to integrate UHF scanning functionality into your Ionic Capacitor app. You learned how to install the package, use the `echo` method for testing, and perform actions with the UHF scanner using the `execute` method. Now you can enhance your app by adding UHF scanning capabilities!

Make sure to refer to the package documentation for a complete reference of the available methods and their options. Happy coding!