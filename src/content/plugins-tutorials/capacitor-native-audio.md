---
title: Using @mediagrid/capacitor-native-audio Package
description: This tutorial provides a step-by-step guide on how to utilize the @mediagrid/capacitor-native-audio package to play audio natively in a Capacitor app on Android and iOS platforms.
created_at: 2023-09-05
published: true
slug: capacitor-native-audio
---

# Using @mediagrid/capacitor-native-audio Package

In this tutorial, we will explore how to implement the @mediagrid/capacitor-native-audio package in a Capacitor app to play audio natively on Android and iOS platforms. The package supports playing audio from a URL/web source simultaneously with background audio, along with background/foreground playing.

## Installation

To get started, install the @mediagrid/capacitor-native-audio package by running the following commands in your project directory:

```bash
npm install @mediagrid/capacitor-native-audio
npx cap sync
```

### Android Configuration

Make the required changes in the `AndroidManifest.xml` and `strings.xml` files to enable background audio play on Android devices.

### iOS Configuration

Enable Audio Background Mode and add a Now Playing Icon (optional) for iOS devices to enhance the user experience.

## Usage

Now that you have installed the package and configured the necessary settings, you can start using the @mediagrid/capacitor-native-audio package to play audio in your Capacitor app.

## Conclusion

This tutorial has provided a detailed guide on how to use the @mediagrid/capacitor-native-audio package to play audio natively in a Capacitor app on both Android and iOS platforms. Explore the capabilities of this package to enhance your app's audio playback functionalities.
