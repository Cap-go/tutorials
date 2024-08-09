---
title: Using Klaviyo SDK Capacitor Plugin
description: This tutorial will guide you through integrating the Klaviyo SDK Capacitor Plugin into your application to interact with Klaviyo services.
created_at: 2022-03-17
published: true
slug: klaviyo-sdk-capacitor-plugin
---

# Using Klaviyo SDK Capacitor Plugin

The Klaviyo SDK Capacitor Plugin allows you to seamlessly integrate Klaviyo services into your application. This plugin enables you to interact with the Klaviyo SDK, making it easy to incorporate powerful marketing and email automation capabilities into your mobile app.

## Installation

To begin, you need to install the Klaviyo SDK Capacitor Plugin from npm. Navigate to your project's root folder and run the following command:

```bash
$ npm install klaviyo-sdk-capacitor-plugin
```

## Setup

### Android

If you are using Android, you need to make sure that your project's `build.gradle` file is properly configured to include the necessary repositories for Klaviyo SDK and any required dependencies. Ensure you have the following repositories added to the top-level app level `build.gradle` file:

```gradle
allprojects {

    repositories {
        // Other repositories...
        maven { url "https://klaviyo-sdk.com/repository/maven-public/" }
        maven { url 'https://jcenter.bintray.com' }
    }

}
```

### iOS

For iOS, there may be additional steps required, such as configuring usage descriptions or permissions related to the features your app intends to utilize with Klaviyo. Make sure to follow the instructions provided by the Klaviyo SDK documentation for iOS setup.

## Initialization

To start using the Klaviyo SDK Capacitor Plugin, you first need to initialize the plugin in your project. Here's an example of how you can initialize the plugin:

```typescript
import { KlaviyoSDK } from 'klaviyo-sdk-capacitor-plugin';

// Initialize the Klaviyo SDK
const klaviyo = new KlaviyoSDK();

// Set up the plugin with your API keys or configurations
klaviyo.initialize({
    apiKey: 'YOUR_API_KEY',
    config: {
        // Add any additional configurations here
    }
});
```

## Sending Events

Using the Klaviyo SDK Capacitor Plugin, you can easily track events and send data to Klaviyo. Here's an example of how you can send an event:

```typescript
// Track an event
klaviyo.trackEvent({
    eventName: 'Product Viewed',
    properties: {
        productId: '12345',
        productName: 'Sample Product'
    }
});
```

By following these steps, you can successfully integrate the Klaviyo SDK Capacitor Plugin into your project and leverage the powerful marketing and analytics features offered by Klaviyo.
