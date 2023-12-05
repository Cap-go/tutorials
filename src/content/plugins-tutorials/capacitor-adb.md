---
title: "Using capacitord-adb package"
description: "In this tutorial, we will learn how to use the capacitor-adb package to connect and interact with Android devices using Capacitor."
created_at: "2022-10-15"
published: true
slug: capacitor-adb
---

# Using capacitor-adb package

In this tutorial, we will explore how to use the capacitor-adb package to connect and interact with Android devices using Capacitor.

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed in your project
- Android Studio installed on your computer
- An Android device or emulator connected to your development machine

## Installation

To install the capacitor-adb package, run the following command in your project directory:

```bash
npm install capacitor-adb
```

## Connecting to Android Device

To connect to an Android device using the adb (Android Debug Bridge) tool, follow these steps:

1. Connect your Android device to your development machine using a USB cable.
2. Open a terminal or command prompt and navigate to your project directory.
3. Run the following command to check if your device is connected:

   ```bash
   npx cap adb devices
   ```

   This command will list all connected devices/emulators.

4. To connect to a specific device, run the following command:

   ```bash
   npx cap adb connect <device-ip>:<port>
   ```

   Replace `<device-ip>` with the IP address of your device and `<port>` with the ADB port (default is 5555).

## Interacting with Android Device

Once connected to the Android device, you can perform various operations using the capacitor-adb package. Here are some examples:

### Install an APK

To install an APK file on the connected Android device, run the following command:

```bash
npx cap adb install <path-to-apk>
```

Replace `<path-to-apk>` with the path to your APK file.

### Uninstall an App

To uninstall an app from the connected Android device, run the following command:

```bash
npx cap adb uninstall <package-name>
```

Replace `<package-name>` with the package name of the app you want to uninstall.

### Launch an App

To launch an app on the connected Android device, run the following command:

```bash
npx cap adb shell am start -n <package-name>/<activity-name>
```

Replace `<package-name>` with the package name of the app and `<activity-name>` with the main activity name.

## Conclusion

In this tutorial, we have learned how to use the capacitor-adb package to connect and interact with Android devices using Capacitor. We covered the installation process, connecting to an Android device, and performing various operations such as installing APKs, uninstalling apps, and launching apps.

Feel free to explore the capacitor-adb documentation for more advanced features and functionalities.

Happy coding!