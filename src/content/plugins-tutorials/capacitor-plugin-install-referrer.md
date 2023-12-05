---
title: "Using the @dudod/capacitor-plugin-install-referrer Package"
description: "A tutorial on how to use the @dudod/capacitor-plugin-install-referrer package to retrieve and use the install referrer from Google Play."
created_at: "2022-10-12"
published: true
slug: "capacitor-plugin-install-referrer"
---

# Using the @dudod/capacitor-plugin-install-referrer Package

The @dudod/capacitor-plugin-install-referrer package is a Capacitor plugin that allows you to retrieve and use the install referrer from Google Play. The install referrer provides information about the source of the app installation. This can be useful for tracking marketing campaigns or attributing app installs to specific sources.

In this tutorial, we will cover the installation and usage of the @dudod/capacitor-plugin-install-referrer package.

## Installation

To install the @dudod/capacitor-plugin-install-referrer package, use the following command:

```bash
npm install @dudod/capacitor-plugin-install-referrer
npx cap sync
```

This will install the package and synchronize it with your Capacitor project.

## Android Setup

To use the @dudod/capacitor-plugin-install-referrer package on Android, you need to register the plugin in your MainActivity's `onCreate` method.

Open `MainActivity.java` and add the following import statement:

```java
import com.togetherprice.capacitor.installreferrer.InstallReferrerPlugin;
```

Then, inside the `onCreate` method, add the following line to register the plugin:

```java
registerPlugin(InstallReferrerPlugin.class);
```

With these changes, your Android setup is complete.

## Retrieving the Install Referrer

To retrieve the install referrer, you can use the `getReferrerDetails()` method provided by the InstallReferrer plugin.

Here is an example of how to use it in your code:

```typescript
import { InstallReferrer } from '@dudod/capacitor-plugin-install-referrer';

const getInstallReferrer = async () => {
  try {
    const referrer = await InstallReferrer.getReferrerDetails();
    console.log('Install Referrer:', referrer);
  } catch (error) {
    console.error('Error retrieving install referrer:', error);
  }
};

getInstallReferrer();
```

The `getReferrerDetails()` method returns an object of type `ReferrerDetails`, which contains the following properties:

- `referrerUrl`: The install referrer passed to the store when installing the app, if any.
- `referrerClickTime`: The install referrer click time.
- `appInstallTime`: The app install time.
- `instantExperienceLaunched`: If the instant experience was launched.

You can access these properties to retrieve the relevant information from the install referrer.

## Testing the Install Referrer

To test the install referrer functionality, you can use the `adb shell` command to broadcast an install referrer to your device. Follow these steps:

1. Connect your device to your computer and enable USB debugging.

2. Open a console and execute the following command:

```bash
adb shell am broadcast -a com.android.vending.INSTALL_REFERRER -n <package-name>/com.eladcohen.capainstallref.Receiver --es "referrer" "YEHAAA"
```

Replace `<package-name>` with the package name of your app.

This command will simulate the installation of your app with a specific install referrer.

## Using the Install Referrer on Google Play

To use the install referrer on Google Play, you can add a referrer parameter to your app's Google Play Store URL. The value of this parameter should be a string that describes the source of the install referrer.

Here is an example of how to structure the URL:

```
https://play.google.com/store/apps/details?id=<package-id>&referrer=<referrer-value>
```

Replace `<package-id>` with your app's package ID and `<referrer-value>` with the desired referrer value.

When users install your app from this URL, the install referrer will be passed to the store and can be retrieved using the @dudod/capacitor-plugin-install-referrer package.

## Conclusion

In this tutorial, we learned how to install and use the @dudod/capacitor-plugin-install-referrer package to retrieve and use the install referrer from Google Play. We covered the installation process, Android setup, retrieving the install referrer, testing the functionality, and using the install referrer on Google Play.

The install referrer can be a valuable tool for tracking app installs and attributing them to specific sources. By using the @dudod/capacitor-plugin-install-referrer package, you can easily incorporate this functionality into your Capacitor projects.

