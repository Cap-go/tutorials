---
title: "Using @jonz94/capacitor-image-picker Package"
description: "In this tutorial, we will learn how to use the @jonz94/capacitor-image-picker package to select multiple images in a Capacitor project."
created_at: "2021-09-27"
published: true
slug: "capacitor-image-picker"
---

# Using @jonz94/capacitor-image-picker Package Tutorial

In this tutorial, we will learn how to use the `@jonz94/capacitor-image-picker` package to select multiple images in a Capacitor project. The `@jonz94/capacitor-image-picker` is a Capacitor plugin that allows you to choose multiple images from the user's photo library.

## Installation

Before we can use the `@jonz94/capacitor-image-picker` package, we need to install it in our project. 

To install the package, run the following command in your terminal:

```bash
npm install @jonz94/capacitor-image-picker
npx cap sync
```

## iOS Setup

### Native Dependencies Setup

The `@jonz94/capacitor-image-picker` package uses a forked version of [YPImagePicker](https://github.com/Yummypets/YPImagePicker) under the hood. 

To use this package on iOS, you need to manually modify the `ios/App/Podfile` file. Open the file and add the following lines:

```ruby
target 'App' do
  capacitor_pods
  # Add your Pods here
  pod 'YPImagePicker', :git => 'https://github.com/jonz94/YPImagePicker.git', :tag => '5.2.1.0'
end
```

After modifying the `ios/App/Podfile`, run the following command to update the iOS project:

```bash
pod update
```

### Permissions

iOS requires a usage description to be added to your app's `Info.plist` file. Open the `Info.plist` file and add the following key-value pair:

- Key: NSPhotoLibraryUsageDescription
  Value: Privacy - Photo Library Usage Description

## Android Setup

### Native Dependencies Setup

The `@jonz94/capacitor-image-picker` package uses a forked version of [TedImagePicker](https://github.com/ParkSangGwon/TedImagePicker) under the hood. 

#### Setup JitPack Repository

To use this package on Android, you need to add the JitPack repository to your `android/build.gradle` file. Open the file and add the following line to the `repositories` block:

```java
maven { url "https://jitpack.io" }
```

#### Enable Data Binding

To enable data binding in your Android project, open the `android/app/build.gradle` file and add the following lines:

```java
android {
    // ...
    dataBinding {
        enabled true
    }
}
```

Then, sync your project with the Gradle files.

### Permissions

Android requires the following permissions to be added to your `AndroidManifest.xml` file:

- `<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />`
- `<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />`

## Using @jonz94/capacitor-image-picker Package

Now that we have installed and configured the `@jonz94/capacitor-image-picker` package, let's see how to use it in our Capacitor project.

First, import the `ImagePicker` plugin in your code:

```typescript
import { Plugins } from '@capacitor/core';
const { ImagePicker } = Plugins;
```

To open the image picker and select multiple images, call the `ImagePicker.pickMultiple()` method:

```typescript
const pickImages = async () => {
  try {
    const result = await ImagePicker.pickMultiple();
    const images = result.images;
    // Process the selected images
    console.log(images);
  } catch (error) {
    console.error(error);
  }
};
```

You can then call the `pickImages()` function when a button or any other user interaction occurs.

That's it! Now you can select multiple images using the `@jonz94/capacitor-image-picker` package in your Capacitor project.

## Conclusion

In this tutorial, we have learned how to use the `@jonz94/capacitor-image-picker` package to select multiple images in a Capacitor project. We covered the installation and setup process for both iOS and Android platforms, as well as how to use the plugin in your code.

Feel free to explore the `@jonz94/capacitor-image-picker` package's documentation for more advanced usage and customization options.