---
title: "Using capacitor-test-mobile-sdk"
description: "A tutorial on how to use the capacitor-test-mobile-sdk package"
created_at: "2022-01-24"
published: true
slug: "capacitortestmobilesdk"
---

# Using capacitor-test-mobile-sdk

This tutorial will guide you through the process of using the capacitor-test-mobile-sdk package. The package provides features for testing mobile apps developed with Capacitor.

## Installation

To get started, you need to install the capacitor-test-mobile-sdk package. Open your terminal and run the following command:

```bash
npm install capacitor-test-mobile-sdk
```

## Setup

Once the package is installed, you need to import it in your project. Open the file where you want to use the package and add the following line:

```javascript
import { CapacitorTestMobileSDK } from 'capacitor-test-mobile-sdk';
```

## Usage

The capacitor-test-mobile-sdk package provides various features for testing mobile apps. Here are a few examples:

### Example 1: Testing API calls

You can use the package to test API calls made by your mobile app. Here's an example of how to do it:

```javascript
// Make an API request using your mobile app's code

const response = await fetch('https://api.example.com/data');
const data = await response.json();

// Use the capacitor-test-mobile-sdk to test the API response

const testSDK = new CapacitorTestMobileSDK();
testSDK.expect(data).toHaveProperty('success', true);
```

### Example 2: Simulating user interactions

The package also allows you to simulate user interactions in your mobile app. Here's an example of how to simulate a button click:

```javascript
// Simulate a button click using the capacitor-test-mobile-sdk

const testSDK = new CapacitorTestMobileSDK();
testSDK.simulateButtonClick('buttonId');

// Assert that the expected action is performed

// ...
```

## Conclusion

In this tutorial, we have covered the basics of using the capacitor-test-mobile-sdk package. You learned how to install the package, import it into your project, and use its features for testing mobile apps developed with Capacitor.