---
title: "Using capacitor-aigens-change-app-icon Package"
description: "This tutorial provides a step-by-step guide on how to use the capacitor-aigens-change-app-icon package to dynamically change the app icon in a Capacitor V3 project."
created_at: "2021-11-10"
published: true
slug: capacitor-aigens-change-app-icon
---

# Using capacitor-aigens-change-app-icon Package

This tutorial will walk you through the process of using the capacitor-aigens-change-app-icon package in a Capacitor V3 project to dynamically change the app icon. The package provides a convenient way to update the app icon based on different configurations.

## Installation

To get started, you need to install the capacitor-aigens-change-app-icon package. Open your terminal and run the following command:

```bash
npm install capacitor-aigens-change-app-icon
npx cap sync
```

This command will install the package and ensure that your Capacitor project is synchronized with the native platform.

## Usage

After installing the package, you can start using it in your code. Here's an example of how to use the `changeAppIcon` function to dynamically change the app icon:

```typescript
import { ChangeAppIcon } from "capacitor-aigens-change-app-icon";

const allNames = [
  'com.xx.xxx.app.MainActivity',  //main
  'com.xx.xxx.app.1Activity', 
  'com.xx.xxx.app.2Activity',
];

const isIos = Capacitor.getPlatform() == 'ios';

const options = {
  name: isIos ? 'xx' : 'com.xx.xxx.app.1Activity',
  allNames,
};

ChangeAppIcon.changeAppIcon(options);
```

In this example, we import the `ChangeAppIcon` class from the `capacitor-aigens-change-app-icon` package. We then define an array of `allNames` which represents all the possible app icon configurations.

Next, we determine the current platform using `Capacitor.getPlatform()` and set the `name` property accordingly based on the platform. Finally, we call the `changeAppIcon` function with the `options` object to dynamically change the app icon.

## Configuration

To configure the app icons for different configurations, you need to make changes to your AndroidManifest.xml and Info.plist files.

#### Android Configuration

Add the following code to your AndroidManifest.xml file:

```xml
<activity-alias
  android:name=".1Activity"
  android:label="@string/app_name"
  android:icon="@mipmap/1_ic_launcher"
  android:roundIcon="@mipmap/1_ic_launcher_round"
  android:enabled="false"
  android:exported="true"
  android:targetActivity=".MainActivity">
  <intent-filter>
    <action android:name="android.intent.action.MAIN"/>
    <category android:name="android.intent.category.LAUNCHER"/>
  </intent-filter>
</activity-alias>

<activity-alias
  android:name=".2Activity"
  android:label="@string/app_name"
  android:icon="@mipmap/2_ic_launcher"
  android:roundIcon="@mipmap/3_ic_launcher_round"
  android:enabled="false"
  android:exported="true"
  android:targetActivity=".MainActivity">
  <intent-filter>
    <action android:name="android.intent.action.MAIN"/>
    <category android:name="android.intent.category.LAUNCHER"/>
  </intent-filter>
</activity-alias>
```

Make sure to replace the `android:icon` and `android:roundIcon` attributes with the correct paths to your launcher icons.

#### iOS Configuration

Add the following code to your Info.plist file:

```plist
<key>CFBundleIcons</key>
<dict>
    <key>CFBundleAlternateIcons</key>
    <dict>
        <key>xx</key>
        <dict>
            <key>CFBundleIconFiles</key>
            <array>
                <string>xx</string>
            </array>
            <key>UIPrerenderedIcon</key>
            <false/>
        </dict>
    </dict>
    <key>CFBundlePrimaryIcon</key>
    <dict>
        <key>CFBundleIconFiles</key>
        <array>
            <string>Primary</string>
        </array>
    </dict>
</dict>
```

Make sure to replace the `xx` and `Primary` placeholders with the correct names of your app icons.

## Conclusion

In this tutorial, you learned how to use the capacitor-aigens-change-app-icon package to dynamically change the app icon in a Capacitor V3 project. You installed the package, implemented the necessary code, and configured the app icons for different configurations on both Android and iOS platforms. Now, you have the ability to change the app icon based on your app's requirements.