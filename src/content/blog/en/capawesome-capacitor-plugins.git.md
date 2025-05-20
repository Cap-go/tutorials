---
title: '@hotend/capacitor-file-picker Tutorial'
description: >-
  This markdown tutorial provides a detailed guide on how to use the
  @hotend/capacitor-file-picker package in your Capacitor project, including
  setup instructions and usage examples.
created_at: '2022-03-12T14:30:00Z'
published: true
slug: capawesome-capacitor-plugins.git
locale: en
---

# Capacitor File Picker Tutorial

[@hotend/capacitor-file-picker](https://github.com/hotend/capacitor-file-picker) is a practical Capacitor plugin that allows you to select files conditionally on Android/iOS devices and the web. This tutorial will guide you through the installation and configuration of this plugin for Android, iOS, and web/PWA platforms.

## Installation

To begin using the plugin, install it in your Capacitor project by running the following command:

```bash
npm install @hotend/capacitor-file-picker
```

## Android Configuration

For Android, open your `MainActivity.java` file and add the following code snippet inside the `this.init()` method:

```java
add(FileSelector.class);
```

This code imports the `FileSelector` class necessary for Android integration. Ensure you add both lines manually if any errors occur.

## iOS Configuration

Refer to the list of supported extensions for iOS on [Apple's UTType Reference page](https://developer.apple.com/library/archive/documentation/Miscellaneous/Reference/UTIRef/Articles/System-DeclaredUniformTypeIdentifiers.html) for detailed instructions on iOS configuration.

## Web Configuration

For web/PWA platforms, use the following imports in your TypeScript file:

```typescript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
// import ‘@hotend/capacitor-file-picker’ // Comment out this line when building Android/iOS app
```

Remember to comment out the import line for web implementations when building the app for Android/iOS to ensure the native Android/iOS implementation is used.

## Selecting Files

The plugin supports various file extensions and broader categories like images, videos, and audios. To select files, use the `ext` array to list permitted extensions or file categories. Here's an example of allowing the selection of all files:

```typescript
ext = ext.map(v => v.toLowerCase());
```

The data returned by the file picker includes web-accessible URLs, original file names, and their corresponding extensions.

By following these steps, you'll be able to integrate the @hotend/capacitor-file-picker plugin efficiently into your Capacitor project. For a visual demo and further resources, refer to the official [demo application](https://github.com/hotend/demo-capacitor-file-picker).
```
```
