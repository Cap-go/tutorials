---
"title": "Using @capacitor-community/mdm-appconfig Package",
"description": "This tutorial will guide you on how to use the @capacitor-community/mdm-appconfig package to read app configurations written by a MDM, such as VMWare Workspace One, in your Capacitor project.",
"created_at": "2023-10-06",
"published": true,
"slug": "mdm-appconfig-git"
---

# Using @capacitor-community/mdm-appconfig Package

In this tutorial, you will learn how to integrate and utilize the `@capacitor-community/mdm-appconfig` package in your Capacitor project to read app configurations provided by a Mobile Device Management (MDM) system, such as VMWare Workspace One.

## Installation

To get started, you need to install the `@capacitor-community/mdm-appconfig` package. Run the following command in your Capacitor project directory:

```bash
npm install @capacitor-community/mdm-appconfig
npx cap sync
```

## Android Configuration

For Android, you need to add the following line to your `androidmanifest.xml` file under the `<application...>` tag:

```xml
<meta-data android:name="android.content.APP_RESTRICTIONS" android:resource="@xml/app_restrictions" />
```

Next, create an XML file named `app_restrictions.xml` in the `res/xml` directory. This file will contain the defined app restrictions. Follow the format specified [here](http://developer.android.com/reference/android/content/RestrictionsManager.html).

Here's an example `app_restrictions.xml` that defines three strings (`ionic-email`, `ionic-user`, `ionic-userid`):

```xml
<?xml version="1.0" encoding="utf-8"?>
<restrictions xmlns:android="http://schemas.android.com/apk/res/android">
    <restriction android:key="ionic-email" android:title="Ionic Email" android:restrictionType="string" android:defaultValue="" />
    <restriction android:key="ionic-user" android:title="Ionic User" android:restrictionType="string" android:defaultValue="" />
    <restriction android:key="ionic-userid" android:title="Ionic Userid" android:restrictionType="string" android:defaultValue="" />
</restrictions>
```

Remember to define keys in your `app_restrictions.xml` to read their values at runtime.

## iOS Configuration

No additional configuration is required for iOS.

## Usage

You can now start using the `@capacitor-community/mdm-appconfig` package in your project. Import the `AppConfig` module and call the `getValue` function to retrieve a specific configuration value based on the key.

Here's an example of how you can use it in your code:

```typescript
import { AppConfig } from '@capacitor-community/mdm-appconfig';

// Get a value:
const result = await AppConfig.getValue({ key: 'my.variable.name' });
console.log(result.value);
```

If the key is not found, the promise will be rejected.

This concludes the tutorial on using the `@capacitor-community/mdm-appconfig` package to read app configurations in your Capacitor project.