---
title: "How to Use @capgo Capacitor File Picker Plugin"
description: "Step-by-step tutorial on using the @capgo/capacitor-file-picker package to select files in Capacitor apps."
created_at: 2023-10-07
published: true
slug: capacitor-file-picker.git
locale: en
---

# Using @capgo Capacitor File Picker Plugin

In this tutorial, we will explore how to integrate and use the `@capgo/capacitor-file-picker` package in your Capacitor project.

## Installation

To start using the package, first, install it from npm:

```bash
npm install @capgo/capacitor-file-picker
```

## Configuration

### Android Configuration

Open `MainActivity.java` and add the following code inside `init()`:

```java
add(FileSelector.class);
```

### iOS Configuration

No additional configuration is required for iOS.

### Web Configuration

When coding for Android/iOS, make sure to comment out the web import to avoid unexpected behavior:

```typescript
import { Plugins } from '@capacitor/core';
const { FileSelector } = Plugins;
// import 'capacitor-file-picker'; // Comment this line out for Android/iOS builds
```

## Selecting Files

The plugin supports all file extensions, including different broad categories: "images", "videos", and "audios". To allow the selection of all file types, use `"*"`.

You can either allow single file selection or multiple files selection using the `multiple_selection` variable. Use the `ext` array to specify the permitted extensions or broader file categories.

The data returned by the file picker includes an array of web-accessible URLs, the original file names, and the corresponding file extensions. You can reconstruct the original file name using the provided data.

## Resources

- **Tutorial**: [Official Documentation](https://medium.com/@hinddeep.purohit007/picking-files-in-capacitor-apps-a82c67384496)
- **Demo Application**: [GitHub Repository](https://github.com/hinddeep/demo-capacitor-file-picker)

By following this guide, you can efficiently leverage the power of the Capacitor File Picker plugin in your applications.
