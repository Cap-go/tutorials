---
title: Using capacitor-native-safearea Package in Capacitor Apps
description: Learn how to integrate and use the capacitor-native-safearea package in your Capacitor apps to handle safe area insets on iOS and Android devices.
created_at: 2021-10-14
published: true
slug: capacitor-native-safearea
---

# Using capacitor-native-safearea Package in Capacitor Apps

In this tutorial, we will walk through the process of integrating and using the `capacitor-native-safearea` package in your Capacitor apps. This package allows you to manage and handle safe area insets on iOS and Android devices to ensure that your app's content is displayed correctly within the safe areas of the device screen.

## Installation

1. First, install the `capacitor-native-safearea` package in your Capacitor project by running the following command:

```bash
npm install capacitor-native-safearea
npx cap sync
```

2. If you are using iOS, there may be additional configuration required. Please refer to the official documentation for iOS configuration.

## Usage

### Implementing Safe Area Insets

The `capacitor-native-safearea` package provides two main methods to handle safe areas:

#### `showTopSafeArea`

This method displays the safe area at the top of the screen. You can specify the color of the safe area using the `color` option.

```typescript
import { Plugins } from '@capacitor/core';

const { SafeArea } = Plugins;

SafeArea.showTopSafeArea({ color: '#000000' })
  .then(() => {
    console.log('Top safe area displayed successfully');
  })
  .catch(error => {
    console.error('Error displaying top safe area:', error);
  });
```

#### `showBottomSafeArea`

Similarly, you can use the `showBottomSafeArea` method to display the safe area at the bottom of the screen. Specify the color of the safe area using the `color` option.

```typescript
import { Plugins } from '@capacitor/core';

const { SafeArea } = Plugins;

SafeArea.showBottomSafeArea({ color: '#000000' })
  .then(() => {
    console.log('Bottom safe area displayed successfully');
  })
  .catch(error => {
    console.error('Error displaying bottom safe area:', error);
  });
```

## Conclusion

By following the steps outlined in this tutorial, you should now be able to integrate and use the `capacitor-native-safearea` package in your Capacitor apps to handle safe area insets on iOS and Android devices effectively. It ensures that your app's content is displayed correctly within the safe areas of the device screen, providing an optimal user experience.
