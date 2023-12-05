---
title: "Using Capacitor Native Settings Package"
description: "In this tutorial, we will learn how to use the Capacitor Native Settings package to manage settings in your Capacitor-powered app."
created_at: "2022-10-11"
published: true
slug: "capacitor-native-settings"
---

# Using Capacitor Native Settings Package

In this tutorial, we will explore how to use the Capacitor Native Settings package to manage settings in your Capacitor-powered app.

## Step 1: Installation

To get started, let's install the `capacitor-native-settings` package. Open your terminal and navigate to the root directory of your Capacitor project. Run the following command:

```bash
npm install capacitor-native-settings
```

This will install the package and add it as a dependency in your `package.json` file.

## Step 2: Importing the Package

Next, you need to import the `capacitor-native-settings` package into your code. In your desired file, add the following import statement:

```javascript
import { NativeSettings } from 'capacitor-native-settings';
```

## Step 3: Usage

Now that the package is imported, you can start using its functionality. The `capacitor-native-settings` package provides various methods to manage settings. Here are a few commonly used ones:

### Get a Setting Value

To retrieve the value of a setting, you can use the `get` method. Here's an example:

```javascript
const value = await NativeSettings.get({ key: 'settingKey' });
console.log(value);
```

### Set a Setting Value

To update the value of a setting, you can use the `set` method. Here's an example:

```javascript
await NativeSettings.set({ key: 'settingKey', value: 'settingValue' });
```

### Remove a Setting

If you want to remove a setting, you can use the `remove` method. Here's an example:

```javascript
await NativeSettings.remove({ key: 'settingKey' });
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-native-settings` package to manage settings in your Capacitor-powered app. We covered the installation process, importing the package, and the usage of common methods. You can now leverage this package to store and retrieve user settings efficiently.

Remember to refer to the official documentation of `capacitor-native-settings` for more detailed information and additional features. Happy coding!