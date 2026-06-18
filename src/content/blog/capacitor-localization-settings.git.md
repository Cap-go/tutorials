---
"title": "Using @skippay/capacitor-localization-settings Package",
"description": "A tutorial on how to implement and configure @skippay/capacitor-localization-settings package in a Capacitor app to manage localization and settings.",
"created_at": "2022-10-05",
"published": true,
"slug": "capacitor-localization-settings-git"
---

# Using @skippay/capacitor-localization-settings Package

In this tutorial, we will walk through the process of implementing the **@skippay/capacitor-localization-settings** package in a Capacitor application to manage localization and settings effectively.

## Installation

First, let's start by installing the package in your Capacitor project. Run the following command:

```bash
npm install @skippay/capacitor-localization-settings
```

Next, ensure that you have the package properly integrated with your project and configured according to your requirements.

## Configuration

### Import the Plugin

In your project files, import the **@skippay/capacitor-localization-settings** plugin:

```typescript
import { Plugins } from '@capacitor/core';
const { LocalizationSettings } = Plugins;
```

### Initialization

Initialize the plugin in your app, preferably in the `ngOnInit` method of your main component:

```typescript
ngOnInit() {
  LocalizationSettings.init();
}
```

### Usage

#### Get Current Locale

You can fetch the current locale your application is using:

```typescript
const { locale } = await LocalizationSettings.getLocale();
console.log('Current Locale:', locale);
```

#### Set Locale

Set a new locale for your application:

```typescript
await LocalizationSettings.setLocale({ locale: 'fr-FR' });
console.log('Locale set to French');
```

### Additional Configuration

The package provides various methods to manage settings and localization. Explore the [documentation](https://github.com/skippay/capacitor-localization-settings) for a comprehensive guide.

## Conclusion

By following this tutorial, you have successfully integrated the **@skippay/capacitor-localization-settings** package into your Capacitor project. Harness the power of this package to efficiently manage localization and settings within your application.