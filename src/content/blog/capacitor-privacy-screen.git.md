---
title: "Using @capacitor/privacy-screen Package"
description: "A markdown tutorial on how to use the @capacitor/privacy-screen package in Capacitor projects."
created_at: "2023-10-09"
published: true
slug: capacitor-privacy-screen.git
---

## Installation

```sh
npm install @capacitor/privacy-screen
npx cap sync
```

## Configuration

The `@capacitor/privacy-screen` package provides configuration options to customize the privacy screen behavior. In the `capacitor.config.json` file or `capacitor.config.ts` file, you can set the following options:

- `enable`: A boolean value to configure whether the plugin should be enabled from startup. Only available for Android and iOS.
- `imageName`: A string to configure whether a custom image from assets should be displayed instead of a default gray background for the privacy screen. Only available for iOS.
- `contentMode`: A string value to configure the content mode of the displayed image. Only available for iOS.
- `preventScreenshots`: A boolean value to configure whether the plugin should prevent screenshots if enabled. Only available for iOS.

Here is an example of how you can configure these options in your `capacitor.config.json` or `capacitor.config.ts` file:

```json
{
  "plugins": {
    "PrivacyScreen": {
      "enable": true,
      "imageName": "Splashscreen",
      "contentMode": "scaleAspectFit",
      "preventScreenshots": false
    }
  }
}
```

## Demo

For a working example, you can refer to the [robingenz/capacitor-plugin-demo](https://github.com/robingenz/capacitor-plugin-demo) repository.

## Usage

The `@capacitor/privacy-screen` package only needs to be installed, and the protection is enabled by default. You have the option to enable/disable the protection as needed in your project:

```js
import { PrivacyScreen } from '@capacitor/privacy-screen';
```

This tutorial provides a basic overview of using the @capacitor/privacy-screen package in Capacitor projects.