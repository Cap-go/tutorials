---
title: "Using @capacitor-community/app-icon Package"
description: "A step-by-step tutorial on how to use the @capacitor-community/app-icon package to programmatically change the app icon."
created_at: "2022-12-10"
published: true
slug: "app-icon"
---

# Using @capacitor-community/app-icon Package

In this tutorial, we will learn how to use the `@capacitor-community/app-icon` package to programmatically change the app icon. This package is designed for Capacitor community plugins and provides a simple way to change the app icon on both iOS and Android platforms.

## Installation

To get started, make sure you have Capacitor installed and initialized in your project. Then, you can install the `@capacitor-community/app-icon` package using npm or yarn. Open your terminal and run the following command:

```bash
npm install @capacitor-community/app-icon
```

Once the installation is complete, synchronize the Capacitor plugin with your project by running the following command:

```bash
npx cap sync
```

## Configuration

This package requires some additional configuration steps for each platform.

### Android Configuration

1. Add the alternate icons directly to your Android project in the `app/src/main/res` directory.

2. Open the `ApplicationManifest.xml` file in your Android project.

3. Follow the provided instructions and make the necessary changes to the `ApplicationManifest.xml` file.

## Usage

Now that the package is installed and configured, you can start using it to change the app icon programmatically.

### Import the Package

In your TypeScript file, import the `AppIcon` module from the `@capacitor-community/app-icon` package:

```typescript
import { AppIcon } from '@capacitor-community/app-icon';
```

### Change the App Icon

To change the app icon, use the `changeIcon` method from the `AppIcon` module. This method takes the path to the alternate icon file as an argument.

```typescript
const changeIcon = async () => {
  try {
    await AppIcon.changeIcon({ iconName: 'alternate-icon.png' });
    console.log('App icon changed successfully');
  } catch (error) {
    console.error('Failed to change app icon:', error);
  }
};
```

Make sure to provide the correct path to the alternate icon file that you added to your project.

### Switch Back to the Default Icon

To switch back to the default app icon, you can use the `resetIcon` method from the `AppIcon` module:

```typescript
const resetIcon = async () => {
  try {
    await AppIcon.resetIcon();
    console.log('App icon reset successfully');
  } catch (error) {
    console.error('Failed to reset app icon:', error);
  }
};
```

### Example Usage

Here is an example usage of the `changeIcon` and `resetIcon` methods:

```typescript
import { AppIcon } from '@capacitor-community/app-icon';

const changeIcon = async () => {
  try {
    await AppIcon.changeIcon({ iconName: 'alternate-icon.png' });
    console.log('App icon changed successfully');
  } catch (error) {
    console.error('Failed to change app icon:', error);
  }
};

const resetIcon = async () => {
  try {
    await AppIcon.resetIcon();
    console.log('App icon reset successfully');
  } catch (error) {
    console.error('Failed to reset app icon:', error);
  }
};

// Change the app icon
changeIcon();

// Reset the app icon
resetIcon();
```

## Conclusion

In this tutorial, we learned how to use the `@capacitor-community/app-icon` package to programmatically change the app icon. We covered the installation and configuration steps, as well as the usage of the package's methods to change and reset the app icon. By following this tutorial, you should be able to seamlessly manage your app's icon in Capacitor projects.