---
title: Using @capacitor-community/native-audio Package
description: >-
  This tutorial will guide you through the steps of using the
  @capacitor-community/native-audio package to play sounds natively in your
  Capacitor apps.
created_at: '2023-10-14'
published: true
slug: native-audio-git
locale: en
---

# Using @capacitor-community/native-audio Package

In this tutorial, we will walk through the process of integrating and using the `@capacitor-community/native-audio` package in your Capacitor project. This package allows you to play sounds natively in your mobile applications.

## Installation

You can install the `@capacitor-community/native-audio` package using npm or yarn. Make sure you have Capacitor installed in your project before adding this package.

To install with npm, run the following command:
```bash
npm install @capacitor-community/native-audio
```

If you prefer using yarn, you can install it with the following command:
```bash
yarn add @capacitor-community/native-audio
```

After installing the package, sync the native files by running:
```bash
npx cap sync
```

## Configuration

There is no specific configuration required for this plugin. The audio files must be placed in platform-specific folders:
- Android: `android/app/src/assets`
- iOS: `ios/App/App/sounds`
- Web: `assets/sounds`

## Usage

You can now use the `@capacitor-community/native-audio` package to play sounds in your application. The plugin provides methods to interact with the native audio engine and play sounds.

For more details on the methods supported by this package, refer to the [documentation](https://www.npmjs.com/package/@capacitor-community/native-audio).

That's it! You are now ready to enhance your Capacitor app with native audio capabilities using the `@capacitor-community/native-audio` package.

Happy coding!
