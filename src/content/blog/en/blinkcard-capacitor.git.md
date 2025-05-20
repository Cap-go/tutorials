---
title: Using BlinkCard Capacitor Plugin with @microblink/blinkcard-capacitor
description: >-
  Learn how to integrate and use the BlinkCard plugin for Capacitor by
  @microblink/blinkcard-capacitor in your cross-platform apps.
created_at: '2023-11-19'
published: true
slug: blinkcard-capacitor-git
locale: en
---

# Using BlinkCard Capacitor Plugin with @microblink/blinkcard-capacitor

The BlinkCard Capacitor Plugin by @microblink/blinkcard-capacitor allows developers to easily integrate AI-driven credit card scanning software into their cross-platform apps. This tutorial will guide you through the process of setting up and using the BlinkCard plugin in your Capacitor app.

## Minimum Software Requirements

To start using the BlinkCard Capacitor Plugin, you will need to ensure that you have the necessary software requirements in place:

- [BlinkCard SDK](https://microblink.com/products/blinkcard)
- [BlinkCard iOS SDK](https://github.com/BlinkCard/blinkcard-ios)
- [BlinkCard Android SDK](https://github.com/BlinkCard/blinkcard-android)

For detailed instructions on how to install these SDKs, please refer to the [Platform specifics](#platform-specifics) section.

### Capacitor

The BlinkCard plugin is developed with Capacitor version 5.7.0. For help with Capacitor, you can refer to the official [Capacitor documentation](https://capacitorjs.com/docs).

### iOS

The BlinkCard Capacitor plugin supports iOS 12.0 or newer.

### Android

The BlinkCard Capacitor plugin supports Android 5.0 (API level 21) or newer.

## Getting Started

To get started, follow these steps:

1. Create an empty project if needed:

```shell
ionic start project_name --capacitor
```

2. Install the blinkcard-capacitor package:

```shell
npm install --save @microblink/blinkcard-capacitor
```

### Quick Start with Sample App

A sample app is provided with the latest Ionic framework and Angular to demonstrate the BlinkCard plugin. To try the BlinkCard plugin, you can generate a minimal sample application. Run the `./initIonicSampleApp.sh` script to do so.

To run the sample application:

- **iOS:**
  - Open the app in Xcode by running `npx cap open ios` from the sample app's root directory
  - Open the info.plist and add the following permission:
    - Privacy - Camera Usage Description: To Take Photos and Video
  - Open `Signing & Capabilities` and set your Team
  - Press `Run`

- **Android:**
  - Run the app by executing `npx cap run android` from the sample app's root directory

### Plugin Usage

To integrate the BlinkCard Capacitor Plugin into your app, follow these steps:

1. Import the blinkcard-capacitor package:

```typescript
import * as BlinkCard from '@microblink/blinkcard-capacitor';
```

2. Initialize the plugin and start using its functionalities in your app.

By following these steps, you can easily integrate the BlinkCard Capacitor Plugin into your cross-platform app and leverage its AI-driven credit card scanning capabilities.
