---
title: "Using capacitor-open-app-settings Package"
description: "A tutorial on using the capacitor-open-app-settings package to open app settings in Capacitor apps."
created_at: "2022-01-31"
published: true
slug: "capacitor-open-app-settings"
---

# Using capacitor-open-app-settings Package

In this tutorial, we will learn how to use the `capacitor-open-app-settings` package to open app settings in Capacitor apps. This package provides a simple and straightforward way to open the settings page of the app on different platforms.

## Installation

To install the `capacitor-open-app-settings` package, run the following command:

```bash
npm install capacitor-open-app-settings
```

## Android Setup

No additional setup is required for Android.

## iOS Setup

For iOS, open the `Podfile` located in the `ios` folder of your Capacitor app and add the following line:

```ruby
pod 'AppAuth', '~> 1.0.0'
```

Then run the following command:

```bash
npx cap sync
```

## Usage

To open the app settings page, import the `openAppSettings` function from the `capacitor-open-app-settings` package:

```javascript
import { Plugins } from '@capacitor/core';
const { OpenAppSettings } = Plugins;
```

Then call the `openAppSettings` function to open the app settings:

```javascript
OpenAppSettings.open()
  .then(() => {
    console.log('App settings opened');
  })
  .catch((error) => {
    console.error('Error opening app settings:', error);
  });
```

## Conclusion

In this tutorial, we learned how to use the `capacitor-open-app-settings` package to open the app settings page in Capacitor apps. This package provides a convenient way to direct users to the settings page of the app on different platforms.

For more information, you can refer to the [official documentation](https://capacitorjs.com/docs/apis/open-app-settings).

I hope you found this tutorial helpful. Happy coding!