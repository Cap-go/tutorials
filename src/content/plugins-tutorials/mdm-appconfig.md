---
title: "Using @capacitor-community/mdm-appconfig Package"
description: "Learn how to use the @capacitor-community/mdm-appconfig package to read app configurations written by a MDM."
created_at: "2022-04-10"
published: true
slug: "mdm-appconfig"
---

# Using @capacitor-community/mdm-appconfig Package

The `@capacitor-community/mdm-appconfig` package is a Capacitor community plugin that allows you to read app configurations written by a MDM (Mobile Device Management) solution such as VMWare Workspace One. This tutorial will guide you through the process of installing and using the package in your Capacitor project.

## Installation

To install the `@capacitor-community/mdm-appconfig` package, run the following command in your project directory:

```bash
npm install @capacitor-community/mdm-appconfig
```

After installing the package, run the following command to sync the changes with your Capacitor project:

```bash
npx cap sync
```

## Configuration

### Android Configuration

To configure the package for Android, follow these steps:

1. Open the `androidmanifest.xml` file in your Android project.
2. Locate the `<application...>` tag and add the following line inside it:

```xml
<meta-data android:name="android.content.APP_RESTRICTIONS" android:resource="@xml/app_restrictions" />
```

3. Create an XML file named `app_restrictions.xml` in the `res/xml` directory of your Android project.
4. Define your app restrictions in this XML file using the following format:

```xml
<?xml version="1.0" encoding="utf-8"?>
<restrictions xmlns:android="http://schemas.android.com/apk/res/android">
    <restriction android:key="ionic-email" android:title="Ionic Email" android:restrictionType="string" android:defaultValue="" />
    <restriction android:key="ionic-user" android:title="Ionic User" android:restrictionType="string" android:defaultValue="" />
    <restriction android:key="ionic-userid" android:title="Ionic Userid" android:restrictionType="string" android:defaultValue="" />
</restrictions>
```

Note: Replace the `ionic-email`, `ionic-user`, and `ionic-userid` keys with your specific app configuration keys.

### iOS Configuration

No additional configuration is required for iOS.

## Usage

To use the `@capacitor-community/mdm-appconfig` package in your project, follow these steps:

1. Import the `AppConfig` class from the package in your TypeScript file:

```typescript
import { AppConfig } from '@capacitor-community/mdm-appconfig';
```

2. Use the `getValue` method of the `AppConfig` class to retrieve a value from the app configuration:

```typescript
const result = await AppConfig.getValue({ key: 'my.variable.name' });
console.log(result.value);
```

Note: Replace `'my.variable.name'` with the key of the app configuration value you want to retrieve.

3. If the provided key cannot be found in the app configuration, the promise will be rejected. Handle the rejection accordingly in your code.

That's it! You have successfully installed and used the `@capacitor-community/mdm-appconfig` package to read app configurations written by an MDM solution.

Remember to consult the official documentation of the package for additional configuration options and usage examples.

Now you are ready to leverage the power of app configurations written by a MDM solution in your Capacitor project!

Happy coding!