---
"title": "Using @capacitor-community/mdm-appconfig Package Tutorial",
"description": "A step-by-step tutorial on how to use the @capacitor-community/mdm-appconfig package to read app configurations written by a MDM.",
"created_at": "2023-10-07",
"published": true,
"slug": "mdm-appconfig.git"
---

# Using @capacitor-community/mdm-appconfig Package Tutorial

This tutorial will guide you on how to use the `@capacitor-community/mdm-appconfig` package to read app configurations written by a MDM. This package is particularly helpful for applications that require managing configurations centrally.

## Installation

To get started, you need to install the `@capacitor-community/mdm-appconfig` package. Run the following commands in your terminal:

```bash
npm install @capacitor-community/mdm-appconfig
npx cap sync
```

## Configuration

### Android

For Android configuration, you need to add the following line to your `androidmanifest.xml` (under `<application...>`):

```xml
<meta-data android:name="android.content.APP_RESTRICTIONS" android:resource="@xml/app_restrictions" />
```

Create an XML file named `app_restrictions.xml` in the `res/xml` directory to define your app restrictions. You must define keys in this XML file to be able to read their values at runtime. Here is an example `app_restrictions.xml` that defines email, user, and userid:

```xml
<?xml version="1.0" encoding="utf-8"?>
<restrictions xmlns:android="http://schemas.android.com/apk/res/android">
	<restriction android:key="ionic-email" android:title="Ionic Email" android:restrictionType="string" android:defaultValue="" />
	<restriction android:key="ionic-user" android:title="Ionic User" android:restrictionType="string" android:defaultValue="" />
	<restriction android:key="ionic-userid" android:title="Ionic Userid" android:restrictionType="string" android:defaultValue="" />
</restrictions>
```

### iOS

No additional configuration is required for iOS.

## Usage

To use the `@capacitor-community/mdm-appconfig` package in your code, you can follow the example below:

```typescript
import { AppConfig } from '@capacitor-community/mdm-appconfig';

// Get a value:
const result = await AppConfig.getValue({ key: 'my.variable.name' });
console.log(result.value);
```

If the key cannot be found, the promise will be rejected. This usage example demonstrates how to retrieve a value using the `getValue` method.

This concludes the tutorial on using the `@capacitor-community/mdm-appconfig` package. You can now leverage this package to efficiently read app configurations managed by a Mobile Device Management (MDM) system in your Capacitor applications.