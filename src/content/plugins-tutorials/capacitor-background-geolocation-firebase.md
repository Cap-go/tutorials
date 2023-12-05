---
title: "Using @transistorsoft/capacitor-background-geolocation-firebase"
description: "A tutorial on how to use the @transistorsoft/capacitor-background-geolocation-firebase package to integrate Firebase with Capacitor Background Geolocation."
created_at: "2021-10-15"
published: true
slug: capacitor-background-geolocation-firebase
---

# Using @transistorsoft/capacitor-background-geolocation-firebase

This tutorial will guide you through the process of integrating Firebase with Capacitor Background Geolocation using the `@transistorsoft/capacitor-background-geolocation-firebase` package.

## Installation

First, you need to install the `@transistorsoft/capacitor-background-geolocation-firebase` package. You can do this using npm or yarn.

### Using npm

```bash
$ npm install capacitor-background-geolocation-firebase --save
```

### Using yarn

```bash
$ yarn add capacitor-background-geolocation-firebase
```

## Setup Guides

Before using the `@transistorsoft/capacitor-background-geolocation-firebase` package, you need to perform some setup steps specific to your platform.

### iOS Setup

Please refer to the [Required Setup](help/INSTALL-IOS.md) guide for the necessary steps to set up the package on iOS.

### Android Setup

Please refer to the [Required Setup](help/INSTALL-ANDROID.md) guide for the necessary steps to set up the package on Android.

## Configure Your License

To use the `@transistorsoft/capacitor-background-geolocation-firebase` package, you need to configure your license key.

1. Login to the [Customer Dashboard](http://www.transistorsoft.com/shop/customers) to generate an application key.
2. Add your license key to the `android/app/src/main/AndroidManifest.xml` file in your Capacitor project. Locate the `<meta-data>` tag with the name `com.transistorsoft.firebaseproxy.license` and set its value to your license key.

```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.your.app">

  <!-- Other configuration -->

  <application 
    android:name=".MainApplication"
    android:allowBackup="true"
    android:label="@string/app_name"
    android:icon="@mipmap/ic_launcher"
    android:theme="@style/AppTheme">

    <!-- capacitor-background-geolocation-firebase licence -->
    <meta-data 
      android:name="com.transistorsoft.firebaseproxy.license"
      android:value="YOUR_LICENSE_KEY_HERE" />
    
    <!-- Other configuration -->
  </application>
</manifest>
```

## Using the Package

To use the `@transistorsoft/capacitor-background-geolocation-firebase` package, follow these steps:

1. Import the package in your code:

```javascript
import { BackgroundGeolocationFirebase } from 'capacitor-background-geolocation-firebase';
```

2. Use the imported package in your code as needed. Here's an example:

```javascript
import BackgroundGeolocation from '@transistorsoft/capacitor-background-geolocation';
import { BackgroundGeolocationFirebase } from '@transistorsoft/capacitor-background-geolocation-firebase';

// Other code...

BackgroundGeolocation.ready(config).then((state) => {
  // BackgroundGeolocation is ready
  // You can now use the package with Firebase integration
});

// Other code...
```

That's it! You have successfully integrated Firebase with Capacitor Background Geolocation using the `@transistorsoft/capacitor-background-geolocation-firebase` package.

Remember to refer to the official documentation for more details on using the package and its available features.