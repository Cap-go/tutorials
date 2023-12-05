---
title: "Using @ionic/portals Package"
description: "A tutorial on how to use the @ionic/portals package to add web-based experiences to native mobile apps."
created_at: "2021-09-27"
published: true
slug: "ionic-portals"
---

# Using @ionic/portals Package

In this tutorial, we will walk through the process of using the `@ionic/portals` package to add web-based experiences to native mobile apps. Ionic Portals is a supercharged native Web View component for iOS and Android that enables native and web teams to better collaborate and bring new and existing web experiences to mobile in a safe, controlled way.

## Prerequisites

Before we begin, make sure you have the following prerequisites installed:

- Node.js
- npm or yarn
- Ionic CLI

## Installation

To start using the `@ionic/portals` package, you need to install it in your project. Open your terminal and navigate to your project directory. Then, run the following command:

```bash
npm install @ionic/portals
```

or

```bash
yarn add @ionic/portals
```

This will add the `@ionic/portals` package to your project.

## Integration

Once you have installed the `@ionic/portals` package, you need to integrate it into your existing project. The integration process differs slightly between Android and iOS. Follow the appropriate guide based on your target platform.

- [Android Integration Guide](https://ionic.io/docs/portals/getting-started/android)
- [iOS Integration Guide](https://ionic.io/docs/portals/getting-started/ios)

## Register for Access

To use the `@ionic/portals` package, you need to obtain a free license key from Ionic. Follow these steps to register for access and obtain your license key:

1. Login to your Ionic account.
2. Navigate to the Portals section of the Ionic Dashboard.
3. Follow the instructions to register for access and obtain your license key.

Refer to the Android or iOS integration guides (mentioned in the previous section) to see where to add your license key.

## Usage

Once you have integrated the `@ionic/portals` package and obtained your license key, you can start using it in your project. Import the necessary components and initialize the portals.

```typescript
import { Portals } from '@ionic/portals';

...

// Initialize Portals
Portals.initialize({
  licenseKey: 'YOUR_LICENSE_KEY',
  // Add additional configuration options as needed
});
```

You can now use the `Portals` object to interact with the native web view and perform various actions, such as loading a URL, executing JavaScript code, and listening to events.

```typescript
import { Portals } from '@ionic/portals';

...

// Load a URL in the web view
Portals.load('https://example.com');

// Execute JavaScript code in the web view
Portals.executeJavaScript('document.body.style.backgroundColor = "red";');

// Listen to events from the web view
Portals.addListener('event', (data) => {
  console.log('Received event:', data);
});
```

Make sure to refer to the [official documentation](https://ionic.io/docs/portals) for more details on available methods and options provided by the `@ionic/portals` package.

## Conclusion

In this tutorial, we have learned how to use the `@ionic/portals` package to add web-based experiences to native mobile apps. We covered the installation process, integration into Android and iOS projects, registration for access, and basic usage of the package. With Ionic Portals, you can enhance your native mobile apps with web-based content and create a seamless user experience.

Remember to refer to the official documentation for more advanced features and customization options provided by the `@ionic/portals` package. Happy coding!