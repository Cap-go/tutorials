---
title: "Using @capacitor-community/photoviewer Package"
description: "A tutorial on how to use the @capacitor-community/photoviewer package for adding photo viewing functionality in Capacitor applications."
created_at: "2022-11-01"
published: true
slug: photoviewer
---

# Using @capacitor-community/photoviewer Package

In this tutorial, we will learn how to use the `@capacitor-community/photoviewer` package to add photo viewing functionality in Capacitor applications. The `@capacitor-community/photoviewer` package allows you to open selected pictures or a single picture in fullscreen mode with zoom and sharing features.

## Installation

To get started, install the `@capacitor-community/photoviewer` package using npm:

```
npm install @capacitor-community/photoviewer
```

Next, sync the package with Capacitor:

```
npx cap sync
```

## Configuration

### iOS

Open `Info.plist` in Xcode and add the following Information Property:

- Name: `Privacy - Photo Library Usage Description`
- Value: `We need to write photos`

This is required to enable image sharing and movie creation features.

### Android

1. Open the `res` project folder and locate the `file_paths.xml` file.

2. Add the following XML code inside the `<paths>` element:

```xml
<files-path name="files" path="."/>
```

3. Open the `build.gradle (Project:android)` file and make sure Kotlin is declared:

```groovy
buildscript {
    ext.kotlin_version = '1.8.20'
    dependencies {
        // ...
        classpath "org.jetbrains.kotlin:kotlin-gradle-plugin:$kotlin_version"
    }
}
```

4. Open the `build.gradle (Module: android.app)` file and make the following changes:

- After `apply plugin: 'com.android.application'`, add the following lines:

```groovy
apply plugin: 'kotlin-android'
apply plugin: 'kotlin-kapt'
```

- Inside the `android` block, add the following code:

```groovy
buildFeatures {
    dataBinding = true
}
```

- Inside the `repositories` block, add the following line:

```groovy
maven { url 'https://jitpack.io' }
```

- Inside the `dependencies` block, add the following lines:

```groovy
implementation "androidx.core:core-ktx:1.6.0"
implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7