---
title: "Using @tru_id/tru-plugin-ionic-capacitor Package"
description: "A guide on how to use the @tru_id/tru-plugin-ionic-capacitor package for Ionic and Capacitor applications."
created_at: "2022-04-28"
published: true
slug: "tru-ionic-capacitor-plugin"
---

# Using @tru_id/tru-plugin-ionic-capacitor Package

The `@tru_id/tru-plugin-ionic-capacitor` package allows you to integrate the tru.ID SDK into your Ionic and Capacitor applications for mobile network verification. This tutorial will guide you through the installation and usage of the package.

## Installation

To install the package, run the following command in your project's root directory:

```bash
npm install @tru_id/tru-plugin-ionic-capacitor
ionic build
ionic cap sync
```

Next, you need to update the Android configuration. Open the `android/build.gradle` file and modify the `allprojects.repositories` section as follows:

```gradle
allprojects {
    repositories {
        google()
        jcenter()
        maven {
            url "https://gitlab.com/api/v4/projects/22035475/packages/maven"
        }
    }
}
```

Then, open the `android/app/build.gradle` file and update the dependencies section:

```gradle
dependencies {
    implementation "com.squareup.okhttp3:okhttp:4.9.0"
    implementation "org.jetbrains.kotlinx:kotlinx-serialization-json:1.2.2"
}
```

Finally, add the plugin to your app's `MainActivity` `onCreate` method. If your project is in Java, add the following code:

```java
import com.trupluginioniccapacitor.TruPluginIonicCapacitorPlugin;

@Override
public void onCreate(Bundle savedInstance){
    super.onCreate(savedInstance);
    registerPlugin(TruPluginIonicCapacitorPlugin.class);
}
```

If your project is in Kotlin, add the following code:

```kotlin
import com.trupluginioniccapacitor.TruPluginIonicCapacitorPlugin

public override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    registerPlugin(TruPluginIonicCapacitorPlugin::class.java)
}
```

## Usage

You can now use the `@tru_id/tru-plugin-ionic-capacitor` package in your Ionic and Capacitor application. Here are a few examples of its usage:

### Test Reachability

To test if the device mobile network is currently supported, use the `isReachable` method:

```tsx
import { TruPluginIonicCapacitor } from '@tru_id/tru-plugin-ionic-capacitor';

const reachabilityDetails = await TruPluginIonicCapacitor.isReachable();

console.log('Reachability details', reachabilityDetails.result);
```

### Make a GET Request

To make a GET request using the cellular connection to the tru.ID check URL, use the `check` method:

```tsx
import { TruPluginIonicCapacitor } from '@tru_id/tru-plugin-ionic-capacitor';

const checkDetails = await TruPluginIonicCapacitor.check({ url: check_url });

console.log('Check results', checkDetails.result);
```

## Compatibility

- Minimum Android SDK: TruSDK requires a minimum API level of 21 (Android 5).
- Compile Android SDK: TruSDK requires you to compile against API 30 (Android 11 or later).
- Minimum deployment target for iOS is iOS 12.
- Minimum Swift version is 5.3.

This concludes the tutorial on using the `@tru_id/tru-plugin-ionic-capacitor` package in your Ionic and Capacitor applications. You can now integrate mobile network verification using the tru.ID SDK in your projects.