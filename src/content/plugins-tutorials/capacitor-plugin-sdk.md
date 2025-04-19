---
title: "Using capacitor-plugin-docline-sdk Package"
description: "A tutorial on how to use the capacitor-plugin-docline-sdk package for integrating Docline video consultation services into your Capacitor app."
created_at: "2021-12-01"
published: true
slug: "capacitor-plugin-sdk"
---

# Using capacitor-plugin-docline-sdk Package

This tutorial will guide you through the process of integrating the capacitor-plugin-docline-sdk package into your Capacitor app to enable Docline video consultation services.

## Installation

To install the package, open your project's root folder and run the following command in your terminal:

```bash
npm install capacitor-plugin-docline-sdk
```

This will install the package and its dependencies.

## Additional Settings

### iOS

1. Open the `info.plist` file in your Xcode project.
2. Add the following entries to the file:

   ```xml
   <key>NSCameraUsageDescription</key>
   <string>This app needs access to the camera to make video consultations.</string>
   <key>NSMicrophoneUsageDescription</key>
   <string>This app needs access to the microphone to make video consultations.</string>
   ```

   Make sure to replace the description strings with your own localized descriptions if necessary.

### Android

1. In your project's `build.gradle` file, add the following code inside the `android` block:

   ```java
   android {
       ...
       buildFeatures {
           dataBinding true
       }
   }
   ```

2. In the same file, add the following repositories to the `allprojects` block:

   ```java
   allprojects {
       repositories {
           ...
           maven { url "https://nexus.docline.com/repository/maven-public/" }
           maven { url 'https://tokbox.bintray.com/maven' }
       }
   }
   ```

3. Finally, import the capacitor-plugin-docline-sdk inside your `BridgeActivity`:

   ```java
   import com.docline.sdk.DoclineSDKPlugin;
   ```

## Usage

With the capacitor-plugin-docline-sdk installed and the additional settings configured, you can now start using it in your Capacitor app.

To access the Docline video consultation services, you can use the following modules provided by the SDK:

- Core Module: Contains the main functionality for initiating and managing video consultations.
- Error Module: Handles error reporting and handling.
- Event Module: Provides event listeners for various events related to video consultations.

You can refer to the official [docline-tech/sdk-example](https://github.com/docline-tech/sdk-example) repository for example projects that demonstrate how to use the plugin.

That's it! You have successfully integrated the capacitor-plugin-docline-sdk package into your Capacitor app. You can now use the Docline video consultation services in your app.

For more detailed information on the usage and available methods, please refer to the official documentation of the capacitor-plugin-docline-sdk package.