---
"title": "Using @capacitor-community/app-icon Package Tutorial",
"description": "A step-by-step guide on how to use the @capacitor-community/app-icon package to programmatically change an app's icon.",
"created_at": "2022-01-25",
"published": true,
"slug": "app-icon.git"
---

# Using @capacitor-community/app-icon Package Tutorial

In this tutorial, we will walk through the steps to use the `@capacitor-community/app-icon` package to programmatically change an app's icon. This Capacitor community plugin allows you to change the main app icon on the device homescreen. Please note that the icon in the springboard and other areas will not change and will continue to show the original icon on iOS devices. Additionally, changing the app icon is only allowed when the app is in the foreground on iOS.

## Installation

To get started, first install the `@capacitor-community/app-icon` package by running the following command:

```bash
npm install @capacitor-community/app-icon
npx cap sync
```

## Configuration

### Adding Alternate Icons

Before you can switch to a different app icon, you need to include the alternate icons within the app bundle and reference them in the project. Directly add the alternate icons to your Android project in `app/src/main/res`.

### Setting up ApplicationManifest.xml

Ensure that you set up the `ApplicationManifest.xml` file accordingly to configure the alternate icons.

By following these steps, you can successfully use the `@capacitor-community/app-icon` package to manage your app's icon programmatically.