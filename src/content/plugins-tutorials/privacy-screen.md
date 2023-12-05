---
title: "Using @capacitor-community/privacy-screen Package"
description: "Learn how to use the @capacitor-community/privacy-screen package to protect your app from displaying screenshots in the Recents screen or App Switcher."
created_at: "2023-10-18"
published: true
slug: privacy-screen
---

# Using @capacitor-community/privacy-screen Package

In this tutorial, we will learn how to use the `@capacitor-community/privacy-screen` package to protect your app from displaying screenshots in the Recents screen or App Switcher. This package is available for Capacitor, a framework for building cross-platform mobile apps using web technologies.

## Installation

To get started, install the `@capacitor-community/privacy-screen` package by running the following command:

```bash
npm install @capacitor-community/privacy-screen
npx cap sync
```

## Configuration

The `@capacitor-community/privacy-screen` package provides some configuration options that you can adjust based on your needs. Here are the available configuration values:

| Option        | Type    | Description                                                                                                                                         | Default |
| ------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| enable        | boolean | Configure whether the protection should be enabled from startup. Only available for Android and iOS.                                               | true    |
| imageName     | string  | Configure whether a custom image from assets should be displayed instead of a default background gray for the privacy screen. Only available for iOS. | ""      |

You can configure these options in the `capacitor.config.json` file as follows:

```json
{
  "plugins": {
    "PrivacyScreen": {
      "enable": true,
      "imageName": "Splashscreen"
    }
  }
}
```

## Usage

Once you have installed and configured the package, you can start using the `@capacitor-community/privacy-screen` API in your app. The protection is enabled by default, but you can enable or disable it manually using the provided methods.

Here is an example of how to enable and disable the protection using the package API:

```javascript
import { PrivacyScreen } from '@capacitor-community/privacy-screen';

const enableProtection = async () => {
  await PrivacyScreen.enable();
};

const disableProtection = async () => {
  await PrivacyScreen.disable();
};
```

## API Reference

The `@capacitor-community/privacy-screen` package provides the following API methods:

### `enable()`

Enables the privacy screen protection.

```javascript
PrivacyScreen.enable();
```

### `disable()`

Disables the privacy screen protection.

```javascript
PrivacyScreen.disable();
```

## Conclusion

In this tutorial, we have learned how to use the `@capacitor-community/privacy-screen` package to protect your app from displaying screenshots in the Recents screen or App Switcher. We covered the installation and configuration steps, as well as how to use the package API to enable or disable the protection.

By leveraging the `@capacitor-community/privacy-screen` package, you can ensure that your app's sensitive information remains secure and private.