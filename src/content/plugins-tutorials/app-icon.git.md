---
"title": "Using @capacitor-community/app-icon Package Tutorial",
"description": "Tutorial on how to use the @capacitor-community/app-icon package to programmatically change an app's icon.",
"created_at": "2023/10/09",
"published": true,
"slug": "app-icon.git"
---

# Using @capacitor-community/app-icon Package Tutorial

This tutorial will guide you through the process of using the `@capacitor-community/app-icon` package to programmatically change an app's icon. This package allows you to dynamically update the app icon on the device's home screen.

## Installation

To get started, you need to install the `@capacitor-community/app-icon` package by running the following command:

```bash
npm install @capacitor-community/app-icon
npx cap sync
```

## Configuration

Before using the package, you need to configure the alternate icons within your app bundle. These icons should be added directly to your project.

### Android Configuration

1. Add the alternate icons to your Android project in `app/src/main/res`.
2. Setup the `ApplicationManifest.xml` file for Android.

## Usage

Once you have installed and configured the package, you can now programmatically change the app's icon using the provided methods.

```typescript
import { AppIcon } from '@capacitor-community/app-icon';

// Change the app icon
AppIcon.change({ name: 'icon_name' });
```

Remember, changing the app icon is only allowed when the app is in the foreground on iOS devices. Android support for changing the app icon is currently in beta.

This tutorial provides a basic overview of using the `@capacitor-community/app-icon` package. For more advanced features and customization options, refer to the package's documentation.

Happy coding!