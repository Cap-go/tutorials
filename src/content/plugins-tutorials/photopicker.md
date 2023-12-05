---
title: "Using @enertrag/photopicker Package"
description: "A tutorial on how to use the @enertrag/photopicker package to select and process photos from the system-wide media library in a Capacitor application."
created_at: "2021-10-20"
published: true
slug: photopicker
---

# Using @enertrag/photopicker Package

The @enertrag/photopicker package is a plugin for Capacitor that allows you to select one or more photos from the system-wide media library and perform (down)scaling and compression on them. The selected photos are provided as temporary files in the user's cache directory, and the API provides the URIs of the processed photos.

In this tutorial, we will walk through the installation and usage of the @enertrag/photopicker package in a Capacitor application.

## Prerequisites

Before we begin, make sure you have the following prerequisites:

- Capacitor installed in your project
- Basic knowledge of Capacitor and Ionic framework

## Installation

To install the @enertrag/photopicker package, run the following command in your project's root directory:

```bash
npm install @enertrag/photopicker
```

After the installation is complete, run the following command to sync the Capacitor project:

```bash
npx cap sync
```

## iOS Configuration

If you are targeting iOS, you need to add a usage description in your `Info.plist` file. Open the `Info.plist` file in Xcode and add the following entry:

- `NSPhotoLibraryUsageDescription` (`Privacy - Photo Library Usage Description`): Add a description of why your app needs to access the photo library.

For more information on configuring `Info.plist` in iOS, refer to the [Configuring `Info.plist`](https://capacitorjs.com/docs/ios/configuration#configuring-infoplist) section in the Capacitor iOS Guide.

## Android Configuration

To use the @enertrag/photopicker package in an Android project, you need to make the following changes:

1. Register the plugin in your `MainActivity.java` file. Open the `MainActivity.java` file located in your `android/app/src/main/java/{your-package-name}` directory and add the following import statement at the top of the file:

   ```java
   import com.enertrag.plugins.photopicker.Photopicker;
   ```

   Then, inside the `init` method, add the following line to register the plugin:

   ```java
   add(Photopicker.class);
   ```

2. Add the required permissions to your `AndroidManifest.xml` file. Open the `AndroidManifest.xml` file located in your `android/app/src/main` directory and add the following lines inside the `<manifest>` tag:

   ```xml
   <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE"/>
   <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
   ```

For more information on setting permissions in Android, refer to the [Setting Permissions](https://capacitorjs.com/docs/android/configuration#setting-permissions) section in the Capacitor Android Guide.

## Example Usage

To use the @enertrag/photopicker package in your Capacitor application, you can follow the example below:

```typescript
import { Plugins } from '@capacitor/core';
const { Photopicker } = Plugins;

async function addPhotos() {
  try {
    const result = await Photopicker.getPhotos({
      maximumPhotos: 5,
      allowMultipleSelection: true
    });

    // Process the selected photos
    for (const photo of result.photos) {
      const uri = photo.uri;
      // Perform further operations on the photo
    }
  } catch (error) {
    console.error('Error selecting photos:', error);
  }
}
```

In the example above, we import the `Photopicker` plugin from the `@capacitor/core` package. We then define an `addPhotos` function that uses the `getPhotos` method of the `Photopicker` plugin to select multiple photos with a maximum limit of 5. The selected photos are returned as an array of objects, and we can access the URI of each photo using the `uri` property.

You can further process the selected photos as per your application's requirements.

## Conclusion

In this tutorial, we learned how to install and use the @enertrag/photopicker package in a Capacitor application. We saw how to configure the package for both iOS and Android platforms, and we explored an example usage to select and process multiple photos.

The @enertrag/photopicker package provides a convenient API to handle photo selection and processing, making it easier to work with photos in your Capacitor application.