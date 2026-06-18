---
title: Using Capacitor Image Picker
description: "This tutorial will guide you through using the @jonz94/capacitor-image-picker package to select multiple images in your Capacitor project."
created_at: 2022-04-01
published: true
slug: capacitor-image-picker.git
locale: en
---

## Installing @jonz94/capacitor-image-picker

To install the package, run the following command:

```bash
npm install @jonz94/capacitor-image-picker
npx cap sync
```

## Setting Up iOS

### Native Dependencies Setup

1. Modify `ios/App/Podfile` with the following lines:

```diff
target 'App' do
  capacitor_pods
  # Add your Pods here
+  pod 'YPImagePicker', :git => 'https://github.com/jonz94/YPImagePicker.git', :tag => '5.2.1.0'
end
```

2. Run `pod update` in the terminal to sync up the iOS project.

### Permissions

In your `Info.plist`, add the following usage description:

- `NSPhotoLibraryUsageDescription` (`Privacy - Photo Library Usage Description`)

Read the [iOS Guide](https://capacitorjs.com/docs/ios) for more information on setting iOS permissions in Xcode.

## Setting Up Android

### Native Dependencies Setup

1. Add the JitPack repository to your `android/build.gradle` file:

```diff
allprojects {
    repositories {
        google()
        mavenCentral()
+        maven { url "https://jitpack.io" }
    }
}
```

2. Enable Data Binding in `android/app/build.gradle`:

```diff
android {
    compileSdkVersion rootProject.ext.compileSdkVersion
    defaultConfig {
        // ...
    }
    buildTypes {
        // ...
    }
+    dataBinding {
+        enabled true
+    }
}
```

3. Sync the project with Gradle Files in Android Studio.

### Permissions

Add the following permissions to your `AndroidManifest.xml` file:

- ...
```

This tutorial covers the installation and setup of the @jonz94/capacitor-image-picker package for both iOS and Android platforms.
