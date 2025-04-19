---
"title": "Using @capacitor-community/app-icon Package"
"description": "A step-by-step tutorial on how to use the @capacitor-community/app-icon package to programmatically change an app's icon."
"created_at": "2022-01-25"
"published": true
"slug": "app-icon.git"
---

## Using @capacitor-community/app-icon Package

This tutorial will guide you through the process of utilizing the `@capacitor-community/app-icon` package to programmatically change the icon of your app. This feature allows for dynamic changes to the main app icon displayed on the device homescreen. Please note that on iOS, the icon in the springboard and other areas will continue to display the original icon.

### Installation

Begin by installing the `@capacitor-community/app-icon` package:

```bash
npm install @capacitor-community/app-icon
npx cap sync
```

### Configuration

#### Android Configuration

1. **Add Alternate Icons**: 
   - Add the alternate icons directly to your Android project in `app/src/main/res`.

2. **Setup ApplicationManifest.xml**: 
   - Ensure that you have configured the `ApplicationManifest.xml` file appropriately to reference the alternate icons.

### Implementation

Once you have installed and configured the package, you can now implement the functionality to change the app icon programmatically as needed. Remember that the app icon can only be changed when the app is in the foreground on iOS.

That's it! You have successfully learned how to use the `@capacitor-community/app-icon` package to manage your app's icon dynamically.