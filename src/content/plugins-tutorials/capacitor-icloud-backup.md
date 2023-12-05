---
title: "Using @byrds/capacitor-icloud-backup Package"
description: "This tutorial will guide you through the process of using the @byrds/capacitor-icloud-backup package to enable iCloud backup functionality in your Capacitor app."
created_at: "2022-01-01"
published: true
slug: capacitor-icloud-backup
---

# Using @byrds/capacitor-icloud-backup Package

In this tutorial, we will cover the steps required to integrate the @byrds/capacitor-icloud-backup package into your Capacitor app to enable iCloud backup functionality. 

## Prerequisites

Before we begin, make sure you have the following:

- Capacitor installed globally
- Xcode or Android Studio installed
- A valid Apple Developer account (for iOS)

## Step 1: Install the package

To get started, open your terminal and navigate to your Capacitor project directory. Run the following command to install the @byrds/capacitor-icloud-backup package:

```bash
npm install @byrds/capacitor-icloud-backup
```

## Step 2: Configure iOS app

If you are targeting iOS, follow these additional steps to configure your app:

1. Open your Capacitor project in Xcode.
2. Navigate to the `AppDelegate.swift` file.
3. Import the @byrds/capacitor-icloud-backup package by adding the following line at the top of the file:

```swift
import CapacitorICloudBackup
```

4. Search for the `application` method and add the following code inside the method to enable iCloud backup:

```swift
let iCloudBackup = CapacitorICloudBackup()
iCloudBackup.enableICloudBackup()
```

5. Save the file and build your iOS app.

## Step 3: Configure Android app

If you are targeting Android, follow these additional steps to configure your app:

1. Open your Capacitor project in Android Studio.
2. Navigate to the `MainActivity.java` file.
3. Import the @byrds/capacitor-icloud-backup package by adding the following line at the top of the file:

```java
import com.byrds.capacitor_icloud_backup.CapacitorICloudBackup;
```

4. Search for the `onCreate` method and add the following code inside the method to enable iCloud backup:

```java
CapacitorICloudBackup.enableICloudBackup(this);
```

5. Save the file and build your Android app.

## Step 4: Test iCloud backup

At this point, you have successfully integrated the @byrds/capacitor-icloud-backup package into your Capacitor app. You can now test the iCloud backup functionality by following these steps:

1. Build and run your app on a device or simulator.
2. Create some data or modify existing data in your app.
3. Manually trigger an iCloud backup by going to the Settings app > [Your Name] > iCloud > iCloud Backup > Back Up Now.
4. Verify that your app's data is included in the iCloud backup.

## Conclusion

Congratulations! You have learned how to use the @byrds/capacitor-icloud-backup package to enable iCloud backup functionality in your Capacitor app. You can now ensure that your users' data is securely backed up and restored from iCloud.

Remember to review the package's documentation for additional configuration options and advanced usage scenarios.

Happy coding!