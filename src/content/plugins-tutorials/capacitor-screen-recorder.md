---
title: "Using the @capgo/capacitor-screen-recorder Package"
description: "In this tutorial, we will learn how to use the @capgo/capacitor-screen-recorder package to record the device's screen. We will cover installation, configuration, and the available API methods."
created_at: "2021-10-27"
published: true
slug: "capacitor-screen-recorder"
---

# Using the @capgo/capacitor-screen-recorder Package

In this tutorial, we will learn how to use the @capgo/capacitor-screen-recorder package to record the device's screen. We will cover installation, configuration, and the available API methods.

## Install

To install the @capgo/capacitor-screen-recorder package, run the following command in your project directory:

```bash
npm install @capgo/capacitor-screen-recorder
npx cap sync
```

## iOS Setup

For iOS, you need to add the `NSPhotoLibraryUsageDescription` key to your `info.plist` file. This is required for saving the recorded videos to the device's photo library.

## Android Setup

For Android, you need to increase the project's `minSdk` version to 23. This is required by the `scrcast` dependency used by the screen recorder plugin.

### Variables

The screen recorder plugin relies on the following project variables defined in your app's `variables.gradle` file:

- `$kotlinVersion`: Specifies the version of `org.jetbrains.kotlin:kotlin-stdlib-jdk7` to use. The default value is `1.7.21`.

If you encounter a compilation issue with the `Duplicate class androidx.lifecycle.ViewModelLazy` error, you can resolve it by following the steps below:

1. Open the file `android/app/build.gradle`.
2. Add the following code snippet to exclude the problematic `androidx.lifecycle` modules:

```groovy
configurations {
    all {
        exclude group: 'androidx.lifecycle', module: 'lifecycle-runtime-ktx'
        exclude group: 'androidx.lifecycle', module: 'lifecycle-viewmodel-ktx'
    }
}
```

## Configuration

The @capgo/capacitor-screen-recorder package does not require any additional configuration.

## API

The package provides the following API methods:

### `start()`

Starts the screen recording.

Returns: `any`

### `stop()`

Stops the screen recording.

Returns: `any`

That's it! You have learned how to use the @capgo/capacitor-screen-recorder package to record your device's screen. Happy coding!