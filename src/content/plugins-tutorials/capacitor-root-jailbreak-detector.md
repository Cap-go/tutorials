# Using the `capacitor-root-jailbreak-detector` Package

![Capacitor Root Jailbreak Detector](https://example.com/image.png)

## Introduction
In this tutorial, we will learn how to use the `capacitor-root-jailbreak-detector` package in Capacitor applications. This package allows you to check if a device is rooted or jailbroken, providing an additional layer of security for your app.

## Prerequisites
Before we begin, make sure you have the following installed:

- Node.js and npm
- Capacitor CLI (if you haven't already installed Capacitor)

## Installation
To install `capacitor-root-jailbreak-detector` package, run the following command in your project's root directory:

```bash
npm install capacitor-root-jailbreak-detector
```

## Configuration
After installing the package, you need to configure it. Open the `capacitor.config.json` file and add the following configuration:

```json
{
  "plugins": {
    "RootJailbreakDetector": {
      "someConfig": "some value",
      "anotherConfig": "another value"
    }
  }
}
```

Replace `"someConfig"` and `"anotherConfig"` with the actual configuration options supported by the package. Refer to the package's documentation for more details.

## Usage
Now that the package is installed and configured, you can use it in your app. Import the `RootJailbreakDetector` module and use its methods to check for root or jailbreak status.

```typescript
import { Plugins } from '@capacitor/core';

const { RootJailbreakDetector } = Plugins;

// Check if the device is rooted or jailbroken
const checkStatus = async () => {
  const result = await RootJailbreakDetector.checkStatus();

  if (result.isRootedOrJailbroken) {
    // Device is rooted/jailbroken
    console.log('Device is rooted/jailbroken');
  } else {
    // Device is not rooted/jailbroken
    console.log('Device is not rooted/jailbroken');
  }
};

checkStatus();
```

## Conclusion
In this tutorial, we have learned how to use the `capacitor-root-jailbreak-detector` package to check if a device is rooted or jailbroken. By adding this additional layer of security, you can protect your app from potential security risks.