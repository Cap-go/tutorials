---
title: "Using the capacitor-background-location Package"
description: "In this tutorial, we will learn how to use the capacitor-background-location package to track the user's location in the background."
created_at: "2022-10-25"
published: true
slug: "capacitor-background-location"
---

# Using the capacitor-background-location Package

In this tutorial, we will learn how to use the capacitor-background-location package to track the user's location in the background.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor 3+ installed in your project.
- Basic knowledge of Capacitor development.

## Installation

To start using the `capacitor-background-location` package, we need to install it in our Capacitor project. Open your terminal and run the following command:

```bash
yarn add @transistorsoft/capacitor-background-geolocation
yarn add @transistorsoft/capacitor-background-fetch
npx cap sync
```

If you prefer to use npm, you can run:

```bash
npm install @transistorsoft/capacitor-background-geolocation --save
npm install @transistorsoft/capacitor-background-fetch --save
npx cap sync
```

## Setup

### iOS

To set up the package on iOS, follow the steps outlined in the [Required iOS Setup](https://github.com/transistorsoft/capacitor-background-geolocation/blob/master/help/INSTALL-IOS.md) guide.

### Android

For Android, you'll need to complete the required setup steps as explained in the [Required Android Setup](https://github.com/transistorsoft/capacitor-background-geolocation/blob/master/help/INSTALL-ANDROID.md) guide.

## Configuration

To use the package, we need to configure the license. Follow these steps:

1. Login to the Customer Dashboard on the [Transistor Software](http://www.transistorsoft.com/shop/customers) website and generate an application key.

2. Open the `android/app/src/main/AndroidManifest.xml` file in your project and add the license key as a meta-data tag:

    ```xml
    <manifest xmlns:android="http://schemas.android.com/apk/res/android"
        package="com.transistorsoft.backgroundgeolocation.react">

      <application
        android:name=".MainApplication"
        android:allowBackup="true"
        android:label="@string/app_name"
        android:icon="@mipmap/ic_launcher"
        android:theme="@style/AppTheme">

        <!-- capacitor-background-geolocation licence -->
        <meta-data android:name="com.transistorsoft.locationmanager.license" android:value="YOUR_LICENSE_KEY_HERE" />
        .
        .
        .
      </application>
    </manifest>
    ```

Replace `YOUR_LICENSE_KEY_HERE` with your actual license key.

## Usage

Now we are ready to use the `capacitor-background-location` package in our project.

First, import the package in your JavaScript file:

```javascript
import BackgroundGeolocation from "@transistorsoft/capacitor-background-geolocation";
```

Next, let's wire up some event listeners, get the plugin ready, and start tracking the location.

```javascript
BackgroundGeolocation.ready(config).then((state) => {
  // The plugin is ready to be used.
  BackgroundGeolocation.getCurrentPosition(options);
  BackgroundGeolocation.start();  
});
```

Make sure to replace `config` and `options` with relevant configuration and options objects.

## Example

Here's a complete example demonstrating how to use the `capacitor-background-location` package:

```javascript
import BackgroundGeolocation from "@transistorsoft/capacitor-background-geolocation";

BackgroundGeolocation.ready(config).then((state) => {
  // The plugin is ready to be used.
  BackgroundGeolocation.getCurrentPosition(options);
  BackgroundGeolocation.start();  
});
```

Remember to replace `config` and `options` with your specific configuration and options.

## Conclusion

In this tutorial, we learned how to install and use the capacitor-background-location package to track the user's location in the background. We covered the installation process, configuration, and usage of the package. Now you can integrate background location tracking into your Capacitor project.

For more information and advanced usage, refer to the [official API documentation](https://transistorsoft.github.io/capacitor-background-geolocation).

Happy coding!