```markdown
---
"title": "Using @capacitor-community/privacy-screen Package Tutorial",
"description": "This tutorial covers how to use the @capacitor-community/privacy-screen package to protect your app from displaying screenshots in the Recents screen and App Switcher",
"created_at": "2022-01-18",
"published": true,
"slug": "privacy-screen.git"
---

# Using @capacitor-community/privacy-screen Package Tutorial

This tutorial will guide you through using the @capacitor-community/privacy-screen package to protect your app from displaying screenshots in the Recents screen and App Switcher.

## Installation

```
npm install @capacitor-community/privacy-screen
npx cap sync
```

## Configuration

To configure the privacy screen plugin, you can set different options in your `capacitor.config.json` or `capacitor.config.ts` file. Here is an example configuration:

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

## Usage

The plugin is enabled by default, but you have the option to enable or disable the protection in your code. Here is an example of how you can use the plugin in your application code:

```js
import { PrivacyScreen } from '@capacitor-community/privacy-screen';

// Example usage to disable protection
PrivacyScreen.disable();

// Example usage to enable protection
PrivacyScreen.enable();
```

## Demo

You can find a working example and demo of the @capacitor-community/privacy-screen package in [robingenz/capacitor-plugin-demo](https://github.com/robingenz/capacitor-plugin-demo).
```
```