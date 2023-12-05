---
title: "Using capacitor-plugin-developer-options"
description: "A tutorial on how to use the capacitor-plugin-developer-options package."
created_at: "2021-10-10"
published: true
slug: "capacitor-plugin-developer-options"
---

# Using capacitor-plugin-developer-options

This tutorial will guide you through the steps of using the capacitor-plugin-developer-options package to enhance your development workflow with Capacitor.

## Installation

First, make sure you have Capacitor installed globally on your machine. If not, you can install it by running the following command:

```shell
npm install -g @capacitor/core @capacitor/cli
```

Next, you can install the capacitor-plugin-developer-options package by running the following command in your project directory:

```shell
npm install capacitor-plugin-developer-options
```

## Setup

Once the plugin is installed, you need to import and register it in your Capacitor project. Open the `capacitor.config.json` file in the root of your project and add the following entry under the "plugins" section:

```json
"capacitor-plugin-developer-options": {
  "enabled": true
}
```

## Usage

The capacitor-plugin-developer-options package provides several developer options that can be used during development to enhance debugging and testing capabilities.

### Enable Developer Mode

To enable developer mode, simply call the `enableDeveloperMode()` method provided by the package. This will enable additional developer options in your app.

```typescript
import { Plugins } from '@capacitor/core';
const { DeveloperOptions } = Plugins;

// Enable developer mode
DeveloperOptions.enableDeveloperMode();
```

### Show Platform Info

To display platform information, you can use the `showPlatformInfo()` method. This will show details about the current device platform, such as the operating system version and device model.

```typescript
import { Plugins } from '@capacitor/core';
const { DeveloperOptions } = Plugins;

// Show platform info
DeveloperOptions.showPlatformInfo();
```

### Enable Mock Location

If you want to simulate a specific location during testing, you can use the `enableMockLocation()` method. This will enable the mock location feature, allowing you to set custom latitude and longitude values.

```typescript
import { Plugins } from '@capacitor/core';
const { DeveloperOptions } = Plugins;

// Enable mock location
DeveloperOptions.enableMockLocation();
```

### Custom Developer Options

The capacitor-plugin-developer-options package also allows you to define custom developer options specific to your app. You can create your own UI and functionality and use the `addDeveloperOption()` method to register them.

```typescript
import { Plugins } from '@capacitor/core';
const { DeveloperOptions } = Plugins;

// Define custom developer option
const customOption = {
  name: 'Custom Option',
  action: () => {
    // Perform custom action
    console.log('Custom option clicked');
  },
};

// Add custom developer option
DeveloperOptions.addDeveloperOption(customOption);
```

That's it! You have now learned how to use the capacitor-plugin-developer-options package to enable developer mode, display platform info, enable mock location, and define custom developer options in your Capacitor app.

Happy coding!