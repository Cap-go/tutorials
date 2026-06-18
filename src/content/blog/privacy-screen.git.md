---
"title": "Using @capacitor-community/privacy-screen Package in Capacitor",
"description": "This blog tutorial will guide you on how to use the @capacitor-community/privacy-screen package in Capacitor projects.",
"created_at": "2022-01-20",
"published": true,
"slug": "privacy-screen-git"
---

# Using @capacitor-community/privacy-screen Package in Capacitor

The @capacitor-community/privacy-screen package allows you to manage privacy screen settings in your Capacitor applications. Here's a step-by-step guide on how to use this package in your projects.

## Installation

To install the @capacitor-community/privacy-screen package, run the following commands:

```bash
npm install @capacitor-community/privacy-screen
npx cap sync
```

## Configuration

You can configure the @capacitor-community/privacy-screen package by updating the `capacitor.config.json` or `capacitor.config.ts` file with the following properties:

- `enable`: (boolean) Specify whether the plugin should be enabled from startup.
- `imageName`: (string) Define a custom image to display on the privacy screen instead of the default gray background (only available for iOS).
- `contentMode`: ('center' \| 'scaleToFill' \| 'scaleAspectFit' \| 'scaleAspectFill') Choose the content mode of the displayed image (only available for iOS).
- `preventScreenshots`: (boolean) Toggle whether the plugin should prevent screenshots if enabled (only available for iOS).

Here is an example configuration in `capacitor.config.json`:

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

For a working example of using the @capacitor-community/privacy-screen package, you can refer to the [robingenz/capacitor-plugin-demo](https://github.com/robingenz/capacitor-plugin-demo) repository.

## Usage

The @capacitor-community/privacy-screen package does not require additional setup after installation. By default, the protection is enabled. However, you have the option to enable or disable the protection within your application code. Here's how you can interact with the package in your project:

```javascript
import { PrivacyScreen } from '@capacitor-community/privacy-screen';

// Use the `PrivacyScreen` object to interact with the privacy screen settings.
```

This tutorial has covered the installation, configuration, and usage of the @capacitor-community/privacy-screen package in Capacitor projects. Feel free to explore the capabilities of the package further to enhance the privacy features of your mobile applications.