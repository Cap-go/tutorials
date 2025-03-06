---
"title": "Using @capacitor-community/mdm-appconfig Package",
"description": "This tutorial will guide you through the installation, configuration, and usage of the @capacitor-community/mdm-appconfig package for reading app configurations written by MDM (Mobile Device Management) systems such as VMWare Workspace One.",
"created_at": "2022-01-24",
"published": true,
"slug": "mdm-appconfig.git"
---

# Using @capacitor-community/mdm-appconfig Package

The `@capacitor-community/mdm-appconfig` package is a Capacitor community plugin designed for reading app configurations written by Mobile Device Management (MDM) systems like VMWare Workspace One. This tutorial will walk you through the installation, configuration, and usage of this package.

## Installation

To install the `@capacitor-community/mdm-appconfig` package, run the following command in your terminal:

```bash
npm install @capacitor-community/mdm-appconfig
npx cap sync
```

## Configuration

### Android

For Android, you need to add a specific configuration in the `androidmanifest.xml` file. Under the `<application...>` section, add the following line:

```xml
<meta-data android:name="android.content.APP_RESTRICTIONS" android:resource="@xml/app_restrictions" />
```

Next, create an XML file named `app_restrictions.xml` in the `res/xml` directory. This file will define your app restrictions. Here is an example of an `app_restrictions.xml` file:

```xml
<?xml version="1.0" encoding="utf-8"?>
<restrictions xmlns:android="http://schemas.android.com/apk/res/android">
    <restriction android:key="ionic-email" android:title="Ionic Email" android:restrictionType="string" android:defaultValue="" />
    <restriction android:key="ionic-user" android:title="Ionic User" android:restrictionType="string" android:defaultValue="" />
    <restriction android:key="ionic-userid" android:title="Ionic Userid" android:restrictionType="string" android:defaultValue="" />
</restrictions>
```

Make sure to define the keys in your `app_restrictions.xml` file to be able to read their values at runtime.

### iOS

No additional configuration is required for iOS.

## Usage

To use the `@capacitor-community/mdm-appconfig` package in your Capacitor project, import it as follows in your TypeScript file:

```typescript
import { AppConfig } from '@capacitor-community/mdm-appconfig';

// Get a value:
const result = await AppConfig.getValue({ key: 'my.variable.name' });
console.log(result.value);
```

If the key cannot be found, the promise will be rejected.