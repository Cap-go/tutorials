---
title: Using @capacitor-community/photoviewer Package
description: >-
  A step-by-step tutorial on how to use the @capacitor-community/photoviewer
  package for Capacitor in your Ionic application.
created_at: '2023-10-10'
published: true
slug: photoviewer.git
locale: en
---

# Using @capacitor-community/photoviewer Package

In this tutorial, we will go through the process of integrating the `@capacitor-community/photoviewer` package into your Ionic application to handle photo viewing functionalities.

## Installation

To get started, you will need to install the `@capacitor-community/photoviewer` package by running the following command in your terminal:

```bash
npm install @capacitor-community/photoviewer
npx cap sync
```

Once installed, make sure to update the `capacitor.config.ts` file as shown below to set the image locations for saving images downloaded from HTTP requests:

```ts
const config: CapacitorConfig = {
  ...
  plugins: {
    PhotoViewer: {
      iosImageLocation: 'Library/Images',
      androidImageLocation: 'Files/Images',
    }
  }
  ...
};

export default config;
```

### iOS Configuration

For iOS, you'll need to open the `Info.plist` file in Xcode and add the following Information Property:

```xml
<key>Privacy - Photo Library Usage Description</key>
<string>We need to write photos</string>
```

### Android Configuration

On Android, you should edit the `file_paths.xml` file and make sure to include the following line:

```xml
<files-path name="files" path="."/>
```

You also need to make some changes in your `build.gradle` files. Ensure that the proper Kotlin configurations are added and sync the project with Gradle files.

### Web and PWA

If you are working with web or PWA, ensure to install the `jeep-photoviewer` Stencil component:

```bash
npm install --save-dev jeep-photoviewer@latest
```

## Usage

Once you have completed the installation and configuration steps, you can start using the supported methods provided by the `@capacitor-community/photoviewer` package. These methods include:

- `echo`
- `show`
- `saveImageFromHttpToInternal`
- `getInternalImagePaths`

Refer to the [API Documentation](https://github.com/capacitor-community/photoviewer/blob/master/docs/API.md) for detailed information on how to utilize these methods.

## Demonstrations

If you are using Ionic/Angular or Ionic/Vue, check out the sample applications that showcase the usage of the `@capacitor-community/photoviewer` package:

- [angular-photoviewer-app](https://github.com/jepiqueau/angular-photoviewer-app)
- [vue-photoviewer-app](https://github.com/jepiqueau/vue-photoviewer-app)

## Building Your App

Once you have integrated the `@capacitor-community/photoviewer` package and configured it according to your platform requirements, you can build your app for Android, iOS, or Web:

```bash
npm run build
npx cap copy
npx cap copy web
npx cap open android
npx cap open ios
npm run serve
```

That's it! You are now ready to enhance your Ionic application with efficient photo viewing capabilities using the `@capacitor-community/photoviewer` package.

```
